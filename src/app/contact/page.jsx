"use client";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { useState } from "react";
import Link from "next/link";

const metadata = {
  title: "Contact Us | TriAxon Technologies",
  description:
    "Get in touch with TriAxon Technologies. Start a project, book a free consultation, or just say hello. Response within 24 hours.",
};

const contactMethods = [
  {
    icon: "📧",
    label: "Email",
    value: "triaxontechnologies@gmail.com",
    sub: "For general inquiries",
    href: "mailto:triaxontechnologies@gmail.com",
    color: "border-[#2B7EC1]/30 bg-[#2B7EC1]/5 hover:border-[#2B7EC1]/60",
    iconBg: "bg-[#2B7EC1]/15 text-[#79b8f0]",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 90392 90553",
    sub: "Mon–Fri, 10 AM – 6 PM IST",
    href: "tel:+91 90392 90553",
    color: "border-[#6B3FA0]/30 bg-[#6B3FA0]/5 hover:border-[#6B3FA0]/60",
    iconBg: "bg-[#6B3FA0]/15 text-[#b392d8]",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Chat Instantly",
    sub: "Fastest response channel",
    href: "https://wa.me/9039290553",
    color: "border-[#25D366]/30 bg-[#25D366]/5 hover:border-[#25D366]/60",
    iconBg: "bg-[#25D366]/15 text-[#25D366]",
  },
  {
    icon: "📍",
    label: "Office",
    value: "Indore, M.P., India",
    sub: "Visits by appointment",
    href: "https://maps.google.com/?q=Indore,+Madhya+Pradesh",
    color: "border-[#00B4C8]/30 bg-[#00B4C8]/5 hover:border-[#00B4C8]/60",
    iconBg: "bg-[#00B4C8]/15 text-[#00B4C8]",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "AI & ML Integration",
  "Digital Marketing",
  "Enterprise Software",
  "Other / Not Sure",
];

const budgets = [
  { label: "< ₹1999",   value: "under-1l" },
  { label: "₹1999 – ₹4999",  value: "1l-5l" },
  { label: "₹4999 – ₹9999", value: "5l-20l" },
  { label: "₹9999 – ₹19999",value: "20l-50l" },
  { label: "₹19999+",       value: "50l-plus" },
  { label: "Not sure yet", value: "unsure" },
];

const timelines = [
  "ASAP (< 1 week)",
  "1–4 weeks",
  "1–3 months",
  "Flexible",
];

const faqs = [
  {
    q: "How soon will you get back to me?",
    a: "We respond to every inquiry within 24 business hours — usually much faster. If you need an urgent response, WhatsApp is the fastest channel.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. 40% of our clients are based outside India — primarily in the UK, UAE, USA, and Australia. We're fluent in async communication across time zones.",
  },
  {
    q: "What information should I have ready?",
    a: "Just a rough description of what you want to build and your approximate budget is enough to start. We'll gather everything else in our discovery call.",
  },
  {
    q: "Do you offer fixed-price projects?",
    a: "Yes — for well-scoped projects we offer fixed-price contracts with milestone-based payments. We also do T&M (time & materials) for ongoing or exploratory work.",
  },
  {
    q: "Can I see examples of similar work?",
    a: "Yes! Head to our Portfolio page, or mention your industry in the form and we'll share relevant case studies before our call.",
  },
  {
    q: "What is the minimum project size?",
    a: "Our minimum engagement is ₹1 Lakh (approx. $1,200 USD). For smaller scopes like audits or design sprints, we have fixed-rate packages.",
  },
];

const offices = [
  {
    city: "Indore (HQ)",
    address: "4th Floor, Treasure Island Mall, MG Road, Indore – 452001",
    phone: "+91 98765 43210",
    email: "hello@triaxon.tech",
    flag: "🇮🇳",
  },
  {
    city: "Dubai (Sales)",
    address: "DIFC, Gate Avenue, Dubai, UAE",
    phone: "+971 50 000 0000",
    email: "dubai@triaxon.tech",
    flag: "🇦🇪",
  },
  {
    city: "London (Sales)",
    address: "WeWork, 1 Poultry, London EC2R 8EJ",
    phone: "+44 20 0000 0000",
    email: "london@triaxon.tech",
    flag: "🇬🇧",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    how: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSelect = (field, value) =>
    setForm((f) => ({ ...f, [field]: f[field] === value ? "" : value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Build a formatted WhatsApp message from the form data
    const budgetLabel = budgets.find((b) => b.value === form.budget)?.label || form.budget || "Not specified";

    const message =
      ` *New Project Inquiry — TriAxon Technologies*\n\n` +
      ` *Name:* ${form.name}\n` +
      ` *Email:* ${form.email}\n` +
      ` *Phone:* ${form.phone || "Not provided"}\n` +
      ` *Company:* ${form.company || "Not provided"}\n\n` +
      ` *Service Needed:* ${form.service || "Not specified"}\n` +
      ` *Budget:* ${budgetLabel}\n` +
      ` *Timeline:* ${form.timeline || "Not specified"}\n\n` +
      ` *Project Description:*\n${form.message}\n\n` +
      ` *How they found us:* ${form.how || "Not specified"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919039290553?text=${encodedMessage}`;

    // Simulate a brief loading state before redirecting
    await new Promise((r) => setTimeout(r, 800));

    setStatus("success");

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-[#0D1117] min-h-screen">
    <Navbar />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(43,126,193,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_85%_60%,rgba(107,63,160,0.12),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#2B7EC1]/30 bg-[#2B7EC1]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-[#79b8f0] font-mono">
              Accepting new projects · Response within 24 hrs
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-[#2B7EC1] via-[#6B3FA0] to-[#00B4C8] bg-clip-text text-transparent">
              Great Together
            </span>
          </h1>
          <p className="text-[#9CA3AF] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and we'll get back to you with a detailed plan,
            timeline, and quote — all within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target={m.href.startsWith("http") ? "_blank" : undefined}
              rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${m.color}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${m.iconBg}`}>
                {m.icon}
              </div>
              <div>
                <div className="text-xs text-[#9CA3AF] mb-0.5">{m.label}</div>
                <div className="text-sm font-semibold text-white group-hover:text-[#00B4C8] transition-colors">
                  {m.value}
                </div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">{m.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              <h3 className="font-display font-bold text-white mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "We review your request", desc: "Within 24 hours, a senior team member reviews your submission." },
                  { step: "2", title: "Discovery call scheduled", desc: "We'll book a 30-minute call to understand your goals in depth." },
                  { step: "3", title: "Proposal delivered", desc: "You receive a detailed scope, timeline, and fixed quote within 48 hours." },
                  { step: "4", title: "Kickoff in < 1 week", desc: "Once approved, your dedicated team starts within 5 business days." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2B7EC1] to-[#6B3FA0] flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-[#9CA3AF] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400">Currently Available</span>
              </div>
              <p className="text-xs text-[#9CA3AF]">
                We have capacity for 10 new projects this month. Reach out before spots fill up.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                <div className="text-7xl mb-6">🎉</div>
                <h2 className="font-display font-bold text-3xl text-white mb-3">
                  Message Received!
                </h2>
                <p className="text-[#9CA3AF] text-lg max-w-sm">
                  A team member will review your project and get back to you within 24 hours.
                </p>
                <Link
                  href="/portfolio"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-[#9CA3AF] hover:text-white hover:border-white/40 transition-colors text-sm"
                >
                  Browse Our Work While You Wait →
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] space-y-7"
              >
                <div>
                  <h2 className="font-display font-bold text-2xl text-white mb-1">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-sm text-[#9CA3AF]">
                    All fields marked <span className="text-red-400">*</span> are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#9CA3AF] mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9CA3AF] mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#9CA3AF] mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9CA3AF] mb-2">
                      Company / Startup Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9CA3AF] mb-3">
                    Service Needed <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => handleSelect("service", s)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-all duration-150 text-left ${
                          form.service === s
                            ? "border-[#2B7EC1] bg-[#2B7EC1]/15 text-[#79b8f0]"
                            : "border-white/10 text-[#9CA3AF] hover:border-white/25 hover:text-white"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9CA3AF] mb-3">
                    Estimated Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => handleSelect("budget", b.value)}
                        className={`px-4 py-2 rounded-xl text-sm border transition-all duration-150 ${
                          form.budget === b.value
                            ? "border-[#6B3FA0] bg-[#6B3FA0]/15 text-[#b392d8]"
                            : "border-white/10 text-[#9CA3AF] hover:border-white/25 hover:text-white"
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9CA3AF] mb-3">
                    Ideal Timeline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => handleSelect("timeline", t)}
                        className={`px-4 py-2 rounded-xl text-sm border transition-all duration-150 ${
                          form.timeline === t
                            ? "border-[#00B4C8] bg-[#00B4C8]/15 text-[#00B4C8]"
                            : "border-white/10 text-[#9CA3AF] hover:border-white/25 hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9CA3AF] mb-2">
                    Project Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project — what are you building, who is it for, what problem does it solve? The more detail, the better our proposal."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 focus:bg-white/[0.07] transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9CA3AF] mb-2">
                    How Did You Hear About Us?
                  </label>
                  <select
                    name="how"
                    value={form.how}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-[#2B7EC1]/60 transition-all appearance-none"
                    style={{ color: form.how ? "#F4F6F9" : "#4A6080" }}
                  >
                    <option value="" className="bg-[#0A1628]">Select an option</option>
                    {["Google Search", "LinkedIn", "Twitter / X", "Clutch / GoodFirms", "Referral from a friend", "GitHub", "YouTube", "Other"].map((o) => (
                      <option key={o} value={o} className="bg-[#0A1628] text-white">{o}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold text-base hover:opacity-90 disabled:opacity-50 transition-all active:scale-[0.98]"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending your message…
                    </>
                  ) : (
                    <>
                      Send Project Inquiry
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#9CA3AF]">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy" className="text-[#00B4C8] hover:underline">Privacy Policy</Link>.
                  We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-display font-bold text-4xl text-white">
              Questions We Get Asked
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  openFaq === i
                    ? "border-[#2B7EC1]/40 bg-[#2B7EC1]/5"
                    : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openFaq === i
                        ? "border-[#2B7EC1] bg-[#2B7EC1]/20 rotate-45"
                        : "border-white/20"
                    }`}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

    </main>
  );
}