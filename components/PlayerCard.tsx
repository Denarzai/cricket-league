import Link from "next/link";
import Image from "next/image";
import { Player } from "@/types";
import { getTeamById } from "@/data/teams";
import Badge, { roleColors } from "./Badge";

interface PlayerCardProps {
  player: Player;
  teamName: string;
}

export default function PlayerCard({ player, teamName }: PlayerCardProps) {
  // We only need the team for its colour
  const teamColor = getTeamById(player.teamId)?.color ?? "#0f1e46";

  return (
    <Link
      href={`/players/${player.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:shadow-xl motion-safe:hover:-translate-y-1"
    >
      {/* On hover the card lifts and the picture zooms in a little */}
      <div className="overflow-hidden">
        <Image
          src={player.image}
          alt={player.name}
          width={200}
          height={200}
          className="h-40 w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-110"
        />
      </div>

      {/* Line in the team colour between the picture and the text */}
      <div className="h-1.5" style={{ backgroundColor: teamColor }} />

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold leading-tight text-night">{player.name}</h3>
          <Badge text={player.role} color={roleColors[player.role]} />
        </div>
        <p className="mt-1 text-sm text-slate-500">{teamName}</p>

        {/* Three key numbers */}
        <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center">
          <div>
            <dd className="font-display text-2xl font-bold text-night">{player.runs}</dd>
            <dt className="text-xs text-slate-500">Runs</dt>
          </div>
          <div>
            <dd className="font-display text-2xl font-bold text-night">{player.wickets}</dd>
            <dt className="text-xs text-slate-500">Wickets</dt>
          </div>
          <div>
            <dd className="font-display text-2xl font-bold text-night">{player.average}</dd>
            <dt className="text-xs text-slate-500">Average</dt>
          </div>
        </dl>
      </div>
    </Link>
  );
}
