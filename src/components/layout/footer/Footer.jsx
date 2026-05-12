'use client';

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#070B14] text-white pt-16 pb-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2">
            <Image
              src="/public/triaxon1.png"
              alt="Company Logo"
              width={140}
              height={40}
              className="mb-4"
            />
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
              Engineering exceptional digital experiences that scale, perform,
              and inspire. We build for the future.
            </p>

            <div className="space-y-2 text-sm text-[#9CA3AF]">
              <p>triaxontechnologies57@gmail.com</p>
              <p>+91 90392 90553</p>
              <p>Indore, India</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">Mobile Apps</Link></li>
              <li><Link href="#">Cloud & DevOps</Link></li>
              <li><Link href="#">AI & ML</Link></li>
              <li><Link href="#">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Team</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li><Link href="/legal/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/legal/terms-of-service">Terms</Link></li>
              <li><Link href="/legal/cookie-policy">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border border-white/[0.08] rounded-2xl p-6 flex flex-col lg:flex-row items-center justify-between gap-4 bg-white/[0.02] backdrop-blur">
          
          <div>
            <h4 className="text-sm font-semibold mb-1">Stay in the loop</h4>
            <p className="text-xs text-[#9CA3AF]">
              Get insights, case studies & product updates.
            </p>
          </div>

          <div className="flex w-full lg:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-72 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-sm focus:outline-none"
            />
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#6B5CFF] to-[#8B7BFF] text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-4 text-xs text-[#6B7280]">
          <p>© {new Date().getFullYear()} TriAxon Technologies. All rights reserved.</p>

        </div>

      </div>  
    </footer>
  );
}

