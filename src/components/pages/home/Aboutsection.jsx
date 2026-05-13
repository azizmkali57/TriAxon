"use client";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import dynamic from "next/dynamic";
import Link from "next/link";

const GlobeScene = dynamic(() => import("@/components/three/GlobeScene"), { ssr: false });

const team = [
  { name: "Aziz Ali", role: "Co-Founder & CTO", avatar: "AA", color: "bg-[#2B7EC1]/20 text-[#79b8f0]" },
  { name: "Ruqaiya", role: "Social Media Manager", avatar: "RT", color: "bg-[#6B3FA0]/20 text-[#b392d8]" },
  { name: "Amaan Husain", role: "Project Manager", avatar: "AH", color: "bg-[#00B4C8]/20 text-[#00B4C8]" },
  { name: "Mustafa Fakhri", role: "Design Lead", avatar: "MF", color: "bg-emerald-500/20 text-emerald-400" },
];

const values = [
  { emoji: "🎯", label: "User-First" },
  { emoji: "🚀", label: "Ship Fast" },
  { emoji: "🔍", label: "Quality" },
  { emoji: "🤝", label: "Transparent" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-4xl text-white mb-6">
            Built by Engineers, <span className="text-cyan-400">Run for Founders</span>
          </h2>

          <p className="text-gray-400 mb-4">
            TriAxon Technologies was founded in Indore in 2022 by engineers frustrated with poor delivery quality.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {values.map((v) => (
              <div key={v.label} className="px-3 py-2 bg-white/5 rounded-lg text-white text-sm">
                {v.emoji} {v.label}
              </div>
            ))}
          </div>

          <Link href="#contact">
            <Button>Work With Us</Button>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-8">
          <GlobeScene size={320} color="#2B7EC1" accentColor="#00B4C8" speed={1.2} />

          <div className="grid grid-cols-2 gap-3 w-full">
            {team.map((member) => (
              <div key={member.name} className="p-3 bg-white/5 rounded-lg">
                <div className="text-white font-semibold">{member.name}</div>
                <div className="text-gray-400 text-xs">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}