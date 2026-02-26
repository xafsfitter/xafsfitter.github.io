---
id: tab-path-config
title: Tab 2 — Path Config
sidebar_position: 3
---

# Tab 2 — Path Config

The Path Config tab is where you define the fitting model: the k and R ranges, global parameters, and per-path parameters.

## Fitting Range Controls

![Tab 2 — Fitting range section](/img/gui/tab_2_no_config.png)

| Control | Description |
|---------|-------------|
| **kmin** | Lower bound of k-range for Fourier transform (Å⁻¹) |
| **kmax** | Upper bound of k-range (Å⁻¹) |
| **kweight** | k-weighting exponent for Fourier transform |
| **dk** | Width of the k-space window sill (Å⁻¹) |
| **Window** | Fourier transform window function | 
| **Rmin** | Lower bound of R-range for fitting (Å) | 
| **Rmax** | Upper bound of R-range for fitting (Å) |

### Multi-k Weights

The **Multi-k weights** field accepts a comma-separated list of k-weight values (e.g. `1,2,3`). This controls which k-weightings are plotted simultaneously in the chi(k) visualization panel. It is separate from the single **kweight** value used in the actual Fourier transform — changing multi-k weights does not affect the fit itself, only the visualization.

### R_bkg

The **R_bkg** spinbox sets the background subtraction cutoff passed to `autobk`. It determines the maximum R-value used in the spline background fit, affecting the low-R region of chi(R). Lower values remove more low-R background; the default (1.0 Å) is appropriate for most cases.

## Global Parameters

| Parameter | Description |
|-----------|-------------|
| **S₀²** | Amplitude reduction factor. Check **Vary** to fit it; set bounds to [0.7, 1.0] as a starting point. |
| **E₀** | Edge energy shift in eV. Check **Vary** to fit it; bounds of [−10, 10] are typical. |

## Path Selection Table

The table lists all paths found in the FEFF directory. Check the checkbox next to each path you want to include in the fit. Unchecked paths are excluded from the model entirely.

Click a path row to open its **PathParameterConfigWidget** below the table.

## PathParameterConfigWidget

Each path has 3 parameters: CN, ΔR, and σ². Each parameter can be set to one of two modes:

### Free Mode

The parameter is optimized directly.

![Path parameter widget — Free mode](/img/gui/tab_2_added_paths.png)

| Field | Description |
|-------|-------------|
| **Vary** | Check to include this parameter in the optimization |
| **Value** | Initial value |
| **Min / Max** | Allowed bounds for the optimizer |
| **var_name** | Optional: a name by which other parameters can reference this one |

### Computed Mode

The parameter value is derived from an expression referencing other variable names.

Set the **Mode** dropdown to **Computed** and enter a mathematical expression in the **Expression** field. The expression is evaluated using Python's `math` module and can reference any `var_name` defined on another parameter.

Example: if path 1's degeneracy has `var_name = "cn_1"`, then path 2's degeneracy can be set to `8 - cn_1` to enforce a constraint that both shells sum to 8.

See [Constraints](../configuration/constraints) for more examples.

## Saving Configuration

Click **Save Path Configuration** to save the config and prepare for optimization. 

Click **Export to JSON...** to save the config to disk. This file can be:
- Loaded again in the GUI on the next session
- Used directly with `python -m xafs_cli run --config`
