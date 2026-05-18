"use client";
import Link from "next/link";

const iconMap = {
  code: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  mobile: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
    </svg>
  ),
  design: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  cloud: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  ai: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  marketing: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
};

export default function ServiceCard({ s }) {
  return (
    <Link href={s.href} className="group block">
      <div
        className="relative h-full rounded-2xl border bg-[#0D1117] p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = s.accentBorder;
          e.currentTarget.style.boxShadow = `0 0 40px ${s.accentBg}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* top accent line on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }}
        />

        {/* badge */}
        {s.badge && (
          <div className="absolute top-5 right-5">
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider"
              style={{ background: s.accentBg, color: s.accent, border: `1px solid ${s.accentBorder}` }}
            >
              {s.badge}
            </span>
          </div>
        )}

        {/* icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{ background: s.accentBg, color: s.accent }}
        >
          {iconMap[s.iconName]}
        </div>

        {/* title */}
        <h3 className="font-display font-bold text-xl text-white mb-1" style={{ lineHeight: 1.25 }}>
          {s.title}
        </h3>

        {/* mono subtitle */}
        <p className="text-xs font-mono mb-3" style={{ color: s.accent }}>
          {s.short}
        </p>

        {/* description */}
        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">{s.desc}</p>

        {/* stat pill */}
        <div
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full mb-5"
          style={{ background: s.accentBg, color: s.accent, border: `1px solid ${s.accentBorder}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.accent }} />
          {s.stat}
        </div>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {s.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md text-[#6B7280] bg-white/[0.04] border border-white/[0.06]">
              {t}
            </span>
          ))}
        </div>

        {/* CTA arrow */}
        <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: s.accent }}>
          Explore Service
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}