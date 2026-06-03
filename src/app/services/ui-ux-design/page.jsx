import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/footer/Footer";
import {
  FiArrowRight,
  FiSearch,
  FiPenTool,
  FiLayout,
  FiLayers,
  FiEye,
  FiSmartphone,
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiStar,
  FiMessageSquare,
  FiHelpCircle,
} from "react-icons/fi";

export const metadata = {
  title: "UI/UX Design Services | TriAxon Technologies",
  description:
    "Professional UI/UX design services for SaaS, startups, enterprise products, mobile apps and web applications.",
};

/* =======================
         DATA
======================= */

const stats = [
  { icon: FiUsers,       value: "50+",     label: "Products Designed" },
  { icon: FiTrendingUp,  value: "3.2x",    label: "Average Conversion Growth" },
  { icon: FiZap,         value: "94%",     label: "Usability Score" },
  { icon: FiCheckCircle, value: "2 Weeks", label: "Prototype Delivery" },
];

const services = [
  {
    icon: FiSearch,
    title: "UX Research",
    desc: "User interviews, competitor analysis, customer journeys and data-driven design decisions.",
  },
  {
    icon: FiLayout,
    title: "Wireframing",
    desc: "Low and high fidelity wireframes that validate concepts before development begins.",
  },
  {
    icon: FiPenTool,
    title: "UI Design",
    desc: "Modern, conversion-focused interfaces crafted for engagement and usability.",
  },
  {
    icon: FiLayers,
    title: "Design Systems",
    desc: "Scalable component libraries and design tokens for product consistency.",
  },
  {
    icon: FiEye,
    title: "Usability Testing",
    desc: "Identify friction points and improve user journeys with testing sessions.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Experience",
    desc: "Responsive and native-first experiences designed for modern users.",
  },
];

const industries = ["STARTUPS", "SAAS", "ECOMMERCE", "HEALTHCARE", "EDTECH", "ENTERPRISE"];

const designSystemItems = [
  "Color Tokens & Variables",
  "Typography Scale",
  "Reusable Components",
  "Dark & Light Themes",
  "Developer Handoff",
  "Accessibility Standards",
];

const metrics = [
  { value: "95%",     label: "User Satisfaction" },
  { value: "42%",     label: "Conversion Increase" },
  { value: "3.5x",    label: "Engagement Growth" },
  { value: "2 Weeks", label: "Prototype Delivery" },
];

const processSteps = [
  { step: "01", title: "Discover",  desc: "Align on goals, audience, and product vision with stakeholders." },
  { step: "02", title: "Research",  desc: "User interviews, competitor audits, and journey mapping." },
  { step: "03", title: "Wireframe", desc: "Lo-fi structures that validate flows before any visual polish." },
  { step: "04", title: "Design",    desc: "High-fidelity screens with a pixel-perfect design system." },
  { step: "05", title: "Launch",    desc: "Developer handoff with specs, assets, and motion guidelines." },
];

const faqs = [
  {
    q: "How long does a UI/UX project take?",
    a: "Most projects are completed within 2–8 weeks depending on scope.",
  },
  {
    q: "Do you redesign existing products?",
    a: "Yes. We frequently improve existing products and platforms.",
  },
  {
    q: "Do we receive Figma files?",
    a: "Absolutely. All source files are included in the handoff.",
  },
  {
    q: "Can you work with developers?",
    a: "Yes. We provide complete developer-ready specifications.",
  },
];

/* =======================
        PAGE
======================= */

