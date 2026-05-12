import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Your Data, Our Responsibility",
  description:
    "Learn how we collect, use, store, and protect your personal information.",
};

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "1.1 Information You Provide Directly",
        body: "When you interact with our services — filling out a contact form, requesting a quote, subscribing to our newsletter, or engaging with us directly — you may provide: full name and email address, phone number and company/organization name, project details, messages, and any other information you choose to share.",
      },
      {
        subtitle: "1.2 Information Collected Automatically",
        body: "When you visit our website, we automatically collect certain technical data including: IP address and approximate geographic location, browser type, version, and operating system, pages visited, time spent, and navigation paths, referral source (how you found our website), and device identifiers.",
      },
      {
        subtitle: "1.3 Cookies & Tracking Technologies",
        body: "We use cookies and similar tracking technologies to enhance your experience. Please refer to our Cookie Policy for a comprehensive breakdown of the cookies we use and how to manage your preferences.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "Primary Purposes",
        body: "We use the information we collect to: respond to your inquiries and provide requested services, send project updates, proposals, and communication relevant to your engagement, improve our website experience, features, and overall service quality, fulfill our contractual and legal obligations, and prevent fraudulent activity and ensure platform security.",
      },
      {
        subtitle: "Marketing Communications",
        body: "With your explicit consent, we may send newsletters, product updates, and promotional materials. You may unsubscribe at any time using the link included in every email or by contacting us directly.",
      },
    ],
  },
  {
    id: "sharing",
    title: "3. How We Share Your Information",
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        body: "We do not sell, trade, rent, or otherwise transfer your personal information to third parties for their own marketing purposes. Period.",
      },
      {
        subtitle: "Trusted Service Providers",
        body: "We may share your data with carefully vetted third-party service providers who assist us in operating our business: hosting and infrastructure providers, email communication platforms, analytics services (e.g. anonymized usage data), and customer support tools. All such providers are contractually bound to protect your data.",
      },
      {
        subtitle: "Legal Requirements",
        body: "We may disclose your information if required by law, court order, or governmental authority, or when we reasonably believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "4. Data Retention",
    content: [
      {
        subtitle: "How Long We Keep Your Data",
        body: "We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Client project data is retained for a minimum of 5 years for accounting and legal compliance. Contact form submissions are retained for 2 years. You may request deletion of your personal data at any time (subject to legal retention requirements).",
      },
    ],
  },
  {
    id: "your-rights",
    title: "5. Your Rights",
    content: [
      {
        subtitle: "Data Subject Rights",
        body: "Depending on your jurisdiction, you may have the following rights regarding your personal data:",
      },
      {
        list: [
          "Right to Access — request a copy of the data we hold about you",
          "Right to Rectification — request correction of inaccurate data",
          "Right to Erasure — request deletion of your personal data ('right to be forgotten')",
          "Right to Restriction — request that we limit how we process your data",
          "Right to Data Portability — receive your data in a structured, machine-readable format",
          "Right to Object — object to certain types of processing, including direct marketing",
          "Right to Withdraw Consent — where processing is based on consent, withdraw it at any time",
        ],
      },
      {
        subtitle: "Exercising Your Rights",
        body: "To exercise any of the above rights, contact us at privacy@yourcompany.com. We will respond within 30 days. We may need to verify your identity before processing your request.",
      },
    ],
  },
  {
    id: "security",
    title: "6. Data Security",
    content: [
      {
        subtitle: "How We Protect Your Data",
        body: "We implement industry-standard security measures to protect your personal information: SSL/TLS encryption for all data in transit, encrypted storage for sensitive information, restricted access controls and role-based permissions, regular security audits and vulnerability assessments, and employee training on data protection best practices. While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet or electronic storage is 100% secure.",
      },
    ],
  },
  {
    id: "third-party",
    title: "7. Third-Party Links & Services",
    content: [
      {
        subtitle: "External Websites",
        body: "Our website may contain links to third-party websites, services, or social media platforms. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party site you visit.",
      },
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      {
        subtitle: "Age Restriction",
        body: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it promptly.",
      },
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: [
      {
        subtitle: "Policy Updates",
        body: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes by updating the 'Last Updated' date at the top of this page and, where appropriate, via email. Your continued use of our services after any changes constitutes your acceptance of the revised policy.",
      },
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      {
        subtitle: "Data Controller",
        body: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out:\n\nEmail: privacy@yourcompany.com\nAddress: Your Company Name, City, State, Country\nPhone: +91 XXXXX XXXXX",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{ backgroundColor: "var(--dark-900)", color: "var(--text-primary)" }}
      className="min-h-screen font-body relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(at 10% 20%, rgba(43,126,193,0.08) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(0,180,200,0.05) 0px, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-[#00B4C8] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/legal" className="hover:text-[#00B4C8] transition-colors">Legal</Link>
          <span>/</span>
          <span style={{ color: "var(--text-secondary)" }}>Privacy Policy</span>
        </nav>

        {/* Header */}
        <div
          className="rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(43,126,193,0.1) 0%, rgba(0,180,200,0.06) 100%)",
            border: "1px solid rgba(43,126,193,0.2)",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #2B7EC1, transparent 70%)",
            }}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(43,126,193,0.15)", color: "#2B7EC1" }}
            >
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L4 6.5V13c0 5.55 4.26 10.74 10 12 5.74-1.26 10-6.45 10-12V6.5L14 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                <path d="M10 13.5l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#2B7EC1" }}>
              Privacy Policy
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Your Data,{" "}
            <span style={{
              background: "linear-gradient(135deg, #2B7EC1 0%, #00B4C8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Our Responsibility
            </span>
          </h1>
          <p style={{ color: "var(--text-secondary)" }} className="text-base leading-relaxed max-w-2xl">
            We are committed to protecting your privacy and being transparent about how your information is handled. This policy explains everything clearly — no legalese.
          </p>
          <div
            className="mt-6 pt-5 flex flex-wrap gap-6 text-xs font-mono"
            style={{ borderTop: "1px solid rgba(43,126,193,0.2)", color: "var(--text-muted)" }}
          >
            <span>Last updated: <strong style={{ color: "var(--text-secondary)" }}>January 1, 2025</strong></span>
            <span>Effective: <strong style={{ color: "var(--text-secondary)" }}>January 1, 2025</strong></span>
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
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: "#2B7EC1" }}
                />
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
                style={{
                  color: "var(--text-primary)",
                  borderBottom: "1px solid var(--surface-border)",
                }}
              >
                {section.title}
              </h2>
              <div className="space-y-5">
                {section.content.map((block, i) => (
                  <div key={i}>
                    {block.subtitle && (
                      <h3
                        className="font-semibold mb-2 text-sm uppercase tracking-wider"
                        style={{ color: "#2B7EC1" }}
                      >
                        {block.subtitle}
                      </h3>
                    )}
                    {block.body && (
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {block.body}
                      </p>
                    )}
                    {block.list && (
                      <ul className="space-y-2 mt-2">
                        {block.list.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-sm"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: "#00B4C8" }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer nav */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--surface-border)" }}
        >
          <Link
            href="/legal"
            className="flex items-center gap-2 text-sm transition-colors hover:text-[#00B4C8]"
            style={{ color: "var(--text-muted)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Legal Center
          </Link>
          <div className="flex gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
            <Link href="/legal/terms-of-service" className="hover:text-[#00B4C8] transition-colors">Terms of Service</Link>
            <Link href="/legal/cookie-policy" className="hover:text-[#00B4C8] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}