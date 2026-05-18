import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";

const projects = {
  "timecraft-product-page": {
    title: "TimeCraft Watch Store",
    industry: "E-Commerce",
    category: "Landing Page",
    duration: "3 weeks",
    team: "2 engineers, 1 designer",
    imageSrc: "/site/watchproject.jpeg",
    accentColor: "#C8A96E",
    accentRgb: "200,169,110",
    gradient: "from-[#C8A96E]/20 via-[#1A1208] to-[#0D1117]",
    stack: ["Next.js", "Tailwind CSS", "Shopify", "Figma"],
    result: "43% conversion ↑",
    overview: "TimeCraft is a premium watch brand that needed a high-converting product landing page to showcase their luxury timepieces. The goal was to create an elegant, warm aesthetic that communicated quality and drove direct-to-consumer sales.",
    challenge: "The brand had no direct online sales channel — only third-party retailers. Their potential customers were landing on generic marketplace pages with no brand story, no social proof, and no urgency-driven conversion elements.",
    solution: "We designed an immersive product landing page with warm beige aesthetics, live pricing integration with Shopify, detailed spec comparison tables, star-rated testimonials pulled from real reviews, and a sticky CTA section that followed users as they scrolled.",
    results: [
      { metric: "43%", label: "Conversion Rate Increase", icon: "📈" },
      { metric: "2.1×", label: "Average Order Value", icon: "💰" },
      { metric: "68%", label: "Bounce Rate Reduction", icon: "🎯" },
      { metric: "3 wks", label: "Delivered In", icon: "⚡" },
    ],
    testimonial: {
      text: "The landing page completely transformed how customers perceive our brand. We went from 1.2% conversion to over 3.4% in the first month alone.",
      author: "James Thornton",
      role: "Founder, TimeCraft Watches",
      initials: "JT",
    },
    process: [
      { phase: "Discovery", weeks: "Wk 1", desc: "Brand audit, competitor analysis, customer persona research, and conversion funnel mapping." },
      { phase: "Design", weeks: "Wk 1–2", desc: "Wireframes, mood boarding, Figma prototypes with warm beige palette and luxury typographic system." },
      { phase: "Build", weeks: "Wk 2–3", desc: "Next.js development, Shopify storefront API integration, live pricing, and testimonial components." },
      { phase: "Launch", weeks: "Wk 3", desc: "Performance testing, SEO setup, analytics instrumentation, and go-live." },
    ],
  },
  "trailmate-storefront": {
    title: "TrailMate Adventure Store",
    industry: "Outdoor & Lifestyle",
    category: "Landing Page",
    duration: "4 weeks",
    team: "2 engineers, 1 designer",
    imageSrc: "/site/tracksuitproject.jpeg",
    accentColor: "#4ADE80",
    accentRgb: "74,222,128",
    gradient: "from-[#3A5A40]/20 via-[#0D1F0F] to-[#0D1117]",
    stack: ["React", "Tailwind CSS", "Shopify", "Vercel"],
    result: "38% add-to-cart ↑",
    overview: "TrailMate needed a cinematic outdoor storefront that matched the adventurous spirit of their backpack line. The challenge was to create an experience that felt as rugged and trustworthy as the products themselves.",
    challenge: "TrailMate's existing Shopify theme was generic and failed to differentiate them from dozens of similar brands. High traffic from outdoor influencer partnerships was not converting because the page lacked the storytelling and trust signals that outdoor enthusiasts expect.",
    solution: "We built a cinematic hero section with mountain imagery, a feature grid highlighting weatherproofing and ergonomic specs, detailed comparison tables, a trust-building social proof section with UGC photos, and a streamlined add-to-cart flow.",
    results: [
      { metric: "38%", label: "Add-to-Cart Rate ↑", icon: "🛒" },
      { metric: "4.2×", label: "Return on Ad Spend", icon: "📊" },
      { metric: "55%", label: "Time-on-Page Increase", icon: "⏱️" },
      { metric: "4 wks", label: "Delivered In", icon: "⚡" },
    ],
    testimonial: {
      text: "Our influencer traffic was bouncing before — now it converts. The storefront finally feels like it belongs next to Patagonia and Arc'teryx.",
      author: "Mia Chen",
      role: "Head of Marketing, TrailMate",
      initials: "MC",
    },
    process: [
      { phase: "Research", weeks: "Wk 1", desc: "Customer journey mapping, influencer traffic analysis, and competitor UX teardown." },
      { phase: "Design", weeks: "Wk 1–2", desc: "Cinematic mood board, hero imagery direction, component wireframes, and Figma prototype." },
      { phase: "Build", weeks: "Wk 2–4", desc: "React storefront, Shopify Storefront API, image optimisation, social proof integration." },
      { phase: "Deploy", weeks: "Wk 4", desc: "Vercel deployment, A/B test setup, analytics and heatmap instrumentation." },
    ],
  },
  "startx-saas-platform": {
    title: "StartX SaaS Platform",
    industry: "SaaS / Startup",
    category: "Web App",
    duration: "12 weeks",
    team: "4 engineers, 1 designer, 1 PM",
    imageSrc: "/site/tradingproject.jpeg",
    accentColor: "#60A5FA",
    accentRgb: "96,165,250",
    gradient: "from-[#2563EB]/20 via-[#0F172A] to-[#0D1117]",
    stack: ["React", "Node.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    result: "2,000+ signups/month",
    overview: "StartX is a startup launchpad platform connecting early-stage founders with investors, mentors, and tools. They needed a full marketing site with gated SaaS features, tiered pricing, and a high-converting signup funnel.",
    challenge: "StartX had a product but no polished public face. Their existing site was a single Notion page with a Typeform link. They were losing credibility with investors and struggling to convert cold traffic from Product Hunt and Twitter.",
    solution: "We built a full SaaS marketing site with animated feature showcases, tiered pricing cards with Stripe integration, brand trust logos, customer testimonials carousel, a newsletter-powered conversion footer, and a gated dashboard onboarding flow.",
    results: [
      { metric: "2K+", label: "Signups/Month", icon: "🚀" },
      { metric: "18%", label: "Free-to-Paid Conversion", icon: "💳" },
      { metric: "4.7★", label: "Product Hunt Rating", icon: "⭐" },
      { metric: "12 wks", label: "Delivered In", icon: "⚡" },
    ],
    testimonial: {
      text: "We went from a Notion page to a site that investors take seriously. Signups jumped 10× in the first week after launch.",
      author: "Priya Nair",
      role: "CEO, StartX",
      initials: "PN",
    },
    process: [
      { phase: "Discovery", weeks: "Wk 1–2", desc: "Stakeholder workshops, ICP definition, conversion funnel design, and information architecture." },
      { phase: "Design", weeks: "Wk 3–5", desc: "Brand system, component library, Figma prototypes, and stakeholder sign-off." },
      { phase: "Build", weeks: "Wk 6–10", desc: "React frontend, Node.js API, Stripe billing, PostgreSQL schema, email sequences." },
      { phase: "Launch & QA", weeks: "Wk 11–12", desc: "Load testing, accessibility audit, Product Hunt launch prep, and analytics setup." },
    ],
  },
  "exterior-designer": {
    title: "Exterior Designer",
    industry: "SaaS / Architecture",
    category: "Web App",
    duration: "12 weeks",
    team: "3 engineers, 1 designer, 1 PM",
    imageSrc: "/site/architectureproject.jpeg",
    accentColor: "#A78BFA",
    accentRgb: "167,139,250",
    gradient: "from-[#7C3AED]/20 via-[#0F172A] to-[#0D1117]",
    stack: ["React", "Node.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    result: "1,000+ signups/month",
    overview: "Exterior Designer is a SaaS platform for architects and homeowners to visualise building facades in real time. They needed a marketing site that communicated the product's power while being approachable to non-technical users.",
    challenge: "The product had impressive AI-powered visualisation capabilities but the existing site read like a developer tool. Non-technical customers were bouncing within seconds because the value proposition was buried in jargon.",
    solution: "We rebuilt the site with a visuals-first approach — hero section with live before/after facade renders, simplified feature breakdown in plain language, tiered pricing for homeowners vs. professionals, and a frictionless free trial signup flow.",
    results: [
      { metric: "1K+", label: "Signups/Month", icon: "🚀" },
      { metric: "32%", label: "Trial-to-Paid Rate", icon: "💳" },
      { metric: "3.8×", label: "Session Duration Increase", icon: "⏱️" },
      { metric: "12 wks", label: "Delivered In", icon: "⚡" },
    ],
    testimonial: {
      text: "Our bounce rate dropped from 74% to 31% after the redesign. Homeowners finally get what the product does the moment they land on the page.",
      author: "Daniel Osei",
      role: "Product Lead, Exterior Designer",
      initials: "DO",
    },
    process: [
      { phase: "Audit", weeks: "Wk 1–2", desc: "User session recordings, heatmaps, bounce analysis, and messaging clarity audit." },
      { phase: "Strategy", weeks: "Wk 2–3", desc: "Jobs-to-be-done mapping, persona split (homeowners vs. architects), new IA." },
      { phase: "Build", weeks: "Wk 4–10", desc: "React site, before/after image component, Stripe integration, free trial flow." },
      { phase: "Launch", weeks: "Wk 11–12", desc: "SEO optimisation, analytics, A/B test on hero headline, and handoff." },
    ],
  },
  "beautiful-cafe-website": {
    title: "Beautiful Café Website",
    industry: "Food & Beverage",
    category: "Business Website",
    duration: "5 weeks",
    team: "2 engineers, 1 designer",
    imageSrc: "/site/teaproject.jpeg",
    accentColor: "#FB923C",
    accentRgb: "251,146,60",
    gradient: "from-[#7B4A2D]/20 via-[#1C0F07] to-[#0D1117]",
    stack: ["Next.js", "Sanity CMS", "Tailwind CSS", "Stripe"],
    result: "55% online orders ↑",
    overview: "A warm artisan café brand needed a website that captured their handcrafted identity while driving online orders and loyalty signups.",
    challenge: "The café was relying entirely on walk-in trade and had no online ordering system. During quieter periods and bad weather, revenue dropped sharply with no digital fallback.",
    solution: "We built a rich brand website with an interactive menu card system, Stripe-powered online ordering, a 10% discount email capture pop-up, and a Sanity CMS so the owner could update the menu daily without any code.",
    results: [
      { metric: "55%", label: "Online Orders Increase", icon: "🛒" },
      { metric: "1.2K", label: "Email Subscribers in Month 1", icon: "📧" },
      { metric: "22%", label: "Revenue Increase (off-peak)", icon: "📈" },
      { metric: "5 wks", label: "Delivered In", icon: "⚡" },
    ],
    testimonial: {
      text: "I can update the menu myself every morning in 2 minutes. Online orders now account for 40% of our daily revenue.",
      author: "Sofia Martins",
      role: "Owner, Beautiful Café",
      initials: "SM",
    },
    process: [
      { phase: "Brand Deep-Dive", weeks: "Wk 1", desc: "Brand voice workshops, photography direction, menu architecture, and CMS planning." },
      { phase: "Design", weeks: "Wk 1–2", desc: "Warm earthy palette, artisan typography, Figma mockups for all key pages." },
      { phase: "Build", weeks: "Wk 2–4", desc: "Next.js site, Sanity CMS, Stripe ordering, email capture, and menu components." },
      { phase: "Launch", weeks: "Wk 5", desc: "Owner CMS training, SEO setup, Google Business integration, and go-live." },
    ],
  },
  "soundcore-earbuds-page": {
    title: "SoundCore Earbuds Page",
    industry: "Consumer Electronics",
    category: "Landing Page",
    duration: "6 weeks",
    team: "2 engineers, 1 designer",
    imageSrc: "/site/earbudsproject.jpeg",
    accentColor: "#FBBF24",
    accentRgb: "251,191,36",
    gradient: "from-[#C8962E]/20 via-[#0A0A0A] to-[#0D1117]",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
    result: "51% CTR on Buy Now",
    overview: "SoundCore needed a dark-luxury product page for their flagship wireless earbuds — something that could stand next to Sony and Bose in perceived quality, with an immersive scroll experience that drove immediate purchase intent.",
    challenge: "SoundCore's earbuds had superior specs to many competitors at half the price, but their product page looked cheap. Customers were reading the specs and leaving to buy from more established brands instead.",
    solution: "We built a full dark-luxury product page with a black-and-gold immersive hero, GSAP-powered animated spec reveals, ENC feature highlight sections, and a bold gold sticky buy CTA that remained visible throughout.",
    results: [
      { metric: "51%", label: "Buy Now CTR", icon: "🎯" },
      { metric: "3.3×", label: "Time-on-Page vs Old Site", icon: "⏱️" },
      { metric: "29%", label: "Cart Abandonment Reduction", icon: "🛒" },
      { metric: "6 wks", label: "Delivered In", icon: "⚡" },
    ],
    testimonial: {
      text: "Customers now compliment the website in their reviews. We've had people say they felt like they were buying a premium product before it even arrived.",
      author: "Kevin Park",
      role: "Head of Growth, SoundCore",
      initials: "KP",
    },
    process: [
      { phase: "Creative Brief", weeks: "Wk 1", desc: "Competitor teardown, luxury brand benchmarking, scroll experience storyboard." },
      { phase: "Design", weeks: "Wk 1–2", desc: "Dark-gold design system, animation storyboards, Figma prototype, stakeholder review." },
      { phase: "Build", weeks: "Wk 3–5", desc: "Next.js, GSAP scroll animations, Shopify cart integration, sticky CTA engineering." },
      { phase: "QA & Launch", weeks: "Wk 6", desc: "Cross-device testing, animation performance tuning, Shopify go-live." },
    ],
  },
  "bagcraft-store": {
    title: "BagCraft Store",
    industry: "Fashion & Accessories",
    category: "Landing Page",
    duration: "6 weeks",
    team: "2 engineers, 1 designer",
    imageSrc: "/site/bagproject.jpeg",
    accentColor: "#FBBF24",
    accentRgb: "251,191,36",
    gradient: "from-[#C8962E]/20 via-[#0A0A0A] to-[#0D1117]",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
    result: "51% CTR on Buy Now",
    overview: "BagCraft is a premium fashion accessories brand specialising in handcrafted leather bags. They needed a storefront that conveyed artisanal quality and drove direct sales away from marketplace dependency.",
    challenge: "90% of BagCraft's sales came through Amazon and Etsy, where margins were thin and brand identity was invisible. They had loyal repeat customers but no owned channel to build a relationship or run promotions.",
    solution: "We built a flagship Shopify storefront with editorial-style product photography presentation, GSAP-animated product reveals, a materials story section, a loyalty programme integration, and a seamless checkout experience.",
    results: [
      { metric: "51%", label: "Direct Sales CTR", icon: "🎯" },
      { metric: "40%", label: "Margin Improvement", icon: "📈" },
      { metric: "2.8×", label: "Customer LTV Increase", icon: "💰" },
      { metric: "6 wks", label: "Delivered In", icon: "⚡" },
    ],
    testimonial: {
      text: "We finally have a home that feels worthy of our products. Direct sales went from 8% to 45% of our total revenue in three months.",
      author: "Amara Okafor",
      role: "Founder, BagCraft",
      initials: "AO",
    },
    process: [
      { phase: "Brand Audit", weeks: "Wk 1", desc: "Marketplace analysis, brand positioning, photography brief, and storefront architecture." },
      { phase: "Design", weeks: "Wk 1–2", desc: "Editorial layout system, typography, product page wireframes, and Figma prototype." },
      { phase: "Build", weeks: "Wk 2–5", desc: "Shopify storefront, GSAP animations, loyalty integration, checkout optimisation." },
      { phase: "Launch", weeks: "Wk 6", desc: "SEO setup, email migration, analytics, and full go-live." },
    ],
  },
  "furniture-showcase": {
    title: "Furniture Showcase",
    industry: "Home & Interior",
    category: "Landing Page",
    duration: "6 weeks",
    team: "2 engineers, 1 designer",
    imageSrc: "/site/furnitureproject.jpeg",
    accentColor: "#FBBF24",
    accentRgb: "251,191,36",
    gradient: "from-[#C8962E]/20 via-[#0A0A0A] to-[#0D1117]",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
    result: "51% CTR on Buy Now",
    overview: "A premium furniture brand needed an immersive online showroom to replace the in-store experience — showcasing handcrafted pieces in lifestyle settings that inspired customers to buy.",
    challenge: "Furniture is tactile — customers want to touch and see pieces in context before buying. The existing site showed products on white backgrounds with no lifestyle context, leading to high return rates and low online conversion.",
    solution: "We created an immersive room-scene showcase with lifestyle photography integration, a material and finish selector, detailed craftsmanship story sections, and a seamless Shopify checkout.",
    results: [
      { metric: "51%", label: "Online Conversion CTR", icon: "🎯" },
      { metric: "38%", label: "Return Rate Reduction", icon: "📦" },
      { metric: "4.6★", label: "Post-Purchase Survey Score", icon: "⭐" },
      { metric: "6 wks", label: "Delivered In", icon: "⚡" },
    ],
    testimonial: {
      text: "Our online store finally feels like walking into our showroom. Returns dropped and customers arrive knowing exactly what they want.",
      author: "Lena Brandt",
      role: "Creative Director, Furniture Showcase",
      initials: "LB",
    },
    process: [
      { phase: "Concept", weeks: "Wk 1", desc: "Showroom UX mapping, photography art direction brief, material selector scope." },
      { phase: "Design", weeks: "Wk 1–2", desc: "Lifestyle layout system, room-scene components, and Figma prototype." },
      { phase: "Build", weeks: "Wk 2–5", desc: "Next.js, Shopify, GSAP scroll reveals, finish selector, and UGC photo section." },
      { phase: "Launch", weeks: "Wk 6", desc: "Photography integration, performance testing, and Shopify go-live." },
    ],
  },
  "herbal-brand-page": {
    title: "Herbal Brand Page",
    industry: "Health & Wellness",
    category: "Landing Page",
    duration: "6 weeks",
    team: "2 engineers, 1 designer",
    imageSrc: "/site/herbalproject.jpeg",
    accentColor: "#4ADE80",
    accentRgb: "74,222,128",
    gradient: "from-[#3A5A40]/20 via-[#0D1F0F] to-[#0D1117]",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Shopify"],
    result: "51% CTR on Buy Now",
    overview: "A herbal wellness brand needed a product page that communicated purity, natural sourcing, and clinical efficacy — while driving subscription purchases of their flagship herbal supplement line.",
    challenge: "The wellness space is crowded with greenwashing. Customers were sceptical about ingredient quality and sourcing. The existing site made bold claims with no substantiation, leading to low trust and high cart abandonment.",
    solution: "We built a trust-first product page with ingredient origin maps, third-party lab report integration, a herbalist-written ingredient glossary, and a subscription vs one-time purchase toggle with Shopify.",
    results: [
      { metric: "51%", label: "Subscribe & Save CTR", icon: "🎯" },
      { metric: "44%", label: "Cart Abandonment Reduction", icon: "🛒" },
      { metric: "3.1×", label: "Subscription LTV vs One-Time", icon: "💰" },
      { metric: "6 wks", label: "Delivered In", icon: "⚡" },
    ],
    testimonial: {
      text: "Trust was our biggest barrier. This site solved that with the ingredient maps and lab reports. Subscriptions are now 60% of our revenue.",
      author: "Dr. Riya Shah",
      role: "Founder, Herbal Brand",
      initials: "RS",
    },
    process: [
      { phase: "Trust Audit", weeks: "Wk 1", desc: "Customer interview series on purchase hesitations, competitor trust signal analysis." },
      { phase: "Design", weeks: "Wk 1–2", desc: "Natural earthy palette, ingredient card system, lab report UI, Figma prototype." },
      { phase: "Build", weeks: "Wk 2–5", desc: "Next.js, Shopify subscription integration, ingredient maps, GSAP reveals." },
      { phase: "Launch", weeks: "Wk 6", desc: "SEO, schema markup for health content, analytics, and go-live." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) return {};
  return {
    title: `${p.title} — Case Study | TriAxon Technologies`,
    description: p.overview.slice(0, 155),
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) notFound();

  return (
    <main className="bg-[#0D1117] min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className={`relative pt-32 pb-0 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, rgba(${p.accentRgb},0.6) 0%, transparent 70%)` }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `radial-gradient(circle, rgba(${p.accentRgb},1) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-white mb-10 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-0">
            {/* LEFT */}
            <div className="pb-16">
              {/* Category pill */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{
                    color: p.accentColor,
                    borderColor: `rgba(${p.accentRgb},0.3)`,
                    background: `rgba(${p.accentRgb},0.08)`,
                  }}
                >
                  {p.category}
                </span>
                <span className="text-xs text-[#6B7280]">·</span>
                <span className="text-xs text-[#6B7280]">{p.industry}</span>
              </div>

              <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-[1.05] mb-6 tracking-tight">
                {p.title}
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10 max-w-lg">{p.overview}</p>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-[#9CA3AF]">Duration</span>
                  <span className="text-sm text-white font-semibold">{p.duration}</span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-[#9CA3AF]">Team</span>
                  <span className="text-sm text-white font-semibold">{p.team}</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="relative lg:mt-4">
              <div className="relative rounded-t-2xl overflow-hidden h-80 lg:h-96 border border-white/[0.08] border-b-0">
                <img src={p.imageSrc} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/80 via-transparent to-transparent" />
                {/* Result badge */}
                <div
                  className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2 rounded-xl border backdrop-blur-md"
                  style={{
                    background: `rgba(${p.accentRgb},0.15)`,
                    borderColor: `rgba(${p.accentRgb},0.35)`,
                  }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: p.accentColor }} />
                  <span className="text-sm font-semibold text-white">{p.result}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS STRIP ── */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/[0.06]">
          {p.results.map((r) => (
            <div key={r.label} className="text-center px-6 py-2">
              <div
                className="font-display font-extrabold text-4xl sm:text-5xl mb-2 tabular-nums"
                style={{ color: p.accentColor }}
              >
                {r.metric}
              </div>
              <div className="text-sm text-[#6B7280] leading-tight">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHALLENGE & SOLUTION ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Challenge */}
            <div className="group relative p-8 rounded-2xl border border-red-500/15 bg-gradient-to-br from-red-500/[0.05] to-transparent overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-red-500/5 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/25 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h2 className="font-display font-bold text-xl text-white">The Challenge</h2>
                </div>
                <p className="text-[#9CA3AF] leading-relaxed text-[15px]">{p.challenge}</p>
              </div>
            </div>

            {/* Solution */}
            <div className="group relative p-8 rounded-2xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/[0.05] to-transparent overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/5 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display font-bold text-xl text-white">Our Solution</h2>
                </div>
                <p className="text-[#9CA3AF] leading-relaxed text-[15px]">{p.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-2" style={{ color: p.accentColor }}>
            Tech Stack
          </p>
          <h2 className="font-display font-bold text-3xl text-white mb-10">Built With</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {p.stack.map((t, i) => (
              <div
                key={t}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-200"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: p.accentColor }}
                />
                <span className="text-sm text-[#D1D5DB] font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono tracking-[0.2em] uppercase mb-2" style={{ color: p.accentColor }}>
              Delivery Process
            </p>
            <h2 className="font-display font-bold text-4xl text-white">How We Did It</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[27px] top-0 bottom-0 w-px"
              style={{ background: `linear-gradient(to bottom, rgba(${p.accentRgb},0.4), transparent)` }}
            />

            <div className="space-y-6">
              {p.process.map((phase, i) => (
                <div key={phase.phase} className="flex gap-6 group">
                  {/* Step indicator */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-2xl border flex items-center justify-center text-xs font-bold font-mono transition-all duration-200 group-hover:scale-105"
                      style={{
                        borderColor: `rgba(${p.accentRgb},0.3)`,
                        background: `rgba(${p.accentRgb},0.08)`,
                        color: p.accentColor,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-6">
                    <div
                      className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-2 gap-4">
                        <h3 className="font-display font-bold text-white text-lg">{phase.phase}</h3>
                        <span
                          className="text-xs px-2.5 py-1 rounded-full border flex-shrink-0"
                          style={{
                            color: p.accentColor,
                            borderColor: `rgba(${p.accentRgb},0.25)`,
                            background: `rgba(${p.accentRgb},0.06)`,
                          }}
                        >
                          {phase.weeks}
                        </span>
                      </div>
                      <p className="text-sm text-[#9CA3AF] leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      {/* <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(ellipse 80% 50% at 50% 50%, rgba(${p.accentRgb},0.08), transparent)` }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          // Quote icon 
          <div
            className="w-12 h-12 rounded-2xl border mx-auto mb-8 flex items-center justify-center"
            style={{
              borderColor: `rgba(${p.accentRgb},0.3)`,
              background: `rgba(${p.accentRgb},0.08)`,
            }}
          >
            <svg className="w-5 h-5" style={{ color: p.accentColor }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <blockquote className="text-xl sm:text-2xl text-white leading-relaxed mb-10 font-light">
            "{p.testimonial.text}"
          </blockquote>

         //  Author 
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border"
              style={{
                background: `rgba(${p.accentRgb},0.15)`,
                borderColor: `rgba(${p.accentRgb},0.3)`,
                color: p.accentColor,
              }}
            >
              {p.testimonial.initials}
            </div>
            <div className="text-left">
              <div className="font-semibold text-white text-sm">{p.testimonial.author}</div>
              <div className="text-xs text-[#6B7280]">{p.testimonial.role}</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-4" style={{ color: p.accentColor }}>
            Ready to build?
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Want Similar<br />Results?
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-10">
            Let's talk about what we can build for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white font-semibold hover:opacity-90 transition-opacity text-[15px]"
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/[0.12] text-[#9CA3AF] font-semibold hover:text-white hover:border-white/30 transition-all text-[15px]"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}