---
id: run-command
title: run Command
sidebar_position: 3
---

# `run` Command

The `run` subcommand executes an XAFS optimization using a JSON configuration file.

## Syntax

```bash
python -m xafs_cli run --config <file> [options]
```

## Required Arguments

| Argument | Description |
|----------|-------------|
| `--config <file>` | Path to the JSON configuration file |

## General Options

| Argument | Default | Description |
|----------|---------|-------------|
| `--prj <file>` | from config | Athena PRJ file (overrides `experimental_data.athena_file` in config) |
| `--group <name>` | from config | Group name within the PRJ file |
| `--algo <name>` | from config | Algorithm: `lm`, `ga`, `pso`, `bayesian` |
| `--parallel <N>` | `1` | Number of parallel independent runs (see [Parallel Runs](./parallel-runs)) |
| `--continue-from <dir>` | — | Directory of a previous run; seeds the optimizer with its best result |
| `--seed <int>` | random | Random seed for reproducibility |
| `-o, --output <dir>` | `./xafs_output` | Output directory |
| `-v, --verbose` | off | Print detailed progress to stdout |

## Algorithm-Specific Options

### Levenberg-Marquardt (`--algo lm`)

| Argument | Default | Description |
|----------|---------|-------------|
| `--max-nfev <N>` | `1000` | Maximum number of function evaluations |

### Genetic Algorithm (`--algo ga`)

| Argument | Default | Description |
|----------|---------|-------------|
| `--generations <N>` | `100` | Number of generations |
| `--population <N>` | `50` | Population size |

### Particle Swarm (`--algo pso`)

| Argument | Default | Description |
|----------|---------|-------------|
| `--iterations <N>` | `100` | Number of iterations |
| `--particles <N>` | `50` | Number of particles |

### Bayesian (`--algo bayesian`)

| Argument | Default | Description |
|----------|---------|-------------|
| `--initial-samples <N>` | `10` | Number of initial random samples before surrogate model |
| `--iterations <N>` | `50` | Total number of iterations |

## Override Order

CLI flags always override values in the config file. This makes it easy to reuse a single config file for multiple samples:

```bash
# Same config, different PRJ files
python -m xafs_cli run --config fit_config.json --prj sample_A.prj
python -m xafs_cli run --config fit_config.json --prj sample_B.prj
python -m xafs_cli run --config fit_config.json --prj sample_C.prj
```

## Example: LM → Warm-Start GA → Parallel GA Workflow

```bash
# Step 1: Fast LM fit for initial estimate
python -m xafs_cli run --config config.json --algo lm -o run_lm/

# Step 2: Warm-start GA from LM result
python -m xafs_cli run --config config.json --algo ga \
  --continue-from run_lm/ \
  --generations 200 --population 80 \
  -o run_ga/

# Step 3: Parallel GA ensemble for robust result
python -m xafs_cli run --config config.json --algo ga \
  --continue-from run_ga/ \
  --parallel 8 \
  -o run_parallel/
```