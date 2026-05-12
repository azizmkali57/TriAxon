import Link from "next/link";

export const metadata = {
  title: "Cookie Policy — How We Use Cookies",
  description:
    "Learn about the cookies we use on our website, why we use them, and how you can manage your cookie preferences.",
};

const COOKIE_TYPES = [
  {
    name: "Strictly Necessary Cookies",
    badge: "Always Active",
    badgeColor: "#00B4C8",
    description:
      "These cookies are essential for the website to function. They enable core features such as security, network management, and page access. You cannot opt out of these cookies.",
    examples: [
      { name: "session_id", purpose: "Maintains your session state", duration: "Session" },
      { name: "csrf_token", purpose: "Prevents cross-site request forgery attacks", duration: "Session" },
      { name: "__Secure-next-auth.session-token", purpose: "Authentication session management", duration: "30 days" },
    ],
  },
  {
    name: "Performance & Analytics Cookies",
    badge: "Optional",
    badgeColor: "#2B7EC1",
    description:
      "These cookies help us understand how visitors interact with our website by collecting anonymous usage data. This helps us improve our website and services.",
    examples: [
      { name: "_ga", purpose: "Google Analytics – distinguishes users", duration: "2 years" },
      { name: "_ga_*", purpose: "Google Analytics – session state", duration: "2 years" },
      { name: "_gid", purpose: "Google Analytics – identifies user sessions", duration: "24 hours" },
    ],
  },
  {
    name: "Functional Cookies",
    badge: "Optional",
    badgeColor: "#6B3FA0",
    description:
      "Functional cookies enable enhanced functionality and personalization, such as remembering your preferences, language selection, or region. Disabling these may affect certain features.",
    examples: [
      { name: "theme_pref", purpose: "Stores your theme preference (light/dark)", duration: "1 year" },
      { name: "lang_pref", purpose: "Stores your language preference", duration: "1 year" },
      { name: "cookie_consent", purpose: "Records your cookie consent choice", duration: "1 year" },
    ],
  },
  {
    name: "Marketing & Targeting Cookies",
    badge: "Optional",
    badgeColor: "#2B7EC1",
    description:
      "These cookies may be set by our advertising partners to build a profile of your interests and show you relevant ads on other sites. We do not sell this data.",
    examples: [
      { name: "_fbp", purpose: "Facebook Pixel – tracks conversions", duration: "90 days" },
      { name: "li_fat_id", purpose: "LinkedIn Insight – audience tracking", duration: "30 days" },
    ],
  },
];

const SECTIONS = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies?",
    body: "Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work, improve performance, and provide information to website owners. Cookies contain a small amount of data and are typically stored in your browser.",
  },
  {
    id: "how-we-use",
    title: "2. How We Use Cookies",
    body: "We use cookies to: ensure our website operates correctly and securely, understand how visitors use our website so we can improve it, remember your preferences and settings, and deliver relevant content or advertisements. We never use cookies to collect sensitive personal information without your explicit consent.",
  },
  {
    id: "types-of-cookies",
    title: "3. Types of Cookies We Use",
    isCookieTable: true,
  },
  {
    id: "third-party",
    title: "4. Third-Party Cookies",
    body: "Some cookies on our website are placed by third-party services. These include analytics providers (Google Analytics), advertising platforms (Meta, LinkedIn), and embedded content providers. These third parties have their own privacy and cookie policies, which we encourage you to review. We do not have control over third-party cookies.",
  },
  {
    id: "manage",
    title: "5. Managing Your Cookie Preferences",
    body: "You have several options for managing cookies:",
    list: [
      "Cookie Consent Banner: When you first visit our site, a consent banner allows you to accept or decline optional cookies.",
      "Browser Settings: Most browsers allow you to refuse or delete cookies through their settings. Consult your browser's help documentation for instructions.",
      "Google Analytics Opt-Out: Install the Google Analytics opt-out browser add-on at tools.google.com/dlpage/gaoptout.",
      "Ad Opt-Out Tools: Use the Digital Advertising Alliance (DAA) opt-out tool at optout.aboutads.info.",
    ],
    postBody: "Please note: disabling certain cookies may affect the functionality and experience of our website.",
  },
  {
    id: "do-not-track",
    title: "6. Do Not Track Signals",
    body: "Some browsers offer a 'Do Not Track' (DNT) signal. Our website currently does not alter its behavior based on DNT signals. We continue to monitor this area as standards develop and may update our policy accordingly.",
  },
  {
    id: "changes",
    title: "7. Changes to This Cookie Policy",
    body: "We may update this Cookie Policy periodically to reflect changes in our practices, technology, or legal requirements. We will notify you of significant changes by updating the 'Last Updated' date. Your continued use of our website after any changes constitutes acceptance of the revised policy.",
  },
  {
    id: "contact",
    title: "8. Contact Us",
    body: "If you have any questions about our use of cookies, please contact us:\n\nEmail: privacy@yourcompany.com\nAddress: Your Company Name, City, State, Country",
  },
];

