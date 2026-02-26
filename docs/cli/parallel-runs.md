---
id: parallel-runs
title: Parallel Runs
sidebar_position: 4
---

# Parallel Runs

The `--parallel N` flag runs N independent optimizations simultaneously using Python's `multiprocessing` module.

## How It Works

Each parallel worker:
1. Receives the same configuration and seed population (if `--continue-from` is specified)
2. Uses a different random seed to explore different parts of the parameter space
3. Writes its results to a separate subdirectory

The main process waits for all workers to finish, then aggregates results.

## Output Structure

```
run_parallel/
├── ga_run_1/
│   ├── results.json
│   ├── convergence.csv
│   ├── chi_k.csv
│   ├── chi_r.csv
│   ├── fit_plot.png
│   └── convergence.png
├── ga_run_2/
│   └── ...
├── ga_run_N/
│   └── ...
└── session_summary.json
```

`session_summary.json` aggregates results from all runs:
```json
{
  "n_runs": 8,
  "best_run": "ga_run_3",
  "best_rfactor": 0.012,
  "all_runs": [
    {"run": "ga_run_1", "rfactor": 0.018, "seed": 42},
    {"run": "ga_run_3", "rfactor": 0.012, "seed": 1337}
  ]
}
```

*[Image: Terminal showing parallel runs completing]*

## When to Use Parallel Runs

Parallel runs are most effective with stochastic global algorithms (GA and PSO):
- Each run explores a different random trajectory through the parameter space
- The ensemble of results gives you confidence that the best result is near-optimal
- Parallel runs on a multi-core machine add minimal wall-clock time

**LM is deterministic**: running it in parallel with the same config produces identical results. Only use `--parallel` with `--algo ga`, `--algo pso`, or `--algo bayesian`.

## Memory Considerations

Each worker loads the full dataset and FEFF paths independently. For large problems:
- Each worker uses ~200–500 MB RAM
- With 8 workers, expect 1.6–4 GB total memory usage
- Reduce `--parallel N` if you encounter memory errors
