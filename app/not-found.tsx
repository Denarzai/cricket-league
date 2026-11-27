import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
};

// Shown for unknown URLs and whenever a page calls notFound()
export default function NotFound() {
  return (
    <div className="floodlights flex flex-col items-center rounded-3xl px-6 py-20 text-center text-white">
      {/* A cricket ball bouncing above the 404. animate-bounce is built into Tailwind. */}
      <span aria-hidden="true" className="relative mb-6 h-12 w-12 rounded-full bg-ball shadow-lg motion-safe:animate-bounce">
        <span className="absolute inset-y-2 left-1/2 w-0 -translate-x-1/2 border-l-2 border-dashed border-white/80" />
      </span>
      <p className="font-display text-8xl font-extrabold leading-none text-gold sm:text-9xl motion-safe:animate-stamp">404</p>
      <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Out of bounds!</h1>
      <p className="mt-3 max-w-md text-slate-300">
        We could not find that page. The team or player may not exist, or the link is wrong.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-lg bg-gold px-6 py-3 font-bold text-night hover:bg-gold-dark">
          Go home
        </Link>
        <Link href="/players" className="rounded-lg border-2 border-white/70 px-6 py-3 font-bold hover:bg-white hover:text-night">
          Browse players
        </Link>
      </div>
    </div>
  );
}
