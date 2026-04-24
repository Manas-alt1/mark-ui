import React from 'react'

interface AccessibilitySectionProps {
  features: Array<{
    title: string
    description: string
  }>
}

export default function AccessibilitySection({ features }: AccessibilitySectionProps) {
  return (
    <ul className="docs-body-text" style={{ paddingLeft: "24px", marginBottom: "48px" }}>
      {features.map((f, i) => (
        <li key={i} style={{ marginBottom: "8px" }}>
          <strong style={{ color: "var(--mark-accent-primary)" }}>{f.title}:</strong> {f.description}
        </li>
      ))}
    </ul>
  )
}
