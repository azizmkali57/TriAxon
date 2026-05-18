import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/header/Navbar";
import Link from "next/link";
import {
  FiTarget, FiSearch, FiZap, FiUsers, FiShield, FiGlobe,
  FiArrowRight, FiCheck, FiStar,
} from "react-icons/fi";

export const metadata = {
  title: "About TriAxon Technologies | Our Story, Team & Values",
  description:
    "Founded in Indore in 2022, TriAxon Technologies is a product engineering company trusted by startups and enterprises across 5+ countries.",
};

const stats = [
  { v: "30+", l: "Projects Shipped", sub: "Across 6 industries" },
  { v: "5+", l: "Countries Served", sub: "UK, UAE, IN, US & more" },
  { v: "4", l: "Core Team", sub: "Senior engineers & designers" },
  { v: "90%", l: "Client Retention", sub: "Long-term partnerships" },
];

const timeline = [
  {
    year: "2022",
    title: "Founded in Indore",
    desc: "Two engineers, one mission — build software that actually ships and performs. Started with 3 clients in the first month.",
    tag: "Origin",
  },
  {
    year: "2023",
    title: "First International Clients",
    desc: "Expanded to UK and UAE markets. Delivered our first fintech dashboard and e-commerce storefront for international brands.",
    tag: "Global Reach",
  },
  {
    year: "2023",
    title: "Mobile & AI Practice Launched",
    desc: "Added Flutter and ML engineering capabilities. Crossed 50 projects delivered with a 100% on-time delivery record.",
    tag: "New Capabilities",
  },
  {
    year: "2025",
    title: "30+ Projects Milestone",
    desc: "Serving clients across fintech, healthtech, logistics, and SaaS. Expanded team with senior design and PM leadership.",
    tag: "Scale",
  },
];

const team = [
  {
    name: "Aziz Ali",
    role: "Co-Founder & CTO",
    avatar: "AA",
    color: "from-[#2B7EC1] to-[#1a5f94]",
    bio: "12+ years in distributed systems and cloud architecture. Previously at Infosys. Leads all technical strategy and architecture decisions at TriAxon.",
    skills: ["System Design", "Cloud Architecture", "Node.js", "AWS"],
  },
  {
    name: "Mustafa Fakhri",
    role: "Design Lead",
    avatar: "MF",
    color: "from-[#6B3FA0] to-[#502d7a]",
    bio: "NID Graduate. Led design at two Series-B startups before joining TriAxon. Expert in design systems, conversion-focused UX, and brand identity.",
    skills: ["UI/UX Design", "Figma", "Design Systems", "Branding"],
  },
  {
    name: "Amaan Husain",
    role: "Project Manager",
    avatar: "AH",
    color: "from-[#00B4C8] to-[#0090a1]",
    bio: "8 years coordinating complex software projects. Ensures every sprint delivers value and every client always knows exactly where things stand.",
    skills: ["Agile/Scrum", "Risk Management", "Client Relations", "Delivery"],
  },
  {
    name: "Ruqaiya Siddiqui",
    role: "Social Media Manager",
    avatar: "RS",
    color: "from-emerald-600 to-emerald-800",
    bio: "Brand strategist and digital growth specialist. Manages TriAxon's content, community presence, and helps clients articulate their product stories.",
    skills: ["Content Strategy", "Social Media", "Growth Marketing", "Brand"],
  },
];

