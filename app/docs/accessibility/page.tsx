"use client";

import { Alert } from "@/packages/core";
import Link from "next/link";

export default function AccessibilityPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Foundations</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Accessibility</span>
      </div>

      <h1>Accessibility</h1>

      <p className="docs-description-line">
        Motion-first does not mean accessibility-last. At MARK UI, we believe 
        interfaces should be expressive for everyone, regardless of how they 
        navigate the web.
      </p>

      <h2>Philosophy</h2>
      <p className="docs-body-text">
        Accessibility is not a checklist we complete at the end; it is a constraint 
        we design with from the start. We aim for WCAG 2.2 AA compliance across all 
        components, ensuring that high-motion themes never compromise the usability 
        of the underlying interface.
      </p>

      <h2>Reduced Motion</h2>
      <p className="docs-body-text">
        We respect the <code>prefers-reduced-motion</code> media query globally. 
        When a user has this enabled at the OS level:
      </p>
      <ul className="docs-body-text">
        <li>All CSS transitions are set to <code>0.01ms</code>.</li>
        <li>Framer Motion animations are disabled.</li>
        <li>Theme-specific "Fun" animations (easter eggs) are completely stripped.</li>
        <li>Layout shifts caused by animation entry/exit are eliminated.</li>
      </ul>

      <Alert variant="info" title="Testing Reduced Motion" isDismissible={false}>
        You can test this in Chrome DevTools by opening the Command Menu (⌘⇧P), 
        typing "Rendering", and selecting "Emulate CSS prefers-reduced-motion: reduce".
      </Alert>

      <h2>Keyboard Navigation</h2>
      <p className="docs-body-text">
        Every interactive component in MARK UI is reachable and operable via keyboard. 
        We use standard HTML elements where possible and apply robust event handling where custom 
        logic is required.
      </p>

      <div className="doc-table-wrapper">
        <table className="doc-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Keyboard Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Button</code>, <code>Toggle</code></td>
              <td><code>Enter</code> or <code>Space</code> to activate.</td>
            </tr>
            <tr>
              <td><code>Checkbox</code></td>
              <td><code>Space</code> to check/uncheck.</td>
            </tr>
            <tr>
              <td><code>Select</code></td>
              <td><code>ArrowDown</code> to open, <code>Arrow</code> keys to navigate, <code>Enter</code> to select.</td>
            </tr>
            <tr>
              <td><code>Modal</code>, <code>Drawer</code></td>
              <td><code>Esc</code> to close, focuses the first interactive element on open, traps focus within the container.</td>
            </tr>
            <tr>
              <td><code>Tooltip</code></td>
              <td>Opens on <code>Focus</code>, closes on <code>Blur</code> or <code>Esc</code>.</td>
            </tr>
            <tr>
              <td><code>Toast</code></td>
              <td>Announced via ARIA live regions automatically.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>ARIA & Semantics</h2>
      <p className="docs-body-text">
        We utilize ARIA attributes only when native HTML semantics are insufficient. 
        For example, our <code>Modal</code> uses <code>role="dialog"</code> and 
        <code>aria-modal="true"</code>, while <code>Alert</code> uses <code>role="alert"</code> 
        for immediate screen reader announcement.
      </p>

      <h2>Screen Readers</h2>
      <p className="docs-body-text">
        We test our components against VoiceOver (macOS), NVDA (Windows), and TalkBack (Android) 
        to ensure that labels, states (like <code>aria-checked</code> or <code>aria-expanded</code>), 
        and dynamic content are announced correctly.
      </p>

      <h2>Reporting Issues</h2>
      <p className="docs-body-text">
        If you find an accessibility barrier in any of our components, please report it 
        on our <a href="https://github.com/markui/core/issues" style={{ color: "var(--mark-accent-primary)", textDecoration: "underline" }}>GitHub Issues</a>. 
        We treat accessibility bugs as high-priority regressions.
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/typography" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Typography</div>
        </Link>
        
        <Link href="/docs/changelog" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Changelog</div>
        </Link>
      </div>
    </>
  );
}
