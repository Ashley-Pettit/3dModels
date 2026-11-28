"""Check each built Explore entry and its service-worker update stamp."""
import json
import sys
from html.parser import HTMLParser
from pathlib import Path


class Head(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta = {}
        self.base = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta" and "name" in attrs:
            self.meta[attrs["name"]] = attrs.get("content")
        elif tag == "base":
            self.base = attrs.get("href")


def check(site, revision):
    for town, slug in (("inverloch", "inv"), ("moorooka", "moo"), ("logan", "logan")):
        route = site / town / "explore"
        head = Head()
        head.feed((route / "index.html").read_text(encoding="utf-8").split("</head>", 1)[0])
        stamp = json.loads((route / "version.json").read_text(encoding="utf-8"))["build"]
        if (head.base != "../../" or not stamp or head.meta.get("an-build") != stamp
                or head.meta.get("an-explore") != slug or head.meta.get("an-commit") != revision[:7]):
            raise SystemExit(f"Incorrect Explore entry or revision in {route}")
        print(f"{town}/explore verified at {revision[:7]}")


def check_weather_scene_routes(site):
    direct = ("inverloch/explore", "beta/inverloch")
    full = ("", "beta", "inverloch", "inverloch/rex", "moorooka/explore", "logan/explore",
            "beta/moorooka", "beta/logan")
    for route in direct + full:
        body = (site / route / "index.html").read_text(encoding="utf-8")
        for constructor in ("W.drive = drv;", "W.driveInv = iv;", "W.mooBowls = bowls;"):
            if (constructor in body) != (route in full):
                raise SystemExit(f"Unexpected weather scene packaging in /{route}/: {constructor}")


if __name__ == "__main__":
    site = Path(sys.argv[1])
    check(site, sys.argv[2])
    check_weather_scene_routes(site)
