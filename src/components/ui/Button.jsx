"use client";
import { forwardRef } from "react";

const variants = {
  primary:
    "bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white hover:opacity-90 hover:shadow-[0_0_24px_rgba(43,126,193,0.4)] border-transparent",
  outline:
    "border border-[#00B4C8]/40 text-[#00B4C8] hover:border-[#00B4C8] hover:bg-[#00B4C8]/10 bg-transparent",
  ghost:
    "text-[#9CA3AF] hover:text-white hover:bg-white/5 border-transparent bg-transparent",
  teal:
    "bg-[#00B4C8] text-[#0D1117] hover:bg-[#00B4C8]/90 border-transparent font-semibold",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      icon,
      iconRight,
      loading = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`
          inline-flex items-center justify-center gap-2 rounded-lg border
          font-medium transition-all duration-200 cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
          active:scale-[0.98]
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : icon ? (
          <span className="shrink-0">{icon}</span>
        ) : null}
        {children}
        {iconRight && !loading && (
          <span className="shrink-0">{iconRight}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;