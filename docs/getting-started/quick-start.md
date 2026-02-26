---
id: quick-start
title: Quick Start
sidebar_position: 3
---

# Quick Start

This guide walks you through your first XAFS fit in about 5 minutes.

## Prerequisites

You need:
- XAFS Fitter installed ([Installation Guide](./installation))
- An Athena **`.prj` file** with your processed XAFS data
- A **`.cif` file** for the crystal structure of your material

## Step 1: Launch the GUI

**Windows:**
```
run_gui.bat
```

**macOS/Linux:**
```bash
./run_gui.sh
```

The main window opens with four tabs along the top.

![GUI at launch](/img/gui/unannotated_first_window.png)

## Step 2: Import Tab — Load Your Data

1. Click **Import** (Tab 1).
2. Under **Experimental Data**, click **Browse** and select your `.prj` file.
3. The group name is detected automatically from the file. Adjust if needed.
4. Under **FEFF Paths**, choose one of:
   - **Load existing FEFF directory** if you already ran FEFF.
   - **Generate from CIF** — enter the absorber element (e.g. `U`), edge (e.g. `L3`), and cluster size (e.g. `8.0` Å), then click **Generate**.
5. Wait for the log panel to report `FEFF generation complete`.

![Tab 1 — Import with controls labelled](/img/gui/tab_1_annotated_first_window.jpg)

## Step 3: Path Config Tab — Set Fitting Ranges

1. Click **Path Config** (Tab 2).
2. This is where you're able to set your global fitting ranges and paths.

   To load your paths, select **Load from Current FEFF Dir** if you added one in the Import/Convert tab, or load directly in this tab.

3. In the path table, check the paths you want to include.
4. Click a path to open its parameter widget. Set each parameter to **Free** and enter initial values and bounds.
5. Click **Save Configuration**.

![Tab 2 — Fitting range controls](/img/gui/tab_2_no_config.png)

## Step 4: Optimization Tab — Run the Fit

1. Click **Optimization** (Tab 3).
2. You can choose any algorithm you would like from the algorithm drop down, **Levenberg-Marquardt** is the fastest for an initial fit, whereas the **Genetic Algorithm** is more thorough.
3. Click **Start**.
4. Watch the progress bar and the live parameter panel update as the fit converges.
5. Switch to the **Fit Visualization** sub-tab to inspect chi(k) and chi(R) overlaid with your data.

![Tab 3 — Active optimization](/img/gui/tab_3_optimizing.png)

## Step 5: Run History Tab — Export Results

1. Click **Run History** (Tab 4).
2. Select your completed run from the table.
3. Click **Export Run Config** to save the configuration as a JSON file for reuse or batch runs.
4. Click **Export to Larix** to open the fit in the Larix GUI for further analysis.

![Tab 4 — Run history table](/img/gui/tab_4_run_history.png)

## Next Steps

- [GUI Guide](/docs/gui/gui-overview) — detailed reference for every tab and control
- [CLI Tutorial](/docs/cli/uo2-cli-tutorial) — end-to-end worked example with UO₂
- [CLI Guide](/docs/cli/cli-overview) — run batch fits from the command line
