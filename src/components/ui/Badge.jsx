const variants = {
  blue: "bg-[#2B7EC1]/15 text-[#79b8f0] border-[#2B7EC1]/30",
  purple: "bg-[#6B3FA0]/15 text-[#b392d8] border-[#6B3FA0]/30",
  teal: "bg-[#00B4C8]/15 text-[#00B4C8] border-[#00B4C8]/30",
  green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  gray: "bg-white/5 text-[#9CA3AF] border-white/10",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "blue",
  size = "md",
  dot = false,
  className = "",
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full border font-medium tracking-wide
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === "teal"
              ? "bg-[#00B4C8]"
              : variant === "blue"
              ? "bg-[#2B7EC1]"
              : variant === "purple"
              ? "bg-[#6B3FA0]"
              : "bg-current"
          } animate-pulse`}
        />
      )}
      {children}
    </span>
  );
}