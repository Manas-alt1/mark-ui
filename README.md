<div align="center">

<br />

```
███╗   ███╗ █████╗ ██████╗ ██╗  ██╗    ██╗   ██╗██╗
████╗ ████║██╔══██╗██╔══██╗██║ ██╔╝    ██║   ██║██║
██╔████╔██║███████║██████╔╝█████╔╝     ██║   ██║██║
██║╚██╔╝██║██╔══██║██╔══██╗██╔═██╗     ██║   ██║██║
██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██╗    ╚██████╔╝██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚═╝
```

**Motion is not decoration. It is the message.**

[![npm version](https://img.shields.io/npm/v/@markui/core?color=ffffff&labelColor=000000&style=flat-square)](https://www.npmjs.com/package/@markui/core)
[![npm downloads](https://img.shields.io/npm/dm/@markui/core?color=ffffff&labelColor=000000&style=flat-square)](https://www.npmjs.com/package/@markui/core)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@markui/core?style=flat-square&labelColor=000000&color=ffffff)](https://bundlephobia.com/package/@markui/core)
[![license](https://img.shields.io/github/license/Manas-bhavsar/mark-ui?color=ffffff&labelColor=000000&style=flat-square)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-ffffff?labelColor=000000&style=flat-square)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ffffff?labelColor=000000&style=flat-square)](./CONTRIBUTING.md)

[Documentation](https://markui.vercel.app/docs) · [Components](https://markui.vercel.app/components) · [Themes](https://markui.vercel.app/themes) · [Changelog](https://markui.vercel.app/docs/changelog)

<br />

</div>

---

## The Story

Most component libraries treat animation as an afterthought — a sprinkle of `transition: all 0.2s` on a hover state, called a day.

MARK UI was built on a different premise.

What if motion was the foundation? What if every component was designed from the ground up with animation as a *first-class citizen* — not bolted on, but baked in? What if switching themes felt like changing the entire personality of your app, not just swapping colors?

That's MARK UI. A motion-first React component library where every interaction has intention, every transition has weight, and every theme tells a story.

---

## What's Inside

**18 production-ready components** — inputs, display, feedback, overlays — every one of them animated with Framer Motion v12 from the ground up.

**6 launch themes** across two families:

| Professional | Fun |
|---|---|
| `monochrome` — clean black and white | `cyberpunk` — neon yellow on deep black |
| `arctic` — cool whites and icy blues | `matrixx` — matrix green on dark |
| `obsidian` — dark glass, muted tones | `gotham` — moody greys and shadow |

**Zero Tailwind config required.** MARK UI ships pre-built CSS. You import it once and you're done.

**Full TypeScript support.** Every component, every prop, every type — shipped with declarations.

---

## Installation

```bash
# npm
npm install @markui/core framer-motion

# pnpm
pnpm add @markui/core framer-motion

# yarn
yarn add @markui/core framer-motion
```

> **Peer dependencies:** `react >= 18`, `react-dom >= 18`, `framer-motion >= 11`.  
> `tailwindcss` is **not** required.

---

## Setup

### 1. Import the stylesheet

In your app root — `app/layout.tsx` for Next.js, `main.tsx` for Vite:

```ts
import "@markui/core/styles";
```

### 2. Pick a theme

```tsx
// Next.js
<html data-markui-theme="obsidian">

// Vite
document.documentElement.setAttribute("data-markui-theme", "cyberpunk");
```

### 3. Use components

```tsx
import { Button, Card, Badge } from "@markui/core";

export default function App() {
  return (
    <Card>
      <Badge variant="subtle">New</Badge>
      <Button>Get started</Button>
    </Card>
  );
}
```

That's it. No provider wrapping. No config files. No theme setup beyond a single attribute.

---

## Components

| Category | Components |
|---|---|
| **Inputs** | `Button` `Input` `Checkbox` `Select` `Toggle` |
| **Display** | `Avatar` `Badge` `Card` `Tag` |
| **Feedback & Overlay** | `Alert` `Toast` `Tooltip` `Modal` `Drawer` `Skeleton` `Spinner` `Divider` `Container` |

Every component ships with:
- Interactive playground in the docs
- Full prop table with types and defaults
- Usage guidelines — do's and don'ts
- Accessibility notes and keyboard behavior
- Reduced motion support via `prefers-reduced-motion`

---

## Framework Support

### Next.js 15 (App Router)

```tsx
// app/layout.tsx
import "@markui/core/styles";

export default function RootLayout({ children }) {
  return (
    <html data-markui-theme="monochrome">
      <body>{children}</body>
    </html>
  );
}
```

MARK UI components are client components. In server components, wrap them in a `"use client"` boundary:

```tsx
// components/MyButton.tsx
"use client";
import { Button } from "@markui/core";
export default function MyButton() {
  return <Button>Click me</Button>;
}
```

### Vite / React

```tsx
// src/main.tsx
import "@markui/core/styles";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(<App />);
```

---

## Motion Philosophy

MARK UI doesn't animate things randomly. Every motion decision follows three rules:

**1. Motion communicates state.** A button press, a modal appearing, a toast dismissing — each animation tells the user something happened.

**2. Motion respects the user.** All animations honor `prefers-reduced-motion`. Users who need reduced motion get functional, accessible components without visual noise.

**3. Motion fits the theme.** `cyberpunk` animations are sharp and electric. `arctic` animations are slow and fluid. The theme isn't just colors — it's a complete personality.

---

## Accessibility

MARK UI is built with accessibility as a requirement, not a feature:

- Full keyboard navigation across all components
- ARIA roles and attributes implemented per WAI-ARIA spec
- Screen reader tested
- Reduced motion support via CSS custom properties
- Focus management in modals and drawers

Read the full [Accessibility guide →](https://markui.vercel.app/docs/accessibility)

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge | ✅ Last 2 versions |
| Firefox | ✅ Last 2 versions |
| Safari | ✅ 15.4+ |
| IE / Legacy Edge | ❌ Not supported |

MARK UI targets modern browsers. It uses CSS custom properties, `@keyframes`, and the Web Animations API — none of which are polyfillable for IE.

---

## Roadmap

| Version | Status | What's included |
|---|---|---|
| **v0.1.0** | ✅ Released | 18 components · 6 themes · Full docs · npm publish |
| **v0.2.0** | 🔄 In progress | `Tabs` · `Accordion` · `DropdownMenu` · `Breadcrumbs` · `Progress` · `Slider` |
| **v0.3.0** | 📋 Planned | Premium templates · Additional theme packs · Form validation guide |

Follow the [Changelog →](https://markui.vercel.app/docs/changelog) for updates.

---

## Local Development

```bash
# 1. Clone the repo
git clone https://github.com/Manas-bhavsar/mark-ui.git
cd mark-ui

# 2. Install dependencies (pnpm required)
pnpm install

# 3. Start the docs site
pnpm dev
# → http://localhost:3000

# 4. Build the core package
cd packages/core
pnpm build

# 5. Run tests
pnpm test
```

> **Requires:** Node.js 18+, pnpm 8+

The repo is structured as a monorepo-style project with `packages/core` for the library and the root `app/` for the Next.js docs site.

---

## Contributing

PRs and issues are welcome.

```bash
# Fork the repo, then:
git checkout -b feat/your-feature-name
# make your changes
pnpm test          # make sure tests pass
pnpm build         # make sure it builds
git push origin feat/your-feature-name
# open a PR
```

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting. For bug reports, open an [issue](https://github.com/Manas-bhavsar/mark-ui/issues) with a minimal reproduction.

---

## Documentation

Full documentation, interactive component playgrounds, theme previews, and guides live at:

**[markui.vercel.app/docs](https://markui.vercel.app/docs)**

---

## License

MIT — free to use in personal and commercial projects.

---

<div align="center">

Built with intention. Animated with purpose.

**[markui.vercel.app](https://markui.vercel.app)**

</div>