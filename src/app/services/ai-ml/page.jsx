import Link from "next/link";

export const metadata = {
  title: "AI & Machine Learning Services | TriAxon Technologies",
  description: "LLM integrations, RAG pipelines, recommendation engines, and ML model deployment. Real AI in production, not demos.",
};

const offerings = [
  { icon: "🧠", title: "LLM Integration & Fine-tuning", desc: "GPT-4, Claude, Gemini, and open-source model integrations with prompt engineering, guardrails, and evaluation pipelines." },
  { icon: "📚", title: "RAG Pipelines",                 desc: "Retrieval-Augmented Generation systems that let your AI answer questions using your private documents and databases accurately." },
  { icon: "🔮", title: "Recommendation Engines",        desc: "Collaborative filtering, content-based, and hybrid recommendation systems for e-commerce, content, and matching platforms." },
  { icon: "👁️", title: "Computer Vision",               desc: "Object detection, image classification, OCR, and document intelligence for healthcare, logistics, and manufacturing." },
  { icon: "💬", title: "NLP & Text Analytics",          desc: "Sentiment analysis, entity extraction, document classification, and custom chatbots trained on your data." },
  { icon: "📊", title: "Predictive Analytics",          desc: "Churn prediction, demand forecasting, fraud detection, and business intelligence powered by ML models." },
  { icon: "🤖", title: "AI Agents & Automation",        desc: "Multi-agent workflows with tool use, function calling, and autonomous task execution using LangChain and CrewAI." },
  { icon: "🏭", title: "MLOps & Model Deployment",      desc: "Model versioning, A/B testing, monitoring, retraining pipelines, and production deployment on AWS SageMaker or custom infra." },
];

const stack = [
  { category: "LLMs",        items: ["OpenAI GPT-4o", "Anthropic Claude", "Google Gemini", "Llama 3", "Mistral"] },
  { category: "Frameworks",  items: ["LangChain", "LlamaIndex", "CrewAI", "Hugging Face", "FastAPI"] },
  { category: "Vector DBs",  items: ["Pinecone", "Weaviate", "pgvector", "Qdrant", "Chroma"] },
  { category: "ML / Data",   items: ["PyTorch", "scikit-learn", "Pandas", "Spark", "dbt", "Airflow"] },
];

const useCases = [
  { industry: "Fintech",    use: "Fraud detection & risk scoring", emoji: "💳" },
  { industry: "HealthTech", use: "AI symptom checker & triage",    emoji: "🏥" },
  { industry: "Legal",      use: "Contract review & summarisation", emoji: "⚖️" },
  { industry: "HR Tech",    use: "Resume screening & matching",    emoji: "👥" },
  { industry: "E-Commerce", use: "Personalised recommendations",   emoji: "🛒" },
  { industry: "EdTech",     use: "Adaptive learning paths & tutors", emoji: "📚" },
];

export default function AiMlPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-5%,rgba(107,63,160,0.22),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_70%,rgba(0,180,200,0.12),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#6B3FA0]/30 bg-[#6B3FA0]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b392d8] animate-pulse" />
                <span className="text-sm text-[#b392d8] font-mono">Trending · High Demand</span>
              </div>
              <span className="text-4xl mb-5 block">🤖</span>
              <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                AI & Machine<br />
                <span className="bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">Learning</span>
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                We don't build AI demos — we deploy AI to production. LLM pipelines, ML models, and intelligent automation that delivers measurable ROI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] text-white font-semibold hover:opacity-90 transition-opacity">Start AI Project →</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#6B3FA0]/40 text-[#b392d8] font-semibold hover:bg-[#6B3FA0]/10 transition-colors">Free AI Consultation</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{v:"20+",l:"AI Products Built"},{v:"92%",l:"Avg. Model Accuracy"},{v:"60%",l:"Avg. Manual Work Reduced"},{v:"8",l:"AI Use Cases Per Client"}].map(({v,l})=>(
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
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Capabilities</p>
            <h2 className="font-display font-bold text-4xl text-white">What We Build</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offerings.map((o) => (
              <div key={o.title} className="group p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#6B3FA0]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-3">{o.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-[#b392d8] transition-colors">{o.title}</h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Tech Stack</p>
            <h2 className="font-display font-bold text-4xl text-white">Our AI Toolset</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stack.map((s) => (
              <div key={s.category} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <p className="text-xs font-mono text-[#6B3FA0] uppercase tracking-widest mb-4">{s.category}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1.5 rounded-lg bg-[#6B3FA0]/8 border border-[#6B3FA0]/15 text-[#9CA3AF]">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="font-display font-bold text-4xl text-white">AI Across Industries</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u) => (
              <div key={u.industry} className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#6B3FA0]/30 transition-colors">
                <span className="text-3xl">{u.emoji}</span>
                <div>
                  <div className="text-xs font-mono text-[#9CA3AF] mb-0.5">{u.industry}</div>
                  <div className="text-sm font-semibold text-white">{u.use}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Let's Add Intelligence to Your Product</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">Free AI feasibility consultation — we'll show you what's possible, what's practical, and what delivers the fastest ROI.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] text-white font-semibold text-base hover:opacity-90 transition-opacity">Book AI Consultation →</Link>
        </div>
      </section>
    </main>
  );
}