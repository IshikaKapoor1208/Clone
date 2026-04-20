import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-body",
});

const headingFont = localFont({
  src: "../assets/fonts/Thesignature-Regular.otf",
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gauravpathareyarchitects.com"), // Placeholder domain
  title: "Gaurav Patharey Architects | Calm spaces, drawn with precision",
  description:
    "Architectural portfolio for Gaurav Patharey Architects. Residential, hospitality, and wellness environments shaped through thoughtful planning, restrained material language, and architectural clarity.",
  keywords: [
    "Gaurav Patharey Architects",
    "Architecture",
    "Indian Architecture",
    "Residential Architecture",
    "Hospitality Design",
    "Pune Architects",
  ],
  authors: [{ name: "Gaurav Patharey Architects" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gaurav Patharey Architects",
    description:
      "Architectural portfolio for Gaurav Patharey Architects. Residential, hospitality, and wellness environments.",
    url: "https://gauravpathareyarchitects.com",
    siteName: "Gaurav Patharey Architects",
    images: [
      {
        url: "/og-image.jpg", // Ensure you add an actual og-image.jpg in the public folder eventually
        width: 1200,
        height: 630,
        alt: "Gaurav Patharey Architects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Patharey Architects",
    description:
      "Architectural portfolio for Gaurav Patharey Architects. Residential, hospitality, and wellness environments.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalFirm",
  name: "Gaurav Patharey Architects",
  url: "https://gauravpathareyarchitects.com",
  logo: "https://gauravpathareyarchitects.com/logo.png",
  description:
    "Residential, hospitality, and wellness environments shaped through thoughtful planning, restrained material language, and architectural clarity.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "studio@example.com",
    contactType: "Customer Support",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${headingFont.variable} font-body overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
