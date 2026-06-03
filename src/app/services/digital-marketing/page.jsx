import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiSearch,
  FiTarget,
  FiShare2,
  FiFileText,
  FiMail,
  FiTrendingUp,
  FiBarChart2,
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: "Digital Marketing Services | TriAxon Technologies",
  description:
    "SEO, Google Ads, Meta Ads, content marketing, and CRO. Data-driven digital marketing that fills your pipeline.",
};

/* =======================
         DATA
======================= */

const stats = [
  { value: "3.8×",  label: "Average ROAS on Paid Ads", icon: FiTarget },
  { value: "210%",  label: "Avg. Organic Traffic Growth (6mo)", icon: FiTrendingUp },
  { value: "52%",   label: "Average CPA Reduction (90 days)", icon: FiDollarSign },
  { value: "120+",  label: "Campaigns Managed", icon: FiBarChart2 },
];

const services = [
  {
    icon: FiSearch,
    title: "Search Engine Optimisation",
    desc: "Technical SEO, on-page optimisation, link building, and content strategy to rank for keywords your buyers actually search.",
  },
  {
    icon: FiTarget,
    title: "Google Ads (PPC)",
    desc: "Search, Display, Shopping, and Performance Max campaigns optimised for your target CPA and ROAS.",
  },
  {
    icon: FiShare2,
    title: "Meta & Social Ads",
    desc: "Facebook, Instagram, and LinkedIn ad campaigns with creative testing and audience segmentation that converts.",
  },
  {
    icon: FiFileText,
    title: "Content Marketing",
    desc: "Long-form articles, case studies, and landing pages that rank and build authority in your niche.",
  },
  {
    icon: FiMail,
    title: "Email Marketing",
    desc: "Drip sequences, newsletters, and transactional email flows that nurture leads and retain customers.",
  },
  {
    icon: FiBarChart2,
    title: "Conversion Rate Optimisation",
    desc: "A/B testing, heatmaps, funnel analysis, and landing page optimisation to turn more visitors into customers.",
  },
];

const useCases = [
  {
    title: "Paid Acquisition at Scale",
    desc: "Multi-channel paid media across Google, Meta, and LinkedIn with unified attribution and creative testing loops.",
    gradient: "from-cyan-500/10",
  },
  {
    title: "Organic Growth Engine",
    desc: "Technical SEO foundations, topical authority content, and backlink acquisition that compounds over time.",
    gradient: "from-blue-500/10",
  },
  {
    title: "Funnel & CRO",
    desc: "End-to-end funnel analysis with A/B tests and UX improvements that lift conversion rates across every stage.",
    gradient: "from-indigo-500/10",
  },
  {
    title: "Retention & Lifecycle",
    desc: "Email and SMS automation flows that re-engage lapsed users, upsell, and reduce churn systematically.",
    gradient: "from-teal-500/10",
  },
];

const process = [
  {
    step: "01",
    title: "Audit & Strategy",
    desc: "We audit your current channels, competitors, and funnel to build a data-backed growth strategy.",
  },
  {
    step: "02",
    title: "Campaign Setup",
    desc: "Pixel and tracking setup, campaign architecture, audience builds, and creative production.",
  },
  {
    step: "03",
    title: "Launch & Optimise",
    desc: "Go live with continuous A/B testing, bid management, and creative iteration based on real data.",
  },
  {
    step: "04",
    title: "Report & Scale",
    desc: "Weekly reporting, attribution analysis, and budget scaling into what works.",
  },
];

/* =======================
        PAGE
======================= */

export default function DigitalMarketingPage() {
  return (
    <main className="bg-[#050B14] text-white">

      {/* ========================
              HERO
      ======================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
          <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

          <Link
            href="/services"
            className="text-sm text-slate-400 hover:text-white transition mb-10 inline-block"
          >
            ← Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-8">
                <FiTrendingUp size={14} /> Data-Driven Growth
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]">
                Digital Marketing
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  That Fills Pipelines
                </span>
              </h1>

              <p className="text-slate-400 text-lg mt-8 max-w-xl">
                We combine data, creativity, and technology to drive traffic,
                generate leads, and grow revenue. No vanity metrics — only outcomes.
              </p>

              <div className="flex gap-4 mt-10 flex-wrap">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
                >
                  Get a Free Audit <FiArrowRight />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  Discuss Your Goals
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full" />

              <div className="relative border border-white/10 rounded-[30px] overflow-hidden bg-[#0B1320]">
                <Image
                  src="/site/digital-section.png"
                  alt="Digital Marketing"
                  width={1200}
                  height={900}
                  className="w-full"
                  priority
                />
              </div>

              <div className="absolute -top-5 -left-5 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Avg. ROAS</p>
                <p className="text-xl font-bold text-cyan-400">3.8×</p>
              </div>

              <div className="absolute -bottom-5 right-0 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">CPA Reduction</p>
                <p className="text-xl font-bold text-blue-400">52%</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================
             SERVICES
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Full-Funnel Marketing Services
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            From first click to closed deal — we own every stage of the growth funnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition group"
              >
                <Icon className="text-cyan-400 mb-5 group-hover:scale-110 transition" size={26} />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-6 text-sm text-blue-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  Learn more <FiArrowRight />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================
            PROCESS
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              How We Work
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A structured growth process built on audits, experiments, and compounding returns.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p) => (
              <div
                key={p.step}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="text-cyan-400 font-bold mb-3">{p.step}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================
            USE CASES
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            What We Actually Deliver
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We don't report on impressions — we move the metrics that matter to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {useCases.map((u) => (
            <div
              key={u.title}
              className={`p-10 rounded-3xl border border-white/10 bg-gradient-to-br ${u.gradient} to-transparent hover:brightness-110 transition`}
            >
              <h3 className="text-2xl font-semibold mb-3">{u.title}</h3>
              <p className="text-slate-400">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================
              CTA
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Free Marketing Audit
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            We'll audit your SEO, ads, and conversion funnel — and send you a
            prioritised action plan within 48 hours.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              Claim Free Audit <FiArrowRight />
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