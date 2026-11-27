import { PointsRow } from "@/types";
import { teams } from "@/data/teams";
import { getCompletedMatches } from "@/data/matches";

// Builds the points table from the completed matches.
// A win gives 2 points, a loss gives 0.
export function getPointsTable(): PointsRow[] {
  const completed = getCompletedMatches();

  const rows: PointsRow[] = teams.map((team) => {
    const played = completed.filter(
      (m) => m.homeTeamId === team.id || m.awayTeamId === team.id
    ).length;
    const won = completed.filter((m) => m.winnerId === team.id).length;
    const lost = played - won;

    return { team, played, won, lost, points: won * 2 };
  });

  // Highest points first. If points are equal, sort by team name.
  return rows.sort(
    (a, b) => b.points - a.points || a.team.name.localeCompare(b.team.name)
  );
}
