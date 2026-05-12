"use client";

import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Web App", "Mobile", "AI/ML", "Enterprise", "Design"];

const projects = [
  { slug: "finedge-dashboard",    title: "FinEdge Dashboard",    category: "Web App",    industry: "Fintech",       emoji: "📈", result: "40% engagement ↑",   stack: ["Next.js", "Python", "PostgreSQL"],        duration: "14 weeks", gradient: "from-[#2B7EC1]/30 to-[#0A1628]", desc: "Real-time trading dashboard for a London fintech with live portfolio analytics, risk scoring, and regulatory reporting." },
  { slug: "logiflow-mobile",      title: "LogiFlow Mobile",      category: "Mobile",     industry: "Logistics",     emoji: "🚚", result: "50K+ DAU",            stack: ["Flutter", "Node.js", "Firebase"],         duration: "18 weeks", gradient: "from-[#6B3FA0]/30 to-[#0A1628]", desc: "B2B logistics tracking app for 200+ drivers with offline-first sync, real-time GPS, and automated invoicing." },
  { slug: "healthbridge-ai",      title: "HealthBridge AI",      category: "AI/ML",      industry: "HealthTech",    emoji: "🏥", result: "92% AI Accuracy",     stack: ["Python", "FastAPI", "OpenAI", "React"],   duration: "22 weeks", gradient: "from-[#00B4C8]/30 to-[#0A1628]", desc: "HIPAA-compliant telemedicine with AI symptom checker, video consultations, and automated prescriptions." },
  { slug: "edutrack-lms",         title: "EduTrack LMS",         category: "Web App",    industry: "EdTech",        emoji: "📚", result: "7× faster loads",     stack: ["Next.js", "Supabase", "Stripe"],          duration: "10 weeks", gradient: "from-emerald-600/25 to-[#0A1628]", desc: "Full-featured LMS migrated from legacy PHP. 300% user growth in 6 months after relaunch." },
  { slug: "retailmax-commerce",   title: "RetailMax Commerce",   category: "Enterprise", industry: "Retail",        emoji: "🛒", result: "$5M+ GMV",            stack: ["React", "Node.js", "AWS", "Redis"],       duration: "28 weeks", gradient: "from-amber-600/25 to-[#0A1628]", desc: "Enterprise e-commerce handling millions in GMV. Survived Black Friday at 10× normal traffic with zero downtime." },
  { slug: "smarthr-automator",    title: "SmartHR Automator",    category: "AI/ML",      industry: "HRTech",        emoji: "👥", result: "60% faster onboarding", stack: ["Vue 3", "Django", "GPT-4"],             duration: "16 weeks", gradient: "from-[#6B3FA0]/25 to-[#0A1628]", desc: "AI-powered HR automation reducing onboarding time through intelligent document processing and workflows." },
  { slug: "payzap-wallet",        title: "PayZap Wallet",        category: "Mobile",     industry: "Fintech",       emoji: "💳", result: "₹50Cr/mo processed",  stack: ["React Native", "Node.js", "Stripe"],      duration: "20 weeks", gradient: "from-[#2B7EC1]/25 to-[#0A1628]", desc: "Digital wallet app with UPI, cards, bill payments, and investment features. 4.7★ on both stores." },
  { slug: "nexacrm-platform",     title: "NexaCRM Platform",     category: "Enterprise", industry: "SaaS B2B",      emoji: "🏢", result: "5000+ active seats",  stack: ["Next.js", "NestJS", "PostgreSQL"],        duration: "32 weeks", gradient: "from-[#00B4C8]/25 to-[#0A1628]", desc: "Full-featured CRM built for mid-market B2B companies — pipeline, contacts, deals, and email sequences." },
  { slug: "insightai-analytics",  title: "InsightAI Analytics",  category: "AI/ML",      industry: "Analytics",     emoji: "📊", result: "3× faster insights",  stack: ["Python", "LangChain", "React", "Spark"],  duration: "14 weeks", gradient: "from-[#6B3FA0]/25 to-[#0A1628]", desc: "Natural language analytics platform that lets business users query their data in plain English." },
  { slug: "designsystem-healthco",title: "HealthCo Design System",category: "Design",    industry: "HealthTech",    emoji: "🎨", result: "60% faster design",   stack: ["Figma", "Storybook", "React"],            duration: "8 weeks",  gradient: "from-pink-600/25 to-[#0A1628]", desc: "Complete design system with 200+ Figma components and React implementation for a healthcare SaaS." },
];

const badgeColors = {
  "Web App":    "bg-[#2B7EC1]/15 text-[#79b8f0] border-[#2B7EC1]/25",
  "Mobile":     "bg-[#6B3FA0]/15 text-[#b392d8] border-[#6B3FA0]/25",
  "AI/ML":      "bg-[#00B4C8]/15 text-[#00B4C8] border-[#00B4C8]/25",
  "Enterprise": "bg-amber-500/15 text-amber-300 border-amber-500/25",
  "Design":     "bg-pink-500/15 text-pink-300 border-pink-500/25",
};

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <main className="bg-[#0D1117] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(43,126,193,0.15),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#2B7EC1]/30 bg-[#2B7EC1]/10">
            <span className="text-sm text-[#79b8f0] font-mono">10 Featured Projects</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
            Products We're<br />
            <span className="bg-gradient-to-r from-[#2B7EC1] via-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">Proud Of</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">Real projects. Real results. See how we've helped founders and enterprises ship products that scale.</p>
        </div>
      </section>

      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === c
                  ? "bg-[#2B7EC1] text-white border-[#2B7EC1]"
                  : "text-[#9CA3AF] border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-10 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
              <article className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.18] hover:-translate-y-1.5 transition-all duration-300">

                <div className={`h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                  <span className="text-7xl opacity-55 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300">{p.emoji}</span>
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0D1117] to-transparent" />
                  <span className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full border ${badgeColors[p.category]}`}>{p.category}</span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#9CA3AF] font-mono mb-1">{p.industry}</div>
                  <h2 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#00B4C8] transition-colors">{p.title}</h2>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#2B7EC1]/10 text-[#79b8f0] border border-[#2B7EC1]/20">{p.result}</span>
                    <span className="text-xs text-[#9CA3AF]">{p.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#9CA3AF]">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0A1628] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Your Project Could Be Next</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">Share your idea and get a free project proposal within 48 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold text-base hover:opacity-90 transition-opacity">
            Start Your Project →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}