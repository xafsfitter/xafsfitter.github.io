---
id: output-files
title: Output Files
sidebar_position: 1
---

# Output Files

## Directory Layout

Every run creates a timestamped subdirectory inside the output folder you specify with `-o`. A single run looks like:

```
run_lm/
└── run_20260226_140508/
    └── lm_run_1/
        ├── results.json
        ├── parameters.csv
        ├── convergence.csv
        ├── k_space.csv
        ├── r_space.csv
        ├── fit_plot.png
        └── convergence_plot.png
```

A parallel/ensemble run adds a `session_summary.json` at the timestamp level and contains one subdirectory per run:

```
run_ga/
└── run_20260226_141622/
    ├── ga_run_1/
    │   ├── results.json
    │   ├── parameters.csv
    │   ├── convergence.csv
    │   ├── k_space.csv
    │   ├── r_space.csv
    │   ├── fit_plot.png
    │   └── convergence_plot.png
    ├── ga_run_2/
    │   └── ...
    ├── ga_run_N/
    │   └── ...
    └── session_summary.json
```

## `results.json`

The primary output file. Contains final parameter values and run metadata.

```json
{
  "rfactor": 0.013,
  "parameters": {
    "e0": 1.2,
    "delr_0": -0.012,
    "sigma2_0": 0.0031,
    "degen_0": 7.8,
    "delr_1": 0.004,
    "sigma2_1": 0.006
  },
  "algorithm": "ga",
  "iterations": 150,
  "seed": null,
  "timestamp": "2026-02-26T14:16:26.196753",
  "elapsed_seconds": 69.5,
  "initial_rfactor": 0.087,
  "improvement_percent": 85.1,
  "algorithm_info": {
    "type": "Genetic Algorithm",
    "generations": 150,
    "population_size": 60,
    "elite_ratio": 0.15,
    "reproduction_strategy": "mutation"
  },
  "convergence_history": [
    { "iteration": 1, "rfactor": 0.087 },
    { "iteration": 2, "rfactor": 0.064 }
  ],
  "config_used": { "...": "full config snapshot" },
  "success": true,
  "error_message": null
}
```

| Field | Description |
|-------|-------------|
| `rfactor` | Final R-factor (goodness of fit) |
| `parameters` | Flat dict of final fitted values (`delr_N`, `sigma2_N`, `degen_N`, `e0`, etc.) |
| `algorithm` | Algorithm used (`lm`, `ga`, `pso`, `bayesian`) |
| `iterations` | Number of iterations/generations completed |
| `seed` | Random seed used (`null` if not set) |
| `timestamp` | ISO 8601 timestamp of run completion |
| `elapsed_seconds` | Wall-clock time for the run |
| `initial_rfactor` | R-factor before optimisation began |
| `improvement_percent` | Percentage improvement from initial to final R-factor |
| `algorithm_info` | Algorithm-specific settings (population size, etc.) |
| `convergence_history` | List of `{iteration, rfactor}` objects for every recorded step |
| `config_used` | Full copy of the config used for this run |
| `success` | `true` if the run completed without error |
| `error_message` | Error string if `success` is `false`, otherwise `null` |

## `parameters.csv`

Human-readable table of final parameter values.

```
Parameter,Value
delr_0,-0.069340
sigma2_0,0.012321
e0,4.112701
...
```

## `convergence.csv`

R-factor recorded at each iteration. Useful for plotting convergence manually.

```
Iteration,R-factor
0,1.000620e+00
2000,9.959815e-01
...
```

:::note
For LM runs the iteration count reflects function evaluations; for GA/PSO it reflects generations.
:::

## `k_space.csv`

k-space data for the experimental spectrum and the model fit.

```
k,experimental,model
3.0000,-2.345769e-01,-2.253489e-02
3.0500,-4.970109e-02,-1.439872e-02
...
```

k values in Å⁻¹; χ(k) weighted by k^n where n = `kweight` from the fitting range config.

## `r_space.csv`

R-space data for the experimental spectrum and the model fit.

```
r,experimental,model
0.0000,1.060206e-03,3.429718e-03
0.0307,1.153642e-03,3.402107e-03
...
```

R values in Å; columns are the Fourier-transform magnitude of χ(k).

## `fit_plot.png`

A two-panel figure:
- Left: k²·χ(k) — experimental (solid) vs model (dashed)
- Right: |χ(R)| — experimental vs model, with the fitting window shaded

## `convergence_plot.png`

R-factor vs iteration number on a log scale.

## `session_summary.json` (parallel runs only)

Summary across all runs in an ensemble/parallel session.

```json
{
  "timestamp": "2026-02-26T14:17:42.134656",
  "session_dir": "run_ga/run_20260226_141622",
  "statistics": {
    "total_runs": 6,
    "successful_runs": 6,
    "failed_runs": 0,
    "best_rfactor": 0.012,
    "worst_rfactor": 0.021,
    "mean_rfactor": 0.015,
    "std_rfactor": 0.003,
    "median_rfactor": 0.014,
    "all_rfactors": [0.012, 0.014, 0.015, 0.016, 0.018, 0.021],
    "best_params": {
      "e0": 1.2,
      "delr_0": -0.012,
      "sigma2_0": 0.0031
    },
    "algorithms_used": ["ga"]
  },
  "errors": []
}
```

| Field | Description |
|-------|-------------|
| `statistics.best_rfactor` | Lowest R-factor achieved across all runs |
| `statistics.worst_rfactor` | Highest R-factor across all runs |
| `statistics.mean_rfactor` / `std_rfactor` | Mean and standard deviation — indicates ensemble spread |
| `statistics.best_params` | Parameter values from the best-performing run |
| `statistics.algorithms_used` | List of algorithms used in the session |
| `errors` | List of error messages from any failed runs |
