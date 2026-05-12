import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme, isFun, trigger, animDescription } = ctx

  const animImport = isFun
    ? `\nimport { useFunAnimation } from '@markui/core/animations'`
    : ''
  const animHook = isFun
    ? `\n  const { triggerAnimation } = useFunAnimation()`
    : ''
  const animCallback = isFun && trigger
    ? `\n    triggerAnimation({ trigger: checked ? '${trigger}' : 'toggle-off' })`
    : ''
  const animComment = isFun && animDescription
    ? `\n// Animation trigger: '${trigger}' → ${animDescription}`
    : ''

  return `'use client'

import { useState } from 'react'
import { Toggle } from '@markui/core'${animImport}
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}${animComment}

export default function ToggleExample() {
  const [enabled, setEnabled] = useState(false)${animHook}

  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--mark-space-4)',
    }}>
      {/* Controlled toggle */}
      <Toggle
        checked={enabled}
        onChange={(checked) => {
          setEnabled(checked)${animCallback}
        }}
        label="Enable notifications"
      />

      {/* With description */}
      <Toggle
        label="Dark mode"
        description="Switch between light and dark appearance"
        defaultChecked
      />

      {/* Small size */}
      <Toggle
        label="Compact mode"
        size="sm"
      />

      {/* Large size */}
      <Toggle
        label="Auto-save"
        description="Automatically save changes every 30 seconds"
        size="lg"
      />

      {/* Disabled */}
      <Toggle
        label="Beta features"
        description="Not available in your plan"
        isDisabled
      />
    </div>
  )
}`
}
