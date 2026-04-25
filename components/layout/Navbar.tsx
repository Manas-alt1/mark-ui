"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
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

        {/* Right Side — GitHub */}
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
        </div>
      </nav>
    </>
  );
}
