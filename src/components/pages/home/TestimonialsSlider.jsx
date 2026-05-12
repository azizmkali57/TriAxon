"use client";
import Card from "@/components/ui/Card";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CEO, FinEdge Solutions",
    avatar: "AM",
    color: "bg-[#2B7EC1]/20 text-[#79b8f0]",
    rating: 4.5,
    text: "TriAxon delivered our fintech dashboard in 6 weeks — well within budget and beyond our expectations. Their attention to performance and security was exceptional. We saw a 40% increase in user engagement after launch.",
    project: "Fintech Dashboard",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager, LogiFlow UK",
    avatar: "SW",
    color: "bg-[#6B3FA0]/20 text-[#b392d8]",
    rating: 4,
    text: "The mobile app they built for us handles 50,000+ daily active users flawlessly. Their Flutter expertise and proactive communication made the entire development process smooth and stress-free.",
    project: "Logistics Mobile App",
  },
  {
    name: "Priya Sharma",
    role: "CTO, HealthBridge India",
    avatar: "PS",
    color: "bg-[#00B4C8]/20 text-[#00B4C8]",
    rating: 4,
    text: "We needed a HIPAA-compliant telemedicine platform with AI features in a tight timeline. TriAxon not only delivered on time but also integrated an AI symptom checker that our doctors love.",
    project: "Telemedicine Platform",
  },
  {
    name: "David Chen",
    role: "Founder, EduTrack",
    avatar: "DC",
    color: "bg-emerald-500/20 text-emerald-400",
    rating: 4.5,
    text: "Outstanding technical expertise. They rebuilt our legacy PHP system into a modern Next.js platform. Page load times dropped from 8 seconds to under 1.2 seconds. Incredible outcome.",
    project: "EdTech Platform Migration",
  },
  {
    name: "Fatima Al-Rashid",
    role: "VP Engineering, RetailMax",
    avatar: "FA",
    color: "bg-amber-500/20 text-amber-400",
    rating: 4,
    text: "TriAxon became a true partner, not just a vendor. They proactively suggested improvements, flagged potential issues early, and delivered a robust e-commerce platform that scaled to Black Friday traffic.",
    project: "E-commerce Platform",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((a) => (a + 1) % testimonials.length);
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <SectionWrapper id="testimonials" dark>
      <SectionHeader
        eyebrow="Client Stories"
        title={
          <>
            Trusted by Teams{" "}
            <span className="bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">
              Worldwide
            </span>
          </>
        }
        subtitle="Don't take our word for it — hear from the founders, CTOs, and product teams we've partnered with."
      />

      <div
        className="max-w-3xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Card glow padding="lg" className="mb-8 reveal">
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${t.color}`}>
              {t.avatar}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-sm text-[#9CA3AF]">{t.role}</div>
            </div>
            <div className="text-right">
              <StarRating count={t.rating} />
              <span className="text-xs text-[#9CA3AF] mt-1 block">{t.project}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-2 -left-2 text-6xl text-[#2B7EC1]/20 font-serif leading-none select-none">"</div>
            <p className="text-[#9CA3AF] leading-relaxed pl-4 text-base">
              {t.text}
            </p>
          </div>
        </Card>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-[#2B7EC1]" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#2B7EC1]/50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#2B7EC1]/50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {testimonials.map((test, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
              i === active
                ? "border-[#2B7EC1]/50 bg-[#2B7EC1]/10"
                : "border-white/[0.06] bg-white/[0.02] hover:border-white/20"
            }`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${test.color}`}>
              {test.avatar}
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-medium text-white">{test.name.split(" ")[0]}</div>
              <div className="text-xs text-[#9CA3AF]">{test.role.split(",")[1]?.trim() || test.role}</div>
            </div>
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
}