import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTeamById } from "@/data/teams";
import { getPlayersByTeam } from "@/data/players";
import { getMatchesByTeam } from "@/data/matches";
import { getPointsTable } from "@/lib/pointsTable";
import StatBox from "@/components/StatBox";
import PlayerCard from "@/components/PlayerCard";
import MatchCard from "@/components/MatchCard";
import SectionHeading from "@/components/SectionHeading";

// In Next.js 16 "params" is a Promise, so we await it.
interface TeamPageProps {
  params: Promise<{ id: string }>;
}

// Metadata that depends on the URL (the team name becomes the page title)
export async function generateMetadata({ params }: TeamPageProps): Promise<Metadata> {
  const { id } = await params;
  const team = getTeamById(id);
  if (!team) return { title: "Team not found" };
  return { title: team.name, description: `Squad, results and fixtures of ${team.name}.` };
}

// Dynamic route: /teams/mi, /teams/csk, ... Server Component.
export default async function TeamDetailPage({ params }: TeamPageProps) {
  const { id } = await params;
  const team = getTeamById(id);

  // Unknown id like /teams/abc -> show the not-found page
  if (!team) {
    notFound();
  }

  const squad = getPlayersByTeam(team.id);
  const teamMatches = getMatchesByTeam(team.id);
  // Find this team's row in the points table and its position (1st, 2nd, ...)
  const table = getPointsTable();
  const index = table.findIndex((row) => row.team.id === team.id);
  const tableRow = table[index];
  const position = index + 1;

  return (
    <div className="space-y-10">
      {/* Banner in the team colour, fading into the night colour */}
      <section
        className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl p-6 text-white sm:flex-row sm:p-10"
        style={{ background: `linear-gradient(120deg, ${team.color} 45%, #0f1e46)` }}
      >
        {/* Big faded logo in the corner, only for decoration */}
        <Image
          src={team.logo}
          alt=""
          width={320}
          height={320}
          className="pointer-events-none absolute -right-16 -top-16 hidden opacity-10 sm:block"
        />
        <Image src={team.logo} alt={`${team.name} logo`} width={130} height={130} className="rounded-full ring-8 ring-white/20" />
        <div className="relative text-center sm:text-left">
          <p className="font-display text-xl font-bold text-white/70">{team.shortName}, since {team.founded}</p>
          <h1 className="text-5xl font-extrabold leading-none sm:text-6xl">{team.name}</h1>
          <p className="mt-3 max-w-xl text-white/90">{team.description}</p>
          <dl className="mt-5 flex flex-wrap justify-center gap-2 text-sm sm:justify-start">
            <div className="rounded-full bg-white/15 px-3 py-1"><dt className="inline text-white/70">Captain </dt><dd className="inline font-semibold">{team.captain}</dd></div>
            <div className="rounded-full bg-white/15 px-3 py-1"><dt className="inline text-white/70">Coach </dt><dd className="inline font-semibold">{team.coach}</dd></div>
            <div className="rounded-full bg-white/15 px-3 py-1"><dt className="inline text-white/70">Home </dt><dd className="inline font-semibold">{team.homeGround}</dd></div>
          </dl>
        </div>
      </section>

      {/* Season numbers (StatBox reused with different values) */}
      {tableRow && (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <StatBox label="Position" value={`#${position}`} />
          <StatBox label="Played" value={tableRow.played} />
          <StatBox label="Won" value={tableRow.won} />
          <StatBox label="Lost" value={tableRow.lost} />
          <StatBox label="Points" value={tableRow.points} />
        </section>
      )}

      <section>
        <SectionHeading title="Squad" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {squad.map((player) => (
            <PlayerCard key={player.id} player={player} teamName={team.name} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Matches" linkHref="/fixtures" linkText="All fixtures" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teamMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>
    </div>
  );
}
