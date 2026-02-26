---
id: parameters
title: Parameters
sidebar_position: 2
---

# Parameters

Every path parameter in XAFS Fitter operates in one of two modes: **Free** or **Computed**. Global parameters (S₀² and E₀) always operate as Free parameters.

## Free Parameters

A free parameter is optimized directly by the fitting algorithm.

```json
{
  "mode": "free",
  "vary": true,
  "value": 0.003,
  "bounds": [0.0, 0.02],
  "var_name": "sig2_uo"
}
```

| Field | Description |
|-------|-------------|
| `vary` | `true` to optimize; `false` to hold fixed at `value` |
| `value` | Initial value (and fixed value if `vary: false`) |
| `bounds` | `[min, max]` allowed range for the optimizer |
| `var_name` | Optional name for referencing in Computed expressions |

### Fixed Parameters

Setting `vary: false` holds the parameter at its `value` and excludes it from the optimization. This is useful when you know a parameter from prior knowledge or want to test the effect of fixing it.

```json
{
  "mode": "free",
  "vary": false,
  "value": 8.0
}
```

## Computed Parameters

A computed parameter derives its value from a mathematical expression referencing other parameters by `var_name`.

```json
{
  "mode": "computed",
  "expression": "8 - cn_1"
}
```

The expression is evaluated using standard Python math operators and the `math` module. Any `var_name` defined on any free parameter in the configuration is available as a variable.

See [Constraints](./constraints) for examples.

## Penalty Functions

Penalty functions provide soft constraints — they allow a parameter to go outside preferred bounds but add a cost to the R-factor when it does.

```json
{
  "mode": "free",
  "vary": true,
  "value": 0.003,
  "bounds": [0.0, 0.02],
  "penalty": true,
  "penalty_weight": 10.0,
  "penalty_steepness": 5.0
}
```

| Field | Description |
|-------|-------------|
| `penalty` | `true` to enable penalty function |
| `penalty_weight` | Multiplier for the penalty term added to R-factor |
| `penalty_steepness` | Controls how sharply the penalty rises near bounds |

Penalty functions are an alternative to hard bounds when you want the optimizer to explore beyond the bounds in extreme cases without being absolutely excluded.

## Variable Naming

The `var_name` field gives a parameter a symbolic name that can be referenced in Computed expressions. Names must be:
- Unique across all parameters in the configuration
- Valid Python identifiers (letters, digits, underscores; cannot start with a digit)

Convention: use descriptive names like `cn_1`, `dr_uo`, `sig2_uu` to make expressions readable.

## Duplicate Paths

You can include the same `.dat` file more than once with different parameters. This is useful when the same nominal path appears in two inequivalent sites (e.g. two inequivalent oxygen shells at nominally the same FEFF distance). Give each instance a different `label` to distinguish them in the output.
