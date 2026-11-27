import type { Metadata } from "next";
import { getCompletedMatches, getUpcomingMatches } from "@/data/matches";
import PageHeader from "@/components/PageHeader";
import MatchCard from "@/components/MatchCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Fixtures & Results",
  description: "Upcoming matches and results of completed matches.",
};

// Server Component: only shows data.
export default function FixturesPage() {
  const upcoming = getUpcomingMatches();
  // Newest result first
  const results = [...getCompletedMatches()].reverse();

  return (
    <div className="space-y-10">
      <PageHeader title="Fixtures & Results" subtitle="Every match of the 2026 season." />

      <section>
        <SectionHeading title={`Upcoming (${upcoming.length})`} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title={`Results (${results.length})`} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>
    </div>
  );
}
