// A spinning cricket ball with a message. Used by the loading.tsx files.

interface LoadingSpinnerProps {
  message: string;
}

export default function LoadingSpinner({ message }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      {/* Red ball with a white dashed seam. animate-spin rotates it. */}
      <div className="relative h-14 w-14 animate-spin rounded-full bg-ball shadow-lg">
        <span className="absolute inset-y-1.5 left-1/2 w-0 -translate-x-1/2 border-l-2 border-dashed border-white/90" />
      </div>
      <p className="font-display text-xl font-semibold text-night">{message}</p>
    </div>
  );
}
