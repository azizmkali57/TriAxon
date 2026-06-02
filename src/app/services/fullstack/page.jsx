import Link from "next/link";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: "Full-Stack Web Development | TriAxon Technologies",
  description:
    "High-performance web applications engineered for scale. Next.js, Node.js, PostgreSQL — from MVPs to enterprise SaaS.",
};

const techStack = [
  { category: "Frontend", items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"] },
  { category: "Backend",  items: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs", "WebSockets"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Supabase", "MySQL"] },
  { category: "DevOps",   items: ["Docker", "Vercel", "AWS", "CI/CD", "GitHub Actions", "Nginx"] },
];

const process = [
  { step: "01", title: "Discovery & Architecture", desc: "We audit your requirements, map user flows, and design a scalable system architecture before writing a single line of code." },
  { step: "02", title: "UI/UX Design",             desc: "Figma-based wireframes and high-fidelity prototypes. You approve every screen before development begins." },
  { step: "03", title: "Agile Development",         desc: "Two-week sprints with daily standups, weekly demos on a live staging URL, and full transparency throughout." },
  { step: "04", title: "QA & Performance",          desc: "Lighthouse scores 90+, cross-browser testing, load testing, and end-to-end automated test suites." },
  { step: "05", title: "Launch & Handoff",          desc: "Zero-downtime deployment, full source code handoff, comprehensive docs, and 60 days post-launch support." },
];

const deliverables = [
  "Fully responsive web application",
  "Admin dashboard & CMS",
  "RESTful or GraphQL API",
  "Authentication & role-based access",
  "Payment gateway integration",
  "SEO-optimised architecture",
  "Analytics & error monitoring",
  "Complete source code & docs",
];

const faqs = [
  { q: "How long does a typical web app take?", a: "Most MVPs take 6–10 weeks. Enterprise platforms range from 12–28 weeks depending on complexity. We'll give you an exact timeline in our proposal." },
  { q: "Do you work with our existing codebase?", a: "Yes. We do legacy modernisation, refactors, and feature additions on existing codebases. We'll do a free code audit first." },
  { q: "Who owns the code after launch?", a: "You do. 100%. We transfer all source code, credentials, and assets on day one of launch. No lock-in." },
  { q: "Can you handle traffic spikes?", a: "Absolutely. We architect for auto-scaling from day one — load balancers, CDN, database read replicas, and caching layers." },
];

const caseStudies = [
  {
    title: "TimeCraft Watch Store",
    result: "43% conversion ↑",
    industry: "E-Commerce",
    imageSrc: "/site/watchproject.jpeg",  
    stack: ["Next.js", "Tailwind CSS", "Shopify", "Figma"],     
    desc: "Elegant product landing page for a premium watch brand — warm beige aesthetic with live pricing, spec tables, star-rated testimonials, and a high-converting sticky CTA section."
  },
  {     
    title: "SoundCore Earbuds Page",
    imageSrc: "/site/earbudsproject.jpeg",
    result: "51% CTR on Buy Now",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
    desc: "Dark-luxury product page for a premium wireless earbuds brand — immersive black-and-gold hero, animated spec reveals, ENC feature highlights, and a bold gold sticky buy CTA."
  },
];

