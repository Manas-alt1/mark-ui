"use client";

import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import SnippetDisplay from "./SnippetDisplay";
import {
  genSnippet,
  THEMES,
  PROFESSIONAL_THEME_IDS,
  FUN_THEME_IDS,
  COMPONENT_CATEGORIES,
} from "./snippets";
import type { ThemeId, ComponentId } from "./snippets/types";

interface ThemeSnippetViewerProps {
  /** Lock the component — useful when embedding on a specific component doc page */
  componentId?: ComponentId;
  /** If true, hides the component selector (used when embedded on a component page) */
  hideComponentSelector?: boolean;
}

export default function ThemeSnippetViewer({
  componentId: lockedComponentId,
  hideComponentSelector = false,
}: ThemeSnippetViewerProps) {
  const { theme: siteTheme } = useTheme();

  const [activeTheme, setActiveTheme] = useState<ThemeId>(
    (siteTheme as ThemeId) || "cyberpunk"
  );
  const [activeComponent, setActiveComponent] = useState<ComponentId>(
    lockedComponentId || "button"
  );

  // Sync with site theme on mount and when it changes
  useEffect(() => {
    if (siteTheme) {
      setActiveTheme(siteTheme as ThemeId);
    }
  }, [siteTheme]);

  // If locked to a component, always use that
  useEffect(() => {
    if (lockedComponentId) {
      setActiveComponent(lockedComponentId);
    }
  }, [lockedComponentId]);

  // Generate snippet at render time — pure function, microseconds
  const code = useMemo(
    () => genSnippet(activeTheme, activeComponent),
    [activeTheme, activeComponent]
  );

  return (
    <div className="snippet-viewer">
      {/* Theme selector */}
      <div className="snippet-selector-section">
        <div className="snippet-selector-row">
          <span className="snippet-selector-label">PROFESSIONAL</span>
          <div className="snippet-pills">
            {PROFESSIONAL_THEME_IDS.map((id) => {
              const t = THEMES[id];
              return (
                <button
                  key={id}
                  className="snippet-pill"
                  data-active={activeTheme === id || undefined}
                  onClick={() => setActiveTheme(id)}
                  style={
                    activeTheme === id
                      ? {
                          borderColor: t.tokens.accentPrimary,
                          background: t.tokens.accentSubtle,
                        }
                      : undefined
                  }
                >
                  <span
                    className="snippet-pill-dot"
                    style={{ backgroundColor: t.tokens.accentPrimary }}
                  />
                  {t.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="snippet-selector-row">
          <span className="snippet-selector-label">FUN</span>
          <div className="snippet-pills">
            {FUN_THEME_IDS.map((id) => {
              const t = THEMES[id];
              return (
                <button
                  key={id}
                  className="snippet-pill"
                  data-active={activeTheme === id || undefined}
                  onClick={() => setActiveTheme(id)}
                  style={
                    activeTheme === id
                      ? {
                          borderColor: t.tokens.accentPrimary,
                          background: t.tokens.accentSubtle,
                        }
                      : undefined
                  }
                >
                  <span
                    className="snippet-pill-dot"
                    style={{ backgroundColor: t.tokens.accentPrimary }}
                  />
                  {t.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Component selector (hidden when embedded on a component page) */}
      {!hideComponentSelector && (
        <div className="snippet-selector-section">
          {COMPONENT_CATEGORIES.map((cat) => (
            <div key={cat.category} className="snippet-selector-row">
              <span className="snippet-selector-label">{cat.label}</span>
              <div className="snippet-pills">
                {cat.ids.map((id) => (
                  <button
                    key={id}
                    className="snippet-pill snippet-pill-component"
                    data-active={activeComponent === id || undefined}
                    onClick={() => setActiveComponent(id)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Snippet output */}
      <SnippetDisplay
        themeId={activeTheme}
        componentId={activeComponent}
        code={code}
      />
    </div>
  );
}
