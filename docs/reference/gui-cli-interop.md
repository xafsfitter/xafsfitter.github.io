---
id: gui-cli-interop
title: GUI–CLI Interoperability
sidebar_position: 2
---

# GUI–CLI Interoperability

The GUI and CLI are designed to work together. Configuration files are **fully interchangeable** between the two tools — anything you can set up in the GUI can be run in the CLI, and vice versa.

## Workflow A: Design in GUI → Batch in CLI


1. In the GUI, complete your fit and open the **Run History** tab.
2. Select the best run and click **Export Run Config**.
3. Save the JSON file (e.g. `fit_config.json`).
4. For each sample, run:
   ```bash
   python -m xafs_cli run \
     --config fit_config.json \
     --algo ga
   ```



## The Exported Config is Immediately Usable

The JSON file produced by **Export Run Config** uses the best-fit parameter values as initial values, so it captures the fit result. When you run this config in the CLI, the optimizer will start from those values — LM will converge quickly, and GA will be seeded near a good solution.