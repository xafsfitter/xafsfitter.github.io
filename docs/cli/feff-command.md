---
id: feff-command
title: feff Command
sidebar_position: 2
---

# `feff` Command

The `feff` subcommand generates FEFF scattering paths from a crystal structure CIF file. It is the CLI equivalent of the "Generate from CIF" button in the GUI's Import tab.

## Syntax

```bash
python -m xafs_cli feff --cif <file> -a <absorber> -e <edge> [options]
```

## Required Arguments

| Argument | Description |
|----------|-------------|
| `--cif <file>` | Path to the crystal structure CIF file |
| `-a, --absorber <element>` | Chemical symbol of the absorbing atom (e.g. `U`, `Fe`, `Cu`) |
| `-e, --edge <edge>` | X-ray edge to simulate (e.g. `K`, `L3`, `L2`) |

## Optional Arguments

| Argument | Default | Description |
|----------|---------|-------------|
| `--cluster-size <Å>` | `7.0` | Radius of the atom cluster around the absorber (Å) |
| `--prj <file>` | — | Path to Athena PRJ file (optional; added to auto-generated config) |
| `--group <name>` | — | Group name within the PRJ file |
| `-o, --output <dir>` | `./feff_output` | Directory to write FEFF output files |

## Output

The command creates the specified output directory containing:
- `feff.inp` — the FEFF input file
- `feff0001.dat`, `feff0002.dat`, … — scattering path files
- `_config.json` — auto-generated fitting configuration with all paths included as fixed parameters, ready to edit

## Example: UO₂ L3 Edge

```bash
python -m xafs_cli feff \
  --cif UO2.cif \
  -a U \
  -e L3 \
  --cluster-size 7.0 \
  --prj UO2_data.prj \
  --group uo2_rt \
  -o feff_uo2/
```

*[Image: Terminal output showing feff command running]*

After this command, edit `feff_uo2/_config.json` to set parameter bounds and select which paths to fit, then run:

```bash
python -m xafs_cli run --config feff_uo2/_config.json
```
