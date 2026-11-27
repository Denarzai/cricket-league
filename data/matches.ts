import { Match } from "@/types";

// Mock data: 20 matches in 4 rounds (every team plays once per round).
// Matches 1-15 are finished, matches 16-20 are still to be played.
// Results and scores are made up for this project.
export const matches: Match[] = [
  // ---------- Round 1 ----------
  { id: "m1", matchNo: 1, date: "2026-11-01", time: "7:30 PM", venue: "Wankhede Stadium, Mumbai", homeTeamId: "mi", awayTeamId: "csk", status: "Completed", homeScore: "176/8 (20)", awayScore: "179/4 (19.1)", winnerId: "csk", result: "Chennai Super Kings won by 6 wickets" },
  { id: "m2", matchNo: 2, date: "2026-11-02", time: "3:30 PM", venue: "M. Chinnaswamy Stadium, Bengaluru", homeTeamId: "rcb", awayTeamId: "kkr", status: "Completed", homeScore: "205/5 (20)", awayScore: "182/9 (20)", winnerId: "rcb", result: "Royal Challengers Bengaluru won by 23 runs" },
  { id: "m3", matchNo: 3, date: "2026-11-02", time: "7:30 PM", venue: "Arun Jaitley Stadium, Delhi", homeTeamId: "dc", awayTeamId: "gt", status: "Completed", homeScore: "168/7 (20)", awayScore: "172/3 (18.2)", winnerId: "gt", result: "Gujarat Titans won by 7 wickets" },
  { id: "m4", matchNo: 4, date: "2026-11-03", time: "7:30 PM", venue: "Sawai Mansingh Stadium, Jaipur", homeTeamId: "rr", awayTeamId: "srh", status: "Completed", homeScore: "198/6 (20)", awayScore: "201/5 (19.3)", winnerId: "srh", result: "Sunrisers Hyderabad won by 5 wickets" },
  { id: "m5", matchNo: 5, date: "2026-11-04", time: "7:30 PM", venue: "Ekana Cricket Stadium, Lucknow", homeTeamId: "lsg", awayTeamId: "pbks", status: "Completed", homeScore: "187/6 (20)", awayScore: "190/2 (17.4)", winnerId: "pbks", result: "Punjab Kings won by 8 wickets" },

  // ---------- Round 2 ----------
  { id: "m6", matchNo: 6, date: "2026-11-05", time: "7:30 PM", venue: "Wankhede Stadium, Mumbai", homeTeamId: "mi", awayTeamId: "rcb", status: "Completed", homeScore: "214/4 (20)", awayScore: "202/8 (20)", winnerId: "mi", result: "Mumbai Indians won by 12 runs" },
  { id: "m7", matchNo: 7, date: "2026-11-06", time: "7:30 PM", venue: "MA Chidambaram Stadium, Chennai", homeTeamId: "csk", awayTeamId: "kkr", status: "Completed", homeScore: "158/9 (20)", awayScore: "161/6 (19.4)", winnerId: "kkr", result: "Kolkata Knight Riders won by 4 wickets" },
  { id: "m8", matchNo: 8, date: "2026-11-07", time: "7:30 PM", venue: "Arun Jaitley Stadium, Delhi", homeTeamId: "dc", awayTeamId: "rr", status: "Completed", homeScore: "193/5 (20)", awayScore: "175/10 (19.2)", winnerId: "dc", result: "Delhi Capitals won by 18 runs" },
  { id: "m9", matchNo: 9, date: "2026-11-08", time: "3:30 PM", venue: "Narendra Modi Stadium, Ahmedabad", homeTeamId: "gt", awayTeamId: "lsg", status: "Completed", homeScore: "224/3 (20)", awayScore: "191/8 (20)", winnerId: "gt", result: "Gujarat Titans won by 33 runs" },
  { id: "m10", matchNo: 10, date: "2026-11-08", time: "7:30 PM", venue: "Rajiv Gandhi International Stadium, Hyderabad", homeTeamId: "srh", awayTeamId: "pbks", status: "Completed", homeScore: "231/6 (20)", awayScore: "235/5 (19.2)", winnerId: "pbks", result: "Punjab Kings won by 5 wickets" },

  // ---------- Round 3 ----------
  { id: "m11", matchNo: 11, date: "2026-11-10", time: "7:30 PM", venue: "Eden Gardens, Kolkata", homeTeamId: "kkr", awayTeamId: "mi", status: "Completed", homeScore: "171/8 (20)", awayScore: "175/3 (18.1)", winnerId: "mi", result: "Mumbai Indians won by 7 wickets" },
  { id: "m12", matchNo: 12, date: "2026-11-11", time: "7:30 PM", venue: "M. Chinnaswamy Stadium, Bengaluru", homeTeamId: "rcb", awayTeamId: "csk", status: "Completed", homeScore: "196/4 (20)", awayScore: "170/7 (20)", winnerId: "rcb", result: "Royal Challengers Bengaluru won by 26 runs" },
  { id: "m13", matchNo: 13, date: "2026-11-12", time: "7:30 PM", venue: "Maharaja Yadavindra Singh Stadium, Mullanpur", homeTeamId: "pbks", awayTeamId: "dc", status: "Completed", homeScore: "184/7 (20)", awayScore: "166/9 (20)", winnerId: "pbks", result: "Punjab Kings won by 18 runs" },
  { id: "m14", matchNo: 14, date: "2026-11-13", time: "7:30 PM", venue: "Rajiv Gandhi International Stadium, Hyderabad", homeTeamId: "srh", awayTeamId: "gt", status: "Completed", homeScore: "242/5 (20)", awayScore: "210/9 (20)", winnerId: "srh", result: "Sunrisers Hyderabad won by 32 runs" },
  { id: "m15", matchNo: 15, date: "2026-11-14", time: "7:30 PM", venue: "Ekana Cricket Stadium, Lucknow", homeTeamId: "lsg", awayTeamId: "rr", status: "Completed", homeScore: "163/8 (20)", awayScore: "160/7 (20)", winnerId: "lsg", result: "Lucknow Super Giants won by 3 runs" },

  // ---------- Round 4 (upcoming) ----------
  { id: "m16", matchNo: 16, date: "2026-11-28", time: "7:30 PM", venue: "Wankhede Stadium, Mumbai", homeTeamId: "mi", awayTeamId: "dc", status: "Upcoming" },
  { id: "m17", matchNo: 17, date: "2026-11-29", time: "3:30 PM", venue: "MA Chidambaram Stadium, Chennai", homeTeamId: "csk", awayTeamId: "rr", status: "Upcoming" },
  { id: "m18", matchNo: 18, date: "2026-11-29", time: "7:30 PM", venue: "Narendra Modi Stadium, Ahmedabad", homeTeamId: "gt", awayTeamId: "rcb", status: "Upcoming" },
  { id: "m19", matchNo: 19, date: "2026-11-30", time: "7:30 PM", venue: "Maharaja Yadavindra Singh Stadium, Mullanpur", homeTeamId: "pbks", awayTeamId: "kkr", status: "Upcoming" },
  { id: "m20", matchNo: 20, date: "2026-12-01", time: "7:30 PM", venue: "Ekana Cricket Stadium, Lucknow", homeTeamId: "lsg", awayTeamId: "srh", status: "Upcoming" },
];

// All matches that one team plays in (home or away)
export function getMatchesByTeam(teamId: string): Match[] {
  return matches.filter(
    (match) => match.homeTeamId === teamId || match.awayTeamId === teamId
  );
}

export function getUpcomingMatches(): Match[] {
  return matches.filter((match) => match.status === "Upcoming");
}

export function getCompletedMatches(): Match[] {
  return matches.filter((match) => match.status === "Completed");
}
