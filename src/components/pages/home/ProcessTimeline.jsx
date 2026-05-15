"use client";

import SectionWrapper, {
  SectionHeader,
} from "@/components/ui/SectionWrapper";
import { FaCode, FaRocket, FaSearch } from "react-icons/fa";
import { FiCheckCircle, FiPenTool, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We start with a deep-dive call to understand your goals, users, and constraints. Then we define scope, timelines, and clear success metrics.",
    duration: "1–2 Days",
    deliverables: [
      "Requirements Doc",
      "Project Scope",
      "Timeline & Milestones",
    ],
    icon: FaSearch,
    border: "border-[#2B7EC1]",
    bg: "bg-[#2B7EC1]/10",
    text: "text-[#2B7EC1]",
  },

  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and interactive prototypes with complete transparency before development begins.",
    duration: "3–7 Days",
    deliverables: [
      "Wireframes",
      "UI Design System",
      "Clickable Prototype",
    ],
    icon: FiPenTool,
    border: "border-[#6B3FA0]",
    bg: "bg-[#6B3FA0]/10",
    text: "text-[#B392D8]",
  },

  {
    number: "03",
    title: "Development",
    description:
      "Engineering sprints with clean architecture, regular demos, and continuous testing throughout the build process.",
    duration: "2–12 Weeks",
    deliverables: [
      "Staging Environment",
      "Weekly Demos",
      "Code Reviews",
    ],
    icon: FaCode,
    border: "border-[#00B4C8]",
    bg: "bg-[#00B4C8]/10",
    text: "text-[#00B4C8]",
  },

  {
    number: "04",
    title: "QA & Testing",
    description:
      "Rigorous testing across browsers, devices, and edge cases with performance optimization and accessibility checks.",
    duration: "3–5 Days",
    deliverables: [
      "QA Report",
      "Performance Audit",
      "Bug-Free Staging",
    ],
    icon: FiCheckCircle,
    border: "border-emerald-500",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },

  {
    number: "05",
    title: "Launch & Handoff",
    description:
      "Smooth deployment to production with complete code handoff, documentation, and onboarding support.",
    duration: "1–2 Days",
    deliverables: [
      "Production Deployment",
      "Documentation",
      "Team Training",
    ],
    icon: FaRocket,
    border: "border-amber-500",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
  },

  {
    number: "06",
    title: "Support & Growth",
    description:
      "Ongoing support, maintenance, monitoring, and feature expansion as your product continues to grow.",
    duration: "Ongoing",
    deliverables: [
      "SLA Monitoring",
      "Monthly Reports",
      "Roadmap Planning",
    ],
    icon: FiTrendingUp,
    border: "border-pink-500",
    bg: "bg-pink-500/10",
    text: "text-pink-400",
  },
];

export default function ProcessTimeline() {
  return (
    <SectionWrapper id="process" dark>
      <SectionHeader
        eyebrow="How We Work"
        title={
          <>
            Our{" "}
            <span className="bg-gradient-to-r from-[#00B4C8] to-[#6B3FA0] bg-clip-text text-transparent">
              6-Step Process
            </span>
          </>
        }
        subtitle="A structured, transparent workflow that keeps you informed and in control at every stage."
      />

      <div className="relative">

        {}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

        <div className="space-y-10">

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >

                {}
                <div className="flex-1">
                  <div
                    className={`relative rounded-3xl border ${step.border} ${step.bg} p-6 lg:p-8 backdrop-blur-sm ${
                      isLeft ? "lg:mr-12" : "lg:ml-12"
                    }`}
                  >

                    {}
                    <div className="flex items-start gap-4 mb-5">

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${step.border} bg-[#0F172A] shrink-0`}
                      >
                        <Icon className={`text-2xl ${step.text}`} />
                      </div>

                      <div>
                        <span
                          className={`text-xs font-mono tracking-widest ${step.text}`}
                        >
                          STEP {step.number}
                        </span>

                        <h3 className="text-xl font-semibold text-white mt-1">
                          {step.title}
                        </h3>
                      </div>

                      <div className="ml-auto">
                        <span className="text-xs text-[#9CA3AF] bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {}
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">
                      {step.description}
                    </p>

                    {}
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-[#CBD5E1]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {}
                <div className="hidden lg:flex relative z-10 items-center justify-center w-5 h-5 rounded-full border-2 border-white/20 bg-[#0A1628]">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${step.bg}`}
                  />
                </div>

                {}
                <div className="hidden lg:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}