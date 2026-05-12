// ═══════════════════════════════════════════
// MARK UI — Theme Definitions for Snippet Generator
// ═══════════════════════════════════════════

import type { ThemeId, ThemeDefinition } from './types'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PROFESSIONAL THEMES (no signature animations)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const monochrome: ThemeDefinition = {
  id: 'monochrome',
  name: 'Monochrome',
  collection: 'professional',
  personality: 'Sharp. Professional. Default.',
  tokens: {
    accentPrimary: '#FAFAFA',
    accentSecondary: '#0A0A0A',
    accentGlow: 'rgba(250, 250, 250, 0.15)',
    accentSubtle: 'rgba(250, 250, 250, 0.06)',
  },
  animations: {},
}

const arctic: ThemeDefinition = {
  id: 'arctic',
  name: 'Arctic',
  collection: 'professional',
  personality: 'Cool, corporate, precise.',
  tokens: {
    accentPrimary: '#2563EB',
    accentSecondary: '#64748B',
    accentGlow: 'rgba(37, 99, 235, 0.25)',
    accentSubtle: 'rgba(37, 99, 235, 0.08)',
  },
  animations: {},
}

const obsidian: ThemeDefinition = {
  id: 'obsidian',
  name: 'Obsidian',
  collection: 'professional',
  personality: 'Premium dark. Quietly powerful.',
  tokens: {
    accentPrimary: '#6366F1',
    accentSecondary: '#A78BFA',
    accentGlow: 'rgba(99, 102, 241, 0.3)',
    accentSubtle: 'rgba(99, 102, 241, 0.08)',
  },
  animations: {},
}

const ivory: ThemeDefinition = {
  id: 'ivory',
  name: 'Ivory',
  collection: 'professional',
  personality: 'Warm, minimal, refined.',
  tokens: {
    accentPrimary: '#D97706',
    accentSecondary: '#78716C',
    accentGlow: 'rgba(217, 119, 6, 0.28)',
    accentSubtle: 'rgba(217, 119, 6, 0.07)',
  },
  animations: {},
}

const slate: ThemeDefinition = {
  id: 'slate',
  name: 'Slate',
  collection: 'professional',
  personality: 'Serious, structured, reliable.',
  tokens: {
    accentPrimary: '#0EA5E9',
    accentSecondary: '#334155',
    accentGlow: 'rgba(14, 165, 233, 0.3)',
    accentSubtle: 'rgba(14, 165, 233, 0.08)',
  },
  animations: {},
}

const sage: ThemeDefinition = {
  id: 'sage',
  name: 'Sage',
  collection: 'professional',
  personality: 'Calm productivity. Clear focus.',
  tokens: {
    accentPrimary: '#4D7C6F',
    accentSecondary: '#F59E0B',
    accentGlow: 'rgba(77, 124, 111, 0.28)',
    accentSubtle: 'rgba(77, 124, 111, 0.07)',
  },
  animations: {},
}

