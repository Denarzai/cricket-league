import LoadingSpinner from "@/components/LoadingSpinner";

// Shown automatically by Next.js while /teams/[id] is loading
export default function Loading() {
  return <LoadingSpinner message="Loading team..." />;
}
