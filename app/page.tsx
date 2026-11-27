import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { teams, getTeamById } from "@/data/teams";
import { players } from "@/data/players";
import { getCompletedMatches, getUpcomingMatches } from "@/data/matches";
import { getPointsTable } from "@/lib/pointsTable";
import { formatDate } from "@/lib/utils";
import StatBox from "@/components/StatBox";
import MatchCard from "@/components/MatchCard";
import PlayerCard from "@/components/PlayerCard";
import PointsTable from "@/components/PointsTable";
import SectionHeading from "@/components/SectionHeading";
import CapRace from "@/components/CapRace";

export const metadata: Metadata = {
  // The layout's title template is not applied to a page in the same folder,
  // so we write the full title here.
  title: "Home | IPL Dashboard",
  description: "Latest IPL fixtures, top players and standings.",
};

// Server Component: it only displays data, so no "use client" is needed.
export default function HomePage() {
  const upcomingMatches = getUpcomingMatches();
  const nextMatch = upcomingMatches[0];
  const completedCount = getCompletedMatches().length;

  // [...players] makes a copy so the original order is not changed
  const topRunScorers = [...players].sort((a, b) => b.runs - a.runs).slice(0, 3);
  const topWicketTakers = [...players].sort((a, b) => b.wickets - a.wickets).slice(0, 3);
  const starPlayers = [...players].sort((a, b) => b.credits - a.credits).slice(0, 4);

  // The two teams of the next match, for the scoreboard in the hero
  const nextHome = nextMatch ? getTeamById(nextMatch.homeTeamId) : undefined;
  const nextAway = nextMatch ? getTeamById(nextMatch.awayTeamId) : undefined;

  function getTeamName(teamId: string) {
    return teams.find((t) => t.id === teamId)?.name ?? "";
  }

  return (
    <div className="space-y-14">
      {/* ---------- Hero: floodlit night sky ---------- */}
      {/* Animation: the parts rise in one after another. style={{ animationDelay }} sets when each one starts. */}
      <section className="floodlights relative grid items-center gap-10 overflow-hidden rounded-3xl p-6 text-white sm:p-10 lg:grid-cols-5">
        {/* Flickering floodlight beams behind everything */}
        <div aria-hidden="true" className="floodlight-glow pointer-events-none absolute inset-0 motion-safe:animate-glow" />

        <div className="relative lg:col-span-3">
          <p className="inline-block rounded-full border border-gold/60 px-3 py-1 text-sm font-semibold text-gold motion-safe:animate-rise">
            Indian Premier League, season 2026
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] sm:text-7xl motion-safe:animate-rise" style={{ animationDelay: "100ms" }}>
            Every team, every match, every star.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300 motion-safe:animate-rise" style={{ animationDelay: "250ms" }}>
            Follow all 10 IPL teams: fixtures, results, the points table and the squads of players like Kohli,
            Rohit, Dhoni and Bumrah. Then build your own Fantasy XI and book seats for the next match.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 motion-safe:animate-rise" style={{ animationDelay: "400ms" }}>
            <Link href="/fixtures" className="rounded-lg bg-gold px-6 py-3 font-bold text-night transition hover:bg-gold-dark motion-safe:hover:-translate-y-0.5">
              View fixtures
            </Link>
            <Link href="/fantasy" className="rounded-lg border-2 border-white/70 px-6 py-3 font-bold transition hover:bg-white hover:text-night motion-safe:hover:-translate-y-0.5">
              Build your Fantasy XI
            </Link>
          </div>
        </div>

        {/* Scoreboard with the next match */}
        {nextMatch && nextHome && nextAway && (
          <div className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/15 backdrop-blur lg:col-span-2 motion-safe:animate-rise" style={{ animationDelay: "550ms" }}>
            <p className="flex items-center gap-2 font-display text-xl font-bold text-gold">
              {/* "Live" dot: animate-ping is built into Tailwind, it grows and fades a copy of the dot */}
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-ball opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-ball" />
              </span>
              Next match
            </p>
            <p className="text-sm text-slate-400">Match {nextMatch.matchNo}</p>

            <div className="mt-5 flex items-center justify-between gap-2 text-center">
              {[nextHome, nextAway].map((team, index) => (
                <div key={team.id} className={`flex flex-1 flex-col items-center gap-2 ${index === 1 ? "order-last" : ""}`}>
                  <Image src={team.logo} alt={team.name} width={80} height={80} className="rounded-full ring-4 ring-white/20 motion-safe:animate-pop" style={{ animationDelay: "800ms" }} />
                  <span className="font-display text-3xl font-extrabold">{team.shortName}</span>
                  <span className="text-xs text-slate-400">{team.name}</span>
                </div>
              ))}
              <span className="font-display text-2xl font-bold text-gold motion-safe:animate-pulse">vs</span>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-sm">
              <p className="font-semibold">{formatDate(nextMatch.date)}, {nextMatch.time}</p>
              <p className="text-slate-400">📍 {nextMatch.venue}</p>
            </div>
            <Link href="/tickets" className="mt-5 block rounded-lg bg-gold py-2.5 text-center font-bold text-night transition hover:bg-gold-dark active:scale-95">
              Book tickets
            </Link>
          </div>
        )}
      </section>

      {/* ---------- Quick stats (StatBox reused) ---------- */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatBox label="Teams" value={teams.length} />
        <StatBox label="Players" value={players.length} />
        <StatBox label="Matches played" value={completedCount} />
        <StatBox label="Matches left" value={upcomingMatches.length} />
      </section>

      {/* ---------- Upcoming matches ---------- */}
      <section>
        <SectionHeading title="Upcoming matches" linkHref="/fixtures" linkText="All fixtures" />
        <div className="grid gap-5 md:grid-cols-3">
          {upcomingMatches.slice(0, 3).map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      {/* ---------- Orange Cap and Purple Cap (CapRace reused with different props) ---------- */}
      <section>
        <SectionHeading title="Race for the caps" linkHref="/players" linkText="All players" />
        <div className="grid gap-5 md:grid-cols-2">
          <CapRace title="Orange Cap" subtitle="Most runs this season" players={topRunScorers} stat="runs" color="orange" />
          <CapRace title="Purple Cap" subtitle="Most wickets this season" players={topWicketTakers} stat="wickets" color="purple" />
        </div>
      </section>

      {/* ---------- Top 3 of the table ---------- */}
      <section>
        <SectionHeading title="Top of the table" linkHref="/points-table" linkText="Full table" />
        <PointsTable rows={getPointsTable()} limit={3} />
      </section>

      {/* ---------- Most expensive Fantasy players ---------- */}
      <section>
        <SectionHeading title="Fantasy favourites" linkHref="/fantasy" linkText="Pick your XI" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {starPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} teamName={getTeamName(player.teamId)} />
          ))}
        </div>
      </section>
    </div>
  );
}
