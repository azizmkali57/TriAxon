"use client";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import Link from "next/link";

const posts = [
  {
    category: "Development",
    badge: "blue",
    title: "Why We Moved All Client Projects from REST to tRPC + Next.js App Router",
    excerpt:
      "After 12+ projects, we made the full switch. Here's what we learned — including the surprising performance wins and the DX improvements that convinced our whole team.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Apr 28, 2025",
    readTime: "7 min read",
    emoji: "⚛️",
  },
  {
    category: "Mobile",
    badge: "purple",
    title: "Flutter vs React Native in 2025: A Decision Framework for Startups",
    excerpt:
      "We've shipped 20+ mobile apps. This is the honest, framework-agnostic guide we wish we'd had when we started — with real benchmarks and real tradeoffs.",
    author: "Karan Singh",
    authorRole: "Head of Engineering",
    date: "Apr 15, 2025",
    readTime: "9 min read",
    emoji: "📱",
  },
  {
    category: "AI/ML",
    badge: "teal",
    title: "Building Production RAG Pipelines: Lessons from 5 Client Deployments",
    excerpt:
      "RAG sounds simple in demos. In production, it's a different story. We share the embedding choices, chunking strategies, and eval frameworks that actually work.",
    author: "Anjali Patel",
    authorRole: "Design Lead",
    date: "Mar 30, 2025",
    readTime: "11 min read",
    emoji: "🤖",
  },
];

export default function BlogSection() {
  return (
    <SectionWrapper id="blog">
      <SectionHeader
        eyebrow="From Our Blog"
        title={
          <>
            Technical Insights &{" "}
            <span className="bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] bg-clip-text text-transparent">
              Lessons Learned
            </span>
          </>
        }
        subtitle="We write about what we build, what broke, and what we'd do differently — all from the trenches of real client projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {posts.map((post, i) => (
          <article
            key={post.title}
            className="group reveal rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Visual header */}
            <div className="h-36 bg-gradient-to-br from-[#0D1F3C] to-[#0A1628] flex items-center justify-center border-b border-white/[0.06]">
              <span className="text-6xl opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300">
                {post.emoji}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={post.badge} size="sm">{post.category}</Badge>
                <span className="text-xs text-[#9CA3AF]">{post.readTime}</span>
              </div>

              <h3 className="font-bold text-base text-white leading-snug mb-3 group-hover:text-[#00B4C8] transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#2B7EC1]/20 text-[#79b8f0] flex items-center justify-center text-xs font-bold">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">{post.author}</div>
                    <div className="text-xs text-[#9CA3AF]">{post.date}</div>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#00B4C8] group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center reveal">
        <Button variant="outline" size="lg">
          Read All Articles →
        </Button>
      </div>
    </SectionWrapper>
  );
}