"use client";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We start with a deep-dive call to understand your goals, users, and constraints. Then we define scope, timelines, and a clear success metric.",
    duration: "1–2 days",
    deliverables: ["Requirements Doc", "Project Scope", "Timeline & Milestones"],
    icon: "🔍",
    color: "border-[#2B7EC1] bg-[#2B7EC1]/10",
    numColor: "text-[#2B7EC1]",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and interactive prototypes in Figma. You get full visibility and approval rights before a single line of code is written.",
    duration: "3–7 days",
    deliverables: ["Wireframes", "UI Design System", "Clickable Prototype"],
    icon: "🎨",
    color: "border-[#6B3FA0] bg-[#6B3FA0]/10",
    numColor: "text-[#6B3FA0]",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Engineering sprints with daily standups and weekly demos. You have full access to a staging environment throughout. Code is reviewed and tested continuously.",
    duration: "2–12 weeks",
    deliverables: ["Staging Environment", "Weekly Demos", "Code Reviews"],
    icon: "⚙️",
    color: "border-[#00B4C8] bg-[#00B4C8]/10",
    numColor: "text-[#00B4C8]",
  },
  {
    number: "04",
    title: "QA & Testing",
    description:
      "Rigorous testing across devices, browsers, and edge cases. We run automated test suites, performance audits, and accessibility checks before sign-off.",
    duration: "3–5 days",
    deliverables: ["QA Report", "Performance Audit", "Bug-free Staging"],
    icon: "✅",
    color: "border-emerald-500 bg-emerald-500/10",
    numColor: "text-emerald-400",
  },
  {
    number: "05",
    title: "Launch & Handoff",
    description:
      "Zero-downtime deployment to production. Full code handoff with documentation. We train your team and ensure you're 100% confident running your product.",
    duration: "1–2 days",
    deliverables: ["Production Deployment", "Documentation", "Team Training"],
    icon: "🚀",
    color: "border-amber-500 bg-amber-500/10",
    numColor: "text-amber-400",
  },
  {
    number: "06",
    title: "Support & Growth",
    description:
      "Post-launch retainer plans with SLA guarantees. We monitor, maintain, and continue adding features as your product grows and evolves.",
    duration: "Ongoing",
    deliverables: ["SLA Monitoring", "Monthly Reports", "Roadmap Planning"],
    icon: "🌱",
    color: "border-pink-500 bg-pink-500/10",
    numColor: "text-pink-400",
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
        subtitle="A structured, transparent process that keeps you informed and in control at every stage of the project."
      />

      <div className="relative">
        <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="space-y-8">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={step.number}
                className={`reveal flex flex-col lg:flex-row items-start lg:items-center gap-6 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`rounded-2xl border ${step.color} p-6 lg:p-8 ${
                      isLeft ? "lg:mr-12" : "lg:ml-12"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl">{step.icon}</span>
                      <div>
                        <span className={`text-xs font-mono font-bold ${step.numColor}`}>
                          STEP {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1">{step.title}</h3>
                      </div>
                      <span className="ml-auto text-xs text-[#9CA3AF] bg-white/5 px-2 py-1 rounded-lg whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d) => (
                        <span
                          key={d}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-[#9CA3AF] border border-white/[0.06]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex w-4 h-4 rounded-full border-2 shrink-0 z-10 items-center justify-center bg-[#0A1628]"
                  style={{ borderColor: step.color.split(" ")[0].replace("border-", "").replace("[", "").replace("]", "") }}
                >
                  <div className="w-2 h-2 rounded-full bg-current opacity-60" />
                </div>

                <div className="hidden lg:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}