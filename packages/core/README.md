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
[![license](https://img.shields.io/github/license/Manas-bhavsar/mark-ui?color=ffffff&labelColor=000000&style=flat-square)](https://github.com/Manas-bhavsar/mark-ui/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-ffffff?labelColor=000000&style=flat-square)](https://www.typescriptlang.org/)

[Documentation](https://markui.vercel.app/docs) · [Live Themes](https://markui.vercel.app/themes) · [GitHub](https://github.com/Manas-bhavsar/mark-ui)

</div>

---

## What is MARK UI?

A **motion-first** React component library where every component is designed from the ground up with animation as a first-class citizen. 18 production-ready components, 15 live themes, powered by Framer Motion.

- 🎬 **Motion-first** — Every interaction has intention, every transition has weight
- 🎨 **15 live themes** — Switch personality with a single attribute, not just colors
- ♿ **Accessible** — Keyboard navigation, ARIA roles, `prefers-reduced-motion` support
- 📦 **Zero config** — Import styles once, no Tailwind setup required
- 🔷 **Full TypeScript** — Every component, prop, and type ships with declarations

---

## Installation

```bash
npm install @markui/core framer-motion
```

> **Peer dependencies:** `react >= 18`, `react-dom >= 18`, `framer-motion >= 11`

---

## Quick Start

### 1. Import the stylesheet

```tsx
// app/layout.tsx (Next.js) or main.tsx (Vite)
import '@markui/core/styles';
```

### 2. Pick a theme

```html
<html data-markui-theme="obsidian">
```

### 3. Use components

```tsx
import { Button, Card, Badge } from '@markui/core';

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
| **Inputs** | `Button` · `Input` · `Checkbox` · `Select` · `Toggle` |
| **Display** | `Avatar` · `Badge` · `Card` · `Tag` |
| **Feedback** | `Alert` · `Skeleton` · `Spinner` |
| **Overlay** | `Modal` · `Drawer` · `Toast` · `Tooltip` |
| **Layout** | `Container` · `Divider` |

---

## Themes

| Professional | Fun |
|---|---|
| `monochrome` · `arctic` · `obsidian` · `ivory` · `slate` · `sage` · `carbon` | `cyberpunk` · `shinigami` · `titan` · `nebula` · `matrixx` · `gotham` · `akira` · `hobbit` |

Switch themes at runtime with a single attribute:

```ts
document.documentElement.setAttribute('data-markui-theme', 'cyberpunk');
```

---

## Framework Support

Works with **Next.js** (App Router), **Vite**, and any React 18+ project. Components ship with `'use client'` directives — they work in server component trees out of the box.

---

## Documentation

Full docs, interactive playgrounds, and theme previews at **[markui.vercel.app](https://markui.vercel.app)**

---

## License

[MIT](https://github.com/Manas-bhavsar/mark-ui/blob/main/LICENSE) — free for personal and commercial use.
