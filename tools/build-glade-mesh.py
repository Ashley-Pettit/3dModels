#!/usr/bin/env python3
"""Pack the Inverloch Soundshell handoff GLB's permanent structures for Explore."""

from argparse import ArgumentParser
from array import array
from base64 import b64encode
import json
from math import isfinite
from pathlib import Path
from struct import Struct, unpack_from
import sys
from zipfile import ZipFile


POSITION_SCALE = 0.002
GROUPS = {
    "shell": ("Soundshell", 8),
    "stone": ("Stone shelter", 13),
    "timber": ("Timber shelter", 6),
}
COMPONENTS = {5121: "B", 5123: "H", 5125: "I", 5126: "f"}


def read_glb(source):
    if source.suffix.lower() == ".zip":
        with ZipFile(source) as archive:
            data = archive.read("soundshell-blockout.glb")
    else:
        data = source.read_bytes()
    magic, version, size = unpack_from("<4sII", data)
    if (magic, version, size) != (b"glTF", 2, len(data)):
        raise ValueError("Expected a complete glTF 2.0 binary")
    json_size, json_kind = unpack_from("<I4s", data, 12)
    bin_start = 20 + json_size
    bin_size, bin_kind = unpack_from("<I4s", data, bin_start)
    if json_kind != b"JSON" or bin_kind != b"BIN\0" or bin_start + 8 + bin_size != size:
        raise ValueError("Expected one JSON and one binary chunk")
    return json.loads(data[20:bin_start]), memoryview(data)[bin_start + 8:]


def accessor(document, binary, index, dimensions, allowed):
    spec = document["accessors"][index]
    component = spec["componentType"]
    shape = "SCALAR" if dimensions == 1 else f"VEC{dimensions}"
    if spec["type"] != shape or component not in allowed or spec.get("normalized") or "sparse" in spec:
        raise ValueError(f"Unexpected accessor {index} for the handoff")
    view = document["bufferViews"][spec["bufferView"]]
    element = Struct("<" + COMPONENTS[component] * dimensions)
    offset = view.get("byteOffset", 0) + spec.get("byteOffset", 0)
    end = offset + element.size * spec["count"]
    view_end = view.get("byteOffset", 0) + view["byteLength"]
    if view.get("buffer", 0) != 0 or "byteStride" in view or not 0 <= offset <= end <= min(view_end, len(binary)):
        raise ValueError(f"Unexpected binary span for accessor {index}")
    return list(element.iter_unpack(binary[offset:end]))


def encode(typecode, values):
    packed = array(typecode, values)
    if sys.byteorder != "little" and packed.itemsize > 1:
        packed.byteswap()
    return b64encode(packed.tobytes()).decode("ascii")


def quantize(values, scale, minimum, maximum):
    if not all(isfinite(value) for value in values):
        raise ValueError("Non-finite mesh attribute")
    packed = tuple(round(value / scale) for value in values)
    if any(not minimum <= value <= maximum for value in packed):
        raise ValueError(f"Mesh attribute out of range: {packed}")
    return packed


def pack_primitive(document, binary, primitive):
    if primitive.get("mode", 4) != 4 or primitive.get("extensions") or primitive.get("targets"):
        raise ValueError("Expected a static triangle list")
    attributes = primitive["attributes"]
    if set(attributes) - {"POSITION", "NORMAL", "COLOR_0", "TEXCOORD_0"}:
        raise ValueError("Unexpected source vertex attribute")
    positions = accessor(document, binary, attributes["POSITION"], 3, {5126})
    normals = accessor(document, binary, attributes["NORMAL"], 3, {5126})
    colors = accessor(document, binary, attributes["COLOR_0"], 3, {5126}) if "COLOR_0" in attributes else None
    if len(positions) != len(normals) or colors is not None and len(colors) != len(positions):
        raise ValueError("Mismatched vertex attribute lengths")

    source_indices = range(len(positions))
    if "indices" in primitive:
        source_indices = [value for (value,) in accessor(document, binary, primitive["indices"], 1, {5121, 5123, 5125})]
    if len(source_indices) % 3 or any(index >= len(positions) for index in source_indices):
        raise ValueError("Invalid triangle index list")

    material = document["materials"][primitive["material"]]
    pbr = material.get("pbrMetallicRoughness", {})
    color = pbr.get("baseColorFactor", [1, 1, 1, 1])
    if color[3] != 1 or material.get("alphaMode", "OPAQUE") != "OPAQUE" or any(
        "Texture" in key for key in (*material, *pbr)
    ):
        raise ValueError("Unexpected texture or transparency on a permanent structure")

    distinct = {}
    packed_positions, packed_normals, packed_colors, packed_indices = [], [], [], []
    for i in source_indices:
        p = quantize(positions[i], POSITION_SCALE, -32768, 32767)
        n = quantize(normals[i], 1 / 127, -127, 127)
        c = () if colors is None else quantize(colors[i], 1 / 255, 0, 255)
        key = (p, n, c)
        index = distinct.get(key)
        if index is None:
            index = distinct[key] = len(distinct)
            packed_positions.extend(p)
            packed_normals.extend(n)
            packed_colors.extend(c)
        packed_indices.append(index)
    if len(distinct) > 65536:
        raise ValueError("A primitive exceeds the 16-bit vertex index limit")

    packed = {
        "positions": encode("h", packed_positions),
        "normals": encode("b", packed_normals),
        "indices": encode("H", packed_indices),
        "color": color[:3],
        "roughness": pbr.get("roughnessFactor", 1),
        "metalness": pbr.get("metallicFactor", 1),
        "doubleSide": material.get("doubleSided", False),
    }
    if colors is not None:
        packed["colors"] = encode("B", packed_colors)
    return packed


def make_mesh(source):
    document, binary = read_glb(source)
    scene = document["scenes"][document["scene"]]
    output = {}
    for key, (name, expected_count) in GROUPS.items():
        candidates = [document["nodes"][i] for i in scene["nodes"] if document["nodes"][i].get("name") == name]
        if len(candidates) != 1 or set(candidates[0]) != {"name", "mesh"}:
            raise ValueError(f"Expected one baked top-level node named {name!r}")
        primitives = document["meshes"][candidates[0]["mesh"]]["primitives"]
        if len(primitives) != expected_count:
            raise ValueError(f"Unexpected primitive layout for {name!r}")
        # The first Soundshell primitive is the grass apron, which Explore drapes itself.
        start = 1 if key == "shell" else 0
        output[key] = [pack_primitive(document, binary, item) for item in primitives[start:]]
    return output


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="Original handoff ZIP or soundshell-blockout.glb")
    parser.add_argument(
        "--output",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "town3d" / "glade-soundshell-mesh.json",
    )
    args = parser.parse_args()
    mesh = make_mesh(args.source)
    with args.output.open("w", encoding="utf-8", newline="\n") as output:
        json.dump(mesh, output, separators=(",", ":"), allow_nan=False)
        output.write("\n")


if __name__ == "__main__":
    main()
