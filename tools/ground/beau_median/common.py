"""Shared by the Beaudesert Road median scripts: where the model's town.json is, and a work folder for what they make (the centre line,
the straightened photograph, the aerial blocks). Set BEAU_WORK to keep the work somewhere else."""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
TOWN = os.path.join(REPO, 'town3d', 'moorooka', 'town.json')
WORK = os.environ.get('BEAU_WORK', '/tmp/beau_median')
os.makedirs(WORK, exist_ok=True)
def work(name): return os.path.join(WORK, name)
