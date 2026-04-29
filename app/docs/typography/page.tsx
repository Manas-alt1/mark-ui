"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

const typographyScale: Array<{
  label: string;
  variable: string;
  value: string;
  weight: CSSProperties["fontWeight"];
}> = [
  { label: "Display 7XL", variable: "--mark-text-7xl", value: "4.5rem", weight: "var(--mark-weight-extrabold)" },
  { label: "Display 6XL", variable: "--mark-text-6xl", value: "3.75rem", weight: "var(--mark-weight-extrabold)" },
  { label: "Display 5XL", variable: "--mark-text-5xl", value: "3rem", weight: "var(--mark-weight-bold)" },
  { label: "Heading 4XL", variable: "--mark-text-4xl", value: "2.25rem", weight: "var(--mark-weight-bold)" },
  { label: "Heading 3XL", variable: "--mark-text-3xl", value: "1.875rem", weight: "var(--mark-weight-bold)" },
  { label: "Heading 2XL", variable: "--mark-text-2xl", value: "1.5rem", weight: "var(--mark-weight-semibold)" },
  { label: "Title XL", variable: "--mark-text-xl", value: "1.25rem", weight: "var(--mark-weight-semibold)" },
  { label: "Title LG", variable: "--mark-text-lg", value: "1.125rem", weight: "var(--mark-weight-medium)" },
  { label: "Body MD", variable: "--mark-text-md", value: "1rem", weight: "var(--mark-weight-regular)" },
  { label: "Caption SM", variable: "--mark-text-sm", value: "0.875rem", weight: "var(--mark-weight-regular)" },
  { label: "Label XS", variable: "--mark-text-xs", value: "0.75rem", weight: "var(--mark-weight-medium)" },
];

export default function TypographyPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Foundations</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Typography</span>
      </div>

      <h1>Typography</h1>

      <p className="docs-description-line">
        The MARK UI type scale is designed for high-impact interfaces where hierarchy 
        is enforced through weight and scale, not just color.
      </p>

      <h2>Font Families</h2>
      <div style={{ display: "grid", gap: "24px", marginBottom: "64px" }}>
        <div style={{ padding: "24px", background: "var(--mark-bg-surface)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, marginBottom: "8px", fontFamily: "var(--mark-font-code)" }}>--mark-font-display</div>
          <div style={{ fontSize: "32px", fontFamily: "var(--mark-font-display)", fontWeight: 800 }}>Oxanium</div>
          <p className="docs-body-text" style={{ margin: "8px 0 0" }}>Used for headings, numbers, and brand elements.</p>
        </div>
        <div style={{ padding: "24px", background: "var(--mark-bg-surface)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, marginBottom: "8px", fontFamily: "var(--mark-font-code)" }}>--mark-font-body</div>
          <div style={{ fontSize: "32px", fontFamily: "var(--mark-font-body)", fontWeight: 600 }}>Clash Display</div>
          <p className="docs-body-text" style={{ margin: "8px 0 0" }}>Used for all body text, labels, and UI elements.</p>
        </div>
        <div style={{ padding: "24px", background: "var(--mark-bg-surface)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-lg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, marginBottom: "8px", fontFamily: "var(--mark-font-code)" }}>--mark-font-code</div>
          <div style={{ fontSize: "32px", fontFamily: "var(--mark-font-code)", fontWeight: 400 }}>JetBrains Mono</div>
          <p className="docs-body-text" style={{ margin: "8px 0 0" }}>Used for code snippets and technical data.</p>
        </div>
      </div>

      <h2>Type Scale</h2>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr>
              <th style={{ width: "60%" }}>Preview</th>
              <th>Variable</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {typographyScale.map((item) => (
              <tr key={item.variable}>
                <td>
                  <div style={{ 
                    fontSize: `var(${item.variable})`, 
                    fontWeight: item.weight,
                    fontFamily: item.variable.includes('7xl') || item.variable.includes('6xl') || item.variable.includes('5xl') ? 'var(--mark-font-display)' : 'var(--mark-font-body)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.label}
                  </div>
                </td>
                <td><code>{item.variable}</code></td>
                <td style={{ opacity: 0.5 }}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Font Weights</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px", marginBottom: "64px" }}>
        {[
          { label: "Regular", var: "--mark-weight-regular", val: "400" },
          { label: "Medium", var: "--mark-weight-medium", val: "500" },
          { label: "Semibold", var: "--mark-weight-semibold", val: "600" },
          { label: "Bold", var: "--mark-weight-bold", val: "700" },
          { label: "Extrabold", var: "--mark-weight-extrabold", val: "800" },
        ].map((w) => (
          <div key={w.var} style={{ padding: "20px", background: "var(--mark-bg-elevated)", border: "1px solid var(--mark-border)", borderRadius: "var(--mark-radius-md)" }}>
             <div style={{ fontWeight: w.val as CSSProperties["fontWeight"], fontSize: "20px", marginBottom: "8px" }}>{w.label}</div>
             <code>{w.var}</code>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/server-components" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Server Components</div>
        </Link>
        
        <Link href="/docs/accessibility" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Accessibility</div>
        </Link>
      </div>
    </>
  );
}
