// Turns "2026-11-28" into "Sat, 28 Nov 2026"
export function formatDate(date: string): string {
  return new Date(date + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Waits for some milliseconds. We use it to pretend data comes from a slow
// server, so the loading.tsx screen can be seen in the demo.
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