export default function FullStackPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-5%,rgba(43,126,193,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_40%_at_90%_20%,rgba(0,180,200,0.08),transparent)]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#4B5563] mb-8">
            <Link href="/" className="hover:text-[#9CA3AF] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#9CA3AF] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#2B7EC1]">Full-Stack Web</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2B7EC1]/30 bg-[#2B7EC1]/08 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2B7EC1] animate-pulse" />
                <span className="text-xs text-[#79b8f0] font-medium">Most Popular Service</span>
              </div>

              <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-[1.06] mb-6">
                Full-Stack{" "}
                <span style={{ background: "linear-gradient(135deg,#2B7EC1,#00B4C8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Web Development
                </span>
              </h1>

              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                We build high-performance web applications engineered for scale — from lean MVPs that ship in 6 weeks to enterprise platforms handling millions of users. Every line of code is production-ready from day one.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {["Next.js", "Node.js", "PostgreSQL", "TypeScript", "AWS"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-[#2B7EC1]/10 text-[#79b8f0] border border-[#2B7EC1]/20">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg,#2B7EC1,#00B4C8)" }}>
                  Start Your Project →
                </Link>
                <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[#9CA3AF] font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* HERO IMAGE SLOT */}
            <div className="relative">
              <div className="relative rounded-2xl border border-[#2B7EC1]/20 bg-[#0A1628] overflow-hidden aspect-[4/3] flex items-center justify-center">
                {/* ── Replace this block with your <Image> component ── */}
                <div className="text-center">
                  <img src="/site/fullstack-hero.png" alt="Hero Image" className="w-full h-full object-cover" />
                  {/* <div className="text-6xl mb-4">🖥️</div>
                  <p className="text-[#4B5563] text-sm">Hero image goes here</p>
                  <p className="text-[#374151] text-xs mt-1">Recommended: 800×600px</p> */}
                </div>
                {/* ─────────────────────────────────────────────────── */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/60 to-transparent pointer-events-none" />
              </div>
              {/* floating stat cards */}
              <div className="absolute -bottom-4 -left-4 bg-[#0A1628] border border-[#2B7EC1]/30 rounded-xl px-4 py-3">
                <div className="text-2xl font-extrabold text-white">150+</div>
                <div className="text-xs text-[#6B7280]">Apps Launched</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#0A1628] border border-[#00B4C8]/30 rounded-xl px-4 py-3">
                <div className="text-2xl font-extrabold text-white">6 wks</div>
                <div className="text-xs text-[#6B7280]">Avg. MVP Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="border-y border-white/[0.05] bg-white/[0.01] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "150+", label: "Web Apps Delivered" },
            { value: "99%",  label: "On-Time Delivery"  },
            { value: "90+",  label: "Lighthouse Score"  },
            { value: "60d",  label: "Free Post-Launch Support" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-xs text-[#6B7280] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TECH STACK ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#2B7EC1] uppercase tracking-widest mb-3">Technology</p>
            <h2 className="font-display font-bold text-4xl text-white mb-4">Our Tech Stack</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">Battle-tested technologies chosen for performance, scalability, and long-term maintainability.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((cat) => (
              <div key={cat.category} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#2B7EC1]/30 transition-all duration-300">
                <h3 className="text-xs font-mono text-[#2B7EC1] uppercase tracking-widest mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1.5 rounded-lg bg-white/[0.04] text-[#9CA3AF] border border-white/[0.06]">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-24 bg-[#080D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE SLOT */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#0A1628] overflow-hidden aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              {/* ── Replace with your <Image> component ── */}
              <div className="text-center">
                <img src="/site/fullstack-section.png" alt="Hero Image" className="w-full h-full object-cover" />
                {/* <div className="text-5xl mb-3">⚙️</div>
                <p className="text-[#4B5563] text-sm">Section image goes here</p>
                <p className="text-[#374151] text-xs mt-1">Recommended: 700×525px</p> */}
              </div>
              {/* ─────────────────────────────────────── */}
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-4">What We Build</p>
              <h2 className="font-display font-bold text-4xl text-white mb-6">Every type of web product, engineered right</h2>
              <div className="space-y-4">
                {[
                  { title: "SaaS Platforms",          desc: "Multi-tenant architecture, subscription billing, team management, and API integrations." },
                  { title: "E-Commerce Stores",       desc: "Custom storefronts, inventory management, payment gateways, and order fulfillment flows." },
                  { title: "Internal Tools & Dashboards", desc: "Admin panels, analytics dashboards, CRMs, and workflow automation tools." },
                  { title: "Marketplaces",            desc: "Two-sided platforms with buyer/seller flows, escrow payments, and reputation systems." },
                  { title: "Landing Pages & Portals", desc: "High-converting landing pages, customer portals, and marketing microsites." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:border-[#2B7EC1]/20 transition-all">
                    <div className="w-5 h-5 rounded-full bg-[#2B7EC1]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#2B7EC1]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#2B7EC1] uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="font-display font-bold text-4xl text-white mb-4">How We Build Your Product</h2>
          </div>
          <div className="space-y-4">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-6 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#2B7EC1]/20 transition-all duration-300 group">
                <div className="text-3xl font-extrabold text-[#2B7EC1]/20 group-hover:text-[#2B7EC1]/40 transition-colors font-mono w-12 flex-shrink-0">{p.step}</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="py-24 bg-[#080D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-mono text-[#2B7EC1] uppercase tracking-widest mb-4">Deliverables</p>
              <h2 className="font-display font-bold text-4xl text-white mb-6">Everything included, nothing hidden</h2>
              <p className="text-[#9CA3AF] leading-relaxed mb-8">Every engagement includes a complete set of deliverables. No surprise add-ons, no nickel-and-diming.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2B7EC1]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#2B7EC1]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#9CA3AF]">{d}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* IMAGE SLOT */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#0D1117] overflow-hidden aspect-[4/3] flex items-center justify-center">
              {/* ── Replace with your <Image> component ── */}
              <div className="text-center">
                <img src="/site/fullstack-section2.png" alt="Deliverables Image" className="w-full h-full object-cover" />
                {/* <div className="text-5xl mb-3">📦</div>
                <p className="text-[#4B5563] text-sm">Deliverables image goes here</p>
                <p className="text-[#374151] text-xs mt-1">Recommended: 700×525px</p> */}
              </div>
              {/* ─────────────────────────────────────── */}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#2B7EC1] uppercase tracking-widest mb-3">Case Studies</p>
            <h2 className="font-display font-bold text-4xl text-white mb-4">Real Projects, Real Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-[#2B7EC1]/30 transition-all duration-300 group">
                {/* CASE STUDY IMAGE SLOT */}
                <div className="aspect-[16/9] bg-[#0A1628] flex items-center justify-center border-b border-white/[0.05]">
                  {/* ── Replace with <Image src={cs.image} ... /> ── */}
                  <div className="text-center">
                    <img src={cs.imageSrc} alt={cs.title} className="w-full h-full object-cover" />
                  </div>
                  {/* ──────────────────────────────────────────── */}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[#6B7280]">{cs.industry}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#2B7EC1]/10 text-[#79b8f0] border border-[#2B7EC1]/20">{cs.result}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{cs.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.stack.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-white/[0.04] text-[#6B7280]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#2B7EC1] hover:text-[#00B4C8] transition-colors font-medium">
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-[#080D14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#2B7EC1] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-display font-bold text-4xl text-white mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <h3 className="font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(43,126,193,0.12),transparent)]" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-5">
            Ready to build your{" "}
            <span style={{ background: "linear-gradient(90deg,#2B7EC1,#00B4C8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              web application?
            </span>
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-10">Get a free technical consultation and fixed-price quote within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-white font-semibold text-base hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg,#2B7EC1,#00B4C8)" }}>
              Get Free Quote →
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-[#9CA3AF] font-semibold text-base border border-white/10 hover:border-white/20 hover:text-white transition-all">
              ← All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}