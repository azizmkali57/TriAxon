import Link from "next/link";

export const metadata = {
  title: "Legal — Policies & Terms",
  description:
    "Review our Privacy Policy, Terms of Service, Cookie Policy, and Disclaimer.",
};

const LEGAL_CARDS = [
  {
    href: "/legal/privacy-policy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 2L4 6.5V13c0 5.55 4.26 10.74 10 12 5.74-1.26 10-6.45 10-12V6.5L14 2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M10 13.5l2.5 2.5 5.5-5.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect your personal data across all our services.",
    color: "blue",
    updated: "Jan 2025",
  },
  {
    href: "/legal/terms-of-service",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="5"
          y="3"
          width="18"
          height="22"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 9h10M9 13h10M9 17h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Terms of Service",
    description:
      "The rules, rights, and obligations that govern your use of our platform.",
    color: "purple",
    updated: "Jan 2025",
  },
  {
    href: "/legal/cookie-policy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle
          cx="14"
          cy="14"
          r="10"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="11" cy="11" r="1.5" fill="currentColor" />
        <circle cx="16" cy="9" r="1.2" fill="currentColor" />
        <circle cx="18" cy="15" r="1.5" fill="currentColor" />
        <circle cx="12" cy="17" r="1.2" fill="currentColor" />
        <circle cx="10" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Cookie Policy",
    description:
      "What cookies we use, why we use them, and how you can manage your preferences.",
    color: "teal",
    updated: "Jan 2025",
  },
  {
    href: "/legal/disclaimer",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L2.5 24h23L14 3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 11v5M14 19.5v1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Disclaimer",
    description:
      "Important limitations of liability and the scope of information we provide.",
    color: "blue",
    updated: "Jan 2025",
  },
];

const colorMap = {
  blue: {
    icon: "text-[#2B7EC1]",
    bg: "rgba(43,126,193,0.08)",
    border: "rgba(43,126,193,0.18)",
    glow: "rgba(43,126,193,0.12)",
    hoverBorder: "rgba(43,126,193,0.4)",
  },
  purple: {
    icon: "text-[#6B3FA0]",
    bg: "rgba(107,63,160,0.08)",
    border: "rgba(107,63,160,0.18)",
    glow: "rgba(107,63,160,0.12)",
    hoverBorder: "rgba(107,63,160,0.4)",
  },
  teal: {
    icon: "text-[#00B4C8]",
    bg: "rgba(0,180,200,0.08)",
    border: "rgba(0,180,200,0.18)",
    glow: "rgba(0,180,200,0.12)",
    hoverBorder: "rgba(0,180,200,0.4)",
  },
};

export default function LegalHubPage() {
  return (
    <main
      style={{ backgroundColor: "var(--dark-900)", color: "var(--text-primary)" }}
      className="min-h-screen font-body relative overflow-hidden"
    >
      {/* Background mesh */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(at 20% 20%, rgba(43,126,193,0.07) 0px, transparent 55%), radial-gradient(at 80% 80%, rgba(107,63,160,0.07) 0px, transparent 55%)",
        }}
      />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-[#00B4C8] transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: "var(--text-secondary)" }}>Legal</span>
        </nav>

        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 font-mono tracking-wider uppercase"
            style={{
              background: "rgba(43,126,193,0.08)",
              border: "1px solid rgba(43,126,193,0.2)",
              color: "#2B7EC1",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#00B4C8", boxShadow: "0 0 6px rgba(0,180,200,0.8)" }}
            />
            Legal Center
          </span>
          <h1
            className="font-display text-4xl md:text-5xl font-bold mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            Policies &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2B7EC1 0%, #00B4C8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Legal Terms
            </span>
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Transparency is core to how we operate. Read how we handle your data,
            define our service relationship, and set expectations.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {LEGAL_CARDS.map((card) => {
            const c = colorMap[card.color];
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group block relative rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: "var(--surface-card)",
                  border: `1px solid ${c.border}`,
                }}
              >
                {/* Glow on hover via pseudo — done with inline style trick */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${c.glow}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${c.icon}`}
                    style={{ background: c.bg }}
                  >
                    {card.icon}
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2
                        className="font-display text-lg font-bold mb-2 group-hover:text-white transition-colors"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {card.title}
                      </h2>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {card.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 transition-transform duration-300 group-hover:translate-x-1 ${c.icon}`}
                      style={{ background: c.bg }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 7h8M8 4l3 3-3 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    className="mt-4 pt-4 text-xs font-mono"
                    style={{
                      color: "var(--text-muted)",
                      borderTop: "1px solid var(--surface-border)",
                    }}
                  >
                    Last updated: {card.updated}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Contact note */}
        <div
          className="mt-14 text-center p-6 rounded-2xl"
          style={{
            background: "var(--surface-card)",
            border: "1px solid var(--surface-border)",
          }}
        >
          <p style={{ color: "var(--text-secondary)" }} className="text-sm">
            Have questions about our legal policies?{" "}
            <Link
              href="/contact"
              className="font-medium transition-colors"
              style={{ color: "#00B4C8" }}
            >
              Contact our team →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}