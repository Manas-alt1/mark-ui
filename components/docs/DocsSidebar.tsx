"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DocsSearchModal from "./DocsSearchModal";
import {
  DOCS_NAV,
  type DocsNavGroup,
  type DocsNavSection,
} from "./DocsNavData";

function isNavGroup(item: DocsNavSection["items"][number]): item is DocsNavGroup {
  return "label" in item;
}

export default function DocsSidebar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Sync desktop state for <details open>
    const mql = window.matchMedia("(min-width: 1025px)");
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      mql.removeEventListener("change", handler);
    };
  }, []);

  return (
    <>
      <aside className="docs-sidebar-container">
        <div className="sidebar-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
          </svg>
          MARK UI Docs
        </div>

        <button className="sidebar-search-btn" onClick={() => setIsSearchOpen(true)}>
          Search docs...
          <span className="search-shortcut">⌘K</span>
        </button>

        <details className="sidebar-mobile-details" open={isDesktop}>
          <summary className="sidebar-mobile-summary">Menu</summary>
          <nav className="sidebar-nav">
            {DOCS_NAV.map((section) => (
              <div key={section.title}>
                <div className="sidebar-section-title">{section.title}</div>
                <div className="sidebar-nav-group">
                  {section.items.map((item) => {
                    // If it's a categorized group (like "Inputs" under Components)
                    if (isNavGroup(item)) {
                      return (
                        <div key={item.label} style={{ marginBottom: "16px" }}>
                          <div className="sidebar-category-title">
                            {item.label}
                          </div>
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="sidebar-nav-link"
                              data-active={pathname === subItem.href}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      );
                    }

                    // If it's a standard link
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="sidebar-nav-link"
                        data-active={pathname === item.href}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </details>
      </aside>
      <DocsSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}