export default function UiUxPage() {
  return (
    <main className="bg-[#050B14] text-white overflow-hidden">

      {/* ========================
              HERO
      ======================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
          <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />
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
                <FiPenTool size={14} /> UI/UX Design Services
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]">
                Design Products
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Users Love
                </span>
              </h1>

              <p className="text-slate-400 text-lg mt-8 max-w-xl">
                We design intuitive digital experiences that increase engagement,
                improve retention, and drive measurable business growth. From SaaS
                dashboards to enterprise platforms and mobile apps.
              </p>

              <div className="flex gap-4 mt-10 flex-wrap">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold flex items-center gap-2 hover:scale-105 transition"
                >
                  Start Your Project <FiArrowRight />
                </Link>

                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  View Case Studies
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

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />

              <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0B1320] shadow-2xl">
                <Image
                  src="/site/ui-ux-section.png"
                  alt="UI UX Design"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="absolute -top-5 -left-5 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Conversion Increase</p>
                <p className="text-xl font-bold text-cyan-400">+42%</p>
              </div>

              <div className="absolute -bottom-5 right-0 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">User Satisfaction</p>
                <p className="text-xl font-bold text-green-400">95%</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================
           TRUSTED BY
      ======================== */}
      <section className="border-y border-white/[0.05] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 text-xs uppercase tracking-[0.3em] mb-8">
            Trusted By Growing Businesses
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((item) => (
              <div
                key={item}
                className="h-14 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-slate-400 text-xs font-medium tracking-wider"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
             SERVICES
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything Needed To Build Exceptional Experiences
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From research and strategy to complete design systems and developer handoff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-cyan-500/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Icon size={26} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-6 text-sm text-purple-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  Learn more <FiArrowRight />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================
           FEATURED WORK
      ======================== */}
      {/* <section className="border-t border-white/10 py-24 bg-[#08111F]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Interfaces Designed For Growth
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every screen is crafted to improve usability, engagement, and conversion.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-cyan-500/20 transition"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={`/images/uiux/project-${item}.webp`}
                    alt={`Project ${item}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <span className="text-cyan-400 text-sm">SaaS Platform</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">Modern Dashboard Experience</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Designed to streamline workflows and improve user engagement through intuitive navigation.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* ========================
           DESIGN SYSTEM
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-5">
              Design Systems
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Built For Scale, Consistency & Faster Development
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              We create scalable design systems that allow teams to move faster while
              maintaining visual consistency across every touchpoint.
            </p>
            <div className="space-y-4">
              {designSystemItems.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <FiCheckCircle className="text-cyan-400 shrink-0" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="relative rounded-[30px] overflow-hidden border border-white/10">
              <Image
                src="/site/ui-ux-section2.png"
                alt="Design System"
                width={1200}
                height={900}
                className="w-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================
             METRICS
      ======================== */}
      <section className="border-t border-white/10 py-24 bg-[#08111F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="text-center p-10 rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="text-5xl font-black text-cyan-400 mb-4">{item.value}</div>
                <div className="text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
              PROCESS
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">From Idea To Product</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {processSteps.map((p) => (
            <div
              key={p.step}
              className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] text-center hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-cyan-400 font-black text-4xl mb-4">{p.step}</div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ========================
            TESTIMONIAL
      ======================== */}
      <section className="border-t border-white/10 py-24 bg-[#08111F]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="text-cyan-400 fill-cyan-400" size={24} />
            ))}
          </div>

          <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed mb-10">
            "TriAxon transformed our platform experience. User engagement increased
            dramatically and the product finally felt enterprise-ready."
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <FiMessageSquare className="text-slate-500" size={16} />
            <p className="text-slate-400 text-sm">Product Manager · SaaS Company</p>
          </div>

        </div>
      </section>

      {/* ========================
               FAQ
      ======================== */}
      <section className="max-w-3xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold">Common Questions</h2>
        </div>

        <div className="space-y-5">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
            >
              <div className="flex items-start gap-3 mb-3">
                <FiHelpCircle className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                <h3 className="font-bold text-white">{item.q}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed pl-7">{item.a}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ========================
              FINAL CTA
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 p-16 text-center">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]" />

          <div className="relative">
            <h2 className="text-5xl lg:text-6xl font-black mb-8">
              Ready To Create
              <br />
              An Exceptional Product?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
              Partner with TriAxon Technologies and build experiences that users genuinely enjoy.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-lg hover:scale-105 transition"
              >
                Start Your Project <FiArrowRight />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold text-lg"
              >
                Explore More Services
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}