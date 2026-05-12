import Link from "next/link";

export const metadata = {
  title: "Full-Stack Web Development Services | TriAxon Technologies",
  description: "Custom web applications built with Next.js, React, Node.js, and PostgreSQL. MVPs to enterprise SaaS, delivered on time.",
};

const techStack = [
  { layer: "Frontend",  items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"] },
  { layer: "Backend",   items: ["Node.js", "Express", "NestJS", "tRPC", "GraphQL", "REST APIs"] },
  { layer: "Database",  items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Supabase", "MySQL"] },
  { layer: "Infra",     items: ["Vercel", "AWS EC2/RDS", "Docker", "Nginx", "CloudFront", "GitHub Actions"] },
];

const services = [
  { icon: "⚡", title: "SaaS Platform Development",   desc: "Multi-tenant SaaS with billing (Stripe), RBAC, onboarding flows, and admin dashboards." },
  { icon: "🛒", title: "E-Commerce Solutions",         desc: "Custom storefronts, inventory management, payment gateways, and multi-vendor platforms." },
  { icon: "📊", title: "Internal Tools & Dashboards", desc: "Data dashboards, CRM systems, ERP modules, and admin panels for ops teams." },
  { icon: "🔗", title: "API Development & Integration", desc: "RESTful and GraphQL APIs, third-party integrations, webhooks, and microservices." },
  { icon: "🔄", title: "Legacy Modernisation",         desc: "Migrate PHP, .NET, or jQuery codebases to modern React/Next.js stacks without downtime." },
  { icon: "🌐", title: "Marketing & Content Sites",    desc: "SEO-optimised Next.js sites with headless CMS (Sanity, Contentful, or Strapi)." },
];

const caseStudies = [
  { name: "FinEdge Dashboard", industry: "Fintech", result: "40% user engagement ↑", stack: "Next.js · FastAPI · PostgreSQL", emoji: "📈" },
  { name: "EduTrack LMS",      industry: "EdTech",  result: "7× faster page loads",   stack: "Next.js · Supabase · Stripe",   emoji: "📚" },
  { name: "RetailMax",         industry: "Retail",  result: "$5M+ GMV handled",       stack: "React · Node.js · AWS · Redis", emoji: "🛒" },
];

const deliverables = [
  "Full source code on your GitHub",
  "Figma design files",
  "CI/CD pipeline setup",
  "Full test suite (unit + integration)",
  "API documentation",
  "Deployment runbook",
  "30-day post-launch support",
];

export default function FullStackPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(43,126,193,0.2),transparent)]" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-4xl mb-5">🌐</span>
              <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Full-Stack Web<br />
                <span className="bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                We engineer web applications that handle real load, real users, and real business complexity. Built on modern stacks. Shipped on time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold hover:opacity-90 transition-opacity">
                  Get a Quote →
                </Link>
                <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#00B4C8]/40 text-[#00B4C8] font-semibold hover:bg-[#00B4C8]/10 transition-colors">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "80+", l: "Web Apps Shipped" },
                { v: "99.9%", l: "Avg. Uptime" },
                { v: "< 1.5s", l: "Avg. Load Time" },
                { v: "4.9★", l: "Clutch Rating" },
              ].map(({ v, l }) => (
                <div key={l} className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] text-center">
                  <div className="font-display font-extrabold text-3xl text-white mb-1">{v}</div>
                  <div className="text-xs text-[#9CA3AF]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ────────────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Scope of Work</p>
            <h2 className="font-display font-bold text-4xl text-white">What We Build</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#2B7EC1]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-[#00B4C8] transition-colors">{s.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Technology</p>
            <h2 className="font-display font-bold text-4xl text-white">Our Full-Stack Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((t) => (
              <div key={t.layer} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <p className="text-xs font-mono text-[#2B7EC1] uppercase tracking-widest mb-4">{t.layer}</p>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1.5 rounded-lg bg-[#2B7EC1]/8 border border-[#2B7EC1]/15 text-[#9CA3AF]">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Results</p>
            <h2 className="font-display font-bold text-4xl text-white">Web Apps We've Shipped</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div key={c.name} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#2B7EC1]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">{c.emoji}</div>
                <div className="text-xs text-[#9CA3AF] mb-1">{c.industry}</div>
                <h3 className="font-semibold text-white text-lg mb-2">{c.name}</h3>
                <div className="inline-block text-xs px-2.5 py-1 rounded-full bg-[#2B7EC1]/10 text-[#79b8f0] border border-[#2B7EC1]/20 mb-3">{c.result}</div>
                <p className="text-xs font-mono text-[#9CA3AF]">{c.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ─────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">What You Get</p>
            <h2 className="font-display font-bold text-4xl text-white">Complete Deliverables</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliverables.map((d) => (
              <div key={d} className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="w-6 h-6 rounded-full bg-[#00B4C8]/15 border border-[#00B4C8]/30 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-[#00B4C8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-[#9CA3AF]">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Ready to Build Your Web App?</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">Share your idea and get a scoped proposal within 48 hours — no commitment required.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold text-base hover:opacity-90 transition-opacity">
            Start Your Project →
          </Link>
        </div>
      </section>

    </main>
  );
}