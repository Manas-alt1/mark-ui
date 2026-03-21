/**
 * ComponentsShowcaseCTA
 * 
 * Call-to-action section for the Components Showcase Page.
 * Encourages users to visit the full documentation.
 * 
 * Server Component - no interactivity needed.
 */

import Link from 'next/link';

export default function ComponentsShowcaseCTA() {
  return (
    <section className="components-showcase-cta">
      {/* Heading */}
      <h2 className="cta-heading">
        Want the full details?
      </h2>

      {/* Subtext */}
      <p className="cta-subtext">
        Every component has a dedicated docs page with props tables, all variants, states, and animation details.
      </p>

      {/* Button */}
      <Link 
        href="/docs"
        className="cta-button"
      >
        Open the Docs →
      </Link>
    </section>
  );
}
