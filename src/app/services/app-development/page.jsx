import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiSmartphone,
  FiCode,
  FiLayers,
  FiShield,
  FiZap,
  FiRefreshCw,
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
  FiShoppingCart,
  FiBriefcase,
  FiActivity,
  FiDollarSign,
  FiPackage,
  FiMessageCircle,
  FiTruck,
  FiHeart,
  FiCreditCard,
  FiSearch,
  FiLayout,
} from "react-icons/fi";
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: "Mobile App Development Services | TriAxon Technologies",
  description:
    "Flutter, React Native, Swift & Kotlin. Native-quality iOS and Android apps. 30+ apps shipped with 4.8★ average rating.",
};

/* =======================
         DATA
======================= */

const stats = [
  { value: "30+", label: "Apps Shipped", icon: FiSmartphone },
  { value: "4.8★", label: "Avg Store Rating", icon: FiTrendingUp },
  { value: "2M+", label: "End Users", icon: FiUsers },
  { value: "100%", label: "Store Approvals", icon: FiShield },
];

const platforms = [
  {
    icon: FiLayers,
    title: "Flutter",
    desc: "Single codebase, native performance on iOS & Android. Our primary mobile stack for cross-platform delivery.",
  },
  {
    icon: FiCode,
    title: "React Native",
    desc: "JavaScript-based cross-platform apps for faster development cycles and web-dev team familiarity.",
  },
  {
    icon: FiSmartphone,
    title: "Swift (iOS)",
    desc: "High-performance native iOS apps with full Apple ecosystem support, ARKit, and SwiftUI.",
  },
  {
    icon: FiZap,
    title: "Kotlin (Android)",
    desc: "Native Android apps with Jetpack Compose, clean architecture, and long-term scalability.",
  },
  {
    icon: FiRefreshCw,
    title: "OTA Updates",
    desc: "Ship fixes instantly without app store reviews using CodePush and Shorebird for Flutter.",
  },
  {
    icon: FiShield,
    title: "Security & Auth",
    desc: "Biometric auth, encrypted storage, OAuth2, and compliance-ready security architecture.",
  },
];

const appTypes = [
  {
    icon: FiShoppingCart,
    title: "Consumer Apps",
    desc: "E-commerce, delivery, and marketplace apps built for scale and conversion.",
    gradient: "from-purple-500/10",
  },
  {
    icon: FiBriefcase,
    title: "Enterprise Apps",
    desc: "Internal tools, dashboards, and workforce apps that integrate with your existing systems.",
    gradient: "from-cyan-500/10",
  },
  {
    icon: FiActivity,
    title: "HealthTech Apps",
    desc: "HIPAA-aware telemedicine, fitness, and health tracking applications.",
    gradient: "from-blue-500/10",
  },
  {
    icon: FiDollarSign,
    title: "Fintech Apps",
    desc: "Wallets, banking, and investment platforms with PCI-DSS compliant architecture.",
    gradient: "from-indigo-500/10",
  },
  {
    icon: FiPackage,
    title: "Logistics Apps",
    desc: "Real-time tracking, delivery management, and route optimization apps.",
    gradient: "from-violet-500/10",
  },
  {
    icon: FiMessageCircle,
    title: "Social Apps",
    desc: "Community, chat, and social networking apps with real-time messaging and feeds.",
    gradient: "from-teal-500/10",
  },
];

const features = [
  { label: "Offline-first architecture with sync", icon: FiRefreshCw },
  { label: "Push notifications (FCM / APNs)", icon: FiZap },
  { label: "Biometric authentication", icon: FiShield },
  { label: "In-app purchases & subscriptions", icon: FiCreditCard },
  { label: "Real-time chat & video calls", icon: FiMessageCircle },
  { label: "Deep linking & universal links", icon: FiSearch },
  { label: "App Store & Play Store submission", icon: FiSmartphone },
  { label: "OTA updates (CodePush / Shorebird)", icon: FiLayout },
];

const caseStudies = [
  {
    name: "LogiFlow",
    result: "50K+ Daily Users",
    rating: "4.8★ Play Store",
    icon: FiTruck,
    stack: "Flutter · Node.js · Firebase",
    gradient: "from-purple-500/10",
    accent: "text-purple-300",
    iconColor: "text-purple-400",
  },
  {
    name: "HealthBridge",
    result: "10K+ Consultations/month",
    rating: "4.9★ App Store",
    icon: FiHeart,
    stack: "Flutter · FastAPI · AWS",
    gradient: "from-cyan-500/10",
    accent: "text-cyan-300",
    iconColor: "text-cyan-400",
  },
  {
    name: "PayZap Wallet",
    result: "₹50Cr+ Transactions/month",
    rating: "4.7★ Both Stores",
    icon: FiCreditCard,
    stack: "React Native · Stripe · Node.js",
    gradient: "from-blue-500/10",
    accent: "text-blue-300",
    iconColor: "text-blue-400",
  },
];

