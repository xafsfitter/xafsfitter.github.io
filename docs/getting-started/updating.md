---
id: updating
title: Updating
sidebar_position: 2
---

# Updating XAFS Fitter

## Windows

Run **`update.bat`** from the installation directory. First select the package (GUI or CLI):

![update.bat — package selection menu](/img/tutorials/update_tui.png)

Then select an action for the chosen package:

![update.bat — GUI actions menu showing update, rollback, and version options](/img/tutorials/update_2_tui.png)

### Options

| Option | Description |
|--------|-------------|
| **Update to latest** | Pulls the latest release and reinstalls dependencies |
| **Rollback** | Reverts to a previously installed version |
| **Show version** | Displays the currently installed version |

## macOS and Linux

Re-run the update script from the terminal:

```bash
./update.sh   # for GUI/CLI
```

## Version Locations

The installed version numbers are stored in plain text files:

- **GUI version**: `xafs_gui/VERSION`
- **CLI version**: `xafs_cli/VERSION`

You can read these files directly to check what version is installed without running the update menu.
