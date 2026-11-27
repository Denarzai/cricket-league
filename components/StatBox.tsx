// A small box that shows one number with a label, e.g. "Runs: 2310"

interface StatBoxProps {
  label: string;
  value: string | number;
}

export default function StatBox({ label, value }: StatBoxProps) {
  return (
    <div className="rounded-xl border-t-4 border-gold bg-white p-4 shadow-sm">
      {/* Big number in the scoreboard font */}
      <p className="font-display text-4xl font-bold leading-none text-night">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}