/* =======================
        PAGE
======================= */

export default function AppDevPage() {
  return (
    <main className="bg-[#050B14] text-white">

      {/* ========================
              HERO
      ======================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background glows */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-8">
                <FiSmartphone size={14} /> Production Mobile Apps
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]">
                Mobile App
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-slate-400 text-lg mt-8 max-w-xl">
                We build production-grade iOS and Android apps — not prototypes.
                Native performance, scalable architecture, and beautiful UX,
                engineered for real users and real growth.
              </p>

              <div className="flex gap-4 mt-10 flex-wrap">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
                >
                  Get Free Estimate <FiArrowRight />
                </Link>

                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  View Our Apps
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
                      <Icon className="text-cyan-400 mb-4" size={22} />
                      <div className="text-3xl font-bold">{s.value}</div>
                      <div className="text-sm text-slate-400">{s.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — Visual card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative border border-white/10 rounded-[30px] overflow-hidden bg-[#0B1320]">
                <Image
                  src="/site/app-section.png"
                  alt="Mobile App Development"
                  width={1200}
                  height={900}
                  className="w-full"
                  priority
                />
              </div>

              <div className="absolute -top-5 -left-5 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Avg Store Rating</p>
                <p className="text-xl font-bold text-cyan-400">4.8 ★</p>
              </div>

              <div className="absolute -bottom-5 right-0 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Active Users</p>
                <p className="text-xl font-bold text-purple-400">2M+</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================
           PLATFORMS / OFFERINGS
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Mobile Tech Stack
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            From cross-platform Flutter to fully native Swift and Kotlin — we choose the right tool for your product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition group"
              >
                <Icon className="text-cyan-400 mb-5 group-hover:scale-110 transition" size={26} />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-6 text-sm text-purple-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  Learn more <FiArrowRight />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================
            PROCESS
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our App Development Process
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A battle-tested pipeline from idea to live on the App Store and Play Store.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & UX",
                desc: "We define your user flows, wireframes, and architecture before writing a single line of code.",
              },
              {
                step: "02",
                title: "Design & Prototype",
                desc: "High-fidelity Figma designs and interactive prototypes for stakeholder sign-off.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Sprint-based development with daily builds, automated tests, and continuous delivery.",
              },
              {
                step: "04",
                title: "Launch & Scale",
                desc: "Store submission, monitoring, analytics setup, and post-launch iteration support.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="text-purple-400 font-bold mb-3">{p.step}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================
            APP TYPES
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Apps We Build
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We don't build templates — we engineer domain-specific mobile products built for real outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {appTypes.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className={`p-10 rounded-3xl border border-white/10 bg-gradient-to-br ${a.gradient} to-transparent hover:brightness-110 transition`}
              >
                <Icon className="text-white/60 mb-5" size={32} />
                <h3 className="text-2xl font-semibold mb-3">{a.title}</h3>
                <p className="text-slate-400">{a.desc}</p>
              </div>
            );
          })}
        </div>

      </section>

      {/* ========================
            BUILT-IN FEATURES
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything Included
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Every app we ship comes with a full production feature set — no add-on surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                >
                  <Icon className="text-cyan-400 shrink-0" size={18} />
                  <span className="text-sm text-slate-300">{f.label}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================
            CASE STUDIES
      ======================== */}
      {/* <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Apps We've Shipped
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Real products. Real users. Real ratings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.name}
                className={`p-10 rounded-3xl border border-white/10 bg-gradient-to-br ${c.gradient} to-transparent`}
              >
                <Icon className={`${c.iconColor} mb-5`} size={36} />
                <h3 className="text-2xl font-semibold mb-2">{c.name}</h3>
                <p className={`text-sm font-medium mb-1 ${c.accent}`}>{c.result}</p>
                <p className="text-yellow-400 text-xs mb-4">{c.rating}</p>
                <p className="text-slate-500 text-xs font-mono">{c.stack}</p>
              </div>
            );
          })}
        </div>

      </section> */}

      {/* ========================
              CTA
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Build Your App?
          </h2>

          <p className="text-slate-400 mt-6">
            From idea to App Store in weeks, not months. Let's scope your project.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              Get Free Estimate <FiArrowRight />
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