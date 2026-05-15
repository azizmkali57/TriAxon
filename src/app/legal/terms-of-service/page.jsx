import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Rules of Engagement",
  description:
    "Read our Terms of Service to understand the rules, rights, and responsibilities governing your use of our services.",
};

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      {
        body: "By accessing or using any service, website, or product provided by us (collectively, 'Services'), you confirm that you have read, understood, and agree to be bound by these Terms of Service ('Terms') and our Privacy Policy. If you do not agree to these Terms, you must immediately discontinue using our Services.",
      },
      {
        body: "These Terms apply to all visitors, users, clients, and others who access or use our Services. We reserve the right to update or modify these Terms at any time, with changes taking effect upon posting.",
      },
    ],
  },
  {
    id: "services",
    title: "2. Description of Services",
    content: [
      {
        body: "We provide digital services including but not limited to: full-stack web development, mobile application development, UI/UX design, digital marketing, cloud infrastructure and DevOps, and AI/ML solutions. Specific deliverables, timelines, and payment terms for client projects are outlined in individual Statements of Work (SOW) or Service Agreements.",
      },
    ],
  },
  {
    id: "accounts",
    title: "3. User Accounts & Registration",
    content: [
      {
        subtitle: "Account Responsibility",
        body: "If you create an account with us, you are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
      },
      {
        subtitle: "Eligibility",
        body: "You must be at least 18 years old and legally capable of entering into binding contracts to use our Services. By using our Services, you represent and warrant that you meet these requirements.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: [
      {
        subtitle: "Our Content",
        body: "All content on our website — including text, graphics, logos, icons, images, audio clips, and software — is owned by or licensed to us and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.",
      },
      {
        subtitle: "Client Work Product",
        body: "Upon full and final payment of all invoices, intellectual property rights for custom-developed work products transfer to the client as specified in the project agreement. We retain the right to showcase completed projects in our portfolio unless otherwise agreed in writing.",
      },
      {
        subtitle: "Third-Party Components",
        body: "Projects may incorporate open-source libraries, frameworks, or third-party services, each subject to their respective licenses. We will disclose any significant third-party components used in deliverables.",
      },
    ],
  },
  {
    id: "payment",
    title: "5. Payment Terms",
    content: [
      {
        subtitle: "Fees & Invoicing",
        body: "Fees for services are as agreed in the project proposal or service agreement. Unless otherwise specified, invoices are due within 15 days of issuance. Late payments are subject to a 1.5% monthly interest charge.",
      },
      {
        subtitle: "Refunds",
        body: "Refund eligibility depends on the nature and stage of the project. Work completed and delivered is generally non-refundable. For subscription or retainer services, unused portions may be refunded on a pro-rata basis at our discretion.",
      },
      {
        subtitle: "Taxes",
        body: "You are responsible for all applicable taxes, duties, and government charges associated with your purchase of our services, excluding taxes on our net income.",
      },
    ],
  },
  {
    id: "prohibited",
    title: "6. Prohibited Activities",
    content: [
      {
        body: "You agree not to engage in any of the following:",
      },
      {
        list: [
          "Violating any applicable law or regulation",
          "Infringing the intellectual property rights of any party",
          "Uploading or transmitting viruses, malware, or other harmful code",
          "Attempting to gain unauthorized access to our systems or networks",
          "Using our Services for any illegal, harmful, or fraudulent purpose",
          "Reverse engineering, decompiling, or disassembling any part of our Services",
          "Circumventing or manipulating our fee structure or payment systems",
          "Engaging in data scraping, mining, or harvesting without written permission",
          "Harassing, threatening, or discriminating against any individual",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    title: "7. Confidentiality",
    content: [
      {
        body: "Both parties agree to maintain the confidentiality of any proprietary or sensitive information exchanged during the course of the engagement. This obligation survives the termination of the service relationship for a period of 3 years, unless otherwise agreed in writing.",
      },
    ],
  },
  {
    id: "warranties",
    title: "8. Warranties & Representations",
    content: [
      {
        subtitle: "Our Warranties",
        body: "We warrant that our Services will be performed in a professional and workmanlike manner, consistent with industry standards. We do not warrant that our Services will be error-free or uninterrupted.",
      },
      {
        subtitle: "Disclaimer",
        body: 'EXCEPT AS EXPRESSLY STATED, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.',
      },
    ],
  },
  {
    id: "liability",
    title: "9. Limitation of Liability",
    content: [
      {
        body: "To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, data, goodwill, or business opportunities — arising from your use of or inability to use our Services, even if we have been advised of the possibility of such damages.",
      },
      {
        body: "Our total aggregate liability for any claim arising from these Terms or our Services shall not exceed the total fees paid by you to us in the 12 months preceding the claim.",
      },
    ],
  },
  {
    id: "termination",
    title: "10. Termination",
    content: [
      {
        body: "Either party may terminate a service engagement with 30 days written notice. We reserve the right to suspend or terminate access to our Services immediately and without notice if you violate these Terms, fail to make required payments, or engage in conduct that is harmful to us, our users, or third parties.",
      },
      {
        body: "Upon termination, all provisions of these Terms that by their nature should survive (including intellectual property, payment obligations, confidentiality, and limitation of liability) shall continue to apply.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing Law & Disputes",
    content: [
      {
        body: "These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. Any disputes arising under these Terms shall first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in [Your City], [Your State/Country].",
      },
    ],
  },
  {
    id: "contact",
    title: "12. Contact",
    content: [
      {
        body: "For questions about these Terms, please contact:\n\nEmail: legal@yourcompany.com\nAddress: Your Company Name, City, State, Country",
      },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main
      style={{ backgroundColor: "var(--dark-900)", color: "var(--text-primary)" }}
      className="min-h-screen font-body relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(at 15% 25%, rgba(107,63,160,0.08) 0px, transparent 50%), radial-gradient(at 85% 75%, rgba(43,126,193,0.05) 0px, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
        {}
        <nav className="mb-10 flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-[#00B4C8] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/legal" className="hover:text-[#00B4C8] transition-colors">Legal</Link>
          <span>/</span>
          <span style={{ color: "var(--text-secondary)" }}>Terms of Service</span>
        </nav>

        {}
        <div
          className="rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(107,63,160,0.1) 0%, rgba(43,126,193,0.06) 100%)",
            border: "1px solid rgba(107,63,160,0.2)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(107,63,160,0.15)", color: "#6B3FA0" }}
            >
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                <rect x="5" y="3" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M9 9h10M9 13h10M9 17h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#6B3FA0" }}>
              Terms of Service
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Rules of{" "}
            <span style={{
              background: "linear-gradient(135deg, #6B3FA0 0%, #2B7EC1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Engagement
            </span>
          </h1>
          <p style={{ color: "var(--text-secondary)" }} className="text-base leading-relaxed max-w-2xl">
            These Terms govern your relationship with us. Please read them carefully before using our services. By engaging with us, you agree to these terms.
          </p>
          <div
            className="mt-6 pt-5 flex flex-wrap gap-6 text-xs font-mono"
            style={{ borderTop: "1px solid rgba(107,63,160,0.2)", color: "var(--text-muted)" }}
          >
            <span>Last updated: <strong style={{ color: "var(--text-secondary)" }}>January 1, 2025</strong></span>
            <span>Effective: <strong style={{ color: "var(--text-secondary)" }}>January 1, 2025</strong></span>
            <span>Version: <strong style={{ color: "var(--text-secondary)" }}>2.0</strong></span>
          </div>
        </div>

        {}
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
                className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm transition-colors hover:text-[#6B3FA0]"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#6B3FA0" }} />
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {}
        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2
                className="font-display text-xl font-bold mb-5 pb-3"
                style={{ color: "var(--text-primary)", borderBottom: "1px solid var(--surface-border)" }}
              >
                {section.title}
              </h2>
              <div className="space-y-5">
                {section.content.map((block, i) => (
                  <div key={i}>
                    {block.subtitle && (
                      <h3 className="font-semibold mb-2 text-sm uppercase tracking-wider" style={{ color: "#6B3FA0" }}>
                        {block.subtitle}
                      </h3>
                    )}
                    {block.body && (
                      <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {block.body}
                      </p>
                    )}
                    {block.list && (
                      <ul className="space-y-2 mt-2">
                        {block.list.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#6B3FA0" }} />
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

        {}
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
            <Link href="/legal/disclaimer" className="hover:text-[#00B4C8] transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </main>
  );
}