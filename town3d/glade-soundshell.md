# Inverloch Soundshell

The Inverloch beta adds the Soundshell and two permanent picnic shelters at The Glade. The source is the contributor's `Inverloch-Soundshell-3D-handoff.zip`, SHA-256 `83b382080aec4c6604eecbcfbd4ebd2cf37ccffbaad26e4f976a59ce8462204a`. The handoff attributes its blockout to the [market scene](https://inverloch-market-map.ben-john-pettit.chatgpt.site/) at revision `9e166d959a797a19f267e079c85537a3215e297a`. The trace is approximate.

The source shell centre `[9.348, 12.882]` fits the mapped Glade roof centre `[18.60, -178.55]`. The mapped roof axis supplies orientation. A uniform scale of 0.9649 and an X/Z rotation of −0.22557 radians also put the ends of the traced Esplanade centreline within 0.46 m of Explore's road. The closed side faces the foreshore. The steps use a second local tie-in at the native upper path near `[14.28, -222.51]`. Coordinates are Explore metres.

Explore retains its terrain, Esplanade and mapped paths. The apron bridges the lawn and the curved edge of the level stage. Additional paths meet the existing park route, the steps and both shelters. The host fits the structures and walkable surfaces against the active terrain mesh, including after a graphics preset swap. Rails, stage sides, supports and shelter walls and furniture share the game's existing walk and vehicle collision. The previous Glade roaming aircraft location was moved off the stage.

To regenerate the three visual mesh groups from the handoff:

```sh
python tools/build-glade-mesh.py /path/to/Inverloch-Soundshell-3D-handoff.zip --output town3d/glade-soundshell-mesh.json
```

The runtime imports the shell and shelters. Stairs, apron and paths are fitted locally. Keep the editable source and reference terrain in the original handoff.
