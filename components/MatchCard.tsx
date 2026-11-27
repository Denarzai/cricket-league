import Link from "next/link";
import Image from "next/image";
import { Match } from "@/types";
import { getTeamById } from "@/data/teams";
import { formatDate } from "@/lib/utils";
import Badge from "./Badge";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);

  // Should never happen with our data, but keeps TypeScript happy
  if (!home || !away) return null;

  const isCompleted = match.status === "Completed";

  return (
    <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:shadow-xl motion-safe:hover:-translate-y-1">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-display text-lg font-bold text-slate-400">Match {match.matchNo}</span>
        <Badge text={match.status} color={isCompleted ? "gray" : "amber"} />
      </div>

      {/* The two teams, one per row. The left border is the team colour. */}
      <div className="space-y-2">
        {[
          { team: home, score: match.homeScore },
          { team: away, score: match.awayScore },
        ].map(({ team, score }) => {
          const isWinner = match.winnerId === team.id;
          return (
            <div
              key={team.id}
              className="flex items-center justify-between rounded-lg border-l-4 bg-slate-50 py-2 pl-3 pr-3"
              style={{ borderColor: team.color }}
            >
              <Link href={`/teams/${team.id}`} className="flex items-center gap-3 hover:underline">
                <Image src={team.logo} alt={team.name} width={32} height={32} />
                <span className={`font-semibold ${isWinner ? "text-night" : "text-slate-600"}`}>
                  {team.shortName}
                </span>
                {isWinner && <Badge text="Won" color="green" />}
              </Link>
              {score && <span className="font-display text-xl font-bold text-night">{score}</span>}
            </div>
          );
        })}
      </div>

      <div className="mt-4 space-y-1 border-t border-slate-100 pt-3 text-sm">
        {isCompleted ? (
          <p className="font-semibold text-pitch">{match.result}</p>
        ) : (
          <p className="font-semibold text-night">
            {formatDate(match.date)}, {match.time}
          </p>
        )}
        <p className="text-slate-500">📍 {match.venue}</p>
      </div>
    </div>
  );
}
