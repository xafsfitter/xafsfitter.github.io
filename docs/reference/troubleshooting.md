---
id: troubleshooting
title: Troubleshooting
sidebar_position: 3
---

# Troubleshooting

## Installation Issues

### `uv` not found

**Error**: `'uv' is not recognized as an internal or external command`

**Fix**: Install `uv` manually:
```bash
# Windows (PowerShell)
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# macOS/Linux
curl -LsSf https://astral.sh/uv/install.sh | sh
```
Then re-run `setup.bat` or `setup_gui.sh`.

### Permission denied on macOS/Linux

**Error**: `bash: ./setup_gui.sh: Permission denied`

**Fix**:
```bash
chmod +x setup_gui.sh run_gui.sh
```

---

## Data Loading Issues

### PRJ file not loading

**Symptom**: Group dropdown is empty or shows an error after selecting the PRJ file.

**Possible causes**:
- The file was saved with a newer version of Athena — try re-saving from Athena.
- The file path contains special characters — move the file to a path with no spaces or special characters.

### Group name not detected

**Symptom**: Group dropdown shows `None` or the wrong group.

**Fix**: Type the exact group name manually. Group names are case-sensitive. Open the PRJ file in Athena to confirm the exact group name.


---

## Fitting Issues

### R-factor is not decreasing

**Possible causes**:
- **Too few free parameters**: all parameters may be fixed. Check that at least one path has `vary: true` parameters.
- **k-range or R-range too wide**: the fit window includes regions with no signal. Narrow the ranges.
- **Wrong paths selected**: the paths you included don't match the data. Compare path distances with known crystal structure distances.
- **Starting values far from solution**: adjust initial values to be physically reasonable.

### Parameters stuck at bounds

**Symptom**: After fitting, one or more parameters equal their `min` or `max` bound.

**Fix**:
- Widen the bounds if the physical range allows it.
- If the parameter hits zero, check for a sign error in the model.
- Consider whether the parameter is actually needed (remove it and see if R-factor changes).

### σ² is negative

**Symptom**: Optimizer returns a negative Debye-Waller factor.

**Fix**: Set the lower bound of σ² to `0.0`. Negative σ² is unphysical and indicates an over-parameterized model.

---

## Memory and Performance Issues

### Memory error with large `--parallel` count

**Error**: Python MemoryError or system runs out of RAM.

**Fix**: Reduce `--parallel N`. Each worker uses 200–500 MB. As a rule of thumb, `N ≤ (available RAM in GB) / 0.5`.

### Fitting is very slow

**Suggestions**:
- Use LM first — it is much faster than GA/PSO.
- Reduce the number of free parameters.
- Narrow the k-range (each evaluation is faster with a smaller k-space).
- Reduce GA population size or number of generations for a quick test.
