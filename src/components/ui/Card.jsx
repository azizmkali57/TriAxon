"use client";

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
  animated = false,
  padding = "md",
}) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        relative rounded-2xl border border-white/[0.08]
        bg-white/[0.03] backdrop-blur-sm overflow-hidden
        transition-all duration-300
        ${hover ? "hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.05]" : ""}
        ${glow ? "hover:shadow-[0_0_40px_rgba(43,126,193,0.15)]" : ""}
        ${animated ? "animated-border" : ""}
        ${paddings[padding]}
        ${className}
      `}
    >
      {}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2B7EC1]/30 to-transparent" />
      {children}
    </div>
  );
}