import Link from "next/link";
import Image from "next/image";
import { Player } from "@/types";

// The IPL gives an Orange Cap to the top run scorer and a Purple Cap to the top wicket taker.
// This card shows the leader of one cap and the next two players.

interface CapRaceProps {
  title: string;          // e.g. "Orange Cap"
  subtitle: string;       // e.g. "Most runs"
  players: Player[];      // already sorted, best first
  stat: "runs" | "wickets";
  color: "orange" | "purple";
}

const colorClasses = {
  orange: "bg-orange-cap",
  purple: "bg-purple-cap",
};

export default function CapRace({ title, subtitle, players, stat, color }: CapRaceProps) {
  const [leader, ...others] = players;
  if (!leader) return null;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      {/* Coloured top with the leader */}
      <div className={`${colorClasses[color]} p-5 text-white`}>
        <p className="font-display text-2xl font-bold">{title}</p>
        <p className="text-sm text-white/80">{subtitle}</p>

        <Link href={`/players/${leader.id}`} className="mt-4 flex items-center gap-4 hover:underline">
          <Image src={leader.image} alt={leader.name} width={64} height={64} className="rounded-full ring-4 ring-white/40" />
          <span className="flex-1 text-xl font-bold">{leader.name}</span>
          {/* The leader's number pops in when the page loads */}
          <span className="font-display text-5xl font-extrabold leading-none motion-safe:animate-pop" style={{ animationDelay: "300ms" }}>
            {leader[stat]}
          </span>
        </Link>
      </div>

      {/* 2nd and 3rd place */}
      <ol className="divide-y divide-slate-100">
        {others.map((player, index) => (
          <li key={player.id}>
            <Link href={`/players/${player.id}`} className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50">
              <span className="w-5 font-display text-lg font-bold text-slate-400">{index + 2}</span>
              <Image src={player.image} alt={player.name} width={32} height={32} className="rounded-full" />
              <span className="flex-1 font-semibold text-night">{player.name}</span>
              <span className="font-display text-2xl font-bold text-night">{player[stat]}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
