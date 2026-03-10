---
id: tab-optimization
title: Tab 3 — Optimization
sidebar_position: 4
---

# Tab 3 — Optimization

The Optimization tab is where you run the fit and inspect results in real time. It has two top-level sub-tabs: **Single Run** and **Parallel Runs**.

## Single Run

### Controls

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

### Sub-tabs

#### Fit Visualization

![Fit visualization — chi(k) and chi(R)](/img/gui/tab_3_optimizing.png)

Both plots update live during optimization. The **Live Parameters** panel on the right shows the current best parameter values.

#### Convergence

![Convergence plot — R-factor vs generation](/img/gui/tab_3_convergence.png)

Plots the best R-factor vs generation/iteration number. A well-behaved fit shows monotonically decreasing R-factor that plateaus at convergence.

#### Configuration

![Configuration after run](/img/gui/tab_3_configuration_after.png)

A read-only summary of the current fitting configuration (ranges, paths, parameter modes) and results.

---

## Parallel Runs

Parallel Runs lets you run multiple optimizations simultaneously, each with its own algorithm and settings. This is useful for testing different optimizations side-by-side, for example, comparing GA with mutation vs. crossover reproduction, or trying different starting modes.

### Setting Up Runs

![Parallel Runs tab — queued runs ready to start](/img/gui/tab_3_parallel_runs.png)

Click **+ Add Run** to add a run slot (up to 8 runs). Each run card has its own:

- **Algorithm** dropdown — choose independently per run
- **Mode** dropdown — **Start New** or **Continue from Last** (warm-start from the previous single-run result)
- **Advanced** settings — algorithm-specific parameters (population size, generations, etc.)

The counter in the toolbar (e.g. `2 / 8 runs`) shows how many runs are configured out of the maximum.

### Running in Parallel

![Two runs executing simultaneously](/img/gui/tab_3_parallel_runs_running.png)

Click **Start All** to launch all configured runs at the same time. Each run card shows:

- A **status badge** (Queued → Running → Complete)
- A **progress bar** and elapsed time
- The current best **R-factor** updating live

Click **Stop All** to interrupt all running jobs, or **Stop** on an individual card to cancel just that run. Click **View** to open a live visualization window for any run.

### Live View Window

![Live view window for a single parallel run](/img/gui/tab_3_parallel_runs_view_window.png)

The view window works identically to the Single Run sub-tabs — it shows the live k-space and R-space fit plots alongside the current parameter values and a Convergence tab. You can open view windows for multiple runs simultaneously to monitor them side-by-side.

### Comparing and Applying Results

![Completed runs with Results Comparison table](/img/gui/tab_3_parallel_run_completion.png)

Once runs finish, a **Results Comparison** table appears below the run cards, listing R-factor and all fitted parameter values for each completed run. The best R-factor is highlighted in green.

Use the **Use Results** button on a run card (or the **Use Run X (R=...)** button in the comparison table) to apply that run's best parameters as the active result, making them available to Single Run, Continue from Last, and the Run History tab.
