import Link from "next/link";

export const metadata = {
  title: "UI/UX Design Services | TriAxon Technologies",
  description: "User-centred design that converts. Figma design systems, prototyping, user research, and full product design for web and mobile.",
};

const offerings = [
  { icon: "🗺️", title: "UX Research & Strategy",   desc: "User interviews, competitive analysis, journey mapping, and information architecture to validate before you build." },
  { icon: "🖼️", title: "Wireframing & Prototyping", desc: "Low and high-fidelity wireframes in Figma with clickable prototypes for stakeholder sign-off and user testing." },
  { icon: "✨", title: "Visual UI Design",            desc: "Pixel-perfect interfaces with consistent design language, micro-interactions, and dark/light mode support." },
  { icon: "📐", title: "Design Systems",             desc: "Scalable component libraries with tokens, variants, and documentation for teams that want design consistency at scale." },
  { icon: "♿", title: "Accessibility (WCAG 2.1)",   desc: "AA/AAA-compliant designs that work for all users — audits, remediation, and inclusive design from the start." },
  { icon: "🔬", title: "Usability Testing",          desc: "Moderated and unmoderated testing sessions to validate designs before development begins." },
];

const tools = ["Figma", "FigJam", "Maze", "Hotjar", "Miro", "Lottie", "Spline", "Framer"];

const process = [
  { step: "01", title: "Discover",   desc: "Stakeholder interviews, competitor audit, user personas, JTBD mapping." },
  { step: "02", title: "Define",     desc: "Information architecture, user flows, content strategy, success metrics." },
  { step: "03", title: "Design",     desc: "Low-fi wireframes → visual UI → interactive prototype in Figma." },
  { step: "04", title: "Validate",   desc: "User testing sessions, heatmaps, iteration based on real feedback." },
  { step: "05", title: "Handoff",    desc: "Developer-ready specs, design tokens, component library + Lottie animations." },
];

export default function UiUxPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,180,200,0.18),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-4xl mb-5 block">🎨</span>
              <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                UI/UX Design<br />
                <span className="bg-gradient-to-r from-[#00B4C8] to-[#6B3FA0] bg-clip-text text-transparent">That Converts</span>
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                Great products aren't just built — they're designed. We create user experiences that are intuitive, beautiful, and measurably effective.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00B4C8] to-[#2B7EC1] text-white font-semibold hover:opacity-90 transition-opacity">Get a Quote →</Link>
                <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#00B4C8]/40 text-[#00B4C8] font-semibold hover:bg-[#00B4C8]/10 transition-colors">View Designs</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{v:"50+",l:"Products Designed"},{v:"94%",l:"Usability Test Pass Rate"},{v:"3.2×",l:"Avg. Conversion Lift"},{v:"2 wks",l:"First Prototype Delivery"}].map(({v,l})=>(
                <div key={l} className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] text-center">
                  <div className="font-display font-extrabold text-3xl text-white mb-1">{v}</div>
                  <div className="text-xs text-[#9CA3AF]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Services</p>
            <h2 className="font-display font-bold text-4xl text-white">What We Design</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <div key={o.title} className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#00B4C8]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{o.icon}</div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-[#00B4C8] transition-colors">{o.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Process</p>
            <h2 className="font-display font-bold text-4xl text-white">Our Design Process</h2>
          </div>
          <div className="space-y-4">
            {process.map((p, i) => (
              <div key={p.step} className="flex items-start gap-6 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#00B4C8]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B4C8] to-[#2B7EC1] flex items-center justify-center text-white text-xs font-bold shrink-0">{p.step}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-[#9CA3AF]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-6">Design Toolset</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-[#9CA3AF]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Start With a Design Sprint</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">Get a working prototype in 2 weeks. Validate your idea before writing a single line of code.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#00B4C8] to-[#2B7EC1] text-white font-semibold text-base hover:opacity-90 transition-opacity">Book a Design Sprint →</Link>
        </div>
      </section>
    </main>
  );
}