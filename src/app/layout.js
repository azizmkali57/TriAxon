import "./globals.css";

export const metadata = {
  title: "Best Web & Mobile App Development Company | NexaTech Solutions",
  description:
    "We provide web development, mobile apps, and digital solutions to grow your business.",
  keywords:
    "web development company, mobile app development, IT solutions, software company",
  openGraph: {
    title: "TriAxon Technologies",
    description:
      "Scalable websites, mobile apps, and digital solutions for startups and enterprises worldwide.",
    type: "website",
    url: "https://nexatech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaTech Solutions",
    description: "Top Web & Mobile App Development Company",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaTech Solutions",
  url: "https://nexatech.com",
  logo: "https://nexatech.com/logo.png",
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IT Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nexatech.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </head>

      <body className="bg-dark-950 text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}