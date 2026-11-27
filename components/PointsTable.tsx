import Link from "next/link";
import Image from "next/image";
import { PointsRow } from "@/types";

interface PointsTableProps {
  rows: PointsRow[];
  limit?: number; // show only the first few teams (used on the Home page)
}

// In the IPL the top 4 teams go to the playoffs
const PLAYOFF_SPOTS = 4;

export default function PointsTable({ rows, limit }: PointsTableProps) {
  const visibleRows = limit ? rows.slice(0, limit) : rows;

  return (
    // overflow-x-auto lets the table scroll sideways on small phones
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-night text-white">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Team</th>
            <th className="px-4 py-3 text-center">P</th>
            <th className="px-4 py-3 text-center">W</th>
            <th className="px-4 py-3 text-center">L</th>
            <th className="px-4 py-3 text-center text-gold">Pts</th>
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row, index) => {
            const inPlayoffs = index < PLAYOFF_SPOTS;
            return (
              <tr
                key={row.team.id}
                className={`border-t border-slate-100 hover:bg-slate-50 ${inPlayoffs ? "bg-amber-50/60" : ""}`}
              >
                {/* Gold bar on the left for playoff places */}
                <td className={`border-l-4 px-4 py-3 font-display text-xl font-bold ${inPlayoffs ? "border-gold text-night" : "border-transparent text-slate-400"}`}>
                  {index + 1}
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/teams/${row.team.id}`}
                    className="flex items-center gap-3 font-semibold text-night hover:underline"
                  >
                    <Image src={row.team.logo} alt={row.team.name} width={32} height={32} />
                    <span className="whitespace-nowrap">{row.team.name}</span>
                  </Link>
                </td>
                <td className="px-4 py-3 text-center">{row.played}</td>
                <td className="px-4 py-3 text-center text-pitch font-semibold">{row.won}</td>
                <td className="px-4 py-3 text-center text-ball font-semibold">{row.lost}</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block min-w-10 rounded-full bg-night px-3 py-1 font-display text-lg font-bold text-gold">
                    {row.points}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
