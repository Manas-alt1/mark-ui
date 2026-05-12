"use client";

import CodeBlock from "@/components/docs/blocks/CodeBlock";
import { Alert } from "@markui/core";
import Link from "next/link";



export default function InstallationPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Getting Started</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Installation</span>
      </div>

      <h1>Installation</h1>

      <p className="docs-description-line">
        Get up and running with Mark UI in a few minutes.
      </p>

      <h2>Install the package</h2>
      <CodeBlock code="npm install @markui/core" />

      <h2>Wrap your app</h2>
      <p className="docs-body-text">
        Add <code>ThemeProvider</code> to your root layout.
      </p>
      <CodeBlock code={`import { ThemeProvider } from '@markui/core'

export default function RootLayout({ children }) {
  return (
    <ThemeProvider defaultTheme="monochrome">
      {children}
    </ThemeProvider>
  )
}`} />

      <h2>Import the styles</h2>
      <CodeBlock code="import '@markui/core/styles.css'" />

      <h2>Use your first component</h2>
      <CodeBlock code={`import { Button } from '@markui/core'

export default function Page() {
  return (
    <Button variant="primary" size="md">
      Leave a mark
    </Button>
  )
}`} />

      <div style={{ marginTop: 48 }}>
        <Alert variant="success" title="Ready to build" isDismissible={false}>
          That is it. You are ready to build. The default Monochrome theme is applied
          automatically. No configuration needed.
        </Alert>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Introduction</div>
        </Link>
        
        <Link href="/docs/server-components" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Server Components</div>
        </Link>
      </div>
    </>
  );
}
