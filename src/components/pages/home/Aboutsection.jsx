"use client";

import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

const team = [
  {
    name: "Aziz Ali",
    role: "Co-Founder & CTO",
  },
  {
    name: "Ruqaiya",
    role: "Social Media Manager",
  },
  {
    name: "Amaan Husain",
    role: "Project Manager",
  },
  {
    name: "Mustafa Fakhri",
    role: "Design Lead",
  },
];

const values = [
  "User-First",
  "Ship Fast",
  "Quality",
  "Transparent",
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl text-white mb-6 leading-tight">
            Built by Engineers,{" "}
            <span className="text-cyan-400">
              Run for Founders
            </span>
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            TriAxon Technologies was founded in Indore in 2022 by engineers
            frustrated with poor delivery quality and slow execution.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            We focus on building scalable digital products, modern user
            experiences, and reliable systems that help startups and businesses
            grow faster.
          </p>

          {/* Values */}
          <div className="flex flex-wrap gap-3 mb-8">
            {values.map((value) => (
              <div
                key={value}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white"
              >
                {value}
              </div>
            ))}
          </div>

          <Link href="#contact">
            <Button>
              Work With Us
            </Button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#111827] p-8">
            
            <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-3">
                About TriAxon
              </div>

              <h3 className="text-2xl text-white font-semibold mb-4">
                Building Modern Digital Experiences
              </h3>

              <p className="text-gray-400 leading-relaxed">
                We combine design, engineering, and strategy to create products
                that are fast, scalable, and visually impactful.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-white font-semibold mb-3">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="text-white font-medium">
                  {member.name}
                </div>

                <div className="text-gray-400 text-sm mt-1">
                  {member.role}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}