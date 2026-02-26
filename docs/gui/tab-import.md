---
id: tab-import
title: Tab 1 — Import
sidebar_position: 2
---

# Tab 1 — Import

The Import tab is where you load your experimental data and FEFF scattering paths.

![Tab 1 — Import with all controls labelled](/img/gui/tab_1_annotated_first_window.jpg)

## Experimental Data

### Athena PRJ File

Click **Browse** to select an Athena `.prj` file. The file is read immediately and available groups are listed in the **Group** dropdown.

- The group name is detected automatically if the file contains only one group.
- If the file contains multiple groups, select the one corresponding to your sample.
- The group name must match exactly (case-sensitive).

## FEFF Paths

You can either load a pre-existing FEFF output directory or generate one from a CIF file.

### Option A: Load Existing FEFF Directory

Click **Browse** next to "FEFF Directory" and navigate to a folder that already contains `feff0001.dat` and related files. The path list is populated immediately.

### Option B: Generate from CIF

Fill in the following fields and click **Generate**:

| Field | Description | Example |
|-------|-------------|---------|
| **CIF file** | Path to the crystal structure file | `UO2.cif` |
| **Absorber element** | Chemical symbol of the absorbing atom | `U` |
| **Edge** | X-ray edge to simulate | `L3` |
| **Cluster size (Å)** | Radius of the atom cluster around absorber | `8.0` |

![FEFF generation complete](/img/gui/tab_1_after_generation.jpg)

FEFF generation runs in a background thread (FEFFWorker) so the GUI remains responsive. The log panel shows progress. When generation is complete, the path list is populated automatically.
