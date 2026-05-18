"use client";

import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Web App", "Mobile", "AI/ML", "Enterprise", "Design", "Landing Page", "Business Website"];

const portfolios = [
  {
    slug: "timecraft-product-page",
    title: "TimeCraft Watch Store",
    category: "Landing Page",
    industry: "E-Commerce",
    imageSrc: "/site/watchproject.jpeg",       // ✅ Fixed: removed "public"
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
  {
    slug: "exterior-designer",
    title: "Exterior Designer",
    category: "Web App",
    industry: "SaaS / Startup",
    imageSrc: "/site/architectureproject.jpeg",
    result: "1,000+ signups/month",
    stack: ["React", "Node.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    duration: "12 weeks",
    gradient: "from-[#2563EB]/30 to-[#0F172A]",
    desc: "Full-featured SaaS website for a startup launchpad — tiered pricing cards, feature showcases, brand trust logos, customer testimonials, and a newsletter-powered conversion footer."
  },
  {
    slug: "beautiful-cafe-website",
    title: "Beautiful Cafe Website",
    category: "Business Website",
    industry: "Food & Beverage",
    imageSrc: "/site/teaproject.jpeg",
    result: "55% online orders ↑",
    stack: ["Next.js", "Sanity CMS", "Tailwind CSS", "Stripe"],
    duration: "5 weeks",
    gradient: "from-[#7B4A2D]/30 to-[#1C0F07]",
    desc: "Warm artisan-styled website for a specialty coffee brand — interactive menu cards, online ordering integration, 10% discount email capture, and a brand-rich storytelling footer."
  },
  {
    slug: "soundcore-earbuds-page",           // ✅ Fixed: unique slug
    title: "SoundCore Earbuds Page",
    category: "Landing Page",
    industry: "Consumer Electronics",
    imageSrc: "/site/earbudsproject.jpeg",
    result: "51% CTR on Buy Now",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
    duration: "6 weeks",
    gradient: "from-[#C8962E]/30 to-[#0A0A0A]",
    desc: "Dark-luxury product page for a premium wireless earbuds brand — immersive black-and-gold hero, animated spec reveals, ENC feature highlights, and a bold gold sticky buy CTA."
  },
  {
    slug: "bagcraft-store",                   // ✅ Fixed: unique slug
    title: "BagCraft Store",
    category: "Landing Page",
    industry: "Fashion & Accessories",
    imageSrc: "/site/bagproject.jpeg",
    result: "51% CTR on Buy Now",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
    duration: "6 weeks",
    gradient: "from-[#C8962E]/30 to-[#0A0A0A]",
    desc: "Dark-luxury product page for a premium wireless earbuds brand — immersive black-and-gold hero, animated spec reveals, ENC feature highlights, and a bold gold sticky buy CTA."
  },
  {
    slug: "furniture-showcase",               // ✅ Fixed: unique slug
    title: "Furniture Showcase",
    category: "Landing Page",
    industry: "Home & Interior",
    imageSrc: "/site/furnitureproject.jpeg",
    result: "51% CTR on Buy Now",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
    duration: "6 weeks",
    gradient: "from-[#C8962E]/30 to-[#0A0A0A]",
    desc: "Dark-luxury product page for a premium wireless earbuds brand — immersive black-and-gold hero, animated spec reveals, ENC feature highlights, and a bold gold sticky buy CTA."
  },
  {
    slug: "herbal-brand-page",                // ✅ Fixed: unique slug
    title: "Herbal Brand Page",
    category: "Landing Page",
    industry: "Health & Wellness",
    imageSrc: "/site/herbalproject.jpeg",
    result: "51% CTR on Buy Now",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
    duration: "6 weeks",
    gradient: "from-[#C8962E]/30 to-[#0A0A0A]",
    desc: "Dark-luxury product page for a premium wireless earbuds brand — immersive black-and-gold hero, animated spec reveals, ENC feature highlights, and a bold gold sticky buy CTA."
  }
];

const badgeColors = {
  "Web App":          "bg-[#2B7EC1]/15 text-[#79b8f0] border-[#2B7EC1]/25",
  "Mobile":           "bg-[#6B3FA0]/15 text-[#b392d8] border-[#6B3FA0]/25",
  "AI/ML":            "bg-[#00B4C8]/15 text-[#00B4C8] border-[#00B4C8]/25",
  "Enterprise":       "bg-amber-500/15 text-amber-300 border-amber-500/25",
  "Design":           "bg-pink-500/15 text-pink-300 border-pink-500/25",
  "Landing Page":     "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",   // ✅ Added
  "Business Website": "bg-rose-500/15 text-rose-300 border-rose-500/25",            // ✅ Added
};

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = portfolios.filter((p) => active === "All" || p.category === active);

  return (
    <main className="bg-[#0D1117] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(43,126,193,0.15),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#2B7EC1]/30 bg-[#2B7EC1]/10">
            <span className="text-sm text-[#79b8f0] font-mono">8 Featured Projects</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
            Products We're<br />
            <span className="bg-gradient-to-r from-[#2B7EC1] via-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">Proud Of</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            Real projects. Real results. See how we've helped founders and enterprises ship products that scale.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
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

      {/* CARDS GRID */}
      <section className="py-10 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
              <article className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.18] hover:-translate-y-1.5 transition-all duration-300">

                {/* ✅ Fixed: proper <img> tag instead of {p.imageSrc} inside <span> */}
                <div className={`h-44 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                  <img
                    src={p.imageSrc}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0D1117] to-transparent" />
                  <span className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full border ${badgeColors[p.category] ?? "bg-white/10 text-white border-white/20"}`}>
                    {p.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-xs text-[#9CA3AF] font-mono mb-1">{p.industry}</div>
                  <h2 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#00B4C8] transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#2B7EC1]/10 text-[#79b8f0] border border-[#2B7EC1]/20">
                      {p.result}
                    </span>
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

      {/* CTA */}
      <section className="py-20 bg-[#0A1628] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Your Project Could Be Next</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">Share your idea and get a free project proposal within 48 hours.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Start Your Project →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}