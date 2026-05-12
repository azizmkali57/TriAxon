"use client";
import { useEffect, useRef } from "react";

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
  grid = false,
  reveal = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!reveal) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 80);
              });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reveal]);

  return (
    <section
      ref={ref}
      id={id}
      className={`
        relative py-24 overflow-hidden
        ${dark ? "bg-[#0A1628]" : "bg-transparent"}
        ${grid ? "grid-pattern" : ""}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = "",
}) {
  return (
    <div
      className={`reveal mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-[#00B4C8]" />
          <span className="text-[#00B4C8] text-sm font-semibold tracking-[0.2em] uppercase font-mono">
            {eyebrow}
          </span>
          <span className="w-6 h-px bg-[#00B4C8]" />
        </div>
      )}
      <h2
        className={`font-display font-bold text-[#F4F6F9] leading-tight mb-4
          text-3xl sm:text-4xl lg:text-5xl`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[#9CA3AF] text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}