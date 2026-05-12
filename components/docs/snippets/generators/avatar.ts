import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme, isFun, trigger, animDescription } = ctx

  const animImport = isFun
    ? `\nimport { useFunAnimation } from '@markui/core/animations'`
    : ''
  const animHook = isFun
    ? `\n  const { triggerAnimation } = useFunAnimation()`
    : ''
  const animProp = isFun && trigger
    ? `\n        onClick={() => triggerAnimation({ trigger: '${trigger}' })}`
    : ''
  const animComment = isFun && animDescription
    ? `\n// Animation trigger: '${trigger}' → ${animDescription}`
    : ''

  return `'use client'

import { Avatar } from '@markui/core'${animImport}
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}${animComment}

export default function AvatarExample() {${animHook}
  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--mark-space-4)',
      alignItems: 'center',
    }}>
      {/* Image avatar */}
      <Avatar
        src="https://i.pravatar.cc/150?img=12"
        alt="Jane Doe"
        size="md"${animProp}
      />

      {/* Initials fallback */}
      <Avatar
        initials="JD"
        size="md"
      />

      {/* With status indicator */}
      <Avatar
        src="https://i.pravatar.cc/150?img=5"
        alt="Online user"
        size="lg"
        status="online"
      />

      <Avatar
        initials="AW"
        size="lg"
        status="away"
      />

      <Avatar
        initials="BZ"
        size="md"
        status="busy"
      />

      {/* All sizes */}
      <Avatar initials="XS" size="xs" />
      <Avatar initials="SM" size="sm" />
      <Avatar initials="MD" size="md" />
      <Avatar initials="LG" size="lg" />
      <Avatar initials="XL" size="xl" />

      {/* Square shape */}
      <Avatar
        initials="SQ"
        size="md"
        shape="square"
      />
    </div>
  )
}`
}
