"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

import {
  FiGlobe,
  FiSmartphone,
  FiPenTool,
  FiCloud,
  FiCpu,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    label: "Full-Stack Web",
    href: "/services/fullstack",
    icon: FiGlobe,
  },
  {
    label: "App Development",
    href: "/services/app-development",
    icon: FiSmartphone,
  },
  {
    label: "UI/UX Design",
    href: "/services/ui-ux-design",
    icon: FiPenTool,
  },
  {
    label: "Cloud & DevOps",
    href: "/services/cloud-devops",
    icon: FiCloud,
  },
  {
    label: "AI & ML",
    href: "/services/ai-ml",
    icon: FiCpu,
  },
  {
    label: "Digital Marketing",
    href: "/services/digital-marketing",
    icon: FiTrendingUp,
  },
];

const mainLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ open, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const el = drawerRef.current;

    if (!el) return;

    const focusable = el.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onKey = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    el.addEventListener("keydown", onKey);

    first?.focus();

    return () => el.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/70 backdrop-blur-sm
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed top-0 right-0 h-full w-[320px] z-50 flex flex-col
          bg-[#060D1A] border-l border-white/[0.07]
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Top Gradient */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#2B7EC1] via-[#6B3FA0] to-[#00B4C8]" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <Image
            src="/logo.png"
            alt="TriAxon Technologies"
            width={120}
            height={34}
            className="h-8 w-auto"
          />

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close navigation menu"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-4">
          {/* Main Links */}
          <nav className="px-4 mb-6">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#9CA3AF] hover:text-white hover:bg-white/[0.05] transition-all duration-150 group"
              >
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[#2B7EC1] to-[#00B4C8] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />

                <span className="text-sm font-medium">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Services */}
          <div className="px-4">
            <p className="px-4 mb-2 text-xs font-mono text-[#4A6080] uppercase tracking-widest">
              Services
            </p>

            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.label}
                    href={service.href}
                    onClick={onClose}
                    className="flex flex-col gap-2 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#2B7EC1]/30 hover:bg-[#2B7EC1]/5 transition-all duration-150"
                  >
                    <Icon className="text-[22px] text-[#00B4C8]" />

                    <span className="text-xs font-medium text-[#9CA3AF]">
                      {service.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Card */}
          <div className="mx-4 mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-xs text-[#9CA3AF] mb-2">
              Reach us directly
            </p>

            <a
              href="mailto:triaxontechnologies@gmail.com"
              className="text-sm text-white hover:text-[#00B4C8] transition-colors block mb-1"
            >
              triaxontechnologies@gmail.com
            </a>

            <a
              href="tel:+919039290553"
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              +91 90392 90553
            </a>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-5 border-t border-white/[0.06] space-y-3">
          <Link href="/contact" onClick={onClose} className="block">
            <Button className="w-full justify-center" size="md">
              Get a Free Quote
            </Button>
          </Link>

          <a
            href="https://wa.me/919039290553"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#25D366]/30 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/5 transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" />

            <span>WhatsApp Us</span>
          </a>
        </div>
      </aside>
    </>
  );
}