"use client";
// Client Component because this is our "stateful feature":
// the list of picked players, the team name and messages are kept in useState,
// and the Add / Remove / Save buttons are event handlers (onClick).

import { useState } from "react";
import Image from "next/image";
import { Player, Team } from "@/types";
import Button from "./Button";
import Badge, { roleColors } from "./Badge";

interface FantasyTeamBuilderProps {
  players: Player[];
  teams: Team[];
}

const MAX_PLAYERS = 11;
const BUDGET = 100; // total credits a user can spend

export default function FantasyTeamBuilder({ players, teams }: FantasyTeamBuilderProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [teamName, setTeamName] = useState("");
  const [message, setMessage] = useState("");
  const [saved, setSaved] = useState(false);

  // Values worked out from the state (no extra state needed)
  const selectedPlayers = players.filter((p) => selectedIds.includes(p.id));
  const creditsUsed = selectedPlayers.reduce((sum, p) => sum + p.credits, 0);
  const creditsLeft = BUDGET - creditsUsed;

  function getTeamShortName(teamId: string) {
    return teams.find((t) => t.id === teamId)?.shortName ?? "";
  }

  function getTeamColor(teamId: string) {
    return teams.find((t) => t.id === teamId)?.color ?? "#0f1e46";
  }

  function addPlayer(player: Player) {
    if (selectedIds.length >= MAX_PLAYERS) {
      setMessage(`You already have ${MAX_PLAYERS} players. Remove one first.`);
      return;
    }
    if (player.credits > creditsLeft) {
      setMessage(`Not enough credits for ${player.name}. You have ${creditsLeft} left.`);
      return;
    }
    setSelectedIds([...selectedIds, player.id]);
    setMessage("");
    setSaved(false);
  }

  function removePlayer(playerId: string) {
    setSelectedIds(selectedIds.filter((id) => id !== playerId));
    setMessage("");
    setSaved(false);
  }

  function saveTeam() {
    if (teamName.trim() === "") {
      setMessage("Please give your team a name.");
      return;
    }
    if (selectedIds.length !== MAX_PLAYERS) {
      setMessage(`Pick exactly ${MAX_PLAYERS} players before saving (you have ${selectedIds.length}).`);
      return;
    }
    setMessage("");
    setSaved(true); // fake "save": we just show a confirmation
  }

  function resetTeam() {
    setSelectedIds([]);
    setTeamName("");
    setMessage("");
    setSaved(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* ---------- Left: all players ---------- */}
      <div className="lg:col-span-2">
        <h2 className="mb-3 text-3xl font-bold text-night">Available players</h2>
        <ul className="divide-y divide-slate-100 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          {players.map((player) => {
            const isPicked = selectedIds.includes(player.id);
            return (
              <li
                key={player.id}
                className={`flex items-center gap-3 border-l-4 p-3 ${isPicked ? "bg-amber-50" : ""}`}
                style={{ borderColor: getTeamColor(player.teamId) }}
              >
                <Image src={player.image} alt={player.name} width={40} height={40} className="rounded-full" />
                <div className="flex-1">
                  <p className="font-semibold text-night">{player.name}</p>
                  <p className="text-xs text-slate-500">
                    {getTeamShortName(player.teamId)}, {player.role}
                  </p>
                </div>
                <span className="w-16 text-right font-display text-xl font-bold text-night">{player.credits}<span className="text-xs text-slate-400"> cr</span></span>
                {isPicked ? (
                  <Button variant="danger" onClick={() => removePlayer(player.id)}>Remove</Button>
                ) : (
                  <Button variant="secondary" onClick={() => addPlayer(player)}>Add</Button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ---------- Right: my team summary (shown first on phones) ---------- */}
      {/* The summary looks like a dark "team sheet" */}
      <aside className="floodlights order-first h-fit rounded-2xl p-5 text-white shadow-xl lg:sticky lg:top-24 lg:order-last">
        <h2 className="text-3xl font-bold">My Fantasy XI</h2>

        {/* Animation trick: when the "key" changes, React makes a new <p>, so animate-pop plays again.
            That is why the numbers bounce every time you add or remove a player. */}
        <div className="mt-4 grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl bg-white/10 p-3">
            <p key={selectedIds.length} className="font-display text-4xl font-bold text-gold motion-safe:animate-pop">
              {selectedIds.length}/{MAX_PLAYERS}
            </p>
            <p className="text-xs text-slate-300">Players</p>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <p
              key={creditsLeft}
              className={`font-display text-4xl font-bold motion-safe:animate-pop ${creditsLeft < 10 ? "text-rose-400" : "text-gold"}`}
            >
              {creditsLeft}
            </p>
            <p className="text-xs text-slate-300">Credits left</p>
          </div>
        </div>

        {/* Progress bar of credits used. It turns red when fewer than 10 credits are left. */}
        <div className="mt-3 h-2.5 w-full rounded-full bg-white/15">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${creditsLeft < 10 ? "bg-rose-500" : "bg-gold"}`}
            style={{ width: `${(creditsUsed / BUDGET) * 100}%` }}
          />
        </div>

        {selectedPlayers.length === 0 ? (
          <p className="mt-4 rounded-xl border border-dashed border-white/25 p-4 text-center text-sm text-slate-300">
            No players picked yet. Press “Add” next to a player to start.
          </p>
        ) : (
          <ol className="mt-4 space-y-1.5 text-sm">
            {selectedPlayers.map((player, index) => (
              // A newly added player pops into the list
              <li key={player.id} className="flex items-center justify-between gap-2 rounded-lg bg-white/5 px-2 py-1 motion-safe:animate-pop">
                <span>
                  <span className="font-display font-bold text-gold">{index + 1}.</span> {player.name}
                </span>
                <Badge text={player.role} color={roleColors[player.role]} />
              </li>
            ))}
          </ol>
        )}

        <label htmlFor="teamName" className="mt-5 block text-sm font-semibold">
          Team name
        </label>
        <input
          id="teamName"
          value={teamName}
          onChange={(e) => {
            setTeamName(e.target.value);
            setSaved(false);
          }}
          placeholder="e.g. Super Strikers"
          className="mt-1 w-full rounded-lg bg-white px-3 py-2 text-night focus:outline-none focus:ring-2 focus:ring-gold"
        />

        {/* Error messages shake, the saved message pops */}
        {message && (
          <p key={message} className="mt-3 rounded-lg bg-ball/20 p-3 text-sm font-medium text-rose-200 motion-safe:animate-shake">
            {message}
          </p>
        )}
        {saved && (
          <p className="mt-3 rounded-lg bg-pitch p-3 text-sm font-medium text-white motion-safe:animate-pop">
            ✅ “{teamName}” has been saved with {creditsUsed} credits. Good luck!
          </p>
        )}

        <div className="mt-4 flex gap-2">
          <Button onClick={saveTeam} fullWidth>
            Save team
          </Button>
          <Button variant="secondary" onClick={resetTeam}>
            Reset
          </Button>
        </div>
      </aside>
    </div>
  );
}
