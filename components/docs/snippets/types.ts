// ═══════════════════════════════════════════
// MARK UI — Snippet Generator Types
// ═══════════════════════════════════════════

export type ThemeId =
  // Professional
  | 'monochrome'
  | 'arctic'
  | 'obsidian'
  | 'ivory'
  | 'slate'
  | 'sage'
  | 'carbon'
  // Fun
  | 'cyberpunk'
  | 'shinigami'
  | 'titan'
  | 'nebula'
  | 'matrixx'
  | 'gotham'
  | 'akira'
  | 'hobbit'

export type ThemeCollection = 'professional' | 'fun'

export type ComponentId =
  | 'button'
  | 'input'
  | 'checkbox'
  | 'toggle'
  | 'select'
  | 'card'
  | 'avatar'
  | 'badge'
  | 'tag'
  | 'alert'
  | 'skeleton'
  | 'spinner'
  | 'modal'
  | 'drawer'
  | 'toast'
  | 'container'
  | 'divider'
  | 'tooltip'

export type ComponentCategory = 'inputs' | 'display' | 'feedback' | 'overlay' | 'layout'

export type AnimationTrigger =
  | 'click'
  | 'focus'
  | 'check'
  | 'uncheck'
  | 'toggle-on'
  | 'toggle-off'
  | 'mount'
  | 'dismiss'

export interface ThemeTokens {
  accentPrimary: string
  accentSecondary: string
  accentGlow: string
  accentSubtle: string
}

/** Animation descriptions keyed by trigger name */
export type AnimationMap = Partial<Record<AnimationTrigger, string>>

export interface ThemeDefinition {
  id: ThemeId
  name: string
  collection: ThemeCollection
  personality: string
  tokens: ThemeTokens
  animations: AnimationMap
}

export interface ComponentDefinition {
  id: ComponentId
  name: string
  category: ComponentCategory
  /** Primary animation trigger, null if none */
  trigger: AnimationTrigger | null
}

export interface SnippetContext {
  theme: ThemeDefinition
  isFun: boolean
  trigger: AnimationTrigger | null
  animDescription: string | null
}

export type SnippetGenerator = (ctx: SnippetContext) => string
