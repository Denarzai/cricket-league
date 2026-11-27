import type { Metadata } from "next";
import { getPointsTable } from "@/lib/pointsTable";
import PageHeader from "@/components/PageHeader";
import PointsTable from "@/components/PointsTable";

export const metadata: Metadata = {
  title: "Points Table",
  description: "Current standings of all 10 IPL teams.",
};

// Server Component: the table is calculated from the completed matches.
export default function PointsTablePage() {
  return (
    <div>
      <PageHeader
        title="Points Table"
        subtitle="A win is worth 2 points. Teams with equal points are listed by name."
      />
      <PointsTable rows={getPointsTable()} />
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
        <span className="flex items-center gap-2">
          <span className="h-4 w-1.5 rounded bg-gold" /> Top 4 go to the playoffs
        </span>
        <span>P = Played, W = Won, L = Lost, Pts = Points</span>
      </div>
    </div>
  );
}