const values = [
  {
    icon: FiTarget,
    title: "Outcome Over Output",
    desc: "We measure success by your business results — not lines of code or hours billed. Every sprint has a defined business goal.",
  },
  {
    icon: FiSearch,
    title: "Radical Transparency",
    desc: "Daily updates, live staging environments, honest timelines. You always know what we're working on and why.",
  },
  {
    icon: FiZap,
    title: "Ship, Then Iterate",
    desc: "We launch lean and improve continuously — speed without sacrificing quality. Time-to-market wins markets.",
  },
  {
    icon: FiUsers,
    title: "Long-Term Partnership",
    desc: "90% of clients return for their next project. We build relationships, not just one-off deliverables.",
  },
  {
    icon: FiShield,
    title: "Security by Default",
    desc: "Every product is built with security-first engineering — not bolted on after. OWASP standards on every project.",
  },
  {
    icon: FiGlobe,
    title: "Global Mindset",
    desc: "World-class practices, async-first communication, and clients on 5 continents. We know how to work across time zones.",
  },
];

// const awards = [
//   { label: "Clutch Top B2B Company", year: "2023", icon: "🏆" },
//   { label: "GoodFirms Top Developer", year: "2023", icon: "⭐" },
//   { label: "NASSCOM Emerging 50", year: "2022", icon: "🚀" },
//   { label: "Startup India Recognised", year: "2021", icon: "🇮🇳" },
// ];

const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "Flutter", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "GitHub Actions"] },
  { category: "Specialities", items: ["AI/ML", "Shopify", "Stripe", "WebSockets"] },
];

