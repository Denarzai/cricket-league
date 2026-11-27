import type { Metadata } from "next";
import { players } from "@/data/players";
import { teams } from "@/data/teams";
import PageHeader from "@/components/PageHeader";
import PlayersExplorer from "@/components/PlayersExplorer";

export const metadata: Metadata = {
  title: "Players",
  description: "Search, filter and sort all IPL players.",
};

// This page itself is a Server Component. It reads the mock data and passes it
// as props to PlayersExplorer, which is a Client Component (search/filter/sort).
export default function PlayersPage() {
  return (
    <div>
      <PageHeader
        title="Players"
        subtitle="Search by name, filter by team or role, and sort by runs, wickets or average."
      />
      <PlayersExplorer players={players} teams={teams} />
    </div>
  );
}
