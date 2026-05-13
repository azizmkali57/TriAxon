import Link from "next/link";
// import navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/header/Navbar";

export const metadata = {
  title: "Our Services | TriAxon Technologies",
  description: "Full-stack web, mobile, AI/ML, cloud, UI/UX, and digital marketing services for startups and enterprises worldwide.",
};

const services = [

  {
    href:  "/services/fullstack",
    title: "Full-Stack Web Development",
    short: "Next.js · Node.js · PostgreSQL",
    desc:  "High-performance web applications and platforms engineered for scale. From MVPs to enterprise SaaS — built to grow with you.",
    tags:  ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
    gradient: "from-[#2B7EC1]/25 to-transparent",
    border: "hover:border-[#2B7EC1]/40",
    badge: "Most Popular",
  },
  {
    href:  "/services/app-developement",
    title: "Mobile App Development",
    short: "Flutter · React Native · Swift",
    desc:  "Native-quality iOS and Android apps that users love. 4.8★ average rating across 30+ apps launched on both stores.",
    tags:  ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    gradient: "from-[#6B3FA0]/25 to-transparent",
    border: "hover:border-[#6B3FA0]/40",
    badge: null,
  },
  {
    href:  "/services/ui-ux-design",
    title: "UI/UX Design",
    short: "Figma · Design Systems · Prototypes",
    desc:  "User-centred interfaces that convert. We design for delight, accessibility, and business outcomes — not just aesthetics.",
    tags:  ["Figma", "Design Systems", "Prototyping", "User Research"],
    gradient: "from-[#00B4C8]/25 to-transparent",
    border: "hover:border-[#00B4C8]/40",
    badge: null,
  },
  {
    href:  "/services/cloud-deveops",
    title: "Cloud & DevOps",
    short: "AWS · Docker · Kubernetes",
    desc:  "Reliable, auto-scaling infrastructure with zero-downtime deployments. We architect for the traffic you'll have tomorrow.",
    tags:  ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    gradient: "from-[#2B7EC1]/25 to-transparent",
    border: "hover:border-[#2B7EC1]/40",
    badge: null,
  },
  {
    href:  "/services/ai-ml",
    title: "AI & Machine Learning",
    short: "LLMs · RAG · ML Pipelines",
    desc:  "Add real intelligence to your product. LLM integrations, recommendation engines, and custom ML models deployed to production.",
    tags:  ["OpenAI", "LangChain", "PyTorch", "Pinecone", "FastAPI"],
    gradient: "from-[#6B3FA0]/25 to-transparent",
    border: "hover:border-[#6B3FA0]/40",
    badge: "Trending",
  },
  {
    href:  "/services/digital-marketing",
    title: "Digital Marketing",
    short: "SEO · Paid Ads · Growth",
    desc:  "Data-driven growth marketing that fills your pipeline. SEO, paid media, and conversion optimisation all under one roof.",
    tags:  ["SEO", "Google Ads", "Meta Ads", "Content", "Analytics"],
    gradient: "from-[#00B4C8]/25 to-transparent",
    border: "hover:border-[#00B4C8]/40",
    badge: null,
  },
];

const process = [
  { step: "01", label: "Discovery Call", desc: "30-minute no-commitment call to understand your goals." },
  { step: "02", label: "Proposal & Scope", desc: "Detailed scope doc, timeline, and fixed-price quote within 48 hours." },
  { step: "03", label: "Kickoff", desc: "Team assigned, tools set up, first sprint starts within a week." },
  { step: "04", label: "Build & Iterate", desc: "Weekly demos, daily updates, live staging at every milestone." },
  { step: "05", label: "Launch", desc: "Zero-downtime deploy, full handoff, and documentation." },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">
      <Navbar />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(107,63,160,0.15),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#6B3FA0]/30 bg-[#6B3FA0]/10">
            <span className="text-sm text-[#b392d8] font-mono">6 Core Service Areas</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
            Everything Your Product<br />
            <span className="bg-gradient-to-r from-[#2B7EC1] via-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">
              Needs to Succeed
            </span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
            From idea to production — we cover the full product lifecycle. Strategy, design, engineering, cloud, AI, and growth.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="group block">
              <div className={`relative h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 overflow-hidden ${s.border} hover:-translate-y-1.5 transition-all duration-300`}>
                {/* Gradient blob */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative">
                  {s.badge && (
                    <span className="absolute -top-1 right-0 text-xs px-2.5 py-0.5 rounded-full bg-[#2B7EC1]/20 text-[#79b8f0] border border-[#2B7EC1]/30">
                      {s.badge}
                    </span>
                  )}
                  <div className="text-4xl mb-4">{s.emoji}</div>
                  <h2 className="font-display font-bold text-xl text-white mb-1 group-hover:text-[#00B4C8] transition-colors">{s.title}</h2>
                  <p className="text-xs font-mono text-[#9CA3AF] mb-4">{s.short}</p>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {s.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-[#9CA3AF] border border-white/[0.07]">{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2B7EC1] group-hover:text-[#00B4C8] transition-colors">
                    Explore Service
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ENGAGEMENT PROCESS ───────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="font-display font-bold text-4xl text-white">From Inquiry to Launch</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex-1 relative group">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-1/2 w-full h-px bg-gradient-to-r from-[#2B7EC1]/40 to-[#00B4C8]/20 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center text-center px-4 pb-10 md:pb-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2B7EC1] to-[#6B3FA0] flex items-center justify-center text-white text-xs font-bold mb-4 group-hover:scale-110 transition-transform">
                    {p.step}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{p.label}</h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">Book a free 30-minute consultation and we'll map out exactly what your product needs.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold text-base hover:opacity-90 transition-opacity">
            Book Free Consultation →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}