import Link from "next/link";

export const metadata = {
  title: "Digital Marketing Services | TriAxon Technologies",
  description: "SEO, Google Ads, Meta Ads, content marketing, and CRO. Data-driven digital marketing that fills your pipeline.",
};

const services = [
  { icon: "🔍", title: "Search Engine Optimisation", desc: "Technical SEO, on-page optimisation, link building, and content strategy to rank for keywords your buyers actually search." },
  { icon: "🎯", title: "Google Ads (PPC)",           desc: "Search, Display, Shopping, and Performance Max campaigns optimised for your target CPA and ROAS." },
  { icon: "📘", title: "Meta & Social Ads",          desc: "Facebook, Instagram, and LinkedIn ad campaigns with creative testing and audience segmentation that converts." },
  { icon: "✍️", title: "Content Marketing",          desc: "Long-form articles, case studies, and landing pages that rank and build authority in your niche." },
  { icon: "📧", title: "Email Marketing",             desc: "Drip sequences, newsletters, and transactional email flows that nurture leads and retain customers." },
  { icon: "📈", title: "Conversion Rate Optimisation", desc: "A/B testing, heatmaps, funnel analysis, and landing page optimisation to turn more visitors into customers." },
];

const results = [
  { metric: "3.8×", label: "Average ROAS on Paid Ads", emoji: "🎯" },
  { metric: "210%", label: "Avg. Organic Traffic Growth in 6 Months", emoji: "📈" },
  { metric: "52%",  label: "Average CPA Reduction After 90 Days", emoji: "💰" },
];

export default function DigitalMarketingPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,180,200,0.15),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <div className="max-w-3xl">
            <span className="text-4xl mb-5 block">📣</span>
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Digital Marketing<br />
              <span className="bg-gradient-to-r from-[#00B4C8] to-[#2B7EC1] bg-clip-text text-transparent">That Fills Pipelines</span>
            </h1>
            <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
              We combine data, creativity, and technology to drive traffic, generate leads, and grow revenue. No vanity metrics — only outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00B4C8] to-[#2B7EC1] text-white font-semibold hover:opacity-90 transition-opacity">Get a Free Audit →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {results.map((r) => (
            <div key={r.label}>
              <div className="text-3xl mb-2">{r.emoji}</div>
              <div className="font-display font-extrabold text-4xl text-white mb-1">{r.metric}</div>
              <div className="text-sm text-[#9CA3AF]">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Services</p>
            <h2 className="font-display font-bold text-4xl text-white">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#00B4C8]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-[#00B4C8] transition-colors">{s.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Free Marketing Audit</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">We'll audit your SEO, ads, and conversion funnel — and send you a prioritised action plan within 48 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#00B4C8] to-[#2B7EC1] text-white font-semibold text-base hover:opacity-90 transition-opacity">Claim Free Audit →</Link>
        </div>
      </section>
    </main>
  );
}