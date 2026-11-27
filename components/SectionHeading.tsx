import Link from "next/link";

// Heading for a section of a page, with an optional link on the right.
// e.g. <SectionHeading title="Upcoming matches" linkHref="/fixtures" linkText="All fixtures" />

interface SectionHeadingProps {
  title: string;
  linkHref?: string;
  linkText?: string;
}

export default function SectionHeading({ title, linkHref, linkText }: SectionHeadingProps) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4 border-b-2 border-slate-200 pb-2">
      <h2 className="text-3xl font-bold text-night">{title}</h2>
      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="shrink-0 rounded-full bg-night px-4 py-1.5 text-sm font-semibold text-white hover:bg-night-light"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
