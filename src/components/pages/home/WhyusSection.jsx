"use client";
import Card from "@/components/ui/Card";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const reasons = [
  {
    title: "Fast Delivery, No Fluff",
    description:
      "We ship MVPs in weeks, not months. Our agile process eliminates bloat and focuses engineering effort on what actually matters for your launch.",
    stat: "2–12 weeks",
    statLabel: "avg. delivery time",
  },
  {
    title: "Security-First Engineering",
    description:
      "Every application we build is security-reviewed: OWASP compliance, encrypted data at rest and in transit, role-based access, and regular audits.",
    stat: "0",
    statLabel: "security incidents",
  },
  {
    title: "Outcome-Driven Approach",
    description:
      "We don't just write code — we partner with you to define success metrics and build towards them. Your business growth is our north star.",
    stat: "98%",
    statLabel: "client retention",
  },
  {
    title: "Global Talent, Local Pricing",
    description:
      "Senior engineers from IITs and top global programs, at a fraction of Western agency costs. World-class quality without the bloated price tag.",
    stat: "60%",
    statLabel: "cost vs US/EU agencies",
  },
  {
    title: "Full Transparency",
    description:
      "Weekly video calls, real-time Slack access to your team, live staging environments, and honest progress reports — always.",
    stat: "24/7",
    statLabel: "project visibility",
  },
  {
    title: "Deep Technical Expertise",
    description:
      "Our engineers average 6+ years of experience. We've tackled fintech, healthtech, logistics, AI/ML, and enterprise systems across 15+ industries.",
    stat: "6+",
    statLabel: "years avg. experience",
  },
];

export default function WhyusSection() {
  return (
    <SectionWrapper id="why-us">
      <SectionHeader
        eyebrow="Why TriAxon"
        title={
          <>
            The Difference Is in{" "}
            <span className="bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">
              How We Work
            </span>
          </>
        }
        subtitle="Many agencies promise great work. Here's what sets us apart — and why 98% of our clients come back."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <Card
            key={r.title}
            hover
            className="group reveal"
            padding="lg"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">{r.icon}</span>
              <div className="text-right ml-auto">
                <div className="font-display font-extrabold text-2xl text-white">{r.stat}</div>
                <div className="text-xs text-[#9CA3AF]">{r.statLabel}</div>
              </div>
            </div>

            <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#00B4C8] transition-colors">
              {r.title}
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">{r.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}