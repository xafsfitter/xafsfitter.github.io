---
id: uo2-cli-tutorial
title: UO₂ Tutorial (CLI)
sidebar_position: 4
---

# UO₂ Tutorial — CLI

This tutorial demonstrates a complete UO₂ fit entirely from the command line.

## Prerequisites

- XAFS Fitter installed, virtual environment activated
- `UO2.cif` and `UO2_data.prj` in the current directory

## Step 1: Generate FEFF Paths

```bash
python -m xafs_cli feff \
  --cif UO2.cif \
  -a U \
  -e L3 \
  --cluster-size 7.0 \
  --prj athena.prj \
  --group LN300_merge_calib
```

Sample output:
```
Total paths: 47

Generated configuration: UO2_U_L3_feff_config.json

Next steps:
  1. Edit UO2_U_L3_feff_config.json to adjust paths and parameters
  2. Run: python -m xafs_cli run --config UO2_U_L3_feff_config.json
```

![update.bat product selection menu](/img/tutorials/cli_feff.png)

## Step 2: Edit the Configuration

Open `UO2_U_L3_feff_config.json` and:

1. Set your global parameters
2. Edit your paths and bounds



:::warning

There are **10 example paths** in **``UO2_U_L3_feff_config.json``** to demonstrate how it's set up, feel free to remove or add as many as you would like as they most likely do not match your sample. 

:::

## Step 3: Run LM Fit

```bash
python -m xafs_cli run \
  --config UO2_U_L3_feff_config.json \
  --algo lm \
  -v \
  -o run_lm/
```

Sample output:
```
XAFS-Optimize: Parameter Optimization
==================================================
Loaded config: UO2_U_L3_feff_config.json
Using PRJ from config: C:/Users/Admin/Downloads/athena.prj
Using group: LN300_merge_calib
Algorithm: LM
Output directory: run_lm/run_20260226_140801

Starting optimization...
  Converged in 182 evaluations - R-factor: 0.022038
  Iteration 182: R-factor = 0.022038

Optimization complete!
  R-factor: 0.022038
  Improvement: 69.70%
  Output: run_lm/run_20260226_140801\lm_run_1
  Exports: k_space_csv, r_space_csv, parameters_csv, convergence_csv, convergence_plot, fit_plot
```

## Step 4: Warm-Start GA

```bash
python -m xafs_cli run \
  --config UO2_U_L3_feff_config.json \
  --algo ga \
  --continue-from run_lm/ \
  --generations 150 \
  --population 60 \
  -v \
  -o run_ga/
```

Sample output:
```
XAFS-Optimize: Parameter Optimization
==================================================
Loaded config: UO2_U_L3_feff_config.json
Using PRJ from config: C:/Users/Admin/Downloads/athena.prj
Using group: LN300_merge_calib

Continuing from: run_lm/
Warm Start Summary:
----------------------------------------
  Previous algorithm: lm
  Previous R-factor: 0.022038
  Previous iterations: 182
  Previous timestamp: 2026-02-26T14:08:01.261193

  Starting Parameters:
    degen_0: 7.782832
    degen_1: 17.575055
    degen_2: 4.335345
    degen_3: 24.000000
    delr_0: -0.024331
    delr_1: 0.047261
    delr_2: -0.000731
    delr_3: 0.200000
    e0: 9.000000
    sigma2_0: 0.009454
    sigma2_1: 0.001000
    sigma2_2: 0.001000
    sigma2_3: 0.001000
  Warm start: e0 = 9.000000
  Warm start: delr_0 = -0.024331
  Warm start: sigma2_0 = 0.009454
  Warm start: degen_0 = 7.782832
  Warm start: delr_1 = 0.047261
  Warm start: sigma2_1 = 0.001000
  Warm start: degen_1 = 17.575055
  Warm start: delr_2 = -0.000731
  Warm start: sigma2_2 = 0.001000
  Warm start: degen_2 = 4.335345
  Warm start: delr_3 = 0.200000
  Warm start: sigma2_3 = 0.001000
  Warm start: degen_3 = 24.000000
  Applied 13 warm start parameter(s)
Algorithm: GA (generations=150, population=60)
Output directory: run_ga/run_20260226_141247

...

  Iteration 148: R-factor = 0.022038
  Gen 149/150 - R-factor: 0.022038
  Iteration 149: R-factor = 0.022038
  Gen 150/150 - R-factor: 0.022038
  Iteration 150: R-factor = 0.022038

Optimization complete!
  R-factor: 0.022038
  Improvement: 0.00%
  Output: run_ga/run_20260226_141247\ga_run_1
  Exports: k_space_csv, r_space_csv, parameters_csv, convergence_csv, convergence_plot, fit_plot

Best parameters:
  degen_0: 7.782832
  degen_1: 17.575055
  degen_2: 4.335345
  degen_3: 24.000000
  delr_0: -0.024331
  delr_1: 0.047261
  delr_2: -0.000731
  delr_3: 0.200000
  e0: 9.000000
  sigma2_0: 0.009454
  sigma2_1: 0.001000
  sigma2_2: 0.001000
  sigma2_3: 0.001000
```

:::info

Sometimes you just can't get it to converge after a previous fit, and parameters might have to be changed.

:::

## Step 5: Parallel GA Ensemble

```bash
python -m xafs_cli run \
  --config UO2_U_L3_feff_config.json \
  --algo ga \
  --continue-from run_ga/ \
  --parallel 6 \
  --generations 100 \
  --population 60 \
  -o run_ensemble/
```

Sample output:
```bash
XAFS-Optimize: Parameter Optimization
==================================================
Loaded config: UO2_U_L3_feff_config.json
Using PRJ from config: C:/Users/Admin/Downloads/athena.prj
Using group: LN300_merge_calib

Continuing from: run_ga/
Algorithm: GA (generations=100, population=60)
Output directory: run_ensemble/run_20260226_141622

Starting 6 parallel runs...
```

Check `run_ensemble/session_summary.json` for the best run:

## Step 6: Inspect Results

```
run_ensemble/ga_run_4/
├── results.json       ← final parameters and R-factor
├── convergence.csv    ← R-factor per generation
├── k_space.csv        ← data and fit in k-space
├── r_space.csv        ← data and fit in R-space
├── fit_plot.png       ← chi(k) + chi(R) overlay figure
└── convergence.png    ← R-factor convergence plot
```

See [Output Files](../reference/output-files) for a full description of each file.
