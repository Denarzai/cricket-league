import { teams } from "@/data/teams";

// A thin bar made of the 10 team colours, side by side.
// Used under the navbar and on top of the footer.
// When the page loads, the pieces drop in one by one (each one starts 60 ms after the last).

interface TeamStripeProps {
  height?: "thin" | "thick"; // optional, default is thin
}

export default function TeamStripe({ height = "thin" }: TeamStripeProps) {
  return (
    <div className={`flex w-full ${height === "thick" ? "h-2" : "h-1"}`} aria-hidden="true">
      {teams.map((team, index) => (
        <div
          key={team.id}
          className="flex-1 origin-top motion-safe:animate-drop"
          style={{ backgroundColor: team.color, animationDelay: `${index * 60}ms` }}
        />
      ))}
    </div>
  );
}
