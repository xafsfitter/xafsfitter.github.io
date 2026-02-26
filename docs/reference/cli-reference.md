---
id: cli-reference
title: CLI Reference
sidebar_position: 2
---

# CLI Reference

## `feff` Subcommand

```
python -m xafs_cli feff [options]
```

| Flag | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `--cif` | path | Yes | — | CIF crystal structure file |
| `-a`, `--absorber` | str | Yes | — | Absorber element symbol (e.g. `U`, `Fe`) |
| `-e`, `--edge` | str | Yes | — | X-ray edge (e.g. `K`, `L3`, `L2`) |
| `--cluster-size` | float | No | `7.0` | Atom cluster radius in Å |
| `--prj` | path | No | — | Athena PRJ file (added to generated config) |
| `--group` | str | No | — | Group name within PRJ file |
| `-o`, `--output` | path | No | `./feff_output` | Output directory |

## `run` Subcommand

```
python -m xafs_cli run [options]
```

### General Options

| Flag | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `--config` | path | Yes | — | JSON configuration file |
| `--prj` | path | No | from config | Athena PRJ file (overrides config) |
| `--group` | str | No | from config | Group name (overrides config) |
| `--algo` | str | No | from config | Algorithm: `lm`, `ga`, `pso`, `bayesian` |
| `--parallel` | int | No | `1` | Number of parallel independent runs |
| `--continue-from` | path | No | — | Previous run directory for warm-starting |
| `--seed` | int | No | random | Random seed for reproducibility |
| `-o`, `--output` | path | No | `./xafs_output` | Output directory |
| `-v`, `--verbose` | flag | No | off | Print detailed progress to stdout |

### LM-Specific Options (`--algo lm`)

| Flag | Type | Default | Description |
|------|------|---------|-------------|
| `--max-nfev` | int | `1000` | Maximum number of function evaluations |

### GA-Specific Options (`--algo ga`)

| Flag | Type | Default | Description |
|------|------|---------|-------------|
| `--generations` | int | `100` | Number of generations |
| `--population` | int | `50` | Population size |

### PSO-Specific Options (`--algo pso`)

| Flag | Type | Default | Description |
|------|------|---------|-------------|
| `--iterations` | int | `100` | Number of iterations |
| `--particles` | int | `50` | Number of particles |

### Bayesian-Specific Options (`--algo bayesian`)

| Flag | Type | Default | Description |
|------|------|---------|-------------|
| `--initial-samples` | int | `10` | Random samples before surrogate model |
| `--iterations` | int | `50` | Total iterations |
