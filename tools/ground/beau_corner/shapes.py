"""Where Bohain Street meets Beaudesert Road, and the planted north end of Beaudesert Road's median, read off the 2022 aerial photograph
by eye (zoom.py: the photograph enlarged to 2.5 cm a pixel with a dot every metre). Model metres, x east, z south.

TRI is the island the two arms of Bohain Street go round: its kerb line, clockwise from its north nose. On it: a concrete footpath
across it (PATH), a concrete landing where the crossing from Beaudesert Road comes in (PAD), a concrete nose (north of NOSE_Z), and garden
beds everywhere else. The white lines painted round it run on to painted noses north and south (TIP_N, TIP_S) and east (TIP_E).

NOSE is the planted island at the north end of Beaudesert Road's median, at the Ipswich Road lights: its kerb line from its apex, down the
east side, to where the narrow concrete median begins (the first two points of MOO_BEAU's first island, put in by corner.py), and back up
the west side. NOSE_BED is its garden bed; the rest of it is paved (a strip down the west side and round the signal post).

JN_* are the outer sides of the same junction, east of the island, where the two arms become one street (Ash, 25 November 2026, a picture
from above the park: "Note broken footpath, grass and road issue"). The ground plan had each arm and the street at its own mapped width, so
where they meet the road's edge jumped: a bump of lawn in the road on the park side, a hook on the house side, and the footpath of the south
arm and the footpath of the street stopping 1.5 m apart.
JN_KERB_N is the park side's kerb line (the road's edge), west to east: from the last point of the north arm's kerb that is right, round
the end of the arm's curve as the photograph has it (to x -244.5), then straight to where the street's own mapped kerb is right again
(x -211.87: the photograph has that stretch under trees, and a kerb does not step sideways). The model's kerb points between its ends are
left out and corner.py draws this line as a kerb instead.
JN_KERB_S is the house side's kerb line as the model already draws it (the south arm's kerb, the round corner the kerbs builder joins it
to the street's with, the street's kerb): the ground plan is made to follow it.
JN_PATH is how far behind that kerb the footpath lies (its near and far edge, metres), which is where the footpaths either side already are."""
TRI = [(-267.55, -1039.85), (-267.2, -1040.0), (-266.75, -1039.8),                                                    # the north nose
       (-265.5, -1038.4), (-263.5, -1036.6), (-260.0, -1034.25), (-256.0, -1032.0), (-253.9, -1031.25),               # along the north arm
       (-253.25, -1031.05), (-252.95, -1030.8), (-253.2, -1030.5),                                                    # the east tip
       (-253.9, -1030.3), (-255.5, -1029.9), (-257.5, -1028.75), (-259.5, -1027.4), (-261.5, -1025.75), (-263.25, -1024.25),
       (-264.75, -1022.9), (-266.0, -1021.75), (-267.25, -1020.0), (-268.75, -1017.75), (-270.1, -1015.5), (-271.75, -1013.0),
       (-273.2, -1010.4),                                                                                             # along the south arm
       (-273.6, -1009.85), (-274.0, -1009.6), (-274.4, -1009.9),                                                      # the south nose
       (-274.45, -1010.5), (-274.1, -1012.5), (-273.6, -1015.5), (-273.1, -1018.25), (-272.6, -1021.0), (-272.25, -1023.0),
       (-271.75, -1026.0), (-271.25, -1028.0), (-270.4, -1031.0), (-269.75, -1033.0), (-269.1, -1035.25), (-268.4, -1037.5),
       (-267.85, -1039.2)]                                                                                            # along Beaudesert Road
TRI_SIDES = dict(ne=(2, 8), se=(10, 24), w=(26, 40))        # which of TRI's points make each side (first, last + 1), for the painted lines
PATH = [(-265.8, -1040.5), (-265.9, -1033.5), (-266.1, -1031.25), (-266.1, -1028.5), (-266.75, -1024.75), (-267.75, -1022.25),
        (-268.6, -1020.4), (-269.3, -1018.6), (-268.0, -1016.5), (-264.0, -1021.5), (-264.75, -1022.9), (-264.4, -1024.75),
        (-264.0, -1028.5), (-263.9, -1033.5), (-263.9, -1037.0), (-263.3, -1038.5)]
PAD = [(-271.6, -1031.2), (-266.0, -1031.25), (-266.0, -1028.5), (-271.9, -1028.2)]
NOSE_Z = -1037.4                                             # north of this the island is concrete
TIP_N, TIP_S, TIP_E = (-268.65, -1044.15), (-275.5, -1005.75), (-247.0, -1029.9)
GIVE_WAY = [(-275.4, -1005.55), (-271.5, -1003.1)]           # the broken line across the south arm where it meets Beaudesert Road

NOSE_E = [(-275.35, -1063.1), (-275.05, -1063.0), (-275.0, -1062.5), (-275.56, -1058.0), (-275.9, -1054.0), (-276.4, -1049.0),
          (-276.9, -1045.0), (-277.5, -1041.0), (-278.04, -1037.4), (-278.7, -1034.0), (-279.25, -1032.6), (-279.75, -1031.1)]
NOSE_W = [(-282.3, -1032.0), (-282.6, -1033.6), (-283.0, -1035.0), (-283.6, -1038.0), (-284.3, -1042.0), (-284.9, -1046.0),
          (-285.3, -1050.0), (-286.2, -1051.2), (-286.5, -1052.8), (-285.6, -1054.6), (-284.2, -1056.4), (-282.4, -1058.2),
          (-280.6, -1059.6), (-278.6, -1061.2), (-276.8, -1062.5)]
NOSE_BED = [(-283.4, -1055.2), (-283.0, -1052.0), (-282.6, -1048.0), (-282.0, -1044.0), (-281.4, -1040.0), (-280.9, -1036.0),
            (-280.5, -1034.0), (-279.7, -1033.1), (-278.6, -1033.1), (-274.5, -1045.0), (-274.0, -1064.0), (-276.0, -1061.9),
            (-277.9, -1060.1), (-279.8, -1058.6), (-281.6, -1057.2)]

JN_KERB_N = [(-249.10, -1035.64), (-247.5, -1035.21), (-246.0, -1034.90), (-244.5, -1034.65), (-211.87, -1030.02)]
JN_KERB_S = [(-252.84, -1024.03), (-248.54, -1025.53), (-247.17, -1026.01), (-246.85, -1026.11), (-246.52, -1026.19), (-246.19, -1026.24),
             (-245.85, -1026.28), (-245.52, -1026.29), (-245.18, -1026.28), (-244.85, -1026.24), (-244.51, -1026.18), (-243.13, -1025.89),
             (-241.76, -1025.61), (-236.20, -1024.45), (-230.65, -1023.30)]
JN_PATH = (1.62, 2.88)
