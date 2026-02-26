---
id: intro
title: Introduction
sidebar_position: 0
slug: /
---

# XAFS Fitter

XAFS Fitter is a software package for fitting Extended X-ray Absorption Fine Structure (XAFS) data using FEFF-calculated scattering paths. It provides an interactive graphical interface for exploratory fitting and a command-line interface for batch and parallel optimization. Both tools share the same underlying fitting engine and use the same JSON configuration format, making it straightforward to design a fit interactively and then scale it to many samples via scripting.

:::info Prerequisites

Before you can use XAFS Fitter, you need two things:

1. **An Athena `.prj` file** containing your processed XAFS data (background-subtracted chi(k) data). Athena is part of the [Demeter](https://bruceravel.github.io/demeter/) package.
2. **A crystal structure `.cif` file** for the material you are fitting. CIF files can be downloaded from the [Crystallography Open Database](https://www.crystallography.net/) or the [ICSD](https://icsd.products.fiz-karlsruhe.de/).

XAFS Fitter uses these two inputs to generate FEFF scattering paths and perform the fit.

:::

## Two Tools, One Workflow

| Tool | Best For |
|------|----------|
| **GUI (v1.2.1)** | Interactive fitting, visual inspection of results, parameter exploration |
| **CLI (v1.0.1)** | Batch processing, parallel optimization, scripted workflows |

Configurations are **fully interchangeable** between the two tools. A fit designed in the GUI can be exported and run in the CLI, and vice versa.

![XAFS Fitter main window](/img/gui/tab_3_optimizing.png)

## Get Started

- [Installation](docs/getting-started/installation) — install the GUI or CLI in minutes
- [Quick Start](docs/getting-started/quick-start) — go from a `.prj` file to your first fit in 5 minutes
- [Troubleshooting](docs/reference/troubleshooting) — common issues and solutions
