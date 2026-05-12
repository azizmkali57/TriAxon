"use client";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const techCategories = [
  {
    label: "Frontend",
    color: "text-[#2B7EC1]",
    border: "border-[#2B7EC1]/20",
    bg: "bg-[#2B7EC1]/5",
    techs: ["React", "Next.js", "Vue 3", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Mobile",
    color: "text-[#6B3FA0]",
    border: "border-[#6B3FA0]/20",
    bg: "bg-[#6B3FA0]/5",
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Expo", "Firebase"],
  },
  {
    label: "Backend",
    color: "text-[#00B4C8]",
    border: "border-[#00B4C8]/20",
    bg: "bg-[#00B4C8]/5",
    techs: ["Node.js", "Python", "Django", "FastAPI", "Go", "GraphQL"],
  },
  {
    label: "Database",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "MySQL"],
  },
  {
    label: "Cloud & DevOps",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    techs: ["AWS", "GCP", "Docker", "Kubernetes", "Vercel", "Terraform"],
  },
  {
    label: "AI & Data",
    color: "text-pink-400",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    techs: ["OpenAI API", "LangChain", "PyTorch", "Hugging Face", "Pinecone", "Pandas"],
  },
];

export default function TechStack() {
  return (
    <SectionWrapper id="tech">
      <SectionHeader
        eyebrow="Our Stack"
        title={
          <>
            Technology We{" "}
            <span className="bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] bg-clip-text text-transparent">
              Master
            </span>
          </>
        }
        subtitle="We stay at the cutting edge — using proven, modern technologies that ensure your product is maintainable, scalable, and future-proof."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((cat, i) => (
          <div
            key={cat.label}
            className="reveal rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] transition-colors duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className={`inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4 ${cat.bg} ${cat.color} border ${cat.border}`}>
              {cat.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.techs.map((tech) => (
                <span
                  key={tech}
                  className="tech-tag px-3 py-1.5 rounded-lg text-sm text-[#9CA3AF] hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-[#9CA3AF] mt-10 reveal">
        Don't see your tech? We adapt. Reach out and we'll tailor the stack to your needs.
      </p>
    </SectionWrapper>
  );
}