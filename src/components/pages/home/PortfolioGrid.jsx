"use client";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { useState } from "react";

const categories = ["All", "Web App", "Mobile", "AI/ML", "Enterprise"];

const projects = [
  {
    title: "FinEdge Dashboard",
    category: "Web App",
    tags: ["Next.js", "Python", "PostgreSQL"],
    badge: { label: "Fintech", variant: "blue" },
    description: "Real-time trading dashboard with live portfolio analytics, risk scoring, and regulatory reporting for a London-based fintech.",
    metrics: ["40% ↑ User Engagement", "< 200ms Latency"],
    gradient: "from-[#2B7EC1]/30 via-[#0D1F3C] to-transparent",
    imageSrc: "/site/mangement.jpeg",
  },
  {
    title: "LogiFlow Mobile",
    category: "Mobile",
    tags: ["Flutter", "Node.js", "Firebase"],
    badge: { label: "Logistics", variant: "purple" },
    description: "B2B logistics tracking app for 200+ drivers with offline-first sync, real-time GPS, and automated invoice generation.",
    metrics: ["50K+ DAU", "4.8★ App Store"],
    gradient: "from-[#6B3FA0]/30 via-[#0D1F3C] to-transparent",
    imageSrc: "/site/management1.jpeg",
  },
  {
    title: "HealthBridge AI",
    category: "AI/ML",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    badge: { label: "HealthTech", variant: "teal" },
    description: "HIPAA-compliant telemedicine platform with AI symptom checker, video consultations, and automated prescription workflows.",
    metrics: ["10K+ Consultations", "92% AI Accuracy"],
    gradient: "from-[#00B4C8]/30 via-[#0D1F3C] to-transparent",
    imageSrc: "/site/finedge.jpeg",
  },
  {
    title: "EduTrack LMS",
    category: "Web App",
    tags: ["Next.js", "Supabase", "Stripe"],
    badge: { label: "EdTech", variant: "green" },
    description: "Full-featured LMS platform migrated from legacy PHP to Next.js. 7x performance improvement and 300% growth in users.",
    metrics: ["300% User Growth", "1.2s Load Time"],
    gradient: "from-emerald-600/20 via-[#0D1F3C] to-transparent",
    imageSrc: "/site/learning.jpeg",
  },
  {
    title: "RetailMax Commerce",
    category: "Enterprise",
    tags: ["React", "Node.js", "AWS", "Redis"],
    badge: { label: "E-commerce", variant: "amber" },
    description: "Enterprise e-commerce platform handling millions in GMV. Survived Black Friday with zero downtime on 10x normal traffic.",
    metrics: ["$5M+ GMV", "Zero Downtime"],
    gradient: "from-amber-600/20 via-[#0D1F3C] to-transparent",
    imageSrc: "/site/ecommerce.jpeg",
  },
  {
    title: "SmartHR Automator",
    category: "Enterprise",
    tags: ["Vue 3", "Django", "Celery", "GPT-4"],
    badge: { label: "HRTech", variant: "purple" },
    description: "AI-powered HR automation platform that reduces onboarding time by 60% through intelligent document processing and workflows.",
    metrics: ["60% Faster Onboarding", "500+ Employees"],
    gradient: "from-[#6B3FA0]/20 via-[#0D1F3C] to-transparent",
    imageSrc: "/site/hr-ms-system.jpeg",
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <SectionWrapper id="portfolio">
      <SectionHeader
        eyebrow="Our Work"
        title={
          <>
            Projects We're{" "}
            <span className="bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] bg-clip-text text-transparent">
              Proud Of
            </span>
          </>
        }
        subtitle="A selection of projects that showcase our range, technical depth, and ability to deliver real business outcomes."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? "bg-[#2B7EC1] text-white border-[#2B7EC1]"
                : "text-[#9CA3AF] border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-white/[0.18] transition-all duration-300 hover:-translate-y-1 reveal"
          >
            <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
              <span className="text-7xl opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300">
                <img src={project.imageSrc} alt={project.title} className="w-full h-full object-cover" />
              </span>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0D1117] to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-white">{project.title}</h3>
                <Badge variant={project.badge.variant} size="sm">{project.badge.label}</Badge>
              </div>

              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((m) => (
                  <span key={m} className="text-xs px-2.5 py-1 rounded-md bg-[#2B7EC1]/10 text-[#79b8f0] border border-[#2B7EC1]/20">
                    {m}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-[#9CA3AF] bg-white/5 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 reveal">
        <Button variant="outline" size="lg">
          View Full Portfolio →
        </Button>
      </div>
    </SectionWrapper>
  );
}