export default function CookiePolicyPage() {
  return (
    <main
      style={{ backgroundColor: "var(--dark-900)", color: "var(--text-primary)" }}
      className="min-h-screen font-body relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(at 10% 30%, rgba(0,180,200,0.07) 0px, transparent 50%), radial-gradient(at 90% 70%, rgba(43,126,193,0.05) 0px, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-[#00B4C8] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/legal" className="hover:text-[#00B4C8] transition-colors">Legal</Link>
          <span>/</span>
          <span style={{ color: "var(--text-secondary)" }}>Cookie Policy</span>
        </nav>

        {/* Header */}
        <div
          className="rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,180,200,0.08) 0%, rgba(43,126,193,0.06) 100%)",
            border: "1px solid rgba(0,180,200,0.2)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,180,200,0.12)", color: "#00B4C8" }}
            >
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="11" cy="11" r="1.5" fill="currentColor"/>
                <circle cx="16" cy="9" r="1.2" fill="currentColor"/>
                <circle cx="18" cy="15" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="17" r="1.2" fill="currentColor"/>
              </svg>
            </div>
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#00B4C8" }}>
              Cookie Policy
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            How We Use{" "}
            <span style={{
              background: "linear-gradient(135deg, #00B4C8 0%, #2B7EC1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Cookies
            </span>
          </h1>
          <p style={{ color: "var(--text-secondary)" }} className="text-base leading-relaxed max-w-2xl">
            We believe in transparency. This policy explains exactly what cookies are placed on your device, why we use them, and how you can take control.
          </p>
          <div
            className="mt-6 pt-5 flex flex-wrap gap-6 text-xs font-mono"
            style={{ borderTop: "1px solid rgba(0,180,200,0.2)", color: "var(--text-muted)" }}
          >
            <span>Last updated: <strong style={{ color: "var(--text-secondary)" }}>January 1, 2025</strong></span>
            <span>Version: <strong style={{ color: "var(--text-secondary)" }}>2.0</strong></span>
          </div>
        </div>

        {/* Table of contents */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{ background: "var(--surface-card)", border: "1px solid var(--surface-border)" }}
        >
          <h2 className="font-display text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Table of Contents
          </h2>
          <div className="grid sm:grid-cols-2 gap-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm transition-colors hover:text-[#00B4C8]"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#00B4C8" }} />
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2
                className="font-display text-xl font-bold mb-5 pb-3"
                style={{ color: "var(--text-primary)", borderBottom: "1px solid var(--surface-border)" }}
              >
                {section.title}
              </h2>

              {section.isCookieTable ? (
                <div className="space-y-6">
                  {COOKIE_TYPES.map((type) => (
                    <div
                      key={type.name}
                      className="rounded-xl overflow-hidden"
                      style={{ border: "1px solid var(--surface-border)", background: "var(--surface-card)" }}
                    >
                      {/* Cookie type header */}
                      <div
                        className="px-5 py-4 flex items-center justify-between"
                        style={{ borderBottom: "1px solid var(--surface-border)", background: "rgba(255,255,255,0.02)" }}
                      >
                        <div>
                          <h3 className="font-display font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                            {type.name}
                          </h3>
                          <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                            {type.description}
                          </p>
                        </div>
                        <span
                          className="ml-4 flex-shrink-0 px-3 py-1 rounded-full text-xs font-mono font-medium"
                          style={{
                            background: `${type.badgeColor}15`,
                            border: `1px solid ${type.badgeColor}30`,
                            color: type.badgeColor,
                          }}
                        >
                          {type.badge}
                        </span>
                      </div>

                      {/* Cookie table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                              {["Cookie Name", "Purpose", "Duration"].map((h) => (
                                <th
                                  key={h}
                                  className="text-left px-5 py-3 font-mono text-xs uppercase tracking-wider"
                                  style={{ color: "var(--text-muted)" }}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {type.examples.map((ex, i) => (
                              <tr
                                key={i}
                                style={{
                                  borderBottom: i < type.examples.length - 1 ? "1px solid var(--surface-border)" : "none",
                                }}
                              >
                                <td className="px-5 py-3 font-mono text-xs" style={{ color: "#00B4C8" }}>{ex.name}</td>
                                <td className="px-5 py-3" style={{ color: "var(--text-secondary)" }}>{ex.purpose}</td>
                                <td className="px-5 py-3 text-xs font-mono" style={{ color: "var(--text-muted)" }}>{ex.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {section.body && (
                    <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {section.body}
                    </p>
                  )}
                  {section.list && (
                    <ul className="space-y-2 mt-2">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00B4C8" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.postBody && (
                    <p
                      className="text-sm p-4 rounded-xl"
                      style={{
                        color: "var(--text-secondary)",
                        background: "rgba(0,180,200,0.06)",
                        border: "1px solid rgba(0,180,200,0.15)",
                      }}
                    >
                      ⚠ {section.postBody}
                    </p>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer nav */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--surface-border)" }}
        >
          <Link href="/legal" className="flex items-center gap-2 text-sm transition-colors hover:text-[#00B4C8]" style={{ color: "var(--text-muted)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Legal Center
          </Link>
          <div className="flex gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
            <Link href="/legal/privacy-policy" className="hover:text-[#00B4C8] transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className="hover:text-[#00B4C8] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </main>
  );
}