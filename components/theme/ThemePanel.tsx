"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { themesByCollection, type Theme } from "./themes";
import { Drawer, Button } from "@markui/core";

function ThemeCard({
  theme,
  isActive,
  onSelect,
}: {
  theme: Theme;
  isActive: boolean;
  onSelect: () => void;
}) {
  if (theme.status !== 'live') {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 12px",
          opacity: 0.35,
          cursor: "not-allowed",
          background: "var(--mark-bg-surface)",
          border: "1px dashed",
          borderColor: "color-mix(in srgb, var(--mark-fg) 15%, transparent)",
          transition: "all var(--mark-duration-fast) var(--mark-ease-smooth)",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: theme.tokens.accentPrimary,
              border: "1px solid var(--mark-border)",
            }}
          />
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: theme.tokens.accentSecondary,
              border: "1px solid var(--mark-border)",
            }}
          />
        </div>
        <span style={{
          fontSize: 13,
          flex: 1,
          color: "var(--mark-fg)",
          fontFamily: "var(--mark-font-hand)",
        }}>
          {theme.name}
        </span>
        <span
          style={{
            fontSize: 10,
            padding: "2px 6px",
            background: "var(--mark-border)",
            color: "var(--mark-fg)",
            fontFamily: "var(--mark-font-hand)",
          }}
        >
          Soon
        </span>
      </div>
    );
  }

  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        width: "100%",
        textAlign: "left" as const,
        cursor: "pointer",
        background: isActive ? "var(--mark-accent-subtle)" : "var(--mark-bg-surface)",
        border: isActive ? "2px solid var(--mark-accent-primary)" : "2px solid transparent",
        boxShadow: isActive ? "3px 3px 0px 0px var(--mark-accent-primary)" : "none",
        borderRadius: "2px 4px 3px 5px / 5px 3px 4px 2px",
        transition: "all var(--mark-duration-fast) var(--mark-ease-smooth)",
        fontFamily: "var(--mark-font-hand)",
      }}
    >
      <div style={{ display: "flex", gap: 6 }}>
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: theme.tokens.accentPrimary,
            boxShadow: isActive
              ? `0 0 8px ${theme.tokens.accentPrimary}40`
              : "none",
          }}
        />
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: theme.tokens.accentSecondary,
          }}
        />
      </div>
      <span
        style={{
          fontSize: 14,
          fontWeight: 500,
          flex: 1,
          color: "var(--mark-fg)",
        }}
      >
        {theme.name}
      </span>
      {isActive && (
        <motion.span
          layoutId="active-theme-dot"
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--mark-accent-primary)",
          }}
        />
      )}
    </motion.button>
  );
}

export default function ThemePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme: activeTheme, setTheme } = useTheme();

  return (
    <>
      {/* ── Closed Tab ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={() => setIsOpen(true)}
            style={{
              position: "fixed",
              zIndex: 50,
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: 32,
              height: 96,
              background: "var(--mark-bg)",
              borderLeft: "2px solid var(--mark-fg)",
              borderTop: "2px solid var(--mark-fg)",
              borderBottom: "2px solid var(--mark-fg)",
              borderRight: "none",
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "-3px 0px 0px 0px var(--mark-accent-primary)",
              transition: `
                box-shadow var(--mark-duration-fast) var(--mark-ease-smooth),
                border-color var(--mark-duration-fast) var(--mark-ease-smooth)
              `,
            }}
            whileHover={{
              boxShadow: "-5px 0px 0px 0px var(--mark-accent-primary)",
            }}
          >
            <span
              style={{
                writingMode: "vertical-rl" as const,
                textOrientation: "mixed" as const,
                fontFamily: "var(--mark-font-display)",
                fontSize: 11,
                letterSpacing: 1,
                color: "var(--mark-fg)",
                opacity: 0.7,
              }}
            >
              Themes
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Drawer Panel ── */}
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        placement="right"
        size="sm"
        showBackdrop={false}
        closeOnBackdrop={true}
      >
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              flexShrink: 0,
              borderBottom: "2px dashed",
              borderColor: "color-mix(in srgb, var(--mark-fg) 20%, transparent)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h2
                style={{
                  fontFamily: "var(--mark-font-display)",
                  fontSize: 20,
                  color: "var(--mark-fg)",
                  textTransform: "uppercase" as const,
                  letterSpacing: 1,
                  margin: 0,
                }}
              >
                CONTROL PANEL
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                aria-label="Close theme panel"
              >
                ✕
              </Button>
            </div>
            <p
              style={{
                fontFamily: "var(--mark-font-code)",
                fontSize: 12,
                color: "var(--mark-accent-primary)",
                margin: "4px 0 0",
                transition: "color var(--mark-duration-normal) var(--mark-ease-smooth)",
              }}
            >
              THEME ENGINE V.1_BETA
            </p>
          </div>

          {/* Content */}
          <div style={{ padding: "16px 20px", flex: 1, overflowY: "auto" as const }}>
            {/* Professional */}
            <div style={{ marginBottom: 20 }}>
              <p
                style={{
                  fontFamily: "var(--mark-font-display)",
                  fontSize: 12,
                  textTransform: "uppercase" as const,
                  letterSpacing: 2,
                  color: "var(--mark-fg)",
                  opacity: 0.5,
                  marginBottom: 12,
                }}
              >
                💼 Professional
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {themesByCollection.professional.map((t) => (
                  <ThemeCard
                    key={t.id}
                    theme={t}
                    isActive={activeTheme === t.id}
                    onSelect={() => setTheme(t.id)}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: "var(--mark-border)",
                margin: "16px 0",
              }}
            />

            {/* Fun */}
            <div>
              <p
                style={{
                  fontFamily: "var(--mark-font-display)",
                  fontSize: 12,
                  textTransform: "uppercase" as const,
                  letterSpacing: 2,
                  color: "var(--mark-fg)",
                  opacity: 0.5,
                  marginBottom: 12,
                }}
              >
                🎮 Fun
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {themesByCollection.fun.map((t) => (
                  <ThemeCard
                    key={t.id}
                    theme={t}
                    isActive={activeTheme === t.id}
                    onSelect={() => setTheme(t.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
