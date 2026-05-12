"use client";

import React, { useState, useCallback, useMemo } from "react";
import type { ThemeId, ComponentId } from "./snippets/types";
import { getThemeDefinition, isFunTheme } from "./snippets/themeData";
import { getComponentDefinition } from "./snippets/componentData";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Clipboard fallback for Safari
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback for older Safari
  return new Promise((resolve) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    resolve();
  });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Lightweight syntax highlighting (React elements)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const KEYWORDS = new Set([
  'import', 'export', 'default', 'function', 'const', 'let', 'var',
  'return', 'from', 'if', 'else', 'true', 'false', 'null', 'undefined',
  'new', 'typeof', 'void', 'async', 'await', 'useState', 'style',
]);

function tokenizeLine(line: string): React.ReactNode[] {
  // Full-line comments
  const trimmed = line.trimStart();
  if (trimmed.startsWith('//')) {
    return [<span key="c" className="token-comment">{line}</span>];
  }

  const tokens: React.ReactNode[] = [];
  // Regex to split: strings, JSX tags, keywords, attribute patterns, or plain text
  const pattern = /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`|<\/?[\w.]+|\/?>|\b\w+\b|[^'"`<>\w]+)/g;
  let match: RegExpExecArray | null;
  let idx = 0;

  while ((match = pattern.exec(line)) !== null) {
    const token = match[0];
    const key = idx++;

    // Strings
    if (
      (token.startsWith("'") && token.endsWith("'")) ||
      (token.startsWith('"') && token.endsWith('"')) ||
      (token.startsWith('`') && token.endsWith('`'))
    ) {
      tokens.push(<span key={key} className="token-string">{token}</span>);
      continue;
    }

    // JSX opening/closing tags: <Component, </div
    if (token.startsWith('<')) {
      const tagChar = token.startsWith('</') ? '</' : '<';
      const tagName = token.slice(tagChar.length);
      tokens.push(
        <span key={`${key}p`} className="token-punctuation">{tagChar}</span>
      );
      if (tagName) {
        tokens.push(
          <span key={`${key}t`} className="token-tag">{tagName}</span>
        );
      }
      continue;
    }

    // Closing JSX brackets
    if (token === '>' || token === '/>') {
      tokens.push(<span key={key} className="token-punctuation">{token}</span>);
      continue;
    }

    // Keywords
    if (KEYWORDS.has(token)) {
      tokens.push(<span key={key} className="token-keyword">{token}</span>);
      continue;
    }

    // Check if this word is followed by = (attribute pattern)
    // Look ahead in the remaining string
    const remaining = line.slice(match.index + token.length);
    if (/^\w+$/.test(token) && remaining.startsWith('=')) {
      tokens.push(<span key={key} className="token-attr">{token}</span>);
      continue;
    }

    // Plain text
    tokens.push(<React.Fragment key={key}>{token}</React.Fragment>);
  }

  return tokens;
}

function HighlightedCode({ code }: { code: string }) {
  const lines = useMemo(() => code.split('\n'), [code]);

  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && '\n'}
          {tokenizeLine(line)}
        </React.Fragment>
      ))}
    </>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SnippetDisplay Component
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

interface SnippetDisplayProps {
  themeId: ThemeId;
  componentId: ComponentId;
  code: string;
}

export default function SnippetDisplay({
  themeId,
  componentId,
  code,
}: SnippetDisplayProps) {
  const [copied, setCopied] = useState(false);

  const theme = getThemeDefinition(themeId);
  const component = getComponentDefinition(componentId);
  const isFun = isFunTheme(themeId);
  const trigger = component.trigger;
  const animDescription =
    isFun && trigger ? (theme.animations[trigger] ?? null) : null;

  const filename = `${componentId}-${themeId}.example.tsx`;

  const handleCopy = useCallback(() => {
    copyToClipboard(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, [code]);

  return (
    <div className="snippet-display">
      {/* Header: filename + badge + copy */}
      <div className="snippet-display-header">
        <div className="snippet-display-left">
          <span className="snippet-filename">{filename}</span>
          <span
            className="snippet-badge"
            style={{
              borderColor: theme.tokens.accentPrimary,
            }}
          >
            <span
              className="snippet-badge-dot"
              style={{ backgroundColor: theme.tokens.accentPrimary }}
            />
            {theme.name}
          </span>
        </div>
        <button
          className="snippet-copy-btn"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>

      {/* Code block with syntax highlighting */}
      <div className="snippet-code-block">
        <pre>
          <code>
            <HighlightedCode code={code} />
          </code>
        </pre>
      </div>

      {/* Animation callout (fun themes with triggers only) */}
      {animDescription && (
        <div className="snippet-anim-callout">
          <span className="snippet-anim-trigger">{trigger}</span>
          <span className="snippet-anim-desc">{animDescription}</span>
        </div>
      )}
    </div>
  );
}
