import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCode,
  FiLayout,
  FiDatabase,
  FiServer,
  FiGitMerge,
  FiCheckCircle,
  FiZap,
  FiClock,
  FiStar,
  FiPackage,
  FiShoppingCart,
  FiTool,
  FiUsers,
  FiGlobe,
  FiLayers,
  FiShield,
  FiBarChart2,
  FiCreditCard,
  FiSearch,
  FiMonitor,
} from "react-icons/fi";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/header/Navbar";

export const metadata = {
  title: "Full-Stack Web Development | TriAxon Technologies",
  description:
    "High-performance web applications engineered for scale. Next.js, Node.js, PostgreSQL — from MVPs to enterprise SaaS.",
};

/* =======================
         DATA
======================= */

const stats = [
  { value: "150+", label: "Web Apps Delivered", icon: FiMonitor },
  { value: "99%",  label: "On-Time Delivery",   icon: FiCheckCircle },
  { value: "90+",  label: "Lighthouse Score",   icon: FiZap },
  { value: "60d",  label: "Free Post-Launch Support", icon: FiStar },
];

const techStack = [
  {
    category: "Frontend",
    icon: FiLayout,
    items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
  },
  {
    category: "Backend",
    icon: FiServer,
    items: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs", "WebSockets"],
  },
  {
    category: "Database",
    icon: FiDatabase,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Supabase", "MySQL"],
  },
  {
    category: "DevOps",
    icon: FiGitMerge,
    items: ["Docker", "Vercel", "AWS", "CI/CD", "GitHub Actions", "Nginx"],
  },
];

const whatWeBuild = [
  {
    icon: FiLayers,
    title: "SaaS Platforms",
    desc: "Multi-tenant architecture, subscription billing, team management, and API integrations.",
    gradient: "from-blue-500/10",
  },
  {
    icon: FiShoppingCart,
    title: "E-Commerce Stores",
    desc: "Custom storefronts, inventory management, payment gateways, and order fulfillment flows.",
    gradient: "from-cyan-500/10",
  },
  {
    icon: FiBarChart2,
    title: "Internal Tools & Dashboards",
    desc: "Admin panels, analytics dashboards, CRMs, and workflow automation tools.",
    gradient: "from-indigo-500/10",
  },
  {
    icon: FiUsers,
    title: "Marketplaces",
    desc: "Two-sided platforms with buyer/seller flows, escrow payments, and reputation systems.",
    gradient: "from-violet-500/10",
  },
  {
    icon: FiGlobe,
    title: "Landing Pages & Portals",
    desc: "High-converting landing pages, customer portals, and marketing microsites.",
    gradient: "from-teal-500/10",
  },
  {
    icon: FiTool,
    title: "Legacy Modernisation",
    desc: "Refactors, migrations, and feature additions on existing codebases — free code audit first.",
    gradient: "from-purple-500/10",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "We audit your requirements, map user flows, and design a scalable system architecture before writing a single line of code.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Figma-based wireframes and high-fidelity prototypes. You approve every screen before development begins.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "Two-week sprints with daily standups, weekly demos on a live staging URL, and full transparency throughout.",
  },
  {
    step: "04",
    title: "QA & Performance",
    desc: "Lighthouse scores 90+, cross-browser testing, load testing, and end-to-end automated test suites.",
  },
  {
    step: "05",
    title: "Launch & Handoff",
    desc: "Zero-downtime deployment, full source code handoff, comprehensive docs, and 60 days post-launch support.",
  },
];

const deliverables = [
  { label: "Fully responsive web application",   icon: FiMonitor },
  { label: "Admin dashboard & CMS",              icon: FiBarChart2 },
  { label: "RESTful or GraphQL API",             icon: FiServer },
  { label: "Authentication & role-based access", icon: FiShield },
  { label: "Payment gateway integration",        icon: FiCreditCard },
  { label: "SEO-optimised architecture",         icon: FiSearch },
  { label: "Analytics & error monitoring",       icon: FiZap },
  { label: "Complete source code & docs",        icon: FiPackage },
];

// const caseStudies = [
//   {
//     title: "TimeCraft Watch Store",
//     result: "43% conversion ↑",
//     industry: "E-Commerce",
//     imageSrc: "/site/watchproject.jpeg",
//     stack: ["Next.js", "Tailwind CSS", "Shopify", "Figma"],
//     desc: "Elegant product landing page for a premium watch brand — warm beige aesthetic with live pricing, spec tables, star-rated testimonials, and a high-converting sticky CTA section.",
//     gradient: "from-blue-500/10",
//     accent: "text-blue-300",
//   },
//   {
//     title: "SoundCore Earbuds Page",
//     result: "51% CTR on Buy Now",
//     industry: "Consumer Tech",
//     imageSrc: "/site/earbudsproject.jpeg",
//     stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
//     desc: "Dark-luxury product page for a premium wireless earbuds brand — immersive black-and-gold hero, animated spec reveals, ENC feature highlights, and a bold sticky buy CTA.",
//     gradient: "from-cyan-500/10",
//     accent: "text-cyan-300",
//   },
// ];

