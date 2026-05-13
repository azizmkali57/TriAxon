import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/header/Navbar";
import Link from "next/link";

import {
  FiTarget,
  FiSearch,
  FiZap,
  FiUsers,
  FiShield,
  FiGlobe,
} from "react-icons/fi";

export const metadata = {
  title: "About TriAxon Technologies | Our Story, Team & Values",
  description:
    "Founded in Indore in 2016, TriAxon Technologies is a product engineering company trusted by startups and enterprises in 15+ countries.",
};

const timeline = [
  {
    year: "2022",
    title: "Founded in Indore",
    desc: "Two engineers, one mission — build software that actually ships and performs.",
  },
  {
    year: "2012",
    title: "First International Client",
    desc: "Expanded to UK and UAE markets; grew the team to 12 engineers.",
  },
  {
    year: "2023",
    title: "Mobile & AI Practice Launched",
    desc: "Added Flutter and ML engineering capabilities; crossed 50 projects.",
  },
  {
    year: "2025",
    title: "30+ Projects Milestone",
    desc: "Serving clients in 5 countries across fintech, healthtech, logistics, and SaaS.",
  },
];

const team = [
  {
    name: "Aziz Ali",
    role: "Co-Founder & CTO",
    avatar: "AA",
    color: "from-[#2B7EC1] to-[#1a5f94]",
    bio: "IIT Bombay alumnus. Previously at Infosys. 12+ years in distributed systems and cloud architecture.",
  },
  {
    name: "Mustafa Fakhri",
    role: "Design Lead",
    avatar: "MF",
    color: "from-[#6B3FA0] to-[#502d7a]",
    bio: "NID Graduate. Led design at two Series-B startups before founding TriAxon. Expert in design systems.",
  },
  {
    name: "Amaan Husainn",
    role: "Project Manager",
    avatar: "AH",
    color: "from-[#00B4C8] to-[#0090a1]",
    bio: "8 years at AWS before joining TriAxon. Architect of 5 products that scaled to 1M+ users.",
  },
  {
    name: "Ruqaiya",
    role: "Social Media Managar",
    avatar: "RS",
    color: "from-emerald-600 to-emerald-800",
    bio: "MBA from ISB. Ensures every project lands on time, on budget, and above expectations.",
  },
];

const values = [
  {
    icon: FiTarget,
    title: "Outcome Over Output",
    desc: "We measure success by your business results — not lines of code or hours billed.",
  },
  {
    icon: FiSearch,
    title: "Radical Transparency",
    desc: "Daily updates, live staging environments, honest timelines. No surprises.",
  },
  {
    icon: FiZap,
    title: "Ship, Then Iterate",
    desc: "We launch lean and improve continuously — speed without sacrificing quality.",
  },
  {
    icon: FiUsers,
    title: "Long-Term Partnership",
    desc: "98% of clients return. We build relationships, not just products.",
  },
  {
    icon: FiShield,
    title: "Security by Default",
    desc: "Every product is built with security-first engineering — not bolted on after.",
  },
  {
    icon: FiGlobe,
    title: "Global Mindset",
    desc: "World-class practices, inclusive teams, clients on 5 continents.",
  },
];

const awards = [
  { label: "Clutch Top B2B Company", year: "2023" },
  { label: "GoodFirms Top Developer", year: "2023" },
  { label: "NASSCOM Emerging 50", year: "2022" },
  { label: "Startup India Recognised", year: "2021" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">
      <Navbar />

      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(43,126,193,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(107,63,160,0.12),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#2B7EC1]/30 bg-[#2B7EC1]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4C8] animate-pulse" />
            <span className="text-sm text-[#00B4C8] font-medium font-mono">
              Est. 2016 · Indore, India
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
            Built by Engineers,
            <br />
            <span className="bg-gradient-to-r from-[#2B7EC1] via-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">
              Obsessed with Impact
            </span>
          </h1>

          <p className="text-[#9CA3AF] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We started TriAxon because we were tired of agencies that
            over-promised and under-delivered. Eight years later, 30+ shipped
            products, and 5 countries served — the mission hasn't changed.
          </p>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "30+", l: "Projects Shipped" },
            { v: "5+", l: "Clients Worldwide" },
            { v: "4", l: "Team Members" },
            { v: "90%", l: "Client Retention" },
          ].map(({ v, l }) => (
            <div key={l}>
              <div className="font-display font-extrabold text-4xl text-white mb-1">
                {v}
              </div>
              <div className="text-sm text-[#9CA3AF]">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">
              What Drives Us
            </p>

            <h2 className="font-display font-bold text-4xl text-white">
              Our Core{" "}
              <span className="bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;

              return (
                <div
                  key={v.title}
                  className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#2B7EC1]/30 hover:bg-[#2B7EC1]/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#2B7EC1]/10 border border-[#2B7EC1]/20 flex items-center justify-center mb-4">
                    <Icon className="text-2xl text-[#00B4C8]" />
                  </div>

                  <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-[#00B4C8] transition-colors">
                    {v.title}
                  </h3>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">
              Our Journey
            </p>

            <h2 className="font-display font-bold text-4xl text-white">
              8 Years of Building
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-[#2B7EC1]/60 via-[#6B3FA0]/40 to-transparent" />

            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="w-9 h-9 rounded-full border-2 border-[#2B7EC1] bg-[#0D1117] flex items-center justify-center shrink-0 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2B7EC1]" />
                  </div>

                  <div className="pb-2">
                    <span className="inline-block text-xs font-mono text-[#2B7EC1] bg-[#2B7EC1]/10 border border-[#2B7EC1]/20 px-2.5 py-0.5 rounded-full mb-2">
                      {item.year}
                    </span>

                    <h3 className="font-semibold text-white text-lg mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#9CA3AF] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">
              The People
            </p>

            <h2 className="font-display font-bold text-4xl text-white">
              Meet the{" "}
              <span className="bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-bold text-lg mb-4`}
                >
                  {m.avatar}
                </div>

                <h3 className="font-semibold text-white text-lg mb-0.5">
                  {m.name}
                </h3>

                <p className="text-sm text-[#00B4C8] mb-3">{m.role}</p>

                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}