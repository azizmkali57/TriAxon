"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";

const packageCategories = {
  website: [
    {
      name: "Starter Website",
      price: "Starting from ₹25,000",
      desc: "Ideal for startups and businesses needing a strong online presence.",
      popular: false,
      features: [
        "Responsive Website",
        "Modern UI",
        "Basic SEO",
        "Contact Forms",
        "Fast Delivery",
        "1 Month Support",
      ],
    },
    {
      name: "Business Website",
      price: "Starting from ₹55,000",
      desc: "Professional websites with advanced pages and scalable structure.",
      popular: true,
      features: [
        "Premium Design",
        "CMS Integration",
        "SEO Setup",
        "Lead Capture",
        "Performance Optimization",
        "2 Months Support",
      ],
    },
    {
      name: "Enterprise Website",
      price: "Custom Quote",
      desc: "Advanced web platforms for enterprises and growing organizations.",
      popular: false,
      features: [
        "Custom Features",
        "Admin Dashboard",
        "API Integration",
        "Security Layers",
        "Cloud Deployment",
        "Priority Support",
      ],
    },
  ],

  app: [
    {
      name: "MVP App",
      price: "Starting from ₹65,000",
      desc: "Fast mobile app launch for early-stage startups.",
      popular: false,
      features: [
        "Android / iOS",
        "Core Features",
        "Modern UI",
        "API Setup",
        "Testing",
        "1 Month Support",
      ],
    },
    {
      name: "Startup App",
      price: "Starting from ₹1.2L",
      desc: "Scalable mobile applications with advanced features.",
      popular: true,
      features: [
        "Cross Platform",
        "Authentication",
        "Dashboard",
        "Push Notifications",
        "Backend Integration",
        "2 Months Support",
      ],
    },
    {
      name: "Enterprise App",
      price: "Custom Quote",
      desc: "Large-scale applications with enterprise-grade architecture.",
      popular: false,
      features: [
        "Dedicated Team",
        "Cloud Infrastructure",
        "Security",
        "High Scalability",
        "DevOps",
        "Priority Support",
      ],
    },
  ],

  ai: [
    {
      name: "AI Chatbot",
      price: "Starting from ₹45,000",
      desc: "AI assistants and conversational AI solutions.",
      popular: false,
      features: [
        "AI Chatbot",
        "Knowledge Base",
        "Deployment",
        "Analytics",
        "Automation",
        "Support",
      ],
    },
    {
      name: "AI Automation",
      price: "Starting from ₹95,000",
      desc: "Automate workflows and operations using intelligent systems.",
      popular: true,
      features: [
        "AI Agents",
        "Automation",
        "API Integration",
        "Cloud Setup",
        "Monitoring",
        "Support",
      ],
    },
    {
      name: "Enterprise AI",
      price: "Custom Quote",
      desc: "Private AI systems and enterprise-grade AI infrastructure.",
      popular: false,
      features: [
        "Private AI",
        "Dedicated Team",
        "Cloud AI",
        "Security",
        "Scaling",
        "Priority Support",
      ],
    },
  ],

  software: [
    {
      name: "Custom Platform",
      price: "Starting from ₹85,000",
      desc: "Tailored software for unique business requirements.",
      popular: false,
      features: [
        "Custom Dashboard",
        "Database",
        "Business Logic",
        "Integrations",
        "Testing",
        "Support",
      ],
    },
    {
      name: "ERP / CRM",
      price: "Starting from ₹2L",
      desc: "Business systems to streamline operations and management.",
      popular: true,
      features: [
        "ERP / CRM",
        "Reports",
        "Permissions",
        "Automation",
        "Deployment",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise System",
      price: "Custom Quote",
      desc: "Mission-critical enterprise-grade software systems.",
      popular: false,
      features: [
        "Dedicated Team",
        "Enterprise Architecture",
        "High Security",
        "Cloud Infra",
        "Maintenance",
        "Priority Support",
      ],
    },
  ],
};

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState("website");
  const packages = packageCategories[activeTab];

  return (
    <main className="bg-[#0D1117] min-h-screen text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-5%,rgba(43,126,193,0.16),transparent)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex px-4 py-2 rounded-full border border-[#2B7EC1]/20 bg-[#2B7EC1]/10 mb-6">
            <span className="text-sm text-[#79b8f0]">
              Flexible pricing for every business stage
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl leading-[1.05] mb-6">
            Technology Packages
            <span className="block bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] bg-clip-text text-transparent">
              Built For Growth
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-[#9CA3AF] text-lg leading-relaxed mb-10">
            Choose from tailored solutions for websites, mobile apps, AI systems
            and custom software built to scale your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] font-semibold hover:opacity-90 transition"
            >
              Book Consultation
            </Link>

            <Link
              href="#packages"
              className="px-7 py-3.5 rounded-xl border border-white/10 hover:bg-white/[0.03] transition"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGE SECTION */}
      <section id="packages" className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Choose Your Solution
            </h2>

            <p className="text-[#9CA3AF] max-w-2xl mx-auto">
              Select the service category and explore packages designed around
              your business goals.
            </p>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              ["website", "Website Development"],
              ["app", "App Development"],
              ["ai", "AI Solutions"],
              ["software", "Custom Software"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-3 rounded-xl border transition-all duration-300 text-sm font-medium
                ${
                  activeTab === key
                    ? "bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] border-transparent text-white"
                    : "border-white/[0.08] text-[#9CA3AF] hover:bg-white/[0.03]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CARDS */}
          {/* CARDS */}
          <div
            key={activeTab}
            className="grid lg:grid-cols-3 gap-8 animate-[fadeIn_.45s_ease]"
          >
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(43,126,193,0.18)]
      ${
        pkg.popular
          ? "border-[#2B7EC1]/40 bg-gradient-to-b from-[#101A2A] to-[#0D1117]"
          : "border-white/[0.07] bg-white/[0.03]"
      }`}
              >
                {pkg.popular && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs bg-[#2B7EC1]/15 border border-[#2B7EC1]/30 text-[#79b8f0] z-20">
                    Most Popular
                  </div>
                )}

                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(43,126,193,0.12),transparent_55%)]" />

                {/* Content */}
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-[#79b8f0] transition-colors duration-300">
                    {pkg.name}
                  </h3>

                  <p className="text-3xl font-bold text-[#79b8f0] mb-4">
                    {pkg.price}
                  </p>

                  <p className="text-[#9CA3AF] leading-relaxed mb-7">
                    {pkg.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-[#C9D1D9]"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#2B7EC1]/15 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-[#79b8f0]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full inline-flex justify-center items-center py-3.5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02]
          ${
            pkg.popular
              ? "bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white hover:opacity-90"
              : "border border-white/10 hover:bg-white/[0.04]"
          }`}
                  >
                    Get Proposal
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["50+", "Projects Delivered"],
              ["98%", "Client Satisfaction"],
              ["24/7", "Support"],
              ["Fast", "Delivery Cycle"],
            ].map(([num, text], i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
              >
                <div className="text-3xl font-bold text-[#79b8f0] mb-2">
                  {num}
                </div>

                <div className="text-sm text-[#9CA3AF]">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold mb-4">
              Our Process
            </h2>

            <p className="text-[#9CA3AF]">
              Clear communication and execution from idea to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {["Discovery", "Planning", "Development", "Launch"].map(
              (step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#2B7EC1]/15 text-[#79b8f0] flex items-center justify-center font-bold">
                    {i + 1}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">{step}</h3>

                  <p className="text-sm text-[#9CA3AF]">
                    Professional execution with transparency and speed.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Compare Packages
            </h2>

            <p className="text-[#9CA3AF]">
              Understand which solution best matches your business stage.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/[0.06] bg-white/[0.02]">
            <table className="w-full min-w-[760px]">
              <thead className="border-b border-white/[0.06]">
                <tr className="text-left">
                  <th className="px-6 py-5 text-[#9CA3AF]">Features</th>
                  <th className="px-6 py-5">Starter</th>
                  <th className="px-6 py-5 text-[#79b8f0]">Business</th>
                  <th className="px-6 py-5">Enterprise</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Custom Design", "✓", "✓", "✓"],
                  ["SEO", "Basic", "Advanced", "Advanced"],
                  ["Dashboard", "-", "Optional", "✓"],
                  ["API Integration", "-", "✓", "✓"],
                  ["Support", "1 Month", "2 Months", "Priority"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/[0.05]">
                    {row.map((cell, idx) => (
                      <td
                        key={idx}
                        className="px-6 py-5 text-sm text-[#C9D1D9]"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LEAD STRIP */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border border-[#2B7EC1]/20 bg-gradient-to-r from-[#101A2A] to-[#0D1117] p-8 flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Not Sure Which Package Fits?
              </h3>

              <p className="text-[#9CA3AF]">
                Speak with our experts and get recommendations tailored to your
                business.
              </p>
            </div>

            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] font-semibold hover:opacity-90 transition whitespace-nowrap"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                q: "Can packages be customized?",
                a: "Yes. Every business is different and packages can be tailored according to project scope and requirements.",
              },
              {
                q: "Do you provide post-launch support?",
                a: "Absolutely. All packages include support with upgrade and maintenance options.",
              },
              {
                q: "How long does development take?",
                a: "Timeline depends on complexity. Most projects range between 2–12 weeks.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>

                <p className="text-[#9CA3AF] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden border border-[#2B7EC1]/20 bg-gradient-to-r from-[#0F1725] to-[#111827] p-10 text-center">
            <h2 className="font-display text-4xl font-bold mb-4">
              Need Something Custom?
            </h2>

            <p className="text-[#9CA3AF] max-w-2xl mx-auto mb-8">
              Tell us your business requirements and we'll craft a tailored
              technology solution aligned with your goals.
            </p>

            <Link
              href="/contact"
              className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] font-semibold hover:opacity-90 transition"
            >
              Talk With Experts
            </Link>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

            {/* TRUST + CTA SECTION */}
      <section className="py-24 border-t border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,126,193,0.08),transparent_55%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* TRUST STATS */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                number: "50+",
                label: "Projects Delivered",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
              },
              {
                number: "24/7",
                label: "Support Assistance",
              },
              {
                number: "100%",
                label: "Custom Solutions",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 text-center"
              >
                <h3 className="text-3xl font-bold text-[#79b8f0] mb-2">
                  {item.number}
                </h3>

                <p className="text-sm text-[#9CA3AF]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* BIG CTA */}
          <div className="rounded-[32px] overflow-hidden border border-[#2B7EC1]/20 bg-gradient-to-br from-[#101827] via-[#0F1725] to-[#0D1117] p-10 md:p-14 relative">

            <div className="absolute top-0 right-0 w-72 h-72 bg-[#2B7EC1]/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#6B3FA0]/10 blur-[120px]" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex px-4 py-2 rounded-full border border-[#2B7EC1]/20 bg-[#2B7EC1]/10 mb-6">
                <span className="text-sm text-[#79b8f0]">
                  Start Building With Confidence
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
                Let's Build Something
                <span className="block bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] bg-clip-text text-transparent">
                  Extraordinary Together
                </span>
              </h2>

              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Whether you need a website, mobile application, AI solution or
                enterprise software — TriAxon delivers scalable digital products
                designed for growth and performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] font-semibold text-white hover:opacity-90 transition"
                >
                  Book Free Consultation
                </Link>

                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/[0.03] transition"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
