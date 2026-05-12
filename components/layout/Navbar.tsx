"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/docs", label: "DOCS" },
  { href: "/components", label: "COMPONENTS" },
  { href: "/themes", label: "THEMES" },
  { href: "/about", label: "ABOUT" },
];

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* ── Animated hamburger icon (3-line → X) ── */
function HamburgerIcon({ open }: { open: boolean }) {
  const lineStyle: React.CSSProperties = {
    display: "block",
    width: "22px",
    height: "2.5px",
    backgroundColor: "var(--mark-fg)",
    borderRadius: "2px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    transformOrigin: "center",
  };

  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        gap: open ? 0 : "5px",
        alignItems: "center",
        justifyContent: "center",
        width: 22,
        height: 22,
        position: "relative",
      }}
    >
      <span
        style={{
          ...lineStyle,
          transform: open
            ? "translateY(1.25px) rotate(45deg)"
            : "none",
          position: open ? "absolute" : "relative",
        }}
      />
      <span
        style={{
          ...lineStyle,
          opacity: open ? 0 : 1,
          transform: open ? "scaleX(0)" : "scaleX(1)",
        }}
      />
      <span
        style={{
          ...lineStyle,
          transform: open
            ? "translateY(-1.25px) rotate(-45deg)"
            : "none",
          position: open ? "absolute" : "relative",
        }}
      />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: "72px",
          backgroundColor: scrolled ? "var(--mark-bg)" : "var(--mark-bg)",
          borderBottom: `3px solid var(--mark-fg)`,
          boxShadow: scrolled
            ? `0px 6px 0px 0px var(--mark-accent-primary)`
            : `0px 4px 0px 0px var(--mark-accent-primary)`,
          transition: `
            box-shadow var(--mark-duration-slow) var(--mark-ease-smooth),
            background-color var(--mark-duration-slow) var(--mark-ease-smooth)
          `,
        }}
      >
        {/* Logo — in sketchy bordered box */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <motion.div
            style={{
              fontFamily: "var(--mark-font-display)",
              fontSize: "24px",
              color: "var(--mark-fg)",
              border: "3px solid var(--mark-accent-primary)",
              padding: "4px 16px",
              transform: "rotate(-1deg)",
              background: "var(--mark-bg)",
              transition: `
                border-color var(--mark-duration-normal) var(--mark-ease-smooth),
                color var(--mark-duration-normal) var(--mark-ease-smooth)
              `,
            }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            MARK UI
          </motion.div>
        </Link>

        {/* Desktop Links — hidden on mobile via CSS class */}
        <div className="nav-desktop-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--mark-font-hand)",
                  fontSize: "18px",
                  color: isActive
                    ? "var(--mark-accent-primary)"
                    : "var(--mark-fg)",
                  textDecoration: isActive ? "underline" : "none",
                  textDecorationStyle: isActive ? "wavy" as const : undefined,
                  textUnderlineOffset: "4px",
                  textDecorationColor: isActive
                    ? "var(--mark-accent-primary)"
                    : undefined,
                  opacity: isActive ? 1 : 0.7,
                  transition: `all var(--mark-duration-fast) var(--mark-ease-smooth)`,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--mark-accent-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.opacity = "0.7";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--mark-fg)";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side — GitHub + Mobile hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* GitHub */}
          <a
            href="https://github.com/Manas-bhavsar/mark-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--mark-fg)",
              opacity: 0.6,
              transition: `opacity var(--mark-duration-fast) var(--mark-ease-smooth)`,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.6")
            }
          >
            <GitHubIcon />
          </a>

          {/* Mobile hamburger — visible only below md */}
          <button
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="nav-mobile-toggle"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 49, // just below nav (50)
              background: "var(--mark-bg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              paddingTop: "72px", // account for navbar height
            }}
          >
            {/* Decorative top accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.15, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: "absolute",
                top: "72px",
                left: "24px",
                right: "24px",
                height: "3px",
                background: "var(--mark-accent-primary)",
                transformOrigin: "left",
                borderRadius: "2px",
              }}
            />

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                width: "100%",
                padding: "0 24px",
              }}
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      delay: 0.08 * i,
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{ width: "100%" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "center",
                        fontFamily: "var(--mark-font-display)",
                        fontSize: "28px",
                        letterSpacing: "2px",
                        padding: "16px 0",
                        color: isActive
                          ? "var(--mark-accent-primary)"
                          : "var(--mark-fg)",
                        opacity: isActive ? 1 : 0.65,
                        textDecoration: "none",
                        borderBottom: isActive
                          ? "3px solid var(--mark-accent-primary)"
                          : "1px solid var(--mark-border)",
                        transition: `all 0.2s ease`,
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* GitHub link in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08 * navLinks.length + 0.1, duration: 0.3 }}
              style={{ marginTop: 32 }}
            >
              <a
                href="https://github.com/Manas-bhavsar/mark-ui"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--mark-font-hand)",
                  fontSize: "16px",
                  color: "var(--mark-fg)",
                  opacity: 0.5,
                  textDecoration: "none",
                  padding: "8px 16px",
                  border: "2px solid var(--mark-border)",
                  borderRadius: "4px",
                }}
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
