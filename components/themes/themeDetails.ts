// MARK UI — themeDetails.ts
// Deep-dive data for every theme in the library.
// Collection 1 = Professional, Collection 2 = Fun.

import type { ThemeId } from "@/components/theme/themes";

export interface ThemePaletteSwatch {
  name: string;
  hex: string;
  role: string;
  light: boolean; // true → use dark text on this swatch
}

export interface ThemeDetail {
  collection: 1 | 2;
  num: string;
  badge: string;
  tagline: string;
  accent: string;
  bg: string;
  palette: ThemePaletteSwatch[];
  origin: string;
  purpose: string;
  tags: string[];
  quote: string;
  stats: { Components: number; Variants: number; Tokens: number };
}

export const themeDetails: Record<ThemeId, ThemeDetail> = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // COLLECTION 1 — PROFESSIONAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  monochrome: {
    collection: 1,
    num: "01",
    badge: "Core Theme",
    tagline: "The Null State",
    accent: "#d4d4d4",
    bg: "#111111",
    palette: [
      { name: "Paper White", hex: "#F5F5F5", role: "Surface · Text", light: true },
      { name: "Silver Veil", hex: "#A3A3A3", role: "Muted · Secondary", light: true },
      { name: "Iron Smoke", hex: "#525252", role: "Border · Divider", light: false },
      { name: "Void Edge", hex: "#262626", role: "Elevated Surface", light: false },
      { name: "True Black", hex: "#111111", role: "Base Background", light: false },
    ],
    origin:
      "Monochrome was the first theme built for MARK UI — a deliberate reset. Before any hue could be trusted, black and white had to work flawlessly. Designed to expose every spacing flaw and animation timing issue without color as a crutch.",
    purpose:
      "Use when the content itself is the loudest thing on screen. Perfect for writing tools, terminal UIs, developer dashboards, and any environment where distraction is the enemy.",
    tags: ["Minimalist", "Dev Tools", "Editorial", "Precision", "Zero Noise"],
    quote:
      "Color is a hypothesis. Strip it away — what remains is either design or accident.",
    stats: { Components: 18, Variants: 3, Tokens: 24 },
  },

  arctic: {
    collection: 1,
    num: "02",
    badge: "Cool Spectrum",
    tagline: "Calm Under Pressure",
    accent: "#38bdf8",
    bg: "#0c1a2e",
    palette: [
      { name: "Ice Crystal", hex: "#E0F2FE", role: "Surface · Text", light: true },
      { name: "Sky Refract", hex: "#7DD3FC", role: "Interactive · Link", light: true },
      { name: "Polar Pulse", hex: "#38BDF8", role: "Accent · Primary", light: true },
      { name: "Deep Ocean", hex: "#0369A1", role: "Border · Muted", light: false },
      { name: "Abyss Night", hex: "#0C1A2E", role: "Base Background", light: false },
    ],
    origin:
      "Inspired by refracted light inside glaciers and the eerie clarity of polar night. Arctic answers one question: what does calm confidence look like in UI? The palette pulls from deep ocean blues and ice-refraction cyan.",
    purpose:
      "Designed for data-heavy apps, analytics dashboards, and enterprise tools. Cool tones reduce visual fatigue and naturally guide attention to warm accent elements.",
    tags: ["Analytics", "Enterprise", "Dashboard", "Long Sessions", "Data-First"],
    quote:
      "A glacier moves slowly but nothing can stop it. Arctic was built to carry that exact energy.",
    stats: { Components: 18, Variants: 4, Tokens: 28 },
  },

  obsidian: {
    collection: 1,
    num: "03",
    badge: "Flagship",
    tagline: "Volcanic Elegance",
    accent: "#a78bfa",
    bg: "#09090b",
    palette: [
      { name: "Soft Amethyst", hex: "#EDE9FE", role: "Surface · Text", light: true },
      { name: "Violet Mist", hex: "#A78BFA", role: "Accent · Primary", light: true },
      { name: "Deep Iris", hex: "#7C3AED", role: "Interactive · CTA", light: false },
      { name: "Eclipse", hex: "#4C1D95", role: "Border · Divider", light: false },
      { name: "Obsidian Core", hex: "#09090B", role: "Base Background", light: false },
    ],
    origin:
      "Obsidian is MARK UI's flagship theme — the one that proved the library was worth building. Named after volcanic glass: formed under extreme pressure, razor-sharp, naturally beautiful. The #09090b base is one deliberate step from pure black.",
    purpose:
      "The go-to for SaaS products, developer portfolios, and premium tools. The violet accent is restrained enough to feel luxurious rather than loud — versatile across B2B and consumer contexts.",
    tags: ["SaaS", "Premium", "Portfolio", "Flagship", "Versatile"],
    quote:
      "Obsidian forms in silence, beneath the surface, under immense pressure. So does good design.",
    stats: { Components: 18, Variants: 5, Tokens: 32 },
  },

  ivory: {
    collection: 1,
    num: "04",
    badge: "Warm Tone",
    tagline: "Paper and Gold",
    accent: "#d97706",
    bg: "#110f0a",
    palette: [
      { name: "Warm Linen", hex: "#FDF8F0", role: "Surface · Text", light: true },
      { name: "Honey Glow", hex: "#D97706", role: "Accent · Primary", light: true },
      { name: "Amber Dusk", hex: "#B45309", role: "Interactive · CTA", light: false },
      { name: "Parchment", hex: "#78716C", role: "Border · Muted", light: false },
      { name: "Dark Umber", hex: "#110F0A", role: "Base Background", light: false },
    ],
    origin:
      "Ivory was born from a question: can warmth exist without sacrificing authority? Named after aged paper and old gold leaf, this theme draws from the quiet confidence of a well-worn library — the kind of space where ideas have weight.",
    purpose:
      "Ideal for editorial platforms, note-taking apps, and any product where long reading sessions matter. The amber accent creates focus points without screaming for attention.",
    tags: ["Editorial", "Warm", "Long-Form", "Readable", "Sophisticated"],
    quote:
      "The best designs age like paper — they yellow at the edges but the words remain sharp.",
    stats: { Components: 18, Variants: 3, Tokens: 25 },
  },

  slate: {
    collection: 1,
    num: "05",
    badge: "Industrial",
    tagline: "Blueprint Clarity",
    accent: "#0ea5e9",
    bg: "#090c10",
    palette: [
      { name: "Sky Wire", hex: "#E0F2FE", role: "Surface · Text", light: true },
      { name: "Azure Bolt", hex: "#0EA5E9", role: "Accent · Primary", light: true },
      { name: "Steel Blue", hex: "#0284C7", role: "Interactive · CTA", light: false },
      { name: "Gunmetal", hex: "#334155", role: "Border · Muted", light: false },
      { name: "Forge Dark", hex: "#090C10", role: "Base Background", light: false },
    ],
    origin:
      "Slate started as an internal tool theme — something developers would stare at for eight hours straight without flinching. It borrows from architectural blueprints and industrial control panels where clarity is a safety requirement, not a preference.",
    purpose:
      "Built for infrastructure dashboards, monitoring tools, and developer environments. The sky-blue accent cuts through dark surfaces like a signal light: impossible to miss, impossible to misread.",
    tags: ["Infrastructure", "Monitoring", "Dev Env", "Industrial", "Reliable"],
    quote:
      "A blueprint doesn't need to be beautiful. It needs to be right. Slate does both.",
    stats: { Components: 18, Variants: 4, Tokens: 27 },
  },

  sage: {
    collection: 1,
    num: "06",
    badge: "Natural",
    tagline: "Quiet Growth",
    accent: "#4d7c6f",
    bg: "#090e0c",
    palette: [
      { name: "Morning Dew", hex: "#ECFDF5", role: "Surface · Text", light: true },
      { name: "Sage Leaf", hex: "#4D7C6F", role: "Accent · Primary", light: false },
      { name: "Forest Floor", hex: "#3B6B5E", role: "Interactive · CTA", light: false },
      { name: "Lichen", hex: "#2D4A42", role: "Border · Muted", light: false },
      { name: "Deep Moss", hex: "#090E0C", role: "Base Background", light: false },
    ],
    origin:
      "Sage was requested more than any other theme before it was built. The community wanted something organic — a palette that felt alive without being loud. Named after the herb: subtle aroma, powerful presence, deeply grounding.",
    purpose:
      "Designed for productivity tools, health and wellness apps, and sustainable brands. The muted green creates a calming workspace that encourages long, focused sessions without visual strain.",
    tags: ["Productivity", "Wellness", "Focus", "Organic", "Calm"],
    quote:
      "Growth is rarely loud. The strongest roots are the ones you never see.",
    stats: { Components: 18, Variants: 3, Tokens: 25 },
  },

  carbon: {
    collection: 1,
    num: "07",
    badge: "High Contrast",
    tagline: "Forged in Heat",
    accent: "#ef4444",
    bg: "#0f0f0f",
    palette: [
      { name: "White Heat", hex: "#FAFAFA", role: "Surface · Text", light: true },
      { name: "Forge Red", hex: "#EF4444", role: "Accent · Primary", light: false },
      { name: "Ember Core", hex: "#DC2626", role: "Interactive · CTA", light: false },
      { name: "Ash Gray", hex: "#E5E7EB", role: "Secondary · Muted", light: true },
      { name: "Carbon Black", hex: "#0F0F0F", role: "Base Background", light: false },
    ],
    origin:
      "Carbon exists because sometimes you need a theme that hits hard. The red-on-black combination is one of the most aggressive in design — but controlled aggression. Every pixel of red earned its place through contrast-ratio testing and deliberate restraint.",
    purpose:
      "Built for system dashboards, error states, and interfaces where urgency matters. Carbon works best when the user needs to act, not admire. Red is attention by nature — Carbon makes it intentional.",
    tags: ["System", "Alert-Heavy", "High Contrast", "Urgent", "Bold"],
    quote:
      "Pressure creates diamonds. More pressure creates carbon fiber. We chose the stronger one.",
    stats: { Components: 18, Variants: 4, Tokens: 26 },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // COLLECTION 2 — FUN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  cyberpunk: {
    collection: 2,
    num: "08",
    badge: "Bold · Loud",
    tagline: "Neon District",
    accent: "#f0e040",
    bg: "#0d0014",
    palette: [
      { name: "Solar Haze", hex: "#FEF9C3", role: "Surface · Text", light: true },
      { name: "Volt Yellow", hex: "#F0E040", role: "Accent · Primary", light: true },
      { name: "Burnt Circuit", hex: "#CA8A04", role: "Interactive · Link", light: false },
      { name: "Deep Violet", hex: "#7A1FA2", role: "Complement · Glow", light: false },
      { name: "Void Core", hex: "#0D0014", role: "Base Background", light: false },
    ],
    origin:
      "Not planned — demanded. After the first three themes shipped, the community wanted something that broke the mold. Yellow on deep violet is one of the highest-contrast combinations possible. This theme weaponizes that.",
    purpose:
      "Built for gaming UIs, creative portfolios, and scroll-stopping landing pages. Use it when you want the UI to feel like a statement, not a tool.",
    tags: ["Gaming", "Creative", "High Impact", "Entertainment", "Scroll-Stopper"],
    quote:
      "In a city that never sleeps, the boldest light wins. Don't whisper. Illuminate.",
    stats: { Components: 18, Variants: 4, Tokens: 30 },
  },

  shinigami: {
    collection: 2,
    num: "09",
    badge: "Dark · Mythic",
    tagline: "Divine Judgement",
    accent: "#c9a84c",
    bg: "#07060f",
    palette: [
      { name: "Celestial Gold", hex: "#FDF6E3", role: "Surface · Text", light: true },
      { name: "Death Note", hex: "#C9A84C", role: "Accent · Primary", light: true },
      { name: "Ryuk Bronze", hex: "#A67C2E", role: "Interactive · Link", light: false },
      { name: "Shadow Realm", hex: "#1A1A2E", role: "Border · Muted", light: false },
      { name: "Void Abyss", hex: "#07060F", role: "Base Background", light: false },
    ],
    origin:
      "Shinigami was the first anime-inspired theme and the riskiest. Gold on near-black is either elegant or gaudy — there's no middle ground. Named after the gods of death in Japanese mythology: precise, inevitable, beautiful in their darkness.",
    purpose:
      "Designed for premium portfolios, luxury e-commerce, and any product that wants to feel exclusive. The gold accent reads as both ancient and futuristic — a rare duality.",
    tags: ["Luxury", "Anime", "Premium", "Exclusive", "Mythic"],
    quote:
      "Those who write names in the notebook become gods. Those who design in gold become legends.",
    stats: { Components: 18, Variants: 4, Tokens: 28 },
  },

  titan: {
    collection: 2,
    num: "10",
    badge: "Military",
    tagline: "Walls of War",
    accent: "#8b6914",
    bg: "#0a0c07",
    palette: [
      { name: "Dust Storm", hex: "#F5F0E1", role: "Surface · Text", light: true },
      { name: "Titan Gold", hex: "#8B6914", role: "Accent · Primary", light: false },
      { name: "Scout Green", hex: "#2D5A3D", role: "Interactive · Link", light: false },
      { name: "Wall Stone", hex: "#4A4A3A", role: "Border · Muted", light: false },
      { name: "Garrison Dark", hex: "#0A0C07", role: "Base Background", light: false },
    ],
    origin:
      "Titan draws from military cartography and wartime communication interfaces — functional, dense, and designed to survive chaos. The muted gold and deep olive create a palette that feels weathered and battle-tested, not polished.",
    purpose:
      "Ideal for strategy games, project management tools, and apps that manage complexity. Titan feels structured and serious — like a war room where every element has a purpose.",
    tags: ["Strategy", "Military", "Complex UI", "Project Mgmt", "Structured"],
    quote:
      "Behind every wall is a story of survival. Titan was built to carry weight that would crush lesser themes.",
    stats: { Components: 18, Variants: 3, Tokens: 26 },
  },

  nebula: {
    collection: 2,
    num: "11",
    badge: "Cosmic",
    tagline: "Stardust Drift",
    accent: "#9b59b6",
    bg: "#08060f",
    palette: [
      { name: "Starlight", hex: "#F3E8FF", role: "Surface · Text", light: true },
      { name: "Nebula Core", hex: "#9B59B6", role: "Accent · Primary", light: false },
      { name: "Red Giant", hex: "#E74C3C", role: "Interactive · CTA", light: false },
      { name: "Dark Matter", hex: "#2D1B4E", role: "Border · Muted", light: false },
      { name: "Void Space", hex: "#08060F", role: "Base Background", light: false },
    ],
    origin:
      "Nebula was inspired by Hubble telescope photographs — specifically the moment when false-color processing reveals structures invisible to the naked eye. Purple and red don't naturally coexist in UI, but in space, they create the most beautiful objects known.",
    purpose:
      "Built for creative tools, music apps, and immersive experiences. Nebula works best when the UI is part of the experience — not separate from it. It rewards exploration.",
    tags: ["Creative", "Music", "Immersive", "Exploration", "Cosmic"],
    quote:
      "A nebula is a graveyard and a nursery at the same time. Everything ends. Everything begins.",
    stats: { Components: 18, Variants: 4, Tokens: 28 },
  },

  matrixx: {
    collection: 2,
    num: "12",
    badge: "Terminal",
    tagline: "System Override",
    accent: "#4ade80",
    bg: "#020c02",
    palette: [
      { name: "Phosphor", hex: "#DCFCE7", role: "Surface · Text", light: true },
      { name: "Matrix Green", hex: "#4ADE80", role: "Accent · Primary", light: true },
      { name: "Code Leaf", hex: "#16A34A", role: "Interactive · Link", light: false },
      { name: "Deep Root", hex: "#14532D", role: "Border · Muted", light: false },
      { name: "Terminal Null", hex: "#020C02", role: "Base Background", light: false },
    ],
    origin:
      "A love letter to terminal culture and hacker cinema. The #020c02 base carries a faint green chromatic cast — imperceptible next to pure black, but subconsciously grounding. Green-on-black is the oldest color relationship in computing.",
    purpose:
      "Ideal for CLI tools, security dashboards, and developer utilities. Matrixx makes you feel like you're inside the system, not looking at it from outside.",
    tags: ["Terminal", "Security", "Dev", "CLI", "Hacker Aesthetic"],
    quote:
      "Every system has a back door. Matrixx makes the interface feel like you already found it.",
    stats: { Components: 18, Variants: 3, Tokens: 26 },
  },

  gotham: {
    collection: 2,
    num: "13",
    badge: "Warm · Cinematic",
    tagline: "City That Burns",
    accent: "#f97316",
    bg: "#0f0a00",
    palette: [
      { name: "Amber Dusk", hex: "#FFF7ED", role: "Surface · Text", light: true },
      { name: "Ember Pulse", hex: "#F97316", role: "Accent · Primary", light: true },
      { name: "Forge Red", hex: "#C2410C", role: "Interactive · CTA", light: false },
      { name: "Coal Dark", hex: "#7C2D12", role: "Border · Divider", light: false },
      { name: "Midnight Ash", hex: "#0F0A00", role: "Base Background", light: false },
    ],
    origin:
      "Gotham almost didn't happen — orange is the hardest accent to control. Inspired by amber urban nights, streetlights through smog, and the cinematic grammar of noir. A deep brown-black paired with precise burnt orange: dangerous and warm at once.",
    purpose:
      "Designed for fintech, lifestyle brands, and premium consumer apps that want warmth without softness. Gotham reads serious but approachable.",
    tags: ["Fintech", "Lifestyle", "Consumer", "Cinematic", "Serious Warmth"],
    quote:
      "Every great city has a shadow side. Gotham is the light that makes the dark beautiful.",
    stats: { Components: 18, Variants: 4, Tokens: 29 },
  },

  akira: {
    collection: 2,
    num: "14",
    badge: "Neo Tokyo",
    tagline: "Red Shift",
    accent: "#ff4500",
    bg: "#0a0500",
    palette: [
      { name: "Neon Flare", hex: "#FFF0E6", role: "Surface · Text", light: true },
      { name: "Kaneda Red", hex: "#FF4500", role: "Accent · Primary", light: false },
      { name: "Tetsuo Blue", hex: "#0A0AFF", role: "Complement · Glow", light: false },
      { name: "Asphalt", hex: "#3D2B1F", role: "Border · Muted", light: false },
      { name: "Neo Dark", hex: "#0A0500", role: "Base Background", light: false },
    ],
    origin:
      "Akira is raw speed made visual. Named after the 1988 anime that redefined cyberpunk, this theme uses the exact red of Kaneda's motorcycle — aggressive, unapologetic, and impossible to ignore. The blue complement creates tension, not harmony.",
    purpose:
      "Built for high-energy landing pages, gaming interfaces, and creative portfolios that refuse to play safe. Akira is not for everyone — and that's the point.",
    tags: ["Anime", "High Energy", "Landing Pages", "Creative", "Unapologetic"],
    quote:
      "The future is not something we enter. The future is something we create — at full speed.",
    stats: { Components: 18, Variants: 4, Tokens: 28 },
  },

  hobbit: {
    collection: 2,
    num: "15",
    badge: "Fantasy · Earth",
    tagline: "Shire at Dusk",
    accent: "#8b7355",
    bg: "#080a05",
    palette: [
      { name: "Parchment", hex: "#F5F0E1", role: "Surface · Text", light: true },
      { name: "Hobbit Brown", hex: "#8B7355", role: "Accent · Primary", light: false },
      { name: "Shire Green", hex: "#4A7C59", role: "Interactive · Link", light: false },
      { name: "Oak Bark", hex: "#5C4A32", role: "Border · Muted", light: false },
      { name: "Burrow Dark", hex: "#080A05", role: "Base Background", light: false },
    ],
    origin:
      "Hobbit began as an experiment in warmth — can an earth-toned palette feel modern without losing its handmade quality? Named after Tolkien's gentle adventurers, this theme proves that comfort and craft are not opposites. Every token feels touched by firelight.",
    purpose:
      "Ideal for storytelling platforms, indie games, and community-driven apps. Hobbit creates a space that feels inviting and lived-in — like a well-loved tavern where every visitor belongs.",
    tags: ["Storytelling", "Indie", "Community", "Fantasy", "Handcrafted"],
    quote:
      "Not all those who wander are lost. Some are just looking for the right color palette.",
    stats: { Components: 18, Variants: 3, Tokens: 25 },
  },
};
