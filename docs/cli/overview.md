---
id: cli-overview
title: CLI Overview
sidebar_position: 1
---

# CLI Overview

## When to Use the CLI

The CLI is the right tool when you:
- Need to run multiple parallel optimizations to explore the parameter space
- Want to script and automate your fitting workflow

For interactive exploration, visual feedback, and initial model building, use the [GUI](../gui/gui-overview) instead.

## Activating the Virtual Environment

Before using the CLI, activate the virtual environment created by the setup script.

**Windows (PowerShell):**
```powershell
.venv\Scripts\Activate.ps1
```

**Windows (CMD):**
```cmd
.venv\Scripts\activate.bat
```

**macOS/Linux:**
```bash
source .venv/bin/activate
```

Once activated, your prompt will show `(.venv)`.

## Module Invocation

The CLI is invoked as a Python module:

```bash
python -m xafs_cli <subcommand> [options]
```

```bash
python -m xafs_cli --help
```

## Subcommands

| Subcommand | Purpose |
|------------|---------|
| [`feff`](./feff-command) | Generate FEFF scattering paths from a CIF file |
| [`run`](./run-command) | Execute an XAFS optimization using a config file |

See the [Full CLI Reference](../reference/cli-reference) for a complete flag table.
