import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: "About the IPL Cricket Dashboard project and the team that built it.",
};

const members = [
  { name: "Sameer Ahmed", initials: "SA", roll: "24I-2047", color: "#045093", work: "Layout, Navbar, Footer, Home and About pages" },
  { name: "Affaf Shahid", initials: "AS", roll: "24I-2009", color: "#a50d20", work: "Players listing with search/filter/sort, team and player detail pages" },
  { name: "Muhammad Subhan", initials: "MS", roll: "24I-2082", color: "#a77b06", work: "Ticket booking form, Fantasy XI builder, fixtures and points table" },
];

const features = [
  "Fixtures and results of every match",
  "Points table calculated from match results",
  "Team pages with squad and matches",
  "Player profiles with season stats",
  "Search, filter and sort for players",
  "Fantasy XI builder with a credit budget",
  "Ticket booking form with validation",
];

// Server Component: only shows text.
export default function AboutPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="About"
        subtitle="CS4032 Web Programming, Assignment 3 (Group 33, BCY-5B), Topic 39: Cricket league dashboard."
      />

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <h2 className="text-3xl font-bold text-night">What is this app?</h2>
        <p className="mt-2 text-slate-600">
          The IPL Cricket Dashboard is a frontend made with Next.js 16, React 19, TypeScript and
          Tailwind CSS. It uses the 10 real IPL teams and well-known players, but all scores, results and stats are mock data stored in the <code>data/</code>{" "}
          folder. Actions like booking tickets or saving a fantasy team only update React state, there
          is no backend.
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-slate-700">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-night">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-5 text-3xl font-bold text-night">Our team</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {members.map((member) => (
            <div key={member.roll} className="rounded-2xl border-t-4 bg-white p-5 shadow-sm ring-1 ring-slate-200" style={{ borderTopColor: member.color }}>
              {/* Circle with the member's initials */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full font-display text-2xl font-bold text-white"
                style={{ backgroundColor: member.color }}
              >
                {member.initials}
              </div>
              <h3 className="mt-3 text-2xl font-bold text-night">{member.name}</h3>
              <p className="text-sm text-slate-500">{member.roll}</p>
              <p className="mt-2 text-sm text-slate-700">{member.work}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
