# Contributing to MARK UI

Thanks for your interest in contributing to MARK UI! Every contribution matters — whether it's fixing a typo, improving documentation, reporting a bug, or building a new component.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Component Guidelines](#component-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)

---

## Code of Conduct

Be kind, be respectful, be constructive. We're all here to build something great.

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** 8+ (install via `npm install -g pnpm`)

### Setup

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/<your-username>/mark-ui.git
cd mark-ui

# 2. Install dependencies
pnpm install

# 3. Start the docs site (runs on http://localhost:3000)
pnpm dev

# 4. Build the core package
cd packages/core
pnpm build
```

---

## Development Workflow

```bash
# Create a feature branch from main
git checkout -b feat/your-feature-name

# Make your changes...

# Build and verify
cd packages/core
pnpm build

# Run tests
pnpm test

# Commit and push
git add .
git commit -m "feat: add your feature"
git push origin feat/your-feature-name
```

Then open a Pull Request on GitHub.

---

## Project Structure

```
mark-ui/
├── app/                  # Next.js docs site (App Router)
├── components/           # Docs site components
├── packages/
│   └── core/             # @markui/core — the published npm package
│       ├── src/
│       │   ├── components/   # All 18 UI components
│       │   ├── styles/       # Theme CSS & design tokens
│       │   └── index.ts      # Public exports
│       └── dist/             # Build output (CJS + ESM + CSS)
├── styles/               # Docs site styles
└── TODO.md               # Project roadmap
```

- **`packages/core`** — This is the library. Changes to components, themes, and the build go here.
- **`app/` + `components/`** — This is the documentation site. Changes to docs pages, playgrounds, and guides go here.

---

## Making Changes

### Components (in `packages/core`)

1. All components live in `packages/core/src/components/`
2. Each component has its own directory with the component file and any utilities
3. Export new components from `packages/core/src/index.ts`
4. After changes, run `pnpm build` in `packages/core` to verify the build

### Documentation (in `app/`)

1. Docs pages use Next.js App Router conventions
2. Each component doc page should include usage examples, a prop table, and accessibility notes
3. Run `pnpm dev` from the repo root to preview docs changes

### Themes (in `packages/core/src/styles/`)

1. Themes are defined using CSS custom properties
2. Each theme is activated via `data-markui-theme="<name>"` on the document root
3. When adding a theme, add it to both the CSS and the theme documentation

---

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use for |
|--------|---------|
| `feat:` | New feature or component |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | CSS/visual changes (not code style) |
| `refactor:` | Code restructuring without behavior change |
| `test:` | Adding or updating tests |
| `chore:` | Build config, CI, tooling |

**Examples:**
```
feat: add Tabs component with animated underline
fix: modal not trapping focus on open
docs: add usage examples for Select component
chore: update tsup config for tree-shaking
```

---

## Pull Request Process

1. **One feature per PR.** Keep PRs focused and reviewable.
2. **Describe your changes.** Include what you changed, why, and screenshots/GIFs for visual changes.
3. **Ensure the build passes.** Run `pnpm build` in `packages/core` before submitting.
4. **Update docs if needed.** New components or API changes should include documentation updates.
5. **Be patient.** We review PRs as quickly as we can.

### PR Title Format

Use the same convention as commits:

```
feat: add Accordion component
fix: drawer not closing on escape key
docs: improve Button prop table
```

---

## Component Guidelines

When building or modifying components:

### Animation
- Use **Framer Motion** for all animations — no raw CSS transitions
- Respect `prefers-reduced-motion` — provide a non-animated fallback
- Motion should communicate state, not just decorate

### Accessibility
- Use semantic HTML elements
- Add appropriate ARIA roles and attributes
- Ensure full keyboard navigation
- Test with a screen reader when possible

### TypeScript
- All components must be fully typed — no `any`
- Export prop types (e.g., `ButtonProps`)
- Use discriminated unions for variant props where applicable

### Styling
- Use CSS custom properties (design tokens) for all colors, spacing, and typography
- Styles should adapt to all themes without hardcoded values
- Never use inline styles for theming

---

## Reporting Bugs

Open an [issue](https://github.com/Manas-bhavsar/mark-ui/issues) with:

1. **Clear title** describing the problem
2. **Steps to reproduce** — minimal code or a link to a reproduction
3. **Expected vs. actual behavior**
4. **Environment** — browser, OS, React version, MARK UI version

---

## Requesting Features

Open an [issue](https://github.com/Manas-bhavsar/mark-ui/issues) with the `enhancement` label. Include:

1. **What** you'd like to see
2. **Why** it would be useful
3. **Examples** from other libraries or mockups (if any)

---

## Questions?

If you're unsure about anything, open a [discussion](https://github.com/Manas-bhavsar/mark-ui/discussions) or comment on the relevant issue. We're happy to help.

---

**Thank you for helping make MARK UI better.** 🖤
