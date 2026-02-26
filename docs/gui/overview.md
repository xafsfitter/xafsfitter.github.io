---
id: gui-overview
title: GUI Overview
sidebar_position: 1
---

# GUI Overview

## Window Layout

The XAFS Fitter GUI is divided into three main regions:

1. **Tab bar** (top): four tabs — Import, Path Config, Optimization, Run History
2. **Main content area** (centre): content changes with the selected tab
3. **Log panel** (bottom): scrolling log of all actions, warnings, and errors

![Full GUI window](/img/gui/unannotated_first_window.png)

## Status Indicator

A coloured status indicator in the toolbar shows whether the application is ready to run a fit:

| Colour | State | Meaning |
|--------|-------|---------|
| Red | Not Ready | No data loaded |
| Yellow | Incomplete | PRJ file or FEFF directory is missing |
| Yellow | No Config | Data loaded but paths not yet configured |
| Green | Ready | All prerequisites met — fit can be started |

![Status indicator — green Ready state after saving config](/img/gui/tab_2_saved_config.png)

The status indicator updates automatically as you load files and configure paths. You do not need to check it manually — it will turn green when you are ready to fit.

## Log Panel

The log panel at the bottom of the window records every significant action:
- File load events (PRJ file, FEFF directory)
- FEFF generation progress and completion
- Optimization start, iteration updates, and completion
- Warnings (e.g. parameter at bound) and errors
