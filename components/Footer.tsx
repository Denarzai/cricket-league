import Link from "next/link";
import TeamStripe from "./TeamStripe";

interface FooterProps {
  siteName: string;
  year: number;
}

const footerLinks = [
  { href: "/teams", label: "Teams" },
  { href: "/players", label: "Players" },
  { href: "/fixtures", label: "Fixtures" },
  { href: "/points-table", label: "Points Table" },
  { href: "/fantasy", label: "Fantasy XI" },
  { href: "/tickets", label: "Buy Tickets" },
  { href: "/about", label: "About" },
];

export default function Footer({ siteName, year }: FooterProps) {
  return (
    <footer className="mt-16 bg-night text-slate-300">
      <TeamStripe height="thick" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <div>
          <p className="font-display text-2xl font-bold text-white">{siteName}</p>
          <p className="mt-2 max-w-sm text-sm">
            Unofficial student project, not linked to the IPL or BCCI. Scores and stats are mock data.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 md:justify-self-end">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {year} {siteName}. Made by Group 33, BCY-5B.
      </p>
    </footer>
  );
}
