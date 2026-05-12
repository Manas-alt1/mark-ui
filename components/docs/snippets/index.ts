// ═══════════════════════════════════════════
// MARK UI — Snippet Generator Dispatcher
// ═══════════════════════════════════════════

import type { ThemeId, ComponentId, SnippetContext, SnippetGenerator } from './types'
import { getThemeDefinition } from './themeData'
import { getComponentDefinition } from './componentData'

import { generateSnippet as button } from './generators/button'
import { generateSnippet as input } from './generators/input'
import { generateSnippet as checkbox } from './generators/checkbox'
import { generateSnippet as toggle } from './generators/toggle'
import { generateSnippet as select } from './generators/select'
import { generateSnippet as card } from './generators/card'
import { generateSnippet as avatar } from './generators/avatar'
import { generateSnippet as badge } from './generators/badge'
import { generateSnippet as tag } from './generators/tag'
import { generateSnippet as alert } from './generators/alert'
import { generateSnippet as skeleton } from './generators/skeleton'
import { generateSnippet as spinner } from './generators/spinner'
import { generateSnippet as modal } from './generators/modal'
import { generateSnippet as drawer } from './generators/drawer'
import { generateSnippet as toast } from './generators/toast'
import { generateSnippet as container } from './generators/container'
import { generateSnippet as divider } from './generators/divider'
import { generateSnippet as tooltip } from './generators/tooltip'

const generators: Record<ComponentId, SnippetGenerator> = {
  button,
  input,
  checkbox,
  toggle,
  select,
  card,
  avatar,
  badge,
  tag,
  alert,
  skeleton,
  spinner,
  modal,
  drawer,
  toast,
  container,
  divider,
  tooltip,
}

/**
 * Generate a theme-aware code snippet for a component.
 *
 * Called at render time — pure function, microseconds to execute.
 * Returns a complete, copy-paste-ready TSX string.
 */
export function genSnippet(themeId: ThemeId, componentId: ComponentId): string {
  const theme = getThemeDefinition(themeId)
  const component = getComponentDefinition(componentId)
  const isFun = theme.collection === 'fun'
  const trigger = component.trigger
  const animDescription = isFun && trigger
    ? theme.animations[trigger] ?? null
    : null

  const ctx: SnippetContext = { theme, isFun, trigger, animDescription }
  return generators[componentId](ctx)
}

// Re-export everything consumers need
export type { ThemeId, ComponentId, SnippetContext } from './types'
export { THEMES, PROFESSIONAL_THEME_IDS, FUN_THEME_IDS, getThemeDefinition, isFunTheme } from './themeData'
export { COMPONENTS, COMPONENT_CATEGORIES, getComponentDefinition } from './componentData'
