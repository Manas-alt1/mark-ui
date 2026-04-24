import React from 'react'

interface UsageGuidelinesProps {
  do: string[]
  dont: string[]
}

export default function UsageGuidelines({ do: doList, dont: dontList }: UsageGuidelinesProps) {
  return (
    <div className="usage-columns">
      <div className="usage-col usage-do">
        <h4>Do</h4>
        <ul className="usage-list docs-body-text">
          {doList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="usage-col usage-dont">
        <h4>Don&apos;t</h4>
        <ul className="usage-list docs-body-text">
          {dontList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