const carbon: ThemeDefinition = {
  id: 'carbon',
  name: 'Carbon',
  collection: 'professional',
  personality: 'Industrial bold. High contrast.',
  tokens: {
    accentPrimary: '#EF4444',
    accentSecondary: '#E5E7EB',
    accentGlow: 'rgba(239, 68, 68, 0.3)',
    accentSubtle: 'rgba(239, 68, 68, 0.08)',
  },
  animations: {},
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FUN THEMES (signature animations via useFunAnimation)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const cyberpunk: ThemeDefinition = {
  id: 'cyberpunk',
  name: 'Cyberpunk',
  collection: 'fun',
  personality: 'Electric. Wild. Unforgettable.',
  tokens: {
    accentPrimary: '#FF2D9B',
    accentSecondary: '#00F5FF',
    accentGlow: 'rgba(255, 45, 155, 0.4)',
    accentSubtle: 'rgba(255, 45, 155, 0.08)',
  },
  animations: {
    'click': 'Neon Gunshot — muzzle flash starburst + bullet tracer + shell casing + smoke wisps',
    'focus': 'Matrix Rain Border — katakana/digit chars rain along input border',
    'check': 'System Hack Glitch — chromatic aberration (red+cyan) + scan line sweep + pixel scatter',
    'toggle-on': 'High Voltage Arc — track glow pulse + 12 spark particles (pink/cyan/white)',
    'mount': 'Neon Sign Flicker — brightness flicker sequence [4→1→2→1→1.5→1]',
    'dismiss': 'CRT Shutdown — scan lines overlay + vertical collapse to single line',
  },
}

const matrixx: ThemeDefinition = {
  id: 'matrixx',
  name: 'Matrixx',
  collection: 'fun',
  personality: 'Terminal green. Digital reality.',
  tokens: {
    accentPrimary: '#00FF41',
    accentSecondary: '#003B00',
    accentGlow: 'rgba(0, 255, 65, 0.35)',
    accentSubtle: 'rgba(0, 255, 65, 0.07)',
  },
  animations: {
    'click': 'System Override — green glitch flash + scan line + code char explosion (ﾊﾐﾋｳ...)',
    'focus': 'Matrix Rain — SVG border draw + falling chars along edge',
    'check': 'Access Granted — border flash ×3 + scan line + \'ACCESS GRANTED\' text draw',
    'toggle-on': 'Reality Rewrite — binary stream across track + glow pulse + matrix rain burst',
    'mount': 'Terminal Output — brightness reveal with horizontal scale from left origin',
    'dismiss': 'System Delete — grid dissolve of matrix characters',
  },
}

const gotham: ThemeDefinition = {
  id: 'gotham',
  name: 'Gotham',
  collection: 'fun',
  personality: 'Dark knight energy. Zero compromise.',
  tokens: {
    accentPrimary: '#FFD700',
    accentSecondary: '#1C1C1C',
    accentGlow: 'rgba(255, 215, 0, 0.3)',
    accentSubtle: 'rgba(255, 215, 0, 0.07)',
  },
  animations: {
    'click': 'Batarang Throw — bat spotlight + spinning batarang trajectory + radial impact lines',
    'focus': 'Bat Signal — golden spotlight sweeps across input border',
    'check': 'Bat Symbol Brand — golden spotlight + descending bat SVG + diamond sparkle ring',
    'toggle-on': 'Grapple Gun Fire — wire extends/retracts + vignette + grapple clamp marks',
    'mount': 'Night Descent — drop from darkness + brightness reveal + gold glow pulse',
    'dismiss': 'Into The Shadows — 4-directional vignette closing + bat silhouette center',
  },
}

const shinigami: ThemeDefinition = {
  id: 'shinigami',
  name: 'Shinigami',
  collection: 'fun',
  personality: 'Dark gold. Deadly elegant.',
  tokens: {
    accentPrimary: '#C9A84C',
    accentSecondary: '#1A1A2E',
    accentGlow: 'rgba(201, 168, 76, 0.3)',
    accentSubtle: 'rgba(201, 168, 76, 0.07)',
  },
  animations: {
    'click': 'Death Note Write — ink pen traces across component + kanji appear',
    'mount': 'Kira Reveal — dramatic brightness pulse + golden ink bloom',
    'focus': 'Ryuk Shadow — dark vignette blooms from corners on focus',
    'check': 'Shinigami Eyes — crimson glow appears over component + kanji 死 fades in',
  },
}

const titan: ThemeDefinition = {
  id: 'titan',
  name: 'Titan',
  collection: 'fun',
  personality: 'Military grit. Earned strength.',
  tokens: {
    accentPrimary: '#8B6914',
    accentSecondary: '#2D5A3D',
    accentGlow: 'rgba(139, 105, 20, 0.3)',
    accentSubtle: 'rgba(139, 105, 20, 0.07)',
  },
  animations: {
    'click': 'Thunder Strike — lightning bolt SVG slams down + shockwave ring',
    'toggle-on': 'ODM Gear Fire — cable shoots across track + anchor clamp',
    'mount': 'Wall Breach — component cracks open from center + dust particles',
  },
}

const nebula: ThemeDefinition = {
  id: 'nebula',
  name: 'Nebula',
  collection: 'fun',
  personality: 'Cosmic scale. Infinite depth.',
  tokens: {
    accentPrimary: '#9B59B6',
    accentSecondary: '#E74C3C',
    accentGlow: 'rgba(155, 89, 182, 0.35)',
    accentSubtle: 'rgba(155, 89, 182, 0.08)',
  },
  animations: {
    'click': 'Star Burst — radial particle explosion in purple/crimson',
    'mount': 'Cosmic Pulse — expanding ring pulse + star twinkle scatter',
    'focus': 'Nebula Bloom — purple gas cloud expands from input corners',
  },
}

const akira: ThemeDefinition = {
  id: 'akira',
  name: 'Akira',
  collection: 'fun',
  personality: 'Neo Tokyo. Speed and chaos.',
  tokens: {
    accentPrimary: '#FF4500',
    accentSecondary: '#0A0AFF',
    accentGlow: 'rgba(255, 69, 0, 0.4)',
    accentSubtle: 'rgba(255, 69, 0, 0.08)',
  },
  animations: {
    'click': 'Speed Burst — radial speed lines + afterimage trail',
    'toggle-on': 'Energy Wave — blue/red energy pulse sweeps across track',
    'mount': 'Tetsuo Awakening — component tears open from center with red energy',
  },
}

const hobbit: ThemeDefinition = {
  id: 'hobbit',
  name: 'Hobbit',
  collection: 'fun',
  personality: 'Earthy warmth. An unexpected journey.',
  tokens: {
    accentPrimary: '#8B7355',
    accentSecondary: '#4A7C59',
    accentGlow: 'rgba(139, 115, 85, 0.3)',
    accentSubtle: 'rgba(139, 115, 85, 0.07)',
  },
  animations: {
    'click': 'Nature Bloom — flower petals burst from click origin',
    'mount': 'Shire Sunrise — warm golden light sweeps left to right',
    'check': 'Ring Glow — golden ring ripple expands from checkbox center',
  },
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXPORTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const THEMES: Record<ThemeId, ThemeDefinition> = {
  monochrome,
  arctic,
  obsidian,
  ivory,
  slate,
  sage,
  carbon,
  cyberpunk,
  matrixx,
  gotham,
  shinigami,
  titan,
  nebula,
  akira,
  hobbit,
}

export const PROFESSIONAL_THEME_IDS: ThemeId[] = [
  'monochrome', 'arctic', 'obsidian', 'ivory', 'slate', 'sage', 'carbon',
]

export const FUN_THEME_IDS: ThemeId[] = [
  'cyberpunk', 'shinigami', 'titan', 'nebula', 'matrixx', 'gotham', 'akira', 'hobbit',
]

export function getThemeDefinition(id: ThemeId): ThemeDefinition {
  return THEMES[id]
}

export function isFunTheme(id: ThemeId): boolean {
  return THEMES[id].collection === 'fun'
}
