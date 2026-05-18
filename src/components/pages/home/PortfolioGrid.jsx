"use client";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Web App", "Mobile", "AI/ML", "Enterprise"];

const projects = [
  {
    slug: "timecraft-product-page",
    title: "TimeCraft Watch Store",
    category: "Landing Page",
    industry: "E-Commerce",
    imageSrc: "/site/watchproject.jpeg",
    result: "43% conversion ↑",
    stack: ["Next.js", "Tailwind CSS", "Shopify", "Figma"],
    duration: "3 weeks",
    gradient: "from-[#C8A96E]/30 to-[#1A1208]",
    desc: "Elegant product landing page for a premium watch brand — warm beige aesthetic with live pricing, spec tables, star-rated testimonials, and a high-converting sticky CTA section."
  },
  {
    slug: "trailmate-storefront",
    title: "TrailMate Adventure Store",
    category: "Landing Page",
    industry: "Outdoor & Lifestyle",
    imageSrc: "/site/tracksuitproject.jpeg",
    result: "38% add-to-cart ↑",
    stack: ["React", "Tailwind CSS", "Shopify", "Vercel"],
    duration: "4 weeks",
    gradient: "from-[#3A5A40]/30 to-[#0D1F0F]",
    desc: "Adventure-themed product storefront for an outdoor backpack brand — cinematic hero with mountain imagery, feature grids, detailed spec tables, and a trust-building social proof section."
  },
  {
    slug: "startx-saas-platform",
    title: "StartX SaaS Platform",
    category: "Web App",
    industry: "SaaS / Startup",
    imageSrc: "/site/tradingproject.jpeg",
    result: "2,000+ signups/month",
    stack: ["React", "Node.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    duration: "12 weeks",
    gradient: "from-[#2563EB]/30 to-[#0F172A]",
    desc: "Full-featured SaaS website for a startup launchpad — tiered pricing cards, feature showcases, brand trust logos, customer testimonials, and a newsletter-powered conversion footer."
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
              </div>

              {/* ✅ Fixed: was project.description */}
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* ✅ Fixed: was project.metrics (array) — now wraps result string in an array */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[project.result].map((m) => (
                  <span key={m} className="text-xs px-2.5 py-1 rounded-md bg-[#2B7EC1]/10 text-[#79b8f0] border border-[#2B7EC1]/20">
                    {m}
                  </span>
                ))}
              </div>

              {/* ✅ Fixed: was project.tags — now project.stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
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
        <Link href="/portfolio">
          <Button variant="outline" size="lg">
            View Full Portfolio →
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}