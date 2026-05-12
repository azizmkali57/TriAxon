"use client";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CTABanner() {
  return (
    <SectionWrapper className="py-16">
      <div className="reveal relative rounded-3xl overflow-hidden border border-[#2B7EC1]/30">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B7EC1]/20 via-[#6B3FA0]/20 to-[#00B4C8]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,126,193,0.15),transparent_70%)]" />

        {/* Animated border shimmer */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2B7EC1] to-transparent opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00B4C8] to-transparent opacity-60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-14 sm:px-12">
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium">Currently accepting new projects</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] bg-clip-text text-transparent">
                Exceptional?
              </span>
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Share your idea and get a free project consultation. No commitment required.
              We'll map out a plan together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link href="#contact">
              <Button size="xl">
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <div className="text-center">
              <div className="text-white font-semibold text-sm">or</div>
              <a
                href="https://wa.me/919876543210"
                className="text-[#25D366] hover:text-[#20b558] text-sm font-medium transition-colors flex items-center gap-1.5 mt-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}