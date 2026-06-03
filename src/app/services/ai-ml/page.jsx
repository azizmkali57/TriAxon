import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiBarChart2,
  FiEye,
  FiMessageSquare,
  FiZap,
  FiTrendingUp,
} from "react-icons/fi";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: "AI & Machine Learning Services | TriAxon Technologies",
  description:
    "Production-grade AI systems: LLMs, RAG pipelines, ML models, agents, and automation for real business impact.",
};

const stats = [
  { value: "20+", label: "AI Systems Built", icon: FiCpu },
  { value: "92%", label: "Model Accuracy", icon: FiTrendingUp },
  { value: "60%", label: "Automation Increase", icon: FiZap },
  { value: "8+", label: "AI Use Cases per Client", icon: FiLayers },
];

const offerings = [
  {
    icon: FiMessageSquare,
    title: "LLM Integration",
    desc: "GPT, Claude, Gemini & open-source LLMs with prompt engineering and guardrails.",
  },
  {
    icon: FiDatabase,
    title: "RAG Systems",
    desc: "Enterprise retrieval systems powered by vector databases and embeddings.",
  },
  {
    icon: FiBarChart2,
    title: "Predictive Models",
    desc: "Forecasting, churn prediction, fraud detection and analytics pipelines.",
  },
  {
    icon: FiEye,
    title: "Computer Vision",
    desc: "OCR, detection, classification and real-time image intelligence systems.",
  },
  {
    icon: FiLayers,
    title: "AI Agents",
    desc: "Autonomous workflows using tool calling, LangChain and multi-agent systems.",
  },
  {
    icon: FiZap,
    title: "MLOps Deployment",
    desc: "Production deployment, monitoring, scaling and model lifecycle management.",
  },
];

export default function AiMlPage() {
  return (
    <main className="bg-[#050B14] text-white">
      {/* <Navbar /> */}

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

          <Link
            href="/services"
            className="text-sm text-slate-400 hover:text-white transition mb-10 inline-block"
          >
            ← Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-8">
                Production AI Systems
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]">
                AI & Machine
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Learning Systems
                </span>
              </h1>

              <p className="text-slate-400 text-lg mt-8 max-w-xl">
                We build real production AI — not demos. From LLM pipelines to
                RAG systems and autonomous agents, everything is engineered for
                ROI and scalability.
              </p>

              <div className="flex gap-4 mt-10 flex-wrap">

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
                >
                  Start AI Project <FiArrowRight />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  Free Consultation
                </Link>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-5 mt-14">

                {stats.map((s) => {
                  const Icon = s.icon;

                  return (
                    <div
                      key={s.label}
                      className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
                    >
                      <Icon className="text-purple-400 mb-4" size={22} />
                      <div className="text-3xl font-bold">{s.value}</div>
                      <div className="text-sm text-slate-400">{s.label}</div>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative border border-white/10 rounded-[30px] overflow-hidden bg-[#0B1320]">

                <Image
                  src="/site/ai-ml-section.png"
                  alt="AI Systems"
                  width={1200}
                  height={900}
                  className="w-full"
                  priority
                />

              </div>

              <div className="absolute -top-5 -left-5 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Automation Gain</p>
                <p className="text-xl font-bold text-cyan-400">+60%</p>
              </div>

              <div className="absolute -bottom-5 right-0 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Model Accuracy</p>
                <p className="text-xl font-bold text-purple-400">92%</p>
              </div>

            </div>

          </div>
        </div>
      </section>
            {/* PART 2 START */}

      {/* OFFERINGS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            End-to-End AI Capabilities
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            From raw data to deployed intelligence systems — we handle the full AI lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {offerings.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition group"
              >
                <Icon className="text-cyan-400 mb-5 group-hover:scale-110 transition" size={26} />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 text-sm text-purple-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  Learn more <FiArrowRight />
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-white/10 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our AI Development Process
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A structured pipeline to turn ideas into scalable AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We analyze your business problem and define AI opportunities.",
              },
              {
                step: "02",
                title: "Data Engineering",
                desc: "Clean, structure and prepare datasets for model readiness.",
              },
              {
                step: "03",
                title: "Model Building",
                desc: "Train, fine-tune and optimize ML / LLM systems.",
              },
              {
                step: "04",
                title: "Deployment",
                desc: "Deploy with monitoring, scaling and continuous improvement.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="text-purple-400 font-bold mb-3">
                  {p.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {p.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Real-World AI Use Cases
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We don’t build concepts — we build production systems that generate ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent">
            <h3 className="text-2xl font-semibold mb-4">
              Enterprise Automation
            </h3>
            <p className="text-slate-400">
              Replace manual workflows with AI agents that handle support,
              reporting, and operations automatically.
            </p>
          </div>

          <div className="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent">
            <h3 className="text-2xl font-semibold mb-4">
              Intelligent Search (RAG)
            </h3>
            <p className="text-slate-400">
              Build internal GPT-like systems that understand company data and
              answer queries instantly.
            </p>
          </div>

          <div className="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent">
            <h3 className="text-2xl font-semibold mb-4">
              Predictive Intelligence
            </h3>
            <p className="text-slate-400">
              Forecast sales, detect fraud, and predict user behavior using ML models.
            </p>
          </div>

          <div className="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-transparent">
            <h3 className="text-2xl font-semibold mb-4">
              AI Customer Experience
            </h3>
            <p className="text-slate-400">
              Smart chatbots and assistants that improve customer engagement and conversions.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Build Real AI Systems?
          </h2>

          <p className="text-slate-400 mt-6">
            Let’s turn your idea into a production-grade AI system that actually delivers results.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              Start Your Project <FiArrowRight />
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Explore More Services
            </Link>

          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}