---
id: optimization-algorithms
title: Optimization Algorithms
sidebar_position: 3
---

# Optimization Algorithms

XAFS Fitter supports four optimization algorithms. Each has different characteristics that make it suitable for different stages of fitting.

## Algorithm Comparison

| Algorithm | Speed | Search Type | Best For |
|-----------|-------|-------------|----------|
| **Levenberg-Marquardt (LM)** | Fast | Gradient descent (local) | Initial fits, well-constrained problems |
| **Genetic Algorithm (GA)** | Slow | Population-based (global) | Avoiding local minima, many parameters |
| **Particle Swarm (PSO)** | Medium | Swarm-based (global) | Mid-point between GA and LM |
| **Bayesian** | Varies | Surrogate model (global) | Expensive evaluations, wide parameter space |

## Levenberg-Marquardt (LM)

LM is a gradient-descent method that combines Gauss-Newton and steepest-descent steps. It is fast and reliable when:
- You have a good initial guess
- The problem is well-constrained (few free parameters, tight bounds)
- You want a quick check of whether a model is viable

**Limitation**: LM finds the nearest local minimum. If the parameter space has multiple local minima, LM may not find the global best.

## Genetic Algorithm (GA)

GA maintains a population of candidate solutions and evolves them over generations using selection, crossover, and mutation. It is more likely to find the global minimum but requires many more function evaluations.

Use GA when:
- LM gives unsatisfactory results (stuck in a local minimum)
- You have many free parameters (>6) or loose bounds
- You want a thorough search of the parameter space

**Parameters**: population size, number of generations, mutation rate.

## Particle Swarm Optimization (PSO)

PSO simulates a swarm of particles moving through the parameter space, each attracted toward their personal best and the global best found so far. It is generally faster than GA while still performing a global search.

Use PSO when:
- You want a global search but GA is too slow
- The parameter space is continuous and relatively smooth

**Parameters**: number of particles, number of iterations.

## Bayesian Optimization

Bayesian optimization builds a probabilistic surrogate model (typically a Gaussian process) of the objective function and uses it to select the most informative points to evaluate next. It is sample-efficient but has higher overhead per iteration.

Use Bayesian when:
- Each XAFS evaluation is slow (large path count, complex model)
- You have a wide parameter space but limited compute budget

**Parameters**: number of initial random samples, total iterations.

## Recommended Workflow

```
Quick LM fit
    ↓
Check R-factor and parameter values
    ↓ (if R > 0.05 or parameters at bounds)
Warm-start GA (Continue from Last)
    ↓
Parallel GA runs (--parallel N in CLI)
    ↓
Select best result, verify physics
```

The **"Continue from Last"** button in the GUI (and `--continue-from` in the CLI) seeds the GA population with the best LM result, giving the global search a head start.
