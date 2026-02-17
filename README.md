# react-scad minimal example

A minimal [react-scad](https://github.com/react-scad/react-scad) project: one cube, one sphere, unioned and written to `model.scad`.

## Prerequisites

- **Node.js** 18+
- **npm** (or pnpm / yarn)

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

This runs `main.jsx` with [tsx](https://github.com/privatenumber/tsx) and writes `model.scad` to the current directory. Open `model.scad` in [OpenSCAD](https://openscad.org/) to preview or export STL.

## What’s in the box

- **main.jsx** – Renders a union of a centered cube and a sphere via `createRoot("model.scad")` and `root.render(...)`.
- **model.scad** – Generated output (created when you run `npm start`).

## Links

- **react-scad** (core): [github.com/react-scad/react-scad](https://github.com/react-scad/react-scad)
- **This example repo**: [github.com/react-scad/example](https://github.com/react-scad/example)
