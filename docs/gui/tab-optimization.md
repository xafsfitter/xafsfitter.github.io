---
id: tab-optimization
title: Tab 3 — Optimization
sidebar_position: 4
---

# Tab 3 — Optimization

The Optimization tab is where you run the fit and inspect results in real time.

## Controls

![Tab 3 — Active optimization with live fit plots](/img/gui/tab_3_optimizing.png)

### Algorithm Selector

Choose one of the four supported algorithms from the dropdown:

- **Levenberg-Marquardt** — fast, gradient-based, local
- **Genetic Algorithm** — slow, population-based, global
- **Particle Swarm** — medium speed, swarm-based, global
- **Bayesian** — sample-efficient, surrogate-model-based, global

When you change the algorithm, the parameter panel below the dropdown updates to show algorithm-specific settings.

### Algorithm Parameters

| Algorithm | Parameters |
|-----------|------------|
| LM | Max function evaluations |
| GA | Population size, number of generations |
| PSO | Number of particles, number of iterations |
| Bayesian | Number of initial random samples, total iterations |

### Buttons

| Button | Description |
|--------|-------------|
| **Start** | Begin a new optimization run |
| **Stop** | Interrupt the current run (results so far are saved) |
| **Continue from Last** | Seed the next run with the best result from the previous run |

**Continue from Last** is the GUI equivalent of `--continue-from` in the CLI. Use it to warm-start a GA run after an initial LM fit.

### Progress Bar and Status

The progress bar shows completion percentage for population-based algorithms. For LM, it shows iteration count. The status label displays the current best R-factor.

## Sub-tabs

### Fit Visualization

![Fit visualization — chi(k) and chi(R)](/img/gui/tab_3_optimizing.png)

Both plots update live during optimization. The **Live Parameters** panel on the right shows the current best parameter values.

### Convergence

![Convergence plot — R-factor vs generation](/img/gui/tab_3_convergence.png)

Plots the best R-factor vs generation/iteration number. A well-behaved fit shows monotonically decreasing R-factor that plateaus at convergence.

### Configuration

![Configuration after run](/img/gui/tab_3_configuration_after.png)

A read-only summary of the current fitting configuration (ranges, paths, parameter modes) and results. 
