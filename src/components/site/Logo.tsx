import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const ink = variant === "light" ? "#FFFFFF" : "#1A237E";
  const sub = variant === "light" ? "rgba(255,255,255,0.7)" : "rgba(26,35,126,0.65)";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative h-11 w-11 rounded-xl bg-gradient-accent shadow-glow grid place-items-center overflow-hidden">
        <svg viewBox="0 0 32 32" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 28 L16 6 L28 28 Z" />
          <path d="M10 28 V18 H22 V28" />
        </svg>
        <span className="absolute inset-0 bg-white/0 group-hover:bg-white/15 transition" />
      </div>
      <div className="leading-tight">
        <div className="font-display font-extrabold tracking-tight text-[15px]" style={{ color: ink, fontFamily: "Sora, sans-serif" }}>
          NITHYA RACHANA
        </div>
        <div className="text-[10px] uppercase tracking-[0.22em]" style={{ color: sub }}>
          Infrastructure &amp; Constructions
        </div>
      </div>
    </Link>
  );
}