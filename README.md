# XAFS Fitter Documentation

Source for the XAFS Fitter documentation site, built with [Docusaurus](https://docusaurus.io/).

Covers the GUI (v1.2.2) and CLI (v1.0.2) tools for fitting EXAFS data using FEFF scattering paths.

## Local Development

Install dependencies:

```bash
yarn
```

Start the dev server (live reload):

```bash
yarn start
```

## Build

```bash
yarn build
```

Generates static output into `build/`. Any static hosting service can serve it.

## Deployment

To GitHub Pages via SSH:

```bash
USE_SSH=true yarn deploy
```

To GitHub Pages without SSH:

```bash
GIT_USER=<your GitHub username> yarn deploy
```