const faqs = [
  {
    q: "How long does a typical web app take?",
    a: "Most MVPs take 6–10 weeks. Enterprise platforms range from 12–28 weeks depending on complexity. We'll give you an exact timeline in our proposal.",
  },
  {
    q: "Do you work with our existing codebase?",
    a: "Yes. We do legacy modernisation, refactors, and feature additions on existing codebases. We'll do a free code audit first.",
  },
  {
    q: "Who owns the code after launch?",
    a: "You do. 100%. We transfer all source code, credentials, and assets on day one of launch. No lock-in.",
  },
  {
    q: "Can you handle traffic spikes?",
    a: "Absolutely. We architect for auto-scaling from day one — load balancers, CDN, database read replicas, and caching layers.",
  },
];

/* =======================
        PAGE
======================= */

export default function FullStackPage() {
  return (
    <main className="bg-[#050B14] text-white overflow-x-hidden">
      <Navbar />

      {/* ========================
              HERO
      ======================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-24">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-10">
            <Link href="/" className="hover:text-slate-300 transition">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-300 transition">Services</Link>
            <span>/</span>
            <span className="text-blue-400">Full-Stack Web</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Most Popular Service
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]">
                Full-Stack
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Web Development
                </span>
              </h1>

              <p className="text-slate-400 text-lg mt-8 max-w-xl">
                We build high-performance web applications engineered for scale — from lean MVPs
                that ship in 6 weeks to enterprise platforms handling millions of users.
                Every line of code is production-ready from day one.
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mt-8">
                {["Next.js", "Node.js", "PostgreSQL", "TypeScript", "AWS"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-10 flex-wrap">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
                >
                  Start Your Project <FiArrowRight />
                </Link>

                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  View Case Studies
                </Link>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-5 mt-14">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
                    >
                      <Icon className="text-cyan-400 mb-4" size={22} />
                      <div className="text-3xl font-bold">{s.value}</div>
                      <div className="text-sm text-slate-400">{s.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative border border-white/10 rounded-[30px] overflow-hidden bg-[#0B1320]">
                <Image
                  src="/site/fullstack-hero.png"
                  alt="Full-Stack Web Development"
                  width={1200}
                  height={900}
                  className="w-full"
                  priority
                />
              </div>

              <div className="absolute -top-5 -left-5 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Apps Launched</p>
                <p className="text-xl font-bold text-cyan-400">150+</p>
              </div>

              <div className="absolute -bottom-5 right-0 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Avg. MVP Time</p>
                <p className="text-xl font-bold text-blue-400">6 wks</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================
            TECH STACK
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Our Tech Stack</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Battle-tested technologies chosen for performance, scalability, and long-term maintainability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition group"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Icon className="text-cyan-400" size={18} />
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1.5 rounded-lg bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================
            WHAT WE BUILD
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Every Type of Web Product, Engineered Right
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              We don't build websites — we engineer digital products built for real business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeBuild.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br ${item.gradient} to-transparent hover:brightness-110 transition group`}
                >
                  <Icon className="text-white/50 mb-5 group-hover:text-white/70 transition" size={28} />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================
            PROCESS
      ======================== */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">How We Build Your Product</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A structured, transparent process from first call to live deployment.
          </p>
        </div>

        <div className="space-y-4">
          {process.map((p) => (
            <div
              key={p.step}
              className="flex gap-6 p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/20 transition group"
            >
              <div className="text-3xl font-black text-blue-500/20 group-hover:text-blue-500/50 transition font-mono w-12 shrink-0">
                {p.step}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================
            DELIVERABLES
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Everything Included, Nothing Hidden</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Every engagement includes a complete set of deliverables. No surprise add-ons, no nickel-and-diming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.label}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                >
                  <Icon className="text-cyan-400 shrink-0" size={18} />
                  <span className="text-sm text-slate-300">{d.label}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================
            CASE STUDIES
      ======================== */}
      {/* <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Real Projects, Real Results</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            From product pages to full SaaS platforms — shipped and converting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-blue-500/30 transition group"
            >
              <div className="aspect-[16/9] bg-[#0B1320] overflow-hidden">
                <Image
                  src={cs.imageSrc}
                  alt={cs.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-500">{cs.industry}</span>
                  <span className={`text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 ${cs.accent}`}>
                    {cs.result}
                  </span>
                </div>
                <h3 className="font-bold text-white text-xl mb-2">{cs.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{cs.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.stack.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-500 border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-cyan-400 transition font-medium"
          >
            View All Case Studies <FiArrowRight size={14} />
          </Link>
        </div>

      </section> */}

      {/* ========================
               FAQ
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-3xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
              >
                <h3 className="font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================
              CTA
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Web Application?
            </span>
          </h2>

          <p className="text-slate-400 mt-6">
            Get a free technical consultation and fixed-price quote within 48 hours.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              Get Free Quote <FiArrowRight />
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Explore More Services
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
} 