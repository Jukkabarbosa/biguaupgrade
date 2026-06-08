import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "light", size = "md" }: LogoProps) {
  const sizes = {
    sm: { text: "text-lg", tag: "text-[8px] px-1 py-px", icon: "h-4 w-4" },
    md: { text: "text-2xl", tag: "text-[10px] px-1.5 py-0.5", icon: "h-5 w-5" },
    lg: { text: "text-4xl", tag: "text-xs px-2 py-0.5", icon: "h-7 w-7" },
  };
  const s = sizes[size];
  const isLight = variant === "light";

  return (
    <Link to="/" className="inline-flex items-center gap-2 group">
      <div className={`relative ${s.icon} flex items-center justify-center rounded-md bg-accent-yellow text-ink shrink-0`}>
        <Zap className={s.icon} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`display ${s.text} font-black italic tracking-tight ${isLight ? "text-white" : "text-ink"}`}>
          BIGUÁ
        </span>
        <span className={`${s.tag} font-black bg-accent-yellow text-ink rounded-sm self-start mt-0.5 tracking-wider`}>
          TÁ ON
        </span>
      </div>
    </Link>
  );
}
