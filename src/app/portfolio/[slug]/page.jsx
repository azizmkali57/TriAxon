import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "finedge-dashboard": {
    title: "FinEdge Dashboard",
    industry: "Fintech · London, UK",
    duration: "14 weeks",
    team: "4 engineers, 1 designer, 1 PM",
    emoji: "📈",
    gradient: "from-[#2B7EC1]/30 via-[#0D1F3C] to-[#0A1628]",
    accentColor: "#2B7EC1",
    stack: ["Next.js 14", "FastAPI", "PostgreSQL", "Redis", "AWS", "Chart.js", "Stripe"],
    overview: "FinEdge is a London-based fintech startup that provides retail traders with professional-grade portfolio analytics. They needed to replace a slow, clunky legacy dashboard with a real-time, high-performance platform — while maintaining 100% uptime for their 8,000 active subscribers.",
    challenge: "The existing dashboard was built on PHP and jQuery, with blocking API calls that caused 8–12 second load times during market hours. Data refresh required full page reloads. Users were churning because competitors were faster.",
    solution: "We rebuilt the platform from the ground up using Next.js App Router with server-side streaming, a FastAPI backend with Redis caching for market data, and WebSocket connections for real-time price updates. We introduced a component-level data fetching architecture that loads above-the-fold content in under 800ms.",
    results: [
      { metric: "8s → 0.9s", label: "Page Load Time" },
      { metric: "40%",       label: "User Engagement Increase" },
      { metric: "28%",       label: "Churn Reduction in 60 days" },
      { metric: "99.97%",    label: "Uptime since launch" },
    ],
    testimonial: {
      text: "TriAxon delivered beyond our expectations. The new dashboard is faster than Bloomberg Terminal on our test machines. Our NPS went from 32 to 71 in 90 days.",
      author: "Arjun Mehta",
      role: "CEO, FinEdge Solutions",
    },
    process: [
      { phase: "Discovery",    weeks: "1–2",   desc: "Stakeholder interviews, analytics audit, technical debt assessment, and performance profiling of the legacy system." },
      { phase: "Architecture", weeks: "2–3",   desc: "Designed the new data model, caching strategy, WebSocket architecture, and CDN configuration." },
      { phase: "Build",        weeks: "4–11",  desc: "8 two-week sprints with weekly stakeholder demos, parallel migration, and zero-downtime cutover plan." },
      { phase: "Launch & QA",  weeks: "12–14", desc: "Load testing at 5× peak traffic, security audit, canary deployment, and full handoff." },
    ],
  },
  "logiflow-mobile": {
    title: "LogiFlow Mobile",
    industry: "Logistics · UAE & India",
    duration: "18 weeks",
    team: "3 mobile engineers, 1 backend, 1 designer",
    emoji: "🚚",
    gradient: "from-[#6B3FA0]/30 via-[#0D1F3C] to-[#0A1628]",
    accentColor: "#6B3FA0",
    stack: ["Flutter 3", "Node.js", "Firebase", "Google Maps API", "FCM", "PostgreSQL"],
    overview: "LogiFlow connects 200+ delivery drivers with 50+ enterprise clients across UAE and India. They needed a mobile app that worked reliably in low-connectivity areas and handled real-time GPS tracking at scale.",
    challenge: "Drivers frequently operate in areas with poor connectivity. The previous app lost tracking data and crashed on network loss. The backend couldn't handle concurrent GPS pings from 200+ drivers during peak hours.",
    solution: "We built an offline-first Flutter app with local SQLite storage and background sync when connectivity returned. The Node.js backend was restructured with message queues to handle GPS ping storms, and we implemented spatial indexing in PostgreSQL for efficient route queries.",
    results: [
      { metric: "50K+", label: "Daily Active Users" },
      { metric: "4.8★", label: "Play Store Rating" },
      { metric: "99.2%", label: "GPS Accuracy Uptime" },
      { metric: "0",    label: "Crashes in 6 months" },
    ],
    testimonial: {
      text: "The offline-first architecture was a game-changer. Drivers in rural areas can now complete deliveries without worrying about connectivity. Disputes dropped 70%.",
      author: "Sarah Williams",
      role: "Product Manager, LogiFlow UK",
    },
    process: [
      { phase: "Research",   weeks: "1–2",  desc: "Field research with 20 drivers, connectivity mapping across delivery zones, UX workshops." },
      { phase: "Design",     weeks: "3–5",  desc: "Driver-first UX design optimised for one-handed use, glare-resistant colour scheme, large tap targets." },
      { phase: "Build",      weeks: "6–15", desc: "Flutter app with offline sync, Node.js backend with Redis queuing, Firebase for push notifications." },
      { phase: "Pilot",      weeks: "16–18", desc: "Beta with 20 drivers, real-world testing, App Store / Play Store submission and approval." },
    ],
  },
};

// Generate static params
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = projects[params.slug];
  if (!p) return {};
  return {
    title: `${p.title} — Case Study | TriAxon Technologies`,
    description: p.overview.slice(0, 155),
  };
}

export default function CaseStudyPage({ params }) {
  const p = projects[params.slug];
  if (!p) notFound();

  return (
    <main className="bg-[#0D1117] min-h-screen">

      {/* HERO */}
      <section className={`relative pt-36 pb-24 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.04),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            All Projects
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-mono text-[#9CA3AF] mb-3">{p.industry}</p>
              <h1 className="font-display font-extrabold text-5xl text-white mb-6 leading-tight">{p.title}</h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">{p.overview}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#9CA3AF]">Duration:</span>
                  <span className="text-white font-medium">{p.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#9CA3AF]">Team:</span>
                  <span className="text-white font-medium">{p.team}</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="text-[10rem] leading-none opacity-60">{p.emoji}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {p.results.map((r) => (
            <div key={r.label}>
              <div className="font-display font-extrabold text-4xl text-white mb-1" style={{ color: p.accentColor }}>{r.metric}</div>
              <div className="text-sm text-[#9CA3AF]">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
            <h2 className="font-display font-bold text-2xl text-white mb-4">🔴 The Challenge</h2>
            <p className="text-[#9CA3AF] leading-relaxed">{p.challenge}</p>
          </div>
          <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
            <h2 className="font-display font-bold text-2xl text-white mb-4">✅ Our Solution</h2>
            <p className="text-[#9CA3AF] leading-relaxed">{p.solution}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-6">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {p.stack.map((t) => (
              <span key={t} className="px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.04] text-sm text-[#9CA3AF]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Delivery</p>
            <h2 className="font-display font-bold text-4xl text-white">How We Did It</h2>
          </div>
          <div className="space-y-4">
            {p.process.map((phase) => (
              <div key={phase.phase} className="flex gap-6 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <div className="w-20 shrink-0">
                  <div className="text-xs font-mono text-[#9CA3AF] mb-0.5">WEEKS</div>
                  <div className="font-semibold text-white text-sm">{phase.weeks}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{phase.phase}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-6">💬</div>
          <blockquote className="text-xl text-white leading-relaxed mb-8 font-light italic">
            "{p.testimonial.text}"
          </blockquote>
          <div className="font-semibold text-white">{p.testimonial.author}</div>
          <div className="text-sm text-[#9CA3AF]">{p.testimonial.role}</div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Want Similar Results?</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">Let's talk about what we can build for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold hover:opacity-90 transition-opacity">
              Start Your Project →
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl border border-white/20 text-[#9CA3AF] font-semibold hover:text-white hover:border-white/40 transition-colors">
              View More Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}