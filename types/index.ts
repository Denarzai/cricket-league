// TypeScript types for every kind of record in our mock data.

export type PlayerRole = "Batter" | "Bowler" | "All-rounder" | "Wicketkeeper";

export type MatchStatus = "Completed" | "Upcoming";

export interface Team {
  id: string; // short code used in the URL, e.g. "isb" -> /teams/isb
  name: string;
  shortName: string;
  city: string;
  captain: string;
  coach: string;
  founded: number;
  homeGround: string;
  color: string; // hex colour used for the team banner
  logo: string; // path of the logo inside /public
  description: string;
}

export interface Player {
  id: string; // slug used in the URL, e.g. /players/ali-raza
  name: string;
  teamId: string; // links the player to a Team
  role: PlayerRole;
  age: number;
  battingStyle: string;
  bowlingStyle: string;
  matches: number;
  runs: number;
  highScore: number;
  average: number;
  strikeRate: number;
  wickets: number;
  economy: number; // 0 means the player does not bowl
  credits: number; // price of the player in the Fantasy XI game
  image: string;
}

export interface Match {
  id: string;
  matchNo: number;
  date: string; // "2026-11-01"
  time: string; // "7:00 PM"
  venue: string;
  homeTeamId: string;
  awayTeamId: string;
  status: MatchStatus;
  homeScore?: string; // only for completed matches
  awayScore?: string;
  winnerId?: string;
  result?: string;
}

// One row of the points table (worked out from the completed matches)
export interface PointsRow {
  team: Team;
  played: number;
  won: number;
  lost: number;
  points: number;
}
