"use client";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import Link from "next/link";

const featured = {
  slug:    "trpc-nextjs-app-router",
  title:   "Why We Moved All Client Projects from REST to tRPC + Next.js App Router",
  excerpt: "After 12+ projects, we made the full switch. Here's what we learned — including surprising performance wins and the DX improvements that convinced our whole team.",
  category: "Development",
  author:   { name: "Rahul Verma", role: "CTO", avatar: "RV" },
  date:     "Apr 28, 2025",
  readTime: "7 min read",
  emoji:    "⚛️",
};

const posts = [
  { slug: "flutter-vs-react-native-2025", title: "Flutter vs React Native in 2025: A Decision Framework for Startups", excerpt: "We've shipped 20+ mobile apps. This is the honest, framework-agnostic guide we wish we'd had — with real benchmarks.", category: "Mobile",      author: { name: "Karan Singh",  avatar: "KS" }, date: "Apr 15, 2025", readTime: "9 min",  emoji: "📱" },
  { slug: "rag-production-lessons",        title: "Building Production RAG Pipelines: Lessons from 5 Deployments",    excerpt: "RAG sounds simple in demos. In production, it's a different story. Embedding choices, chunking strategies, and eval frameworks.", category: "AI/ML",       author: { name: "Priya Joshi",  avatar: "PJ" }, date: "Mar 30, 2025", readTime: "11 min", emoji: "🤖" },
  { slug: "nextjs-performance-checklist",  title: "The 2025 Next.js Performance Checklist (From Real Project Audits)", excerpt: "12 performance wins we apply to every new project — with before/after Core Web Vitals numbers from real client sites.", category: "Development", author: { name: "Rahul Verma",  avatar: "RV" }, date: "Mar 12, 2025", readTime: "8 min",  emoji: "⚡" },
  { slug: "aws-cost-optimisation",         title: "How We Cut AWS Bills by 40% for 3 Clients in 60 Days",            excerpt: "The common waste patterns we find in almost every cloud audit, and the exact steps we take to eliminate them.", category: "DevOps",      author: { name: "Karan Singh",  avatar: "KS" }, date: "Feb 28, 2025", readTime: "6 min",  emoji: "☁️" },
  { slug: "figma-design-system-workflow",  title: "The Design System Workflow That Scales Across 10+ Client Projects", excerpt: "How we structure Figma files, component libraries, and token handoffs so every client gets a consistent, maintainable design system.", category: "Design",      author: { name: "Anjali Patel", avatar: "AP" }, date: "Feb 10, 2025", readTime: "7 min",  emoji: "🎨" },
  { slug: "mvp-launch-playbook",           title: "The TriAxon MVP Launch Playbook: 0 to Production in 8 Weeks",      excerpt: "The exact process we use to take a founder's idea from a napkin sketch to a live, paying-customer-ready product.", category: "Product",     author: { name: "Neha Sharma",  avatar: "NS" }, date: "Jan 22, 2025", readTime: "10 min", emoji: "🚀" },
];

const categoryColors = {
  "Development": "bg-[#2B7EC1]/15 text-[#79b8f0] border-[#2B7EC1]/25",
  "Mobile":      "bg-[#6B3FA0]/15 text-[#b392d8] border-[#6B3FA0]/25",
  "AI/ML":       "bg-[#00B4C8]/15 text-[#00B4C8] border-[#00B4C8]/25",
  "DevOps":      "bg-amber-500/15 text-amber-300 border-amber-500/25",
  "Design":      "bg-pink-500/15  text-pink-300  border-pink-500/25",
  "Product":     "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
};

export default function BlogPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-5%,rgba(107,63,160,0.15),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#6B3FA0]/30 bg-[#6B3FA0]/10">
            <span className="text-sm text-[#b392d8] font-mono">Written by engineers, for builders</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-[1.08] mb-5">
            The TriAxon{" "}
            <span className="bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">Engineering Blog</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Real lessons from real projects. We write about what we build, what broke, and what we'd do differently.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article className="rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-[#2B7EC1]/20 via-[#0D1F3C] to-[#0A1628] flex items-center justify-center">
                  <span className="text-[8rem] opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300">{featured.emoji}</span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full border ${categoryColors[featured.category]}`}>{featured.category}</span>
                    <span className="text-xs text-[#9CA3AF]">Featured Article</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4 leading-snug group-hover:text-[#00B4C8] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[#9CA3AF] leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#2B7EC1]/20 text-[#79b8f0] flex items-center justify-center text-xs font-bold">{featured.author.avatar}</div>
                      <div>
                        <div className="text-sm font-medium text-white">{featured.author.name}</div>
                        <div className="text-xs text-[#9CA3AF]">{featured.date} · {featured.readTime}</div>
                      </div>
                    </div>
                    <span className="ml-auto text-sm font-medium text-[#2B7EC1] group-hover:text-[#00B4C8] transition-colors flex items-center gap-1">
                      Read Article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-white mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
                  <div className="h-36 bg-gradient-to-br from-[#0D1F3C] to-[#0A1628] flex items-center justify-center border-b border-white/[0.05]">
                    <span className="text-6xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300">{post.emoji}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border ${categoryColors[post.category]}`}>{post.category}</span>
                      <span className="text-xs text-[#9CA3AF]">{post.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-white mb-3 leading-snug group-hover:text-[#00B4C8] transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#2B7EC1]/20 text-[#79b8f0] flex items-center justify-center text-xs font-bold">{post.author.avatar}</div>
                      <div>
                        <div className="text-xs font-medium text-white">{post.author.name}</div>
                        <div className="text-xs text-[#9CA3AF]">{post.date}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A1628] border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-3">Stay in the Loop</h2>
          <p className="text-[#9CA3AF] mb-8">One article per week. No spam, unsubscribe anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 transition-colors" />
            <button className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}