// Title area shown at the top of every page.
// Reused on all pages with a different title and subtitle.

interface PageHeaderProps {
  title: string;
  subtitle?: string; // optional
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-10">
      {/* The title rises in when the page opens, then the gold line grows from the left */}
      <h1 className="text-4xl font-extrabold text-night sm:text-5xl motion-safe:animate-rise">{title}</h1>
      <div className="mt-3 h-1.5 w-16 origin-left rounded-full bg-gold motion-safe:animate-grow" style={{ animationDelay: "250ms" }} />
      {subtitle && <p className="mt-4 max-w-2xl text-lg text-slate-600 motion-safe:animate-rise" style={{ animationDelay: "150ms" }}>{subtitle}</p>}
    </div>
  );
}
