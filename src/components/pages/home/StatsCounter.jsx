"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import SectionWrapper from "@/components/ui/SectionWrapper";

const ParticleFieldClient = dynamic(() => import("@/components/three/ParticleField"), { ssr: false });

const stats = [
  {
    value: 30,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across web, mobile, and enterprise",
    color: "text-[#2B7EC1]",
  },
  {
    value: 20,
    suffix: "+",
    label: "Happy Clients",
    description: "In 15+ countries worldwide",
    color: "text-[#6B3FA0]",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
    description: "Building production software",
    color: "text-[#00B4C8]",
  },
  {
    value: 90,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on post-project surveys",
    color: "text-emerald-400",
  },
];

function AnimatedNumber({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <SectionWrapper className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-40">
        <ParticleFieldClient count={150} color="#2B7EC1" size={0.2} spread={100} />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2B7EC1]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00B4C8]/40 to-transparent" />

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="reveal text-center group"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="text-3xl mb-3">{stat.icon}</div>
            <div
              className={`counter-number text-5xl sm:text-6xl font-extrabold mb-2 ${stat.color}`}
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-white font-semibold mb-1">{stat.label}</div>
            <div className="text-[#9CA3AF] text-sm">{stat.description}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}