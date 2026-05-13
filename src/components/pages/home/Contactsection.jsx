"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionWrapper, {
  SectionHeader,
} from "@/components/ui/SectionWrapper";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email Us",
    value: "triaxontechnologies57@gmail.com",
    href: "mailto:triaxontechnologies57@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Call Us",
    value: "+91 90392 90553",
    href: "tel:+919039290553",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Indore, Madhya Pradesh, India",
    href: "#",
  },
  {
    icon: FiClock,
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
      `New Project Enquiry`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.service ? `Service: ${form.service}` : null,
      form.budget ? `Budget: ${form.budget}` : null,
      ``,
      `Project Details:`,
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

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-5">

          {contactInfo.map((info) => {
            const Icon = info.icon;

            return (
              <div
                key={info.label}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2B7EC1]/10 border border-[#2B7EC1]/20 flex items-center justify-center shrink-0">
                  <Icon className="text-[#00B4C8] text-lg" />
                </div>

                <div>
                  <div className="text-xs text-[#9CA3AF] mb-1">
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
            );
          })}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919039290553"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all group mt-8"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
              <FaWhatsapp className="text-[#25D366] text-2xl" />
            </div>

            <div>
              <div className="text-sm font-semibold text-white">
                Chat on WhatsApp
              </div>

              <div className="text-xs text-[#9CA3AF]">
                Fastest response guaranteed
              </div>
            </div>

            <FiArrowRight className="ml-auto text-[#9CA3AF] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Contact Form */}
        <Card className="lg:col-span-3" padding="lg">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Email */}
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

            {/* Phone + Service */}
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

            {/* Budget */}
            <div>
              <label className="block text-xs text-[#9CA3AF] mb-2">
                Budget Range
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "<₹1999",
                  "₹1999–4999",
                  "₹4999–9999",
                  "₹9999–19999",
                  ">₹19999",
                ].map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() =>
                      setForm((f) => ({
                        ...f,
                        budget,
                      }))
                    }
                    className={`px-3 py-2.5 rounded-xl text-sm border transition-all ${
                      form.budget === budget
                        ? "border-[#2B7EC1] bg-[#2B7EC1]/10 text-[#79b8f0]"
                        : "border-white/10 text-[#9CA3AF] hover:border-white/30"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs text-[#9CA3AF] mb-1.5">
                Project Details *
              </label>

              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your project, goals, and timeline..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 focus:bg-white/[0.07] transition-all resize-none"
              />
            </div>

            {/* Submit */}
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