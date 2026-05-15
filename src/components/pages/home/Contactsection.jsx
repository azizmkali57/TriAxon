"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const contactInfo = [
  {
    icon: "📧",
    label: "Email Us",
    value: "triaxontechnologies57@gmail.com",
    href: "mailto:triaxontechnologies57@gmail.com",
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "+91 90392 90553",
    href: "tel:+919039290553",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Indore, Madhya Pradesh, India",
    href: "#",
  },
  {
    icon: "🕐",
    label: "Business Hours",
    value: "Mon–Fri, 10 AM – 6 PM IST",
    href: null,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      `👋 *New Project Enquiry*`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.phone ? `*Phone:* ${form.phone}` : null,
      form.service ? `*Service:* ${form.service}` : null,
      form.budget ? `*Budget:* ${form.budget}` : null,
      ``,
      `*Project Details:*`,
      form.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const encoded = encodeURIComponent(text);

    window.open(
      `https://wa.me/919039290553?text=${encoded}`,
      "_blank"
    );
  };

  return (
    <SectionWrapper id="contact" dark>
      <SectionHeader
        eyebrow="Get In Touch"
        title={
          <>
            Let's Build{" "}
            <span className="bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] bg-clip-text text-transparent">
              Together
            </span>
          </>
        }
        subtitle="Tell us about your project and we'll get back to you within 24 hours with a detailed plan."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {}
        <div className="lg:col-span-2 space-y-5 reveal">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2B7EC1]/10 border border-[#2B7EC1]/20 flex items-center justify-center text-lg shrink-0">
                {info.icon}
              </div>

              <div>
                <div className="text-xs text-[#9CA3AF] mb-0.5">
                  {info.label}
                </div>

                {info.href && info.href !== "#" ? (
                  <a
                    href={info.href}
                    className="text-sm text-white hover:text-[#00B4C8] transition-colors font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-sm text-white font-medium">
                    {info.value}
                  </span>
                )}
              </div>
            </div>
          ))}

          {}
          <a
            href="https://wa.me/919039290553"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors group mt-6"
          >
            <svg
              className="w-6 h-6 text-[#25D366]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            <div>
              <div className="text-sm font-semibold text-white">
                Chat on WhatsApp
              </div>
              <div className="text-xs text-[#9CA3AF]">
                Fastest response guaranteed
              </div>
            </div>

            <svg
              className="w-4 h-4 text-[#9CA3AF] ml-auto group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {}
        <Card className="lg:col-span-3 reveal" padding="lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-[#9CA3AF] mb-1.5">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 focus:bg-white/[0.07] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs text-[#9CA3AF] mb-1.5">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 focus:bg-white/[0.07] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-[#9CA3AF] mb-1.5">
                  Phone Number
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
                <label className="block text-xs text-[#9CA3AF] mb-1.5">
                  Service Needed
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2B7EC1]/60 transition-all appearance-none"
                >
                  <option value="" className="bg-[#0A1628]">
                    Select a service
                  </option>

                  <option value="Web Development" className="bg-[#0A1628]">
                    Web Development
                  </option>

                  <option value="Mobile App" className="bg-[#0A1628]">
                    Mobile App
                  </option>

                  <option value="UI/UX Design" className="bg-[#0A1628]">
                    UI/UX Design
                  </option>

                  <option value="Cloud & DevOps" className="bg-[#0A1628]">
                    Cloud & DevOps
                  </option>

                  <option value="AI Integration" className="bg-[#0A1628]">
                    AI Integration
                  </option>

                  <option value="Enterprise Software" className="bg-[#0A1628]">
                    Enterprise Software
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#9CA3AF] mb-1.5">
                Budget Range
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["<₹1999", "₹1999–4999", "₹4999–9999", "₹9999-19999",">₹19999"].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() =>
                      setForm((f) => ({
                        ...f,
                        budget: b,
                      }))
                    }
                    className={`px-3 py-2 rounded-lg text-sm border transition-all ${
                      form.budget === b
                        ? "border-[#2B7EC1] bg-[#2B7EC1]/10 text-[#79b8f0]"
                        : "border-white/10 text-[#9CA3AF] hover:border-white/30"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#9CA3AF] mb-1.5">
                Project Details *
              </label>

              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your project, goals, and timeline..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 focus:bg-white/[0.07] transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full justify-center"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </SectionWrapper>
  );
}