"use client";
// Client Component because:
// 1. useState  -> remembers if the mobile menu is open or closed
// 2. onClick   -> the menu button reacts to clicks
// 3. usePathname -> reads the current URL in the browser to highlight the active link

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TeamStripe from "./TeamStripe";

interface NavbarProps {
  siteName: string;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/teams", label: "Teams" },
  { href: "/players", label: "Players" },
  { href: "/fixtures", label: "Fixtures" },
  { href: "/points-table", label: "Points Table" },
  { href: "/fantasy", label: "Fantasy XI" },
  { href: "/tickets", label: "Tickets" },
  { href: "/about", label: "About" },
];

export default function Navbar({ siteName }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // "/players/virat-kohli" should still highlight "Players"
  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-20 bg-night text-white shadow-lg shadow-night/20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* "group" lets the ball react when the whole link is hovered (group-hover:) */}
        <Link href="/" className="group flex items-center gap-2">
          {/* A small red cricket ball as our logo. It spins once when you hover the logo. */}
          <span className="relative h-7 w-7 rounded-full bg-ball shadow-inner transition-transform duration-700 motion-safe:group-hover:rotate-[360deg]">
            <span className="absolute inset-y-1 left-1/2 w-0 -translate-x-1/2 border-l-2 border-dashed border-white/80" />
          </span>
          <span className="font-display text-2xl font-bold">
            {siteName}
          </span>
        </Link>

        {/* Hamburger button, only on small screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md border border-white/30 px-3 py-1 text-lg hover:bg-night-light lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Links for large screens. The active one is gold with a gold line under it. */}
        <ul className="hidden gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block border-b-2 px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "border-gold text-gold"
                    : "border-transparent text-slate-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Dropdown links for small screens */}
      {menuOpen && (
        <ul className="border-t border-white/10 px-4 pb-3 pt-2 lg:hidden motion-safe:animate-rise" style={{ animationDuration: "300ms" }}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-md px-3 py-2 font-semibold ${
                  isActive(link.href) ? "bg-gold text-night" : "text-slate-200 hover:bg-night-light"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* The 10 team colours under the navbar */}
      <TeamStripe />
    </header>
  );
}
