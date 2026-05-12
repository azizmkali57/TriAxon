"use client";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import dynamic from "next/dynamic";
import Link from "next/link";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), { ssr: false });

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Countries Reached" },
];

const techBadges = ["React", "Next.js", "Node.js", "Flutter", "AWS", "Python"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D1117]">
 
      <HeroCanvas />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0D1117_80%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-[fadeInDown_0.6s_ease_both]">
            <Badge variant="teal" dot>Next-Gen Digital Solutions</Badge>
            <span className="text-xs text-[#9CA3AF] font-mono hidden sm:block">
              Indore, India · Global Reach
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[#F4F6F9] leading-[1.1] mb-6
            text-4xl sm:text-5xl lg:text-[72px] animate-[fadeInDown_0.7s_ease_both_0.1s_both]">
            We Build{" "}
            <GradientText gradient="blue-purple">Digital Products</GradientText>
            <br />
            That <span className="text-[#00B4C8]">Scale</span> &amp; Perform
          </h1>

          <p className="text-[#9CA3AF] text-lg sm:text-xl leading-relaxed max-w-2xl mb-10
            animate-[fadeInDown_0.7s_ease_both_0.2s_both]">
            From concept to deployment — we engineer web apps, mobile products, and
            enterprise systems that help startups and businesses grow faster.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-[fadeInDown_0.7s_ease_both_0.3s_both]">
            <Link href="#contact">
              <Button size="lg">
                Start Your Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button variant="outline" size="lg">View Our Work</Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-16 animate-[fadeInDown_0.7s_ease_both_0.4s_both]">
            <span className="text-xs text-[#9CA3AF] self-center mr-1">Built with:</span>
            {techBadges.map((t) => (
              <span
                key={t}
                className="tech-tag px-3 py-1 rounded-full text-xs text-[#9CA3AF]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-[fadeInDown_0.7s_ease_both_0.5s_both]">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1">
                  {value}
                </div>
                <div className="text-sm text-[#9CA3AF]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9CA3AF] animate-bounce">
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}