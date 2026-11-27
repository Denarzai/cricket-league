import type { Metadata } from "next";
import { Barlow, Saira_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// next/font downloads the fonts at build time and serves them from our own site.
// "variable" gives each font a CSS variable that globals.css uses.
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow" });
const saira = Saira_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-saira" });

// Default title and description. Each page overrides them with its own metadata.
// "%s" is replaced by the page title, e.g. "Players | IPL Dashboard".
export const metadata: Metadata = {
  title: {
    default: "IPL Cricket Dashboard",
    template: "%s | IPL Dashboard",
  },
  description: "Fixtures, points table, teams and players of the IPL (mock data).",
};

// The root layout wraps EVERY page: navbar on top, page in the middle, footer at the bottom.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${saira.variable}`}>
      <body className="flex min-h-screen flex-col bg-mist font-sans text-slate-800 antialiased">
        <Navbar siteName="IPL Dashboard" />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>
        <Footer siteName="IPL Cricket Dashboard" year={2026} />
      </body>
    </html>
  );
}
