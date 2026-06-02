import Image from "next/image";
import Link from "next/link";
// import Navbar from "@/components/layout/header/Navbar";
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
} from "react-icons/fi";

export const metadata = {
  title: "UI/UX Design Services | TriAxon Technologies",
  description:
    "Professional UI/UX design services for SaaS, startups, enterprise products, mobile apps and web applications.",
};

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

const stats = [
  {
    icon: FiUsers,
    value: "50+",
    label: "Products Designed",
  },
  {
    icon: FiTrendingUp,
    value: "3.2x",
    label: "Average Conversion Growth",
  },
  {
    icon: FiZap,
    value: "94%",
    label: "Usability Score",
  },
  {
    icon: FiCheckCircle,
    value: "2 Weeks",
    label: "Prototype Delivery",
  },
];

export default function UiUxPage() {
  return (
    <main className="bg-[#050B14] text-white overflow-hidden">
      {/* <Navbar /> */}
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-10"
          >
            ← Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-8">
                UI/UX DESIGN SERVICES
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-8">
                Design Products
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Users Love
                </span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
                We design intuitive digital experiences that increase
                engagement, improve retention, and drive measurable business
                growth. From SaaS dashboards to enterprise platforms and mobile
                apps.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold flex items-center gap-2 hover:scale-105 transition-all"
                >
                  Start Your Project
                  <FiArrowRight />
                </Link>

                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                >
                  View Case Studies
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">

                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <Icon
                        size={22}
                        className="text-cyan-400 mb-4"
                      />

                      <h3 className="text-3xl font-bold mb-1">
                        {item.value}
                      </h3>

                      <p className="text-sm text-slate-400">
                        {item.label}
                      </p>
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
                  src="/images/uiux/hero-uiux.webp"
                  alt="UI UX Design"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                  priority
                />

              </div>

              <div className="absolute -top-6 -left-6 bg-[#101A2B] border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
                <p className="text-xs text-slate-400 mb-1">
                  Conversion Increase
                </p>
                <h3 className="text-2xl font-bold text-cyan-400">
                  +42%
                </h3>
              </div>

              <div className="absolute -bottom-6 right-0 bg-[#101A2B] border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
                <p className="text-xs text-slate-400 mb-1">
                  User Satisfaction
                </p>
                <h3 className="text-2xl font-bold text-green-400">
                  95%
                </h3>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TRUSTED SECTION */}

      <section className="border-y border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center text-slate-500 text-sm uppercase tracking-[0.3em] mb-8">
            Trusted By Growing Businesses
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

            {[
              "STARTUPS",
              "SAAS",
              "ECOMMERCE",
              "HEALTHCARE",
              "EDTECH",
              "ENTERPRISE",
            ].map((item) => (
              <div
                key={item}
                className="h-16 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-slate-400 font-medium"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
              CAPABILITIES
            </div>

            <h2 className="text-5xl font-black mb-6">
              Everything Needed To Build
              Exceptional Experiences
            </h2>

            <p className="text-slate-400 text-lg">
              From research and strategy to complete design systems and
              developer handoff.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-cyan-500/30 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                    <Icon
                      size={28}
                      className="text-cyan-400"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>
            {/* FEATURED WORK */}

      <section className="py-28 bg-[#08111F]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
              FEATURED WORK
            </div>

            <h2 className="text-5xl font-black mb-6">
              Interfaces Designed For Growth
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Every screen is crafted to improve usability, engagement,
              and conversion.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]"
              >

                <div className="relative h-[280px] overflow-hidden">

                  <Image
                    src={`/images/uiux/project-${item}.webp`}
                    alt="Project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                </div>

                <div className="p-8">

                  <span className="text-cyan-400 text-sm">
                    SaaS Platform
                  </span>

                  <h3 className="text-2xl font-bold mt-2 mb-3">
                    Modern Dashboard Experience
                  </h3>

                  <p className="text-slate-400">
                    Designed to streamline workflows and improve
                    user engagement through intuitive navigation.
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DESIGN SYSTEM */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
                DESIGN SYSTEMS
              </span>

              <h2 className="text-5xl font-black mt-5 mb-8">
                Built For Scale,
                Consistency &
                Faster Development
              </h2>

              <p className="text-slate-400 text-lg mb-10">
                We create scalable design systems that allow teams
                to move faster while maintaining visual consistency.
              </p>

              <div className="space-y-5">

                {[
                  "Color Tokens & Variables",
                  "Typography Scale",
                  "Reusable Components",
                  "Dark & Light Themes",
                  "Developer Handoff",
                  "Accessibility Standards",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <FiCheckCircle className="text-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

              <div className="relative rounded-[30px] overflow-hidden border border-white/10">

                <Image
                  src="/images/uiux/design-system.webp"
                  alt="Design System"
                  width={1200}
                  height={900}
                  className="w-full"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* METRICS */}

      <section className="py-28 bg-[#08111F]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                value: "95%",
                label: "User Satisfaction",
              },
              {
                value: "42%",
                label: "Conversion Increase",
              },
              {
                value: "3.5x",
                label: "Engagement Growth",
              },
              {
                value: "2 Weeks",
                label: "Prototype Delivery",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-10 rounded-3xl border border-white/10 bg-white/[0.03]"
              >

                <div className="text-5xl font-black text-cyan-400 mb-4">
                  {item.value}
                </div>

                <div className="text-slate-400">
                  {item.label}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              OUR PROCESS
            </span>

            <h2 className="text-5xl font-black mt-5">
              From Idea To Product
            </h2>

          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Discover",
              "Research",
              "Wireframe",
              "Design",
              "Launch",
            ].map((step, index) => (
              <div
                key={step}
                className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] text-center"
              >

                <div className="text-cyan-400 font-black text-5xl mb-4">
                  0{index + 1}
                </div>

                <h3 className="font-bold text-xl">
                  {step}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}

      <section className="py-28 bg-[#08111F]">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="text-cyan-400 text-5xl mb-8">
            ★★★★★
          </div>

          <h2 className="text-4xl font-bold leading-relaxed mb-10">
            "TriAxon transformed our platform experience.
            User engagement increased dramatically and
            the product finally felt enterprise-ready."
          </h2>

          <div className="text-slate-400">
            Product Manager • SaaS Company
          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-28">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              FAQ
            </span>

            <h2 className="text-5xl font-black mt-5">
              Common Questions
            </h2>

          </div>

          <div className="space-y-6">

            {[
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
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 p-8 bg-white/[0.03]"
              >
                <h3 className="font-bold text-xl mb-3">
                  {item.q}
                </h3>

                <p className="text-slate-400">
                  {item.a}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 p-16 text-center">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent)]" />

            <div className="relative">

              <h2 className="text-5xl lg:text-6xl font-black mb-8">
                Ready To Create
                <br />
                An Exceptional Product?
              </h2>

              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                Partner with TriAxon Technologies and build
                experiences that users genuinely enjoy.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-lg hover:scale-105 transition-all"
              >
                Start Your Project
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>
      <Footer />
    </main>
  );
}