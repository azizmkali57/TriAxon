"use client";

import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { posts, featuredPost, categoryColors } from "./data/post";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(posts.map((p) => p.category))];
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-[#0D1117] min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(43,126,193,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2B7EC1]/20 bg-[#2B7EC1]/10 mb-6">
            <span className="text-sm text-[#79b8f0] font-medium">
              Engineering • AI • Cloud • Product
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-[1.05] mb-6">
            Insights from the
            <span className="block bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] bg-clip-text text-transparent">
              TriAxon Engineering Team
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#9CA3AF] text-lg leading-relaxed">
            Practical lessons, emerging technologies, and real engineering
            insights from the systems we build and scale.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <article className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] hover:border-[#2B7EC1]/30 transition-all duration-500">

              <div className="grid lg:grid-cols-2">

                {/* IMAGE */}
                <div className="relative h-[320px] lg:h-full overflow-hidden">
                  <Image
                    src={featuredPost.imageSrc}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${
                        categoryColors[featuredPost.category]
                      }`}
                    >
                      {featuredPost.category}
                    </span>

                    <span className="text-xs text-[#79b8f0] uppercase tracking-widest">
                      Featured Article
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight mb-5 group-hover:text-[#79b8f0] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-[#9CA3AF] leading-relaxed text-lg mb-8">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2B7EC1]/15 flex items-center justify-center text-[#79b8f0] font-bold">
                      {featuredPost.author.avatar}
                    </div>

                    <div>
                      <div className="text-white text-sm font-medium">
                        {featuredPost.author.name}
                      </div>

                      <div className="text-xs text-[#9CA3AF]">
                        {featuredPost.date} • {featuredPost.readTime}
                      </div>
                    </div>

                    <span className="ml-auto text-[#79b8f0] text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#2B7EC1] border-[#2B7EC1] text-white"
                    : "bg-white/[0.03] border-white/[0.08] text-[#9CA3AF] hover:border-[#2B7EC1]/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#2B7EC1]/30 hover:-translate-y-2 transition-all duration-500">

                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.imageSrc}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent" />

                    <span
                      className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full border ${
                        categoryColors[post.category]
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col h-[calc(100%-14rem)]">

                    <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white leading-snug mb-3 group-hover:text-[#79b8f0] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center">
                      <div className="w-9 h-9 rounded-xl bg-[#2B7EC1]/15 flex items-center justify-center text-[#79b8f0] text-sm font-bold">
                        {post.author.avatar}
                      </div>

                      <div className="ml-3">
                        <div className="text-sm text-white font-medium">
                          {post.author.name}
                        </div>
                        <div className="text-xs text-[#9CA3AF]">
                          {post.author.role}
                        </div>
                      </div>

                      <span className="ml-auto text-[#79b8f0] text-sm group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-white/[0.05] bg-[#0A1628] py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Stay Ahead of Technology
          </h2>

          <p className="text-[#9CA3AF] mb-8">
            Engineering insights, AI trends, and practical technology ideas —
            delivered occasionally.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]"
            />

            <button className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}