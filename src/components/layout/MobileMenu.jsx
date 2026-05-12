"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

const services = [
  { label: "Full-Stack Web", href: "/services/fullstack", icon: "🌐" },
  { label: "App Development", href: "/services/app-development", icon: "📱" },
  { label: "UI/UX Design", href: "/services/ui-ux-design", icon: "🎨" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops", icon: "☁️" },
  { label: "AI & ML", href: "/services/ai-ml", icon: "🤖" },
  { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📣" },
];

const mainLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ open, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = drawerRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const onKey = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    el.addEventListener("keydown", onKey);
    first?.focus();
    return () => el.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/70 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

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
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#2B7EC1] via-[#6B3FA0] to-[#00B4C8]" />

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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-4 mb-6">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#9CA3AF] hover:text-white hover:bg-white/[0.05] transition-all duration-150 group"
              >
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[#2B7EC1] to-[#00B4C8] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="px-4">
            <p className="px-4 mb-2 text-xs font-mono text-[#4A6080] uppercase tracking-widest">
              Services
            </p>
            <div className="grid grid-cols-2 gap-2">
              {services.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  onClick={onClose}
                  className="flex flex-col gap-1.5 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#2B7EC1]/30 hover:bg-[#2B7EC1]/5 transition-all duration-150"
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-xs font-medium text-[#9CA3AF]">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mx-4 mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-xs text-[#9CA3AF] mb-2">Reach us directly</p>
            <a
              href="mailto:hello@triaxon.tech"
              className="text-sm text-white hover:text-[#00B4C8] transition-colors block mb-1"
            >
              hello@triaxon.tech
            </a>
            <a
              href="tel:+919876543210"
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              +91 98765 43210
            </a>
          </div>
        </div>

        <div className="p-5 border-t border-white/[0.06] space-y-3">
          <Link href="/contact" onClick={onClose} className="block">
            <Button className="w-full justify-center" size="md">
              Get a Free Quote
            </Button>
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#25D366]/30 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  );
}