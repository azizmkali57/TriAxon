"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper, {
  SectionHeader,
} from "@/components/ui/SectionWrapper";
import Link from "next/link";

const blogs = [
  {
    category: "Artificial Intelligence",
    badge: "purple",
    title: "🤖 Agentic AI — The AI That Acts, Not Just Talks",
    excerpt:
      "AI agents are evolving beyond chatbots. From booking travel to fixing code and running research autonomously, Agentic AI is redefining how businesses automate complex workflows in 2026.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Jan 12, 2026",
    readTime: "6 min read",
    imageSrc: "/site/img1.jpeg",
  },
  {
    category: "Artificial Intelligence",
    badge: "indigo",
    title: "🧠 Multi-Agent AI Systems",
    excerpt:
      "Multi-agent AI systems allow specialized AI agents to collaborate on tasks, bringing better scalability, coordination, and automation to enterprise workflows and intelligent platforms.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Jan 18, 2026",
    readTime: "7 min read",
    imageSrc: "/site/img2.jpeg",
  },
  {
    category: "Connectivity",
    badge: "blue",
    title: "🌐 6G Connectivity — Beyond 5G",
    excerpt:
      "6G is set to revolutionize wireless communication with ultra-low latency, AI-driven networking, and hyper-connected digital ecosystems far beyond what 5G can offer.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Jan 25, 2026",
    readTime: "5 min read",
    imageSrc: "/site/img3.jpeg",
  },
  {
    category: "Cloud Computing",
    badge: "cyan",
    title: "☁️ Cloud 3.0 — Hybrid, Multi-Cloud & Sovereign Architectures",
    excerpt:
      "Cloud 3.0 introduces resilient hybrid and sovereign cloud strategies, enabling enterprises to scale AI workloads securely while reducing dependency on single providers.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Feb 2, 2026",
    readTime: "8 min read",
    imageSrc: "/site/img4.jpeg",
  },
  {
    category: "Cybersecurity",
    badge: "red",
    title: "🔐 Preemptive Cybersecurity (AI-Powered Defense)",
    excerpt:
      "Cybersecurity is becoming proactive. AI-powered defense systems now predict and neutralize digital threats before they strike, changing the future of enterprise security.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    imageSrc: "/site/img5.jpeg",
  },
  {
    category: "Robotics",
    badge: "orange",
    title: "🤖 Physical AI & Robotics",
    excerpt:
      "Physical AI is bringing intelligence into robots, drones, and industrial systems, allowing machines to operate autonomously in dynamic real-world environments.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Feb 18, 2026",
    readTime: "7 min read",
    imageSrc: "/site/img6.jpeg",
  },
  {
    category: "Space Technology",
    badge: "slate",
    title: "🛸 Space as a Computing Frontier",
    excerpt:
      "Space-based computing is emerging as the next frontier for AI infrastructure, offering superior cooling, energy efficiency, and entirely new possibilities for data centers.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Feb 25, 2026",
    readTime: "5 min read",
    imageSrc: "/site/img7.jpeg",
  },
  {
    category: "Data Privacy",
    badge: "emerald",
    title: "🔒 Confidential Computing & Data Privacy",
    excerpt:
      "Confidential computing secures sensitive data even while it’s actively being processed, enabling safer AI adoption and compliance in an increasingly regulated world.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Mar 4, 2026",
    readTime: "6 min read",
    imageSrc: "/site/img8.jpeg",
  },
  {
    category: "Sustainability",
    badge: "green",
    title: "🌱 Green AI / Sustainable Tech (ESG + AI)",
    excerpt:
      "Organizations are shifting toward energy-efficient AI models and sustainable technology strategies, balancing innovation with environmental responsibility and ESG goals.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Mar 12, 2026",
    readTime: "7 min read",
    imageSrc: "/site/img9.jpeg",
  },
  {
    category: "Software Development",
    badge: "pink",
    title: "🧬 AI-Native Software Development",
    excerpt:
      "Software development is transitioning from manual coding to AI-native workflows, where developers express intent and AI systems autonomously build and maintain applications.",
    author: "Rahul Verma",
    authorRole: "CTO",
    date: "Mar 20, 2026",
    readTime: "8 min read",
    imageSrc: "/site/img10.jpeg",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {blogs.map((post, i) => (
          <article
            key={post.title}
            className="group reveal rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Blog Image */}
            <div className="h-52 overflow-hidden border-b border-white/[0.06]">
              <img
                src={post.imageSrc}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category + Read Time */}
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={post.badge} size="sm">
                  {post.category}
                </Badge>

                <span className="text-xs text-[#9CA3AF]">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-white leading-snug mb-3 group-hover:text-[#00B4C8] transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-xl bg-[#2B7EC1]/20 text-[#79b8f0] flex items-center justify-center text-sm font-bold">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  {/* Author */}
                  <div>
                    <div className="text-sm font-medium text-white">
                      {post.author}
                    </div>

                    <div className="text-xs text-[#9CA3AF]">
                      {post.date}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#00B4C8] group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Button */}
      <div className="text-center reveal">
        <Link href="/blog">
          <Button variant="outline" size="lg">
            Read All Articles →
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}