const testimonials = [
  {
    text: "TriAxon delivered a product that exceeded every benchmark we set. The team communicates like a true partner, not a vendor.",
    author: "Arjun Mehta",
    role: "CEO, FinEdge Solutions",
    initials: "AM",
    color: "from-[#2B7EC1] to-[#1a5f94]",
  },
  {
    text: "From kickoff to launch in 4 weeks — and it still looked better than what agencies 3× the price have built for us.",
    author: "Mia Chen",
    role: "Head of Marketing, TrailMate",
    initials: "MC",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    text: "The Sanity CMS integration means I update our menu every morning in 2 minutes. Online orders went up 55% in the first month.",
    author: "Sofia Martins",
    role: "Owner, Beautiful Café",
    initials: "SM",
    color: "from-[#6B3FA0] to-[#502d7a]",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We learn your business, users, and goals in a structured 90-minute session. No templates — genuine understanding." },
  { step: "02", title: "Proposal & Scope", desc: "Fixed-price proposal within 48 hours. Clear deliverables, timeline, and success metrics agreed upfront." },
  { step: "03", title: "Design Sprint", desc: "Figma prototypes you can click through before we write a line of code. Feedback loops every 3 days." },
  { step: "04", title: "Agile Build", desc: "Two-week sprints with live staging access. Daily async updates. You always see real progress." },
  { step: "05", title: "Launch & Handoff", desc: "Full documentation, code walkthrough, and 30 days post-launch support included in every project." },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(43,126,193,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(107,63,160,0.12),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#2B7EC1]/30 bg-[#2B7EC1]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4C8] animate-pulse" />
                <span className="text-sm text-[#00B4C8] font-medium font-mono">Est. 2022 · Indore, India</span>
              </div>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-[1.08] mb-6">
                Built by Engineers,
                <br />
                <span className="bg-gradient-to-r from-[#2B7EC1] via-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">
                  Obsessed with Impact
                </span>
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8 max-w-lg">
                We started TriAxon because we were tired of agencies that over-promised and under-delivered. Three years later, 30+ shipped products, and 5 countries served — the mission hasn't changed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  See Our Work <FiArrowRight />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] text-[#9CA3AF] font-semibold text-sm hover:text-white hover:border-white/30 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Right — trust card */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2B7EC1]/10 to-[#6B3FA0]/10 rounded-3xl blur-xl" />
              <div className="relative p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-6">Why clients choose us</p>
                <div className="space-y-4">
                  {[
                    "Fixed-price proposals — no scope creep surprises",
                    "Live staging access throughout the project",
                    "Senior engineers on every project (no juniors)",
                    "30-day post-launch support included",
                    "Full code ownership — no lock-in",
                    "Weekly video calls, daily async updates",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="text-emerald-400 text-xs" />
                      </div>
                      <span className="text-sm text-[#D1D5DB] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["AA", "MF", "AH", "RS"].map((init, i) => (
                      <div
                        key={init}
                        className="w-8 h-8 rounded-full border-2 border-[#0D1117] flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: ["#2B7EC1","#6B3FA0","#00B4C8","#10b981"][i] }}
                      >
                        {init}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-[#9CA3AF]">4 senior specialists, zero junior handoffs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/[0.06]">
          {stats.map(({ v, l, sub }) => (
            <div key={l} className="text-center px-6 py-2">
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-1">{v}</div>
              <div className="text-sm text-white font-medium mb-0.5">{l}</div>
              <div className="text-xs text-[#6B7280]">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              How Every Project{" "}
              <span className="bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-[#9CA3AF] max-w-xl mx-auto">No guesswork. No disappearing acts. A repeatable process that delivers every time.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#2B7EC1]/30 hover:bg-[#2B7EC1]/5 transition-all duration-300">
                <div className="text-3xl font-display font-extrabold text-white/10 mb-4 group-hover:text-[#2B7EC1]/20 transition-colors">{p.step}</div>
                <h3 className="font-semibold text-white text-base mb-2">{p.title}</h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                    <FiArrowRight className="text-[#2B7EC1]/40 text-lg" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="font-display font-bold text-4xl text-white">
              Our Core{" "}
              <span className="bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#2B7EC1]/30 hover:bg-[#2B7EC1]/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2B7EC1]/10 border border-[#2B7EC1]/20 flex items-center justify-center mb-5">
                    <Icon className="text-xl text-[#00B4C8]" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-[#00B4C8] transition-colors">{v.title}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-display font-bold text-4xl text-white">3 Years of Building</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#2B7EC1]/60 via-[#6B3FA0]/40 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year + i} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl border-2 border-[#2B7EC1]/40 bg-[#0D1117] flex flex-col items-center justify-center shrink-0 z-10 group-hover:border-[#2B7EC1] transition-colors">
                    <div className="text-[10px] font-mono text-[#6B7280]">YEAR</div>
                    <div className="text-sm font-bold text-[#2B7EC1]">{item.year}</div>
                  </div>
                  <div className="flex-1 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group-hover:border-white/[0.15] transition-all">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#2B7EC1]/10 text-[#79b8f0] border border-[#2B7EC1]/20 flex-shrink-0">{item.tag}</span>
                    </div>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">What We Build With</p>
            <h2 className="font-display font-bold text-4xl text-white">Our Tech Stack</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((cat) => (
              <div key={cat.category} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-4">{cat.category}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#D1D5DB] font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">The People</p>
            <h2 className="font-display font-bold text-4xl text-white">
              Meet the{" "}
              <span className="bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-[#9CA3AF] mt-4 max-w-lg mx-auto">Small on purpose. Every project is handled by a senior specialist — not passed to a junior.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.15] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-bold text-xl mb-5`}>
                  {m.avatar}
                </div>
                <h3 className="font-semibold text-white text-lg mb-0.5">{m.name}</h3>
                <p className="text-sm text-[#00B4C8] mb-3 font-medium">{m.role}</p>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">{m.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.07] text-[#9CA3AF]">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="font-display font-bold text-4xl text-white">
              What Our{" "}
              <span className="bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-amber-400 fill-amber-400 text-sm" />
                  ))}
                </div>
                <blockquote className="text-[#D1D5DB] text-sm leading-relaxed mb-6 flex-1">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.author}</div>
                    <div className="text-xs text-[#6B7280]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(43,126,193,0.08),transparent)]" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-4">Ready to build?</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Let's Build Something<br />You're Proud Of
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-10">
            Free 30-minute discovery call. Fixed-price proposal in 48 hours. No obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Discovery Call <FiArrowRight />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/[0.12] text-[#9CA3AF] font-semibold hover:text-white hover:border-white/30 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}