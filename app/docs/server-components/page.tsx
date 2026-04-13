"use client";

import { Alert } from "@/packages/core";
import Link from "next/link";
import { useState } from "react";

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="doc-code-block">
      <button className="doc-code-copy" onClick={handleCopy}>
        {copied ? "Copied" : "Copy"}
      </button>
      <pre>{code}</pre>
    </div>
  );
}

export default function ServerComponentsPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span>Getting Started</span>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Server Components</span>
      </div>

      <h1>Server Components</h1>

      <p className="docs-description-line">
        How to use Mark UI safely within the Next.js App Router and React Server Components (RSC).
      </p>

      <h2>Why Client Components?</h2>
      <p className="docs-body-text">
        All Mark UI components are marked with the <code>"use client"</code> directive. 
        This is because they rely heavily on <strong>Framer Motion</strong> for animations, 
        <strong>React Context</strong> for theming, and various DOM APIs for interactivity 
        (like portals for Modals and Toasts). 
        These features are not available in Server Components.
      </p>

      <Alert variant="info" title="Important" isDismissible={false}>
        You can still use Mark UI in a Next.js project that uses Server Components, 
        but you must be mindful of where the boundary between server and client lies.
      </Alert>

      <h2>Usage Strategy</h2>
      <p className="docs-body-text">
        The best way to use Mark UI is to keep your Server Components as the outer "shell" 
        for data fetching and SEO, while using Mark UI components as the "inner" interactive layers.
      </p>

      <h3 style={{ color: "var(--mark-error, #ef4444)" }}>The Wrong Way</h3>
      <p className="docs-body-text">
        Importing a Mark UI component directly into a Server Component (like <code>page.tsx</code>) 
        without a client boundary will often work because the components themselves have <code>"use client"</code>, 
        but you won't be able to pass non-serializable props (like functions) from the server.
      </p>
      <CodeBlock code={`// app/page.tsx (Server Component)
import { Button } from '@markui/core'

export default function Page() {
  return (
    // ❌ Error: Event handlers cannot be passed to Client Component props
    <Button onClick={() => console.log("Clicked")}>
      Click me
    </Button>
  )
}`} />

      <h3 style={{ color: "var(--mark-success, #22c55e)" }}>The Right Way</h3>
      <p className="docs-body-text">
        Create a dedicated client component wrapper or move the interactivity into its own client-side file.
      </p>
      <CodeBlock code={`// components/MyInteractiveButton.tsx
"use client"

import { Button } from '@markui/core'

export function MyInteractiveButton() {
  return (
    <Button onClick={() => console.log("Clicked")}>
      Leave a mark
    </Button>
  )
}

// app/page.tsx (Server Component)
import { MyInteractiveButton } from '@/components/MyInteractiveButton'

export default function Page() {
  return (
    <main>
      <h1>My Page</h1>
      <MyInteractiveButton />
    </main>
  )
}`} />

      <h2>Performance & Lazy Loading</h2>
      <p className="docs-body-text">
        Since Mark UI components and Framer Motion add to your client-side bundle, 
        consider using <code>Suspense</code> or dynamic imports for heavy components 
        like Modals or complex Fun themes.
      </p>
      <CodeBlock code={`import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('@markui/core').then(mod => mod.Modal), {
  ssr: false,
})`} />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/installation" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Installation</div>
        </Link>
        
        <Link href="/docs/typography" style={{ textDecoration: "none", color: "var(--mark-fg)", textAlign: "right" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>NEXT →</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Typography</div>
        </Link>
      </div>
    </>
  );
}
