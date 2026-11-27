import Link from "next/link";
import Image from "next/image";
import { Team } from "@/types";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link
      href={`/teams/${team.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:shadow-xl motion-safe:hover:-translate-y-1"
    >
      {/* Top part in the team colour, fading into the night colour */}
      <div
        className="flex items-center gap-4 p-5 text-white"
        style={{ background: `linear-gradient(135deg, ${team.color} 55%, #0f1e46)` }}
      >
        <Image
          src={team.logo}
          alt={`${team.name} logo`}
          width={64}
          height={64}
          className="rounded-full ring-4 ring-white/30 transition-transform duration-500 motion-safe:group-hover:rotate-12 motion-safe:group-hover:scale-110"
        />
        <div>
          <h3 className="text-2xl font-bold leading-tight">{team.name}</h3>
          <p className="text-sm text-white/80">{team.city}</p>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-2 px-5 py-4 text-sm">
        <div>
          <dt className="text-slate-500">Captain</dt>
          <dd className="font-semibold text-night">{team.captain}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Coach</dt>
          <dd className="font-semibold text-night">{team.coach}</dd>
        </div>
      </dl>
    </Link>
  );
}
