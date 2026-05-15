"use client";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const services = [
  {
    icon: "🌐",
    badge: { label: "Most Popular", variant: "blue" },
    title: "Web Development",
    description:
      "Custom, high-performance websites and web applications built with React, Next.js, and modern full-stack architectures.",
    features: ["Next.js / React", "REST & GraphQL APIs", "CMS Integration", "SEO Optimized"],
    color: "from-[#2B7EC1]/20 to-transparent",
  },
  {
    icon: "📱",
    badge: null,
    title: "Mobile App Development",
    description:
      "Native and cross-platform iOS & Android apps that deliver seamless user experiences and top App Store rankings.",
    features: ["Flutter & React Native", "Native iOS/Android", "App Store Deployment", "Push Notifications"],
    color: "from-[#6B3FA0]/20 to-transparent",
  },
  {
    icon: "🎨",
    badge: null,
    title: "UI/UX Design",
    description:
      "User-centered design that converts. From wireframes to polished interfaces, we design for delight and business outcomes.",
    features: ["Figma Design Systems", "Prototyping", "User Research", "Design Audits"],
    color: "from-[#00B4C8]/20 to-transparent",
  },
  {
    icon: "☁️",
    badge: null,
    title: "Cloud & DevOps",
    description:
      "Reliable infrastructure that scales. CI/CD pipelines, containerization, and cloud architecture on AWS, GCP, or Azure.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Performance Monitoring"],
    color: "from-[#2B7EC1]/20 to-transparent",
  },
  {
    icon: "🤖",
    badge: { label: "Trending", variant: "purple" },
    title: "AI & ML Integration",
    description:
      "Add intelligence to your product. LLM integrations, recommendation engines, and custom ML model deployment.",
    features: ["LLM APIs (OpenAI, Claude)", "RAG Pipelines", "Recommendation Systems", "Data Pipelines"],
    color: "from-[#6B3FA0]/20 to-transparent",
  },
  {
    icon: "🏢",
    badge: null,
    title: "Enterprise Software",
    description:
      "Scalable B2B platforms, ERP integrations, and internal tools that streamline operations for large organizations.",
    features: ["ERP / CRM Integration", "Role-based Access", "Audit Logs", "Custom Dashboards"],
    color: "from-[#00B4C8]/20 to-transparent",
  },
];

export default function ServicesGrid() {
  return (
    <SectionWrapper id="services" dark>
      <SectionHeader
        eyebrow="What We Do"
        title={
          <>
            End-to-End{" "}
            <span className="bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] bg-clip-text text-transparent">
              Digital Services
            </span>
          </>
        }
        subtitle="From a single landing page to a complex enterprise platform — we have the skills and experience to deliver."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Card key={service.title} hover glow className="group relative reveal" padding="lg">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{service.icon}</span>
                {service.badge && (
                  <Badge variant={service.badge.variant} size="sm">
                    {service.badge.label}
                  </Badge>
                )}
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#00B4C8] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {}
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                    <svg className="w-3.5 h-3.5 text-[#00B4C8] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#2B7EC1] group-hover:text-[#00B4C8] transition-colors">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}