import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/packages/core/src/styles/index.css"; // Correct path to core styles
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ThemePanel from "@/components/theme/ThemePanel";
import {
  permanentMarker,
  architectsDaughter,
  gochiHand,
  oxanium,
  jetbrainsMono,
} from "@/styles/fonts";

export const metadata: Metadata = {
  title: "MARK UI — Your components. Your rules.",
  description:
    "Not another UI kit. MARK UI is a creative system — opinionated enough to ship fast, flexible enough to make it entirely yours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="monochrome"
      className={`${permanentMarker.variable} ${architectsDaughter.variable} ${gochiHand.variable} ${oxanium.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Gochi+Hand&family=JetBrains+Mono:wght@400;500;600;700;800&family=Oxanium:wght@400;500;600;700;800&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols for icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <ThemePanel />
        </ThemeProvider>
      </body>
    </html>
  );
}
