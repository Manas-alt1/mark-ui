"use client";

import ComponentDocTemplate from "@/components/docs/ComponentDocTemplate";
import { Skeleton } from "@markui/core";

export default function SkeletonDocPage() {
  return (
    <ComponentDocTemplate
      name="Skeleton"
      category="Feedback"
      description="Loading placeholder that mimics the shape of incoming content. Reduces perceived load time by showing structure before data."
    >
      {/* VARIANTS */}
      <h3 id="variants" className="doc-section-label">VARIANTS</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 48, alignItems: "flex-start" }}>
        
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ marginBottom: 12, fontSize: 13, color: "var(--mark-fg)", opacity: 0.5 }}>Text (1/3/5 lines)</div>
          <div style={{ marginBottom: 12 }}><Skeleton variant="text" lines={1} /></div>
          <div style={{ marginBottom: 12 }}><Skeleton variant="text" lines={3} /></div>
        </div>

        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ marginBottom: 12, fontSize: 13, color: "var(--mark-fg)", opacity: 0.5 }}>Circle & Rectangle</div>
          <div style={{ display: "flex", gap: 16 }}>
            <Skeleton variant="circle" width={60} height={60} />
            <Skeleton variant="rectangle" width={100} height={60} />
            <Skeleton variant="rectangle" width={100} height={60} animation="none" />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 250 }}>
          <div style={{ marginBottom: 12, fontSize: 13, color: "var(--mark-fg)", opacity: 0.5 }}>Card Layout Variant (Composition)</div>
          <div style={{ border: "1px solid var(--mark-border)", padding: 16, borderRadius: "var(--mark-radius-lg)", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Skeleton variant="circle" width={40} height={40} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <Skeleton variant="text" lines={1} width="60%" />
                <Skeleton variant="text" lines={1} width="40%" />
              </div>
            </div>
            <Skeleton variant="rectangle" height={100} />
          </div>
        </div>

      </div>

      {/* USAGE */}
      <h3 id="usage" className="doc-section-label">USAGE GUIDELINES</h3>
      <div className="usage-columns">
        <div className="usage-col usage-do">
          <h4>Do</h4>
          <ul className="usage-list">
            <li>Match the Skeleton shape to the content it is replacing as closely as possible.</li>
            <li>Use the card variant to replace entire Card components while loading.</li>
            <li>Show Skeletons for a maximum of 3 seconds before showing an error state.</li>
          </ul>
        </div>
        <div className="usage-col usage-dont">
          <h4>Don&apos;t</h4>
          <ul className="usage-list">
            <li>Don&apos;t use Skeleton for content that loads in under 300ms — it flashes unnecessarily.</li>
            <li>Don&apos;t animate Skeletons indefinitely when loading has actually failed.</li>
            <li>Don&apos;t mix Skeleton placeholders with real loaded content in the same list.</li>
          </ul>
        </div>
      </div>

      {/* ACCESSIBILITY */}
      <h3 id="accessibility" className="doc-section-label">ACCESSIBILITY</h3>
      <ul style={{ color: "var(--mark-fg)", opacity: 0.8, lineHeight: 1.7, fontSize: 15, marginBottom: 48 }}>
        <li><strong>ARIA:</strong> <code>aria-hidden="true"</code> on Skeleton — it is purely decorative.</li>
        <li><strong>Live region:</strong> announce content loaded on the parent container, not the Skeleton.</li>
        <li><strong>Reduced motion:</strong> shimmer animation disabled, static placeholder shown.</li>
      </ul>

      {/* PROPS */}
      <h3 id="props" className="doc-section-label">PROPS</h3>
      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>variant</code></td><td><code>'text'|'circle'|'rectangle'</code></td><td><code>'text'</code></td><td>Shape variant</td></tr>
            <tr><td><code>width</code></td><td><code>string|number</code></td><td>—</td><td>Custom width</td></tr>
            <tr><td><code>height</code></td><td><code>string|number</code></td><td>—</td><td>Custom height</td></tr>
            <tr><td><code>lines</code></td><td><code>number</code></td><td><code>3</code></td><td>Number of text lines</td></tr>
            <tr><td><code>animation</code></td><td><code>'pulse'|'wave'|'none'</code></td><td><code>'pulse'</code></td><td>Shimmer animation</td></tr>
            <tr><td><code>className</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr>
          </tbody>
        </table>
      </div>

      {/* IMPORT */}
      <h3 id="import" className="doc-section-label">IMPORT</h3>
      <div className="doc-code-block" style={{ marginBottom: 0 }}>
        <pre><code>import {"{"} Skeleton {"}"} from '@markui/core'</code></pre>
      </div>

    </ComponentDocTemplate>
  );
}
