---
id: constraints
title: Constraints
sidebar_position: 3
---

# Constraints

## Expression Syntax

Computed parameters use Python expression syntax. The following are supported:

- Standard arithmetic: `+`, `-`, `*`, `/`, `**`
- Conditional: `a if condition else b`
- Math functions: `abs()`, `sqrt()`, `exp()`, `log()` (from the `math` module)
- Any `var_name` defined in the configuration

## Example: Coordination Number Constraint

If two shells must sum to a fixed total coordination number, define the first shell's degeneracy as a free parameter and compute the second from it:

**Path 1 — U-O first shell:**
```json
"degen": {
  "mode": "free",
  "vary": true,
  "value": 8.0,
  "bounds": [1.0, 12.0],
  "var_name": "cn_1"
}
```

**Path 2 — U-O second shell:**
```json
"degen": {
  "mode": "computed",
  "expression": "16 - cn_1"
}
```

This ensures that cn_1 + cn_2 = 16 is always satisfied, regardless of the optimizer's choice for `cn_1`.

## Penalty Functions vs Hard Bounds

Hard bounds (`bounds: [min, max]`) prevent the optimizer from ever testing values outside the range. Penalty functions allow exploration but add a cost for going outside preferred bounds. Use penalty functions when:
- You want the optimizer to signal that a bound is being pressed (a high penalty contribution to R-factor is a warning sign)
- You are unsure of the exact physical bound and want a softer constraint
