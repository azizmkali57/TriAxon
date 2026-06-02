import Link from "next/link";

export const metadata = {
  title: "Mobile App Development Services | TriAxon Technologies",
  description:
    "Flutter, React Native, Swift & Kotlin. Native-quality iOS and Android apps. 30+ apps shipped with 4.8★ average rating.",
};

/* =======================
   DATA (GLOBAL SCOPE FIX)
======================= */

const platforms = [
  {
    name: "Flutter",
    emoji: "💙",
    desc: "Single codebase, native performance on iOS & Android. Our primary mobile stack.",
  },
  {
    name: "React Native",
    emoji: "⚛️",
    desc: "JavaScript-based cross-platform apps for faster development cycles.",
  },
  {
    name: "Swift (iOS)",
    emoji: "🍎",
    desc: "High-performance native iOS apps with full Apple ecosystem support.",
  },
  {
    name: "Kotlin (Android)",
    emoji: "🤖",
    desc: "Native Android apps with Jetpack, clean architecture & scalability.",
  },
];

const appTypes = [
  { icon: "🛒", title: "Consumer Apps", desc: "E-commerce, delivery, marketplace apps." },
  { icon: "🏢", title: "Enterprise Apps", desc: "Internal tools, dashboards, workforce apps." },
  { icon: "💊", title: "HealthTech Apps", desc: "Telemedicine, fitness, health tracking apps." },
  { icon: "💰", title: "Fintech Apps", desc: "Wallets, banking, investment platforms." },
  { icon: "📦", title: "Logistics Apps", desc: "Tracking, delivery, route optimization apps." },
  { icon: "🎮", title: "Social Apps", desc: "Community, chat, and social networking apps." },
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
  {
    name: "LogiFlow",
    result: "50K+ Daily Users",
    rating: "4.8★ Play Store",
    emoji: "🚚",
    stack: "Flutter · Node.js · Firebase",
  },
  {
    name: "HealthBridge",
    result: "10K+ Consultations/month",
    rating: "4.9★ App Store",
    emoji: "🏥",
    stack: "Flutter · FastAPI · AWS",
  },
  {
    name: "PayZap Wallet",
    result: "₹50Cr+ Transactions/month",
    rating: "4.7★ Both Stores",
    emoji: "💳",
    stack: "React Native · Stripe · Node.js",
  },
];

/* =======================
        PAGE
======================= */

export default function AppDevPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen text-white">

      {/* =======================
            PART 1 - HERO
      ======================= */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(107,63,160,0.2),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <Link href="/services" className="text-sm text-gray-400 hover:text-white mb-8 inline-block">
            ← Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <span className="text-4xl block mb-4">📱</span>

              <h1 className="text-5xl font-bold leading-tight mb-6">
                Mobile App <br />
                <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-gray-400 text-lg mb-8">
                We build production-grade iOS and Android apps with native performance,
                scalable architecture, and beautiful UX.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold"
                >
                  Get Quote →
                </Link>

                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/10"
                >
                  View Apps
                </Link>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "30+", l: "Apps Built" },
                { v: "4.8★", l: "Rating" },
                { v: "2M+", l: "Users" },
                { v: "100%", l: "Approval" },
              ].map((s) => (
                <div key={s.l} className="p-5 rounded-xl border border-white/10 bg-white/5 text-center">
                  <div className="text-3xl font-bold">{s.v}</div>
                  <div className="text-xs text-gray-400">{s.l}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =======================
            PART 2 - CONTENT
      ======================= */}

      {/* PLATFORMS */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-12">
            Platforms We Use
          </h2>

          <div className="grid md:grid-cols-4 gap-5">
            {platforms.map((p) => (
              <div key={p.name} className="p-6 border border-white/10 rounded-xl bg-white/5">
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP TYPES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-12">
            Apps We Build
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {appTypes.map((a) => (
              <div key={a.title} className="p-6 border border-white/10 rounded-xl bg-white/5">
                <div className="text-2xl mb-3">{a.icon}</div>
                <h3 className="font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Built-in Features
          </h2>

          <div className="grid md:grid-cols-2 gap-3 text-left">
            {features.map((f) => (
              <div key={f} className="p-4 border border-white/10 rounded-lg bg-white/5">
                ✔ {f}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-12">
            Case Studies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div key={c.name} className="p-6 border border-white/10 rounded-xl bg-white/5">
                <div className="text-4xl mb-3">{c.emoji}</div>
                <h3 className="font-semibold text-lg">{c.name}</h3>
                <p className="text-purple-300 text-sm">{c.result}</p>
                <p className="text-yellow-400 text-xs mb-2">{c.rating}</p>
                <p className="text-gray-400 text-xs">{c.stack}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A1628] text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-4">
            Let’s Build Your App
          </h2>

          <p className="text-gray-400 mb-8">
            From idea to App Store in weeks, not months.
          </p>

          <Link
            href="/contact"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold"
          >
            Get Free Estimate →
          </Link>

        </div>
      </section>

    </main>
  );
}