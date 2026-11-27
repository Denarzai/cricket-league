import { PlayerRole } from "@/types";

// Small coloured label, e.g. "Upcoming", "Batter", "Won"

type BadgeColor = "green" | "blue" | "amber" | "red" | "purple" | "gray";

interface BadgeProps {
  text: string;
  color?: BadgeColor; // optional, default is gray
}

const colorClasses: Record<BadgeColor, string> = {
  green: "bg-emerald-100 text-emerald-800",
  blue: "bg-blue-100 text-blue-800",
  amber: "bg-amber-100 text-amber-900",
  red: "bg-rose-100 text-rose-800",
  purple: "bg-violet-100 text-violet-800",
  gray: "bg-slate-100 text-slate-700",
};

// Every player role gets its own colour, so roles are easy to tell apart
export const roleColors: Record<PlayerRole, BadgeColor> = {
  Batter: "amber",
  Bowler: "blue",
  "All-rounder": "green",
  Wicketkeeper: "purple",
};

export default function Badge({ text, color = "gray" }: BadgeProps) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${colorClasses[color]}`}
    >
      {text}
    </span>
  );
}
