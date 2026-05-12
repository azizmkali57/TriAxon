import Link from "next/link";

export const metadata = {
  title: "Mobile App Development Services | TriAxon Technologies",
  description: "Flutter, React Native, Swift & Kotlin. Native-quality iOS and Android apps. 30+ apps shipped with 4.8★ average rating.",
};

const platforms = [
  { name: "Flutter", emoji: "💙", desc: "Single codebase, native performance on iOS & Android. Our primary mobile stack for 70% of projects.", tag: "Preferred" },
  { name: "React Native", emoji: "⚛️", desc: "JavaScript-based cross-platform development. Ideal when sharing code with a web React team.", tag: null },
  { name: "Swift (iOS)", emoji: "🍎", desc: "Native iOS development for performance-critical apps that need full platform access.", tag: null },
  { name: "Kotlin (Android)", emoji: "🤖", desc: "Native Android development with full Jetpack support for complex, hardware-close applications.", tag: null },
];

const appTypes = [
  { icon: "🛒", title: "Consumer Apps",        desc: "Marketplace, on-demand, food delivery, e-commerce apps with seamless UX." },
  { icon: "🏢", title: "Enterprise Mobility",  desc: "Internal tools, field service, inventory, and workforce management apps." },
  { icon: "💊", title: "HealthTech Apps",       desc: "HIPAA-compliant telemedicine, fitness tracking, and health monitoring apps." },
  { icon: "💰", title: "Fintech Apps",          desc: "Wallets, payment gateways, investment platforms with bank-grade security." },
  { icon: "📦", title: "Logistics & Tracking", desc: "Real-time GPS tracking, route optimisation, and driver/delivery apps." },
  { icon: "🎮", title: "Social & Gaming",       desc: "Social networks, community apps, and casual mobile games." },
];

const features = [
  "Offline-first architecture with sync",
  "Push notifications (FCM / APNs)",
  "Biometric authentication",
  "In-app purchases & subscriptions",
  "Real-time chat & video calls",
  "Deep linking & universal links",
  "App Store & Play Store submission",
  "OTA updates (CodePush / Shorebird)",
];

const caseStudies = [
  { name: "LogiFlow", result: "50K+ Daily Active Users", rating: "4.8★ Play Store", emoji: "🚚", stack: "Flutter · Node.js · Firebase" },
  { name: "HealthBridge", result: "10K+ Consultations / mo", rating: "4.9★ App Store", emoji: "🏥", stack: "Flutter · FastAPI · AWS" },
  { name: "PayZap Wallet", result: "₹50Cr+ processed / mo", rating: "4.7★ Both Stores", emoji: "💳", stack: "React Native · Node.js · Stripe" },
];

export default function AppDevPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">

      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(107,63,160,0.2),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-4xl mb-5 block">📱</span>
              <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Mobile App<br />
                <span className="bg-gradient-to-r from-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">Development</span>
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                We build iOS and Android apps that users actually keep installed. Native-quality performance, thoughtful UX, and App Store approval guaranteed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#6B3FA0] to-[#2B7EC1] text-white font-semibold hover:opacity-90 transition-opacity">
                  Get a Quote →
                </Link>
                <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#6B3FA0]/40 text-[#b392d8] font-semibold hover:bg-[#6B3FA0]/10 transition-colors">
                  View Apps
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "30+", l: "Apps Shipped" },
                { v: "4.8★", l: "Avg. Store Rating" },
                { v: "2M+", l: "Total App Users" },
                { v: "100%", l: "Store Approvals" },
              ].map(({ v, l }) => (
                <div key={l} className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] text-center">
                  <div className="font-display font-extrabold text-3xl text-white mb-1">{v}</div>
                  <div className="text-xs text-[#9CA3AF]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Technology</p>
            <h2 className="font-display font-bold text-4xl text-white">Platforms We Build On</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platforms.map((p) => (
              <div key={p.name} className="relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#6B3FA0]/30 hover:-translate-y-1 transition-all duration-300">
                {p.tag && <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full bg-[#6B3FA0]/20 text-[#b392d8] border border-[#6B3FA0]/30">{p.tag}</span>}
                <div className="text-4xl mb-3">{p.emoji}</div>
                <h3 className="font-semibold text-white mb-2">{p.name}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Industries</p>
            <h2 className="font-display font-bold text-4xl text-white">Apps We Specialise In</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {appTypes.map((a) => (
              <div key={a.title} className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#6B3FA0]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-[#b392d8] transition-colors">{a.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Capabilities</p>
            <h2 className="font-display font-bold text-4xl text-white">Built-in Features</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="w-6 h-6 rounded-full bg-[#6B3FA0]/15 border border-[#6B3FA0]/30 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-[#b392d8]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-sm text-[#9CA3AF]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Results</p>
            <h2 className="font-display font-bold text-4xl text-white">Apps We've Shipped</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div key={c.name} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#6B3FA0]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">{c.emoji}</div>
                <h3 className="font-semibold text-white text-lg mb-2">{c.name}</h3>
                <div className="text-sm text-[#b392d8] mb-1">{c.result}</div>
                <div className="text-xs text-amber-400 mb-3">{c.rating}</div>
                <p className="text-xs font-mono text-[#9CA3AF]">{c.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Let's Build Your App</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">From wireframe to App Store in as little as 8 weeks. Get a free project estimate today.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#6B3FA0] to-[#2B7EC1] text-white font-semibold text-base hover:opacity-90 transition-opacity">
            Get Free Estimate →
          </Link>
        </div>
      </section>

    </main>
  );
}