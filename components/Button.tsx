// A reusable button with three styles (variants).

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  fullWidth?: boolean;
}

const variantClasses = {
  primary: "bg-gold text-night hover:bg-gold-dark",
  secondary: "border border-slate-300 bg-white text-night hover:border-night hover:bg-slate-50",
  danger: "bg-ball text-white hover:bg-rose-800",
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  // active:scale-95 makes the button shrink a little while it is pressed
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg px-4 py-2 text-sm font-bold transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${
        variantClasses[variant]
      } ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
}
