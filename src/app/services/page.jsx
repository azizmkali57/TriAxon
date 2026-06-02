import Link from "next/link";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/header/Navbar";
// import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/pages/services/ServiceCard";
import { SERVICES } from "../../../lib/constants";

export const metadata = {
  title: "Our Services | TriAxon Technologies",
  description:
    "Full-stack web, mobile, AI/ML, cloud, UI/UX, and digital marketing services for startups and enterprises worldwide.",
};

const process = [
  {
    step: "01",
    label: "Discovery Call",
    desc: "30-minute no-commitment call to understand your goals, timeline, and technical requirements.",
    icon: "💬",
  },
  {
    step: "02",
    label: "Proposal & Scope",
    desc: "Detailed scope doc, timeline, and fixed-price quote delivered within 48 hours.",
    icon: "📋",
  },
  {
    step: "03",
    label: "Kickoff Sprint",
    desc: "Team assigned, tools set up, first sprint starts within a week of sign-off.",
    icon: "🚀",
  },
  {
    step: "04",
    label: "Build & Iterate",
    desc: "Weekly demos, daily updates, and live staging environment at every milestone.",
    icon: "⚙️",
  },
  {
    step: "05",
    label: "Launch & Handoff",
    desc: "Zero-downtime deploy, full source handoff, and documentation you can actually use.",
    icon: "✅",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "6", label: "Core Specializations" },
  { value: "48h", label: "Quote Turnaround" },
];

const trustedBy = [
  "Startups",
  "Scale-ups",
  "Enterprises",
  "Agencies",
  "Founders",
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        {/* layered bg effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-5%,rgba(43,126,193,0.13),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(107,63,160,0.10),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* eyebrow pill */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#2B7EC1]/30 bg-[#2B7EC1]/08 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4C8] animate-pulse" />
              <span className="text-sm text-[#79b8f0] font-medium tracking-wide">
                6 Core Service Areas
              </span>
            </div>
          </div>

          {/* headline */}
          <h1 className="font-display font-extrabold text-center leading-[1.06] mb-6">
            <span className="block text-white text-5xl sm:text-6xl lg:text-[4.5rem] mb-2">
              Everything Your Product
            </span>
            <span
              className="block text-5xl sm:text-6xl lg:text-[4.5rem]"
              style={{
                background:
                  "linear-gradient(135deg, #2B7EC1 0%, #6B3FA0 50%, #00B4C8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Needs to Win
            </span>
          </h1>

          <p className="text-center text-[#9CA3AF] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-14">
            From idea to production — strategy, design, engineering, cloud, AI,
            and growth. We're the team you hire when shipping actually matters.
          </p>

          {/* stat row */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-white mb-0.5">
                  {s.value}
                </div>
                <div className="text-xs text-[#6B7280] uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY strip ── */}
      <div className="border-y border-white/[0.05] py-5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2 text-sm text-[#4B5563]">
          <span className="mr-3 text-xs uppercase tracking-widest text-[#374151]">
            Trusted by
          </span>
          {trustedBy.map((t, i) => (
            <span key={t} className="flex items-center gap-2">
              <span className="text-[#9CA3AF]">{t}</span>
              {i < trustedBy.length - 1 && (
                <span className="text-[#1F2937]">·</span>
              )}
            </span>
          ))}
          <span className="ml-3 text-xs text-[#374151]">worldwide</span>
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <ServiceCard key={s.href} s={s} />
        ))}
      </div>

      {/* ── WHY TRIAXON ── */}
      <section className="py-24 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* left text */}
            <div>
              <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-4">
                Why TriAxon
              </p>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
                We don't just build.
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #2B7EC1, #00B4C8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  We deliver outcomes.
                </span>
              </h2>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                Most agencies hand you a finished product and disappear. We stay
                in the room — measuring, iterating, and optimising until your
                business goals are hit.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #2B7EC1, #6B3FA0)",
                }}
              >
                Start a Project →
              </Link>
            </div>

            {/* right feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Fixed-Price Quotes",
                  desc: "No scope creep, no surprise invoices. Agreed price, period.",
                },
                {
                  title: "Weekly Demos",
                  desc: "See real progress every week. You always know where things stand.",
                },
                {
                  title: "Senior-Only Teams",
                  desc: "No juniors on client work. Every project is led by a senior engineer.",
                },
                {
                  title: "Full Ownership",
                  desc: "100% of the source code, IP, and assets are yours on day one.",
                },
                {
                  title: "Post-Launch Support",
                  desc: "60 days of free bug fixes after every launch. We stand by our work.",
                },
                {
                  title: "One Timezone, Always",
                  desc: "Your dedicated PM responds within 4 hours, guaranteed.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-[#2B7EC1]/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#2B7EC1]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      {f.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-[#080D14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#6B3FA0] uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              From Inquiry to Launch
            </h2>
            <p className="text-[#6B7280] max-w-lg mx-auto">
              A proven 5-step process refined across 150+ projects. Predictable,
              transparent, fast.
            </p>
          </div>

          <div className="relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-7 left-[9%] right-[9%] h-px bg-gradient-to-r from-transparent via-[#2B7EC1]/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((p, i) => (
                <div
                  key={p.step}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* step circle */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl mb-4 border border-white/[0.08] bg-white/[0.03] group-hover:border-[#2B7EC1]/40 group-hover:bg-[#2B7EC1]/08 transition-all duration-300 relative z-10">
                    {p.icon}
                  </div>
                  <div className="text-[10px] font-mono text-[#2B7EC1] mb-1">
                    {p.step}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2">
                    {p.label}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-20 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote:
                  "TriAxon delivered our entire SaaS platform in 10 weeks. Quality was outstanding and they were transparent throughout.",
                name: "Arjun Mehta",
                role: "CEO, LaunchPad SaaS",
                accent: "#2B7EC1",
              },
              {
                quote:
                  "The mobile app they built for us has a 4.9★ rating on the App Store. They understood our users better than we did.",
                name: "Sarah Kim",
                role: "Founder, FitTrack",
                accent: "#6B3FA0",
              },
              {
                quote:
                  "Our AI recommendation engine increased revenue by 28% in the first month. These folks really know their ML.",
                name: "David Chen",
                role: "CTO, RetailAI",
                accent: "#00B4C8",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-200"
              >
                {/* stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      style={{ color: t.accent }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#D1D5DB] leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: `${t.accent}22`,
                      color: t.accent,
                      border: `1px solid ${t.accent}44`,
                    }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#6B7280]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(43,126,193,0.10),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_70%_50%,rgba(107,63,160,0.08),transparent)]" />

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-[#9CA3AF]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Currently accepting new projects for Q3 2025
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
            Not sure which service <br className="hidden sm:block" />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #2B7EC1, #6B3FA0 50%, #00B4C8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              you need?
            </span>
          </h2>

          <p className="text-[#9CA3AF] text-lg mb-10 max-w-xl mx-auto">
            Book a free 30-minute consultation. We'll map out exactly what your
            product needs — and give you an honest assessment, even if that
            means referring you elsewhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #2B7EC1, #6B3FA0)",
              }}
            >
              Book Free Consultation →
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-[#9CA3AF] font-semibold text-base border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>

          <p className="text-xs text-[#4B5563] mt-6">
            No obligation · Response within 4 hours · Fixed-price quotes
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
