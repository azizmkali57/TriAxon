"use client";

import { use, useEffect, useMemo, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { posts, categoryColors } from "../data/post";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;
      const progress = (current / totalHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100]">
      <div
        className="h-full bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function TableOfContents({ content }) {
  const headings = content.filter((b) => b.type === "h2");

  if (!headings.length) return null;

  return (
    <aside className="sticky top-28 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-[#4A6080] mb-5">
        Contents
      </p>

      <ul className="space-y-3">
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#heading-${i}`}
              className="text-sm text-[#9CA3AF] hover:text-[#79b8f0] transition-colors leading-relaxed block"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function SharePanel({ title }) {
  const shareUrl =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.href)
      : "";

  const shareTitle = encodeURIComponent(title);

  return (
    <div className="sticky top-28 flex flex-col gap-3">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#9CA3AF] hover:text-[#79b8f0] hover:border-[#2B7EC1]/30 transition"
      >
        in
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
        target="_blank"
        className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#9CA3AF] hover:text-[#79b8f0] hover:border-[#2B7EC1]/30 transition"
      >
        X
      </a>

      <button
        onClick={() => navigator.clipboard.writeText(window.location.href)}
        className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#9CA3AF] hover:text-[#79b8f0] hover:border-[#2B7EC1]/30 transition"
      >
        ⧉
      </button>
    </div>
  );
}

function ContentBlock({ block, headingIndex }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="text-[1.35rem] leading-[1.9] text-[#C9D1D9] border-l-2 border-[#2B7EC1]/60 pl-6 mb-10 font-light">
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2
          id={`heading-${headingIndex}`}
          className="scroll-mt-28 text-3xl font-display font-bold text-white mt-14 mb-5"
        >
          {block.text}
        </h2>
      );

    case "p":
      return (
        <p className="text-[17px] leading-[2] text-[#AAB4C0] mb-6">
          {block.text}
        </p>
      );

    case "callout":
      return (
        <div className="my-8 rounded-2xl border border-[#2B7EC1]/20 bg-[#2B7EC1]/5 p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-[#79b8f0] mb-2">
            {block.label}
          </div>

          <p className="text-[#D1D7DE] leading-[1.9]">
            {block.text}
          </p>
        </div>
      );

    case "code":
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09111F]">
          <div className="px-4 py-3 border-b border-white/[0.06] text-xs text-[#4A6080] font-mono">
            {block.lang}
          </div>

          <pre className="overflow-x-auto p-5">
            <code className="text-[#79b8f0] text-sm leading-7 whitespace-pre">
              {block.text}
            </code>
          </pre>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogPostPage({ params }) {
  const { slug } = use(params);

  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = useMemo(() => {
    return posts
      .filter(
        (p) =>
          p.slug !== post.slug &&
          (p.category === post.category || true)
      )
      .slice(0, 3);
  }, [post]);

  let h2Count = -1;

  return (
    <main className="bg-[#0D1117] min-h-screen">
      <ReadingProgress />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.imageSrc}
            alt={post.title}
            fill
            className="object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/40 via-[#0D1117]/85 to-[#0D1117]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm text-[#4A6080] mb-8">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>

            <span>/</span>

            <Link href="/blog" className="hover:text-white transition">
              Blog
            </Link>

            <span>/</span>

            <span className="text-[#9CA3AF] truncate">
              {post.title}
            </span>
          </div>

          {/* META */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-xs px-3 py-1 rounded-full border ${
                categoryColors[post.category]
              }`}
            >
              {post.category}
            </span>

            <span className="text-sm text-[#9CA3AF]">
              {post.date}
            </span>

            <span className="text-[#4A6080]">•</span>

            <span className="text-sm text-[#9CA3AF]">
              {post.readTime}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* EXCERPT */}
          <p className="text-[#AAB4C0] text-xl leading-[1.8] max-w-3xl mb-10">
            {post.excerpt}
          </p>

          {/* AUTHOR */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2B7EC1]/15 text-[#79b8f0] flex items-center justify-center font-bold">
              {post.author.avatar}
            </div>

            <div>
              <div className="text-white font-medium">
                {post.author.name}
              </div>

              <div className="text-sm text-[#9CA3AF]">
                {post.author.role}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-[70px_1fr_260px] gap-10 items-start">

            {/* SHARE */}
            <div className="hidden lg:block">
              <SharePanel title={post.title} />
            </div>

            {/* CONTENT */}
            <article className="min-w-0 max-w-3xl">
              {post.content.map((block, i) => {
                if (block.type === "h2") h2Count++;

                return (
                  <ContentBlock
                    key={i}
                    block={block}
                    headingIndex={
                      block.type === "h2" ? h2Count : undefined
                    }
                  />
                );
              })}
              {/* AUTHOR CARD */}
              <div className="mt-16 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7">
                <div className="flex flex-col sm:flex-row gap-5 sm:items-center">

                  <div className="w-16 h-16 rounded-2xl bg-[#2B7EC1]/15 text-[#79b8f0] flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {post.author.avatar}
                  </div>

                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#4A6080] mb-2">
                      Written by
                    </p>

                    <h3 className="text-xl font-semibold text-white mb-1">
                      {post.author.name}
                    </h3>

                    <p className="text-[#9CA3AF] text-sm mb-3">
                      {post.author.role} • TriAxon Technologies
                    </p>

                    <p className="text-[#AAB4C0] leading-relaxed text-sm">
                      Engineering insights and technology analysis from the
                      TriAxon team focused on AI, cloud systems, and modern
                      software development.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white text-sm font-medium hover:opacity-90 transition"
                  >
                    Talk With Us
                  </Link>
                </div>
              </div>
            </article>

            {/* TOC */}
            <div className="hidden lg:block">
              <TableOfContents content={post.content} />
            </div>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="border-t border-white/[0.05] bg-[#0A1628] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#4A6080] mb-2">
                Continue Reading
              </p>

              <h2 className="text-3xl font-display font-bold text-white">
                Related Articles
              </h2>
            </div>

            <Link
              href="/blog"
              className="hidden md:flex text-[#79b8f0] hover:text-white transition"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-[#2B7EC1]/30 hover:-translate-y-2 transition-all duration-500">

                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={rp.imageSrc}
                      alt={rp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent" />

                    <span
                      className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full border ${
                        categoryColors[rp.category]
                      }`}
                    >
                      {rp.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="text-xs text-[#9CA3AF] mb-3">
                      {rp.readTime}
                    </div>

                    <h3 className="text-lg font-display font-bold text-white leading-snug mb-3 line-clamp-2 group-hover:text-[#79b8f0] transition">
                      {rp.title}
                    </h3>

                    <p className="text-sm text-[#9CA3AF] line-clamp-3 leading-relaxed">
                      {rp.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <div className="rounded-[32px] border border-white/[0.07] bg-gradient-to-br from-[#101827] to-[#0A1628] p-10 md:p-14">

            <div className="inline-flex px-4 py-2 rounded-full bg-[#2B7EC1]/10 border border-[#2B7EC1]/20 text-[#79b8f0] text-sm mb-6">
              Build With TriAxon
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-5">
              Building AI, Cloud or
              <span className="block text-transparent bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] bg-clip-text">
                Modern Software Systems?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-[#9CA3AF] text-lg leading-relaxed mb-8">
              TriAxon helps startups and enterprises design, build and scale
              intelligent digital products with modern engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold hover:opacity-90 transition"
              >
                Book Consultation
              </Link>

              <Link
                href="/services"
                className="px-7 py-3.5 rounded-xl border border-white/[0.08] text-[#C9D1D9] hover:bg-white/[0.03] transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}