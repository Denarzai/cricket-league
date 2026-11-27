import { Player } from "@/types";

// Mock data: 40 IPL players (4 from each team).
// Names, teams and playing styles are real. The stats are MOCK numbers made up
// for this project, they are not the players' real records.
export const players: Player[] = [
  // ---------- Mumbai Indians ----------
  { id: "rohit-sharma", name: "Rohit Sharma", teamId: "mi", role: "Batter", age: 39, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm off break", matches: 14, runs: 418, highScore: 76, average: 29.9, strikeRate: 149.3, wickets: 0, economy: 0, credits: 9.5, image: "/players/rohit-sharma.svg" },
  { id: "suryakumar-yadav", name: "Suryakumar Yadav", teamId: "mi", role: "Batter", age: 36, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 14, runs: 602, highScore: 73, average: 54.7, strikeRate: 167.2, wickets: 0, economy: 0, credits: 10.5, image: "/players/suryakumar-yadav.svg" },
  { id: "hardik-pandya", name: "Hardik Pandya", teamId: "mi", role: "All-rounder", age: 33, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast-medium", matches: 13, runs: 245, highScore: 48, average: 24.5, strikeRate: 158.1, wickets: 13, economy: 9.1, credits: 9.5, image: "/players/hardik-pandya.svg" },
  { id: "jasprit-bumrah", name: "Jasprit Bumrah", teamId: "mi", role: "Bowler", age: 32, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast", matches: 12, runs: 15, highScore: 8, average: 5.0, strikeRate: 93.8, wickets: 19, economy: 6.7, credits: 10.5, image: "/players/jasprit-bumrah.svg" },

  // ---------- Chennai Super Kings ----------
  { id: "ruturaj-gaikwad", name: "Ruturaj Gaikwad", teamId: "csk", role: "Batter", age: 29, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 14, runs: 512, highScore: 88, average: 39.4, strikeRate: 138.0, wickets: 0, economy: 0, credits: 9.5, image: "/players/ruturaj-gaikwad.svg" },
  { id: "ms-dhoni", name: "MS Dhoni", teamId: "csk", role: "Wicketkeeper", age: 45, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 14, runs: 168, highScore: 37, average: 28.0, strikeRate: 152.7, wickets: 0, economy: 0, credits: 8, image: "/players/ms-dhoni.svg" },
  { id: "shivam-dube", name: "Shivam Dube", teamId: "csk", role: "All-rounder", age: 33, battingStyle: "Left-hand bat", bowlingStyle: "Right-arm medium", matches: 14, runs: 390, highScore: 66, average: 32.5, strikeRate: 155.4, wickets: 4, economy: 9.8, credits: 9, image: "/players/shivam-dube.svg" },
  { id: "noor-ahmad", name: "Noor Ahmad", teamId: "csk", role: "Bowler", age: 21, battingStyle: "Right-hand bat", bowlingStyle: "Left-arm wrist spin", matches: 14, runs: 12, highScore: 6, average: 4.0, strikeRate: 85.7, wickets: 21, economy: 7.9, credits: 9, image: "/players/noor-ahmad.svg" },

  // ---------- Royal Challengers Bengaluru ----------
  { id: "virat-kohli", name: "Virat Kohli", teamId: "rcb", role: "Batter", age: 38, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 15, runs: 657, highScore: 92, average: 54.8, strikeRate: 145.0, wickets: 0, economy: 0, credits: 11, image: "/players/virat-kohli.svg" },
  { id: "rajat-patidar", name: "Rajat Patidar", teamId: "rcb", role: "Batter", age: 33, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 14, runs: 355, highScore: 64, average: 27.3, strikeRate: 151.1, wickets: 0, economy: 0, credits: 8.5, image: "/players/rajat-patidar.svg" },
  { id: "phil-salt", name: "Phil Salt", teamId: "rcb", role: "Wicketkeeper", age: 30, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 13, runs: 410, highScore: 65, average: 34.2, strikeRate: 175.2, wickets: 0, economy: 0, credits: 9, image: "/players/phil-salt.svg" },
  { id: "josh-hazlewood", name: "Josh Hazlewood", teamId: "rcb", role: "Bowler", age: 35, battingStyle: "Left-hand bat", bowlingStyle: "Right-arm fast", matches: 12, runs: 9, highScore: 5, average: 4.5, strikeRate: 75.0, wickets: 20, economy: 8.4, credits: 9.5, image: "/players/josh-hazlewood.svg" },

  // ---------- Kolkata Knight Riders ----------
  { id: "ajinkya-rahane", name: "Ajinkya Rahane", teamId: "kkr", role: "Batter", age: 38, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 13, runs: 381, highScore: 61, average: 31.8, strikeRate: 147.6, wickets: 0, economy: 0, credits: 8, image: "/players/ajinkya-rahane.svg" },
  { id: "rinku-singh", name: "Rinku Singh", teamId: "kkr", role: "Batter", age: 29, battingStyle: "Left-hand bat", bowlingStyle: "None", matches: 14, runs: 296, highScore: 46, average: 32.9, strikeRate: 154.2, wickets: 0, economy: 0, credits: 8.5, image: "/players/rinku-singh.svg" },
  { id: "sunil-narine", name: "Sunil Narine", teamId: "kkr", role: "All-rounder", age: 38, battingStyle: "Left-hand bat", bowlingStyle: "Right-arm off break", matches: 13, runs: 246, highScore: 44, average: 20.5, strikeRate: 162.0, wickets: 14, economy: 7.0, credits: 9.5, image: "/players/sunil-narine.svg" },
  { id: "varun-chakravarthy", name: "Varun Chakravarthy", teamId: "kkr", role: "Bowler", age: 35, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm leg break", matches: 13, runs: 6, highScore: 4, average: 3.0, strikeRate: 75.0, wickets: 18, economy: 7.6, credits: 9, image: "/players/varun-chakravarthy.svg" },

  // ---------- Delhi Capitals ----------
  { id: "kl-rahul", name: "KL Rahul", teamId: "dc", role: "Wicketkeeper", age: 34, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 14, runs: 539, highScore: 93, average: 44.9, strikeRate: 141.5, wickets: 0, economy: 0, credits: 10, image: "/players/kl-rahul.svg" },
  { id: "tristan-stubbs", name: "Tristan Stubbs", teamId: "dc", role: "Batter", age: 26, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 14, runs: 301, highScore: 57, average: 33.4, strikeRate: 160.1, wickets: 0, economy: 0, credits: 8, image: "/players/tristan-stubbs.svg" },
  { id: "axar-patel", name: "Axar Patel", teamId: "dc", role: "All-rounder", age: 32, battingStyle: "Left-hand bat", bowlingStyle: "Slow left-arm", matches: 13, runs: 228, highScore: 43, average: 25.3, strikeRate: 150.0, wickets: 11, economy: 7.8, credits: 9, image: "/players/axar-patel.svg" },
  { id: "kuldeep-yadav", name: "Kuldeep Yadav", teamId: "dc", role: "Bowler", age: 31, battingStyle: "Left-hand bat", bowlingStyle: "Left-arm wrist spin", matches: 14, runs: 18, highScore: 9, average: 6.0, strikeRate: 90.0, wickets: 17, economy: 7.1, credits: 9, image: "/players/kuldeep-yadav.svg" },

  // ---------- Gujarat Titans ----------
  { id: "shubman-gill", name: "Shubman Gill", teamId: "gt", role: "Batter", age: 27, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 15, runs: 641, highScore: 96, average: 49.3, strikeRate: 154.8, wickets: 0, economy: 0, credits: 10.5, image: "/players/shubman-gill.svg" },
  { id: "sai-sudharsan", name: "Sai Sudharsan", teamId: "gt", role: "Batter", age: 25, battingStyle: "Left-hand bat", bowlingStyle: "None", matches: 15, runs: 690, highScore: 108, average: 49.3, strikeRate: 152.3, wickets: 0, economy: 0, credits: 10.5, image: "/players/sai-sudharsan.svg" },
  { id: "jos-buttler", name: "Jos Buttler", teamId: "gt", role: "Wicketkeeper", age: 36, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 14, runs: 512, highScore: 97, average: 46.5, strikeRate: 162.0, wickets: 0, economy: 0, credits: 10, image: "/players/jos-buttler.svg" },
  { id: "rashid-khan", name: "Rashid Khan", teamId: "gt", role: "Bowler", age: 28, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm leg break", matches: 15, runs: 84, highScore: 24, average: 14.0, strikeRate: 175.0, wickets: 15, economy: 8.2, credits: 9.5, image: "/players/rashid-khan.svg" },

  // ---------- Rajasthan Royals ----------
  { id: "yashasvi-jaiswal", name: "Yashasvi Jaiswal", teamId: "rr", role: "Batter", age: 24, battingStyle: "Left-hand bat", bowlingStyle: "None", matches: 14, runs: 559, highScore: 75, average: 43.0, strikeRate: 158.4, wickets: 0, economy: 0, credits: 10, image: "/players/yashasvi-jaiswal.svg" },
  { id: "dhruv-jurel", name: "Dhruv Jurel", teamId: "rr", role: "Wicketkeeper", age: 25, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 14, runs: 288, highScore: 53, average: 28.8, strikeRate: 151.6, wickets: 0, economy: 0, credits: 7.5, image: "/players/dhruv-jurel.svg" },
  { id: "riyan-parag", name: "Riyan Parag", teamId: "rr", role: "All-rounder", age: 25, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm leg break", matches: 14, runs: 393, highScore: 95, average: 30.2, strikeRate: 166.5, wickets: 4, economy: 9.4, credits: 8.5, image: "/players/riyan-parag.svg" },
  { id: "jofra-archer", name: "Jofra Archer", teamId: "rr", role: "Bowler", age: 31, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast", matches: 12, runs: 30, highScore: 12, average: 7.5, strikeRate: 136.4, wickets: 14, economy: 8.9, credits: 9, image: "/players/jofra-archer.svg" },

  // ---------- Sunrisers Hyderabad ----------
  { id: "travis-head", name: "Travis Head", teamId: "srh", role: "Batter", age: 32, battingStyle: "Left-hand bat", bowlingStyle: "Right-arm off break", matches: 14, runs: 520, highScore: 102, average: 37.1, strikeRate: 181.2, wickets: 1, economy: 9.5, credits: 10, image: "/players/travis-head.svg" },
  { id: "abhishek-sharma", name: "Abhishek Sharma", teamId: "srh", role: "All-rounder", age: 26, battingStyle: "Left-hand bat", bowlingStyle: "Slow left-arm", matches: 14, runs: 484, highScore: 141, average: 34.6, strikeRate: 193.6, wickets: 3, economy: 9.0, credits: 10, image: "/players/abhishek-sharma.svg" },
  { id: "heinrich-klaasen", name: "Heinrich Klaasen", teamId: "srh", role: "Wicketkeeper", age: 35, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 14, runs: 487, highScore: 105, average: 44.3, strikeRate: 172.7, wickets: 0, economy: 0, credits: 9.5, image: "/players/heinrich-klaasen.svg" },
  { id: "pat-cummins", name: "Pat Cummins", teamId: "srh", role: "Bowler", age: 33, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast", matches: 14, runs: 97, highScore: 22, average: 16.2, strikeRate: 168.0, wickets: 16, economy: 9.3, credits: 9, image: "/players/pat-cummins.svg" },

  // ---------- Lucknow Super Giants ----------
  { id: "rishabh-pant", name: "Rishabh Pant", teamId: "lsg", role: "Wicketkeeper", age: 29, battingStyle: "Left-hand bat", bowlingStyle: "None", matches: 14, runs: 369, highScore: 118, average: 30.8, strikeRate: 147.0, wickets: 0, economy: 0, credits: 9.5, image: "/players/rishabh-pant.svg" },
  { id: "nicholas-pooran", name: "Nicholas Pooran", teamId: "lsg", role: "Batter", age: 31, battingStyle: "Left-hand bat", bowlingStyle: "None", matches: 14, runs: 524, highScore: 87, average: 40.3, strikeRate: 196.3, wickets: 0, economy: 0, credits: 10, image: "/players/nicholas-pooran.svg" },
  { id: "mitchell-marsh", name: "Mitchell Marsh", teamId: "lsg", role: "All-rounder", age: 35, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm medium", matches: 13, runs: 498, highScore: 117, average: 41.5, strikeRate: 160.1, wickets: 3, economy: 10.2, credits: 9.5, image: "/players/mitchell-marsh.svg" },
  { id: "mohammed-shami", name: "Mohammed Shami", teamId: "lsg", role: "Bowler", age: 36, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast", matches: 12, runs: 11, highScore: 7, average: 3.7, strikeRate: 84.6, wickets: 13, economy: 9.0, credits: 8.5, image: "/players/mohammed-shami.svg" },

  // ---------- Punjab Kings ----------
  { id: "shreyas-iyer", name: "Shreyas Iyer", teamId: "pbks", role: "Batter", age: 31, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 16, runs: 604, highScore: 97, average: 50.3, strikeRate: 171.1, wickets: 0, economy: 0, credits: 10.5, image: "/players/shreyas-iyer.svg" },
  { id: "prabhsimran-singh", name: "Prabhsimran Singh", teamId: "pbks", role: "Wicketkeeper", age: 26, battingStyle: "Right-hand bat", bowlingStyle: "None", matches: 16, runs: 549, highScore: 91, average: 34.3, strikeRate: 165.4, wickets: 0, economy: 0, credits: 9, image: "/players/prabhsimran-singh.svg" },
  { id: "arshdeep-singh", name: "Arshdeep Singh", teamId: "pbks", role: "Bowler", age: 27, battingStyle: "Left-hand bat", bowlingStyle: "Left-arm fast-medium", matches: 16, runs: 14, highScore: 6, average: 7.0, strikeRate: 100.0, wickets: 21, economy: 8.9, credits: 9.5, image: "/players/arshdeep-singh.svg" },
  { id: "yuzvendra-chahal", name: "Yuzvendra Chahal", teamId: "pbks", role: "Bowler", age: 36, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm leg break", matches: 14, runs: 5, highScore: 3, average: 2.5, strikeRate: 71.4, wickets: 16, economy: 9.5, credits: 9, image: "/players/yuzvendra-chahal.svg" },
];

// Find one player by id. Returns undefined if the id does not exist.
export function getPlayerById(id: string): Player | undefined {
  return players.find((player) => player.id === id);
}

// All players of one team
export function getPlayersByTeam(teamId: string): Player[] {
  return players.filter((player) => player.teamId === teamId);
}
