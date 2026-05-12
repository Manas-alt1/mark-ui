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
    ? `\n    triggerAnimation({ trigger: checked ? '${trigger}' : 'uncheck' })`
    : ''
  const animComment = isFun && animDescription
    ? `\n// Animation trigger: '${trigger}' → ${animDescription}`
    : ''

  return `'use client'

import { useState } from 'react'
import { Checkbox } from '@markui/core'${animImport}
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}${animComment}

export default function CheckboxExample() {
  const [accepted, setAccepted] = useState(false)${animHook}

  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--mark-space-4)',
    }}>
      {/* Controlled checkbox with label */}
      <Checkbox
        checked={accepted}
        onChange={(checked) => {
          setAccepted(checked)${animCallback}
        }}
        label="I accept the terms and conditions"
      />

      {/* With description */}
      <Checkbox
        label="Email notifications"
        description="Receive updates about new features and releases"
      />

      {/* Disabled state */}
      <Checkbox
        label="Admin access"
        description="Only available for team owners"
        isDisabled
      />

      {/* Small size */}
      <Checkbox
        label="Remember me"
        size="sm"
      />

      {/* Large size */}
      <Checkbox
        label="Enable dark mode"
        size="lg"
        defaultChecked
      />
    </div>
  )
}`
}
