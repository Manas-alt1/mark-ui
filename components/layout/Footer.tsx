"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/components", label: "Components" },
  { href: "/themes", label: "Themes" },
  { href: "/about", label: "About" },
];

const connectLinks = [
  { href: "https://github.com/Manas-bhavsar", label: "GITHUB", external: true },
  { href: "mailto:manas.bhavsar45@gmail.com", label: "EMAIL", external: true },
];

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "6px solid var(--mark-fg)",
        backgroundColor: "var(--mark-bg)",
        position: "relative",
        zIndex: 50,
        transition: `
          background-color var(--mark-duration-normal) var(--mark-ease-smooth),
          border-color var(--mark-duration-normal) var(--mark-ease-smooth)
        `,
      }}
    >
      {/* Main Footer */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span
              style={{
                fontFamily: "var(--mark-font-display)",
                fontSize: 32,
                color: "var(--mark-accent-primary)",
                transition: "color var(--mark-duration-normal) var(--mark-ease-smooth)",
              }}
            >
              MARK UI
            </span>
            <p
              style={{
                fontFamily: "var(--mark-font-hand)",
                fontSize: 18,
                color: "var(--mark-fg)",
                opacity: 0.8,
              }}
            >
              Build interfaces that leave a mark.
            </p>
            <p
              style={{
                fontFamily: "var(--mark-font-hand)",
                fontSize: 14,
                color: "var(--mark-fg)",
                opacity: 0.6,
              }}
            >
              Open source. MIT licensed.
            </p>
          </div>

          {/* Center — Navigate */}
          <div>
            <h4
              style={{
                fontFamily: "var(--mark-font-display)",
                fontSize: 18,
                color: "var(--mark-fg)",
                marginBottom: 16,
                borderBottom: "2px solid var(--mark-fg)",
                display: "inline-block",
                paddingBottom: 4,
              }}
            >
              NAVIGATE
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--mark-font-hand)",
                      fontSize: 18,
                      color: "var(--mark-fg)",
                      textDecoration: "underline",
                      textDecorationColor: "transparent",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      transition: `
                        color var(--mark-duration-fast) var(--mark-ease-smooth),
                        text-decoration-color var(--mark-duration-fast) var(--mark-ease-smooth)
                      `,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--mark-accent-primary)";
                      (e.currentTarget as HTMLElement).style.textDecorationColor = "var(--mark-accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--mark-fg)";
                      (e.currentTarget as HTMLElement).style.textDecorationColor = "transparent";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Connect */}
          <div>
            <h4
              style={{
                fontFamily: "var(--mark-font-display)",
                fontSize: 18,
                color: "var(--mark-fg)",
                marginBottom: 16,
                borderBottom: "2px solid var(--mark-fg)",
                display: "inline-block",
                paddingBottom: 4,
              }}
            >
              CONNECT
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "var(--mark-font-hand)",
                      fontSize: 18,
                      color: "var(--mark-fg)",
                      textDecoration: "underline",
                      textDecorationColor: "transparent",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      transition: `
                        color var(--mark-duration-fast) var(--mark-ease-smooth),
                        text-decoration-color var(--mark-duration-fast) var(--mark-ease-smooth)
                      `,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--mark-accent-primary)";
                      (e.currentTarget as HTMLElement).style.textDecorationColor = "var(--mark-accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--mark-fg)";
                      (e.currentTarget as HTMLElement).style.textDecorationColor = "transparent";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "3px dashed var(--mark-fg)",
          padding: "24px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            fontFamily: "var(--mark-font-hand)",
            color: "var(--mark-fg)",
            fontSize: 16,
          }}
        >
          <p style={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} MARK UI. All rights reserved.
          </p>
          <p style={{ opacity: 0.8 }}>
            Built with{" "}
            <span
              style={{
                color: "var(--mark-accent-primary)",
                fontFamily: "var(--mark-font-display)",
                textDecoration: "underline",
                textDecorationStyle: "dotted",
                textUnderlineOffset: "3px",
              }}
            >
              MARK UI
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
