// ═══════════════════════════════════════════
// MARK UI — Component Definitions for Snippet Generator
// ═══════════════════════════════════════════

import type { ComponentId, ComponentDefinition, ComponentCategory } from './types'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT DEFINITIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const COMPONENTS: Record<ComponentId, ComponentDefinition> = {
  button:    { id: 'button',    name: 'Button',    category: 'inputs',   trigger: 'click' },
  input:     { id: 'input',     name: 'Input',     category: 'inputs',   trigger: 'focus' },
  checkbox:  { id: 'checkbox',  name: 'Checkbox',  category: 'inputs',   trigger: 'check' },
  toggle:    { id: 'toggle',    name: 'Toggle',    category: 'inputs',   trigger: 'toggle-on' },
  select:    { id: 'select',    name: 'Select',    category: 'inputs',   trigger: null },
  card:      { id: 'card',      name: 'Card',      category: 'display',  trigger: null },
  avatar:    { id: 'avatar',    name: 'Avatar',    category: 'display',  trigger: 'click' },
  badge:     { id: 'badge',     name: 'Badge',     category: 'display',  trigger: 'mount' },
  tag:       { id: 'tag',       name: 'Tag',       category: 'display',  trigger: 'dismiss' },
  alert:     { id: 'alert',     name: 'Alert',     category: 'feedback', trigger: 'dismiss' },
  skeleton:  { id: 'skeleton',  name: 'Skeleton',  category: 'feedback', trigger: null },
  spinner:   { id: 'spinner',   name: 'Spinner',   category: 'feedback', trigger: null },
  modal:     { id: 'modal',     name: 'Modal',     category: 'overlay',  trigger: null },
  drawer:    { id: 'drawer',    name: 'Drawer',    category: 'overlay',  trigger: null },
  toast:     { id: 'toast',     name: 'Toast',     category: 'overlay',  trigger: null },
  container: { id: 'container', name: 'Container', category: 'layout',   trigger: null },
  divider:   { id: 'divider',   name: 'Divider',   category: 'layout',   trigger: null },
  tooltip:   { id: 'tooltip',   name: 'Tooltip',   category: 'layout',   trigger: null },
}

export function getComponentDefinition(id: ComponentId): ComponentDefinition {
  return COMPONENTS[id]
}

// Grouped by category for the selector UI
export const COMPONENT_CATEGORIES: { category: ComponentCategory; label: string; ids: ComponentId[] }[] = [
  { category: 'inputs',   label: 'Inputs',   ids: ['button', 'input', 'checkbox', 'toggle', 'select'] },
  { category: 'display',  label: 'Display',  ids: ['card', 'avatar', 'badge', 'tag'] },
  { category: 'feedback', label: 'Feedback', ids: ['alert', 'skeleton', 'spinner'] },
  { category: 'overlay',  label: 'Overlay',  ids: ['modal', 'drawer', 'toast'] },
  { category: 'layout',   label: 'Layout',   ids: ['container', 'divider', 'tooltip'] },
]
