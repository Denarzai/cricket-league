import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPlayerById } from "@/data/players";
import { getTeamById } from "@/data/teams";
import { wait } from "@/lib/utils";
import StatBox from "@/components/StatBox";
import Badge, { roleColors } from "@/components/Badge";
import SectionHeading from "@/components/SectionHeading";

interface PlayerPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PlayerPageProps): Promise<Metadata> {
  const { id } = await params;
  const player = getPlayerById(id);
  if (!player) return { title: "Player not found" };
  return { title: player.name, description: `Profile and career stats of ${player.name}.` };
}

// Dynamic route: /players/virat-kohli, /players/ms-dhoni, ... Server Component.
export default async function PlayerDetailPage({ params }: PlayerPageProps) {
  const { id } = await params;

  // Pretend the data comes from a slow server, so loading.tsx is shown for a moment
  await wait(700);

  const player = getPlayerById(id);
  if (!player) {
    notFound();
  }

  const team = getTeamById(player.teamId);

  return (
    <div className="space-y-8">
      <Link href="/players" className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-night shadow-sm ring-1 ring-slate-200 hover:ring-night">
        ← Back to all players
      </Link>

      {/* Profile, with a banner in the team colour */}
      <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
        <div
          className="h-24 sm:h-28"
          style={{ background: `linear-gradient(120deg, ${team?.color ?? "#0f1e46"} 40%, #0f1e46)` }}
        />
        <div className="flex flex-col gap-6 px-6 pb-8 sm:flex-row sm:px-8">
          <Image
            src={player.image}
            alt={player.name}
            width={200}
            height={200}
            className="-mt-16 mx-auto h-40 w-40 rounded-2xl ring-8 ring-white sm:mx-0"
          />
          <div className="flex-1 sm:pt-4">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-extrabold text-night sm:text-5xl">{player.name}</h1>
              <Badge text={player.role} color={roleColors[player.role]} />
            </div>
            {team && (
              <Link href={`/teams/${team.id}`} className="mt-2 inline-flex items-center gap-2 font-semibold text-slate-600 hover:underline">
                <Image src={team.logo} alt={team.name} width={28} height={28} />
                {team.name}
              </Link>
            )}
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-4">
              <div><dt className="text-slate-500">Age</dt><dd className="font-semibold text-night">{player.age}</dd></div>
              <div><dt className="text-slate-500">Batting</dt><dd className="font-semibold text-night">{player.battingStyle}</dd></div>
              <div><dt className="text-slate-500">Bowling</dt><dd className="font-semibold text-night">{player.bowlingStyle}</dd></div>
              <div><dt className="text-slate-500">Fantasy price</dt><dd className="font-semibold text-night">{player.credits} credits</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* Career stats (StatBox reused) */}
      <section>
        <SectionHeading title="Season stats (mock data)" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatBox label="Matches" value={player.matches} />
          <StatBox label="Runs" value={player.runs} />
          <StatBox label="High score" value={player.highScore} />
          <StatBox label="Average" value={player.average} />
          <StatBox label="Strike rate" value={player.strikeRate} />
          <StatBox label="Wickets" value={player.wickets} />
          {/* economy 0 means the player does not bowl */}
          <StatBox label="Economy" value={player.economy === 0 ? "-" : player.economy} />
          <StatBox label="Credits" value={player.credits} />
        </div>
      </section>
    </div>
  );
}
