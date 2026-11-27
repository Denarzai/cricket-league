"use client";
// Client Component because the user types in the search box and changes
// the dropdowns. We keep those values in useState and re-filter the list
// on every change. Server Components cannot use state or event handlers.

import { useState } from "react";
import { Player, Team } from "@/types";
import PlayerCard from "./PlayerCard";
import SearchBar from "./SearchBar";
import Button from "./Button";

interface PlayersExplorerProps {
  players: Player[];
  teams: Team[];
}

type SortOption = "name" | "runs" | "wickets" | "average";

export default function PlayersExplorer({ players, teams }: PlayersExplorerProps) {
  const [search, setSearch] = useState("");
  const [teamFilter, setTeamFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  // 1. Search by name
  let shownPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  // 2. Filter by team
  if (teamFilter !== "all") {
    shownPlayers = shownPlayers.filter((player) => player.teamId === teamFilter);
  }

  // 3. Filter by role
  if (roleFilter !== "all") {
    shownPlayers = shownPlayers.filter((player) => player.role === roleFilter);
  }

  // 4. Sort (we copy the array first so we don't change the original)
  shownPlayers = [...shownPlayers].sort((a, b) => {
    if (sortBy === "runs") return b.runs - a.runs;
    if (sortBy === "wickets") return b.wickets - a.wickets;
    if (sortBy === "average") return b.average - a.average;
    return a.name.localeCompare(b.name);
  });

  function getTeamName(teamId: string) {
    const team = teams.find((t) => t.id === teamId);
    return team ? team.name : "Unknown team";
  }

  function resetFilters() {
    setSearch("");
    setTeamFilter("all");
    setRoleFilter("all");
    setSortBy("name");
  }

  const selectClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-night focus:outline-none focus:ring-2 focus:ring-gold";

  return (
    <div>
      {/* Search, filter and sort controls */}
      <div className="mb-6 grid gap-3 rounded-2xl bg-night p-4 shadow-lg sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <SearchBar value={search} onChange={setSearch} placeholder="Search player by name..." />
        </div>

        <select aria-label="Filter by team" value={teamFilter} onChange={(e) => setTeamFilter(e.target.value)} className={selectClass}>
          <option value="all">All teams</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>

        <select aria-label="Filter by role" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className={selectClass}>
          <option value="all">All roles</option>
          <option value="Batter">Batter</option>
          <option value="Bowler">Bowler</option>
          <option value="All-rounder">All-rounder</option>
          <option value="Wicketkeeper">Wicketkeeper</option>
        </select>

        <select
          aria-label="Sort players"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className={selectClass}
        >
          <option value="name">Sort: Name (A-Z)</option>
          <option value="runs">Sort: Most runs</option>
          <option value="wickets">Sort: Most wickets</option>
          <option value="average">Sort: Best average</option>
        </select>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-slate-600">
          Showing <b className="font-display text-xl text-night">{shownPlayers.length}</b> of {players.length} players
        </p>
        <Button variant="secondary" onClick={resetFilters}>
          Reset filters
        </Button>
      </div>

      {shownPlayers.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="text-4xl">🏏</p>
          <p className="mt-3 font-display text-2xl font-bold text-night">No players found</p>
          <p className="mt-1 text-slate-500">No player matches these filters. Change the search or press Reset filters.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shownPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} teamName={getTeamName(player.teamId)} />
          ))}
        </div>
      )}
    </div>
  );
}
