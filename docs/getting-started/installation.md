---
id: installation
title: Installation
sidebar_position: 1
---

# Installation

XAFS Fitter installs its own Python environment automatically — you do not need to have Python pre-installed.

## Windows

### GUI

1. Download and unzip the XAFS Fitter release archive.
2. Double-click **`setup.bat`** to set up the environment.
   - The script checks for [uv](https://github.com/astral-sh/uv), installs it if missing, creates a `.venv`, and installs all dependencies.
   - Python 3.11 is downloaded automatically if not present on your system.
3. Once setup completes, double-click **`update.bat`** and select **1** from the menu to install the latest version of the GUI.

:::tip

**`update.bat`** is the equivalent of installation as well as updating to new versions.

:::

*[Image: Windows File Explorer showing update.bat]*

![update.bat product selection menu](/img/tutorials/update_2_tui.png)

### CLI

1. Run **`setup.bat`** as above (if not already done).
2. Run **`update.bat`** and select **2** from the menu to install the latest version of the CLI.

Alternatively, activate the virtual environment manually and invoke the CLI module directly:

```cmd
.\.venv\Scripts\activate.bat
python -m xafs_cli --help
```

## File tree

After running the scripts, your folder should look like this:

![Folder](/img/tutorials/folder_tree.png)

:::info
The scripts are run in this order:

1. **`setup.bat`** — sets up the Python environment (run once)
2. **`update.bat`** — installs the GUI, CLI, or both (run to install or update)
3. **`run_gui.bat`** — launches the GUI (run each time you want to open it)

For the CLI, skip `run_gui.bat` and activate the environment directly:

```cmd
.\.venv\Scripts\activate.bat
python -m xafs_cli --help
```

:::

## What the Setup Scripts Do

| Step | Detail |
|------|--------|
| Check for `uv` | Downloads and installs `uv` if not found |
| Create `.venv` | Creates a Python 3.11 virtual environment in the project directory |
| Install dependencies | Installs all required packages (numpy, scipy, larch, matplotlib, etc.) |
| Verify installation | Runs a quick import check to confirm everything is working |

When setup completes successfully, you will see all checks pass before the application launches:

![Dependency check output — all 15/15 required packages pass](/img/tutorials/startup_dependency_check.png)

## Troubleshooting

If `setup.bat` fails, see [Troubleshooting](../reference/troubleshooting).
