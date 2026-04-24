import React from 'react'

export interface PropDefinition {
  prop: string
  type: string
  default?: string
  description: string
}

interface PropsTableProps {
  props: PropDefinition[]
}

export default function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="doc-table-wrapper">
      <table className="doc-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr key={p.prop}>
              <td><code>{p.prop}</code></td>
              <td><code>{p.type}</code></td>
              <td><code>{p.default || '—'}</code></td>
              <td>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
