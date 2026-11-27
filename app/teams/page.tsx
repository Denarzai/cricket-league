import type { Metadata } from "next";
import { teams } from "@/data/teams";
import PageHeader from "@/components/PageHeader";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "Teams",
  description: "All 10 teams of the Indian Premier League.",
};

// Server Component: only shows data.
export default function TeamsPage() {
  return (
    <div>
      <PageHeader title="Teams" subtitle="Ten teams, one trophy. Click a team to see its squad and matches." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
