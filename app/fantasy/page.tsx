import type { Metadata } from "next";
import { players } from "@/data/players";
import { teams } from "@/data/teams";
import PageHeader from "@/components/PageHeader";
import FantasyTeamBuilder from "@/components/FantasyTeamBuilder";

export const metadata: Metadata = {
  title: "Fantasy XI",
  description: "Pick 11 players within 100 credits and build your own fantasy team.",
};

// Server Component page that renders the Client Component FantasyTeamBuilder.
// (A page with "use client" cannot export metadata, so we keep the page on the server.)
export default function FantasyPage() {
  return (
    <div>
      <PageHeader
        title="Fantasy XI"
        subtitle="Pick exactly 11 players. You have 100 credits to spend. Give your team a name and save it."
      />
      <FantasyTeamBuilder players={players} teams={teams} />
    </div>
  );
}
