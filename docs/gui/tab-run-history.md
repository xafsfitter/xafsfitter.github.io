---
id: tab-run-history
title: Tab 4 — Run History
sidebar_position: 5
---

# Tab 4 — Run History

The Run History tab records every optimization run in the current session, allowing you to compare results and export configurations.

![Tab 4 — Run history](/img/gui/tab_4_run_history.png)

## Run History Table

Each row corresponds to one completed optimization run. Columns:

| Column | Description |
|--------|-------------|
| **Run #** | Sequential run number within the session |
| **Timestamp** | Date and time the run completed |
| **Algorithm** | Algorithm used (LM, GA, PSO, Bayesian) |
| **Best R-factor** | Lowest R-factor achieved in this run |
| **Improvement %** | Improvement over the previous run's best R-factor |
| **Time** | Wall-clock time for the run |
| **Iterations** | Number of iterations/generations completed |

Click a row to select it and load its full details in the panel below the table.

## Actions

### Seed Config from Run

Loads the best parameter values from the selected run as the starting point for the next optimization. Equivalent to pressing **Continue from Last** on the Optimization tab.

Use this to manually pick an earlier run as the seed, rather than always using the most recent result.

### Export Run Config

Saves the selected run's configuration (including the best-fit parameter values as initial values) to a JSON file. This file is **directly usable** with `python -m xafs_cli run --config`.

This is the primary mechanism for the [GUI → CLI interoperability workflow](../tutorials/gui-cli-interop).

### Export to Larix

Exports the selected run as a `.larix` session file, which can be opened in the [Larix](https://xraypy.github.io/xraylarch/) GUI for further interactive analysis.

### Clear History

Removes all runs from the history table. This action cannot be undone. Completed runs that have already been exported to JSON are not affected.
