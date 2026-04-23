import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import MagneticCursor from "../components/MagneticCursor";
import PreloaderGate from "../components/animations/PreloaderGate";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const headingFont = localFont({
  src: "../assets/fonts/Thesignature-Regular.otf",
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gauravpattharearchitects.com"), // Placeholder domain
  title: "Gaurav Patthare Architectss | Calm spaces, drawn with precision",
  description:
    "Architectural portfolio for Gaurav Patthare Architectss. Residential, hospitality, and wellness environments shaped through thoughtful planning, restrained material language, and architectural clarity.",
  keywords: [
    "Gaurav Patthare Architectss",
    "Architecture",
    "Indian Architecture",
    "Residential Architecture",
    "Hospitality Design",
    "Pune Architects",
  ],
  authors: [{ name: "Gaurav Patthare Architectss" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gaurav Patthare Architectss",
    description:
      "Architectural portfolio for Gaurav Patthare Architectss. Residential, hospitality, and wellness environments.",
    url: "https://gauravpattharearchitects.com",
    siteName: "Gaurav Patthare Architectss",
    images: [
      {
        url: "/Logo-02.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Patthare Architects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Patthare Architectss",
    description:
      "Architectural portfolio for Gaurav Patthare Architects. Residential, hospitality, and wellness environments.",
    images: ["/Logo-02.png"],
  },
  icons: {
    icon: "/Logo-02.png",
    apple: "/Logo-02.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalFirm",
  name: "Gaurav Patthare Architectss",
  url: "https://gauravpattharearchitects.com",
  logo: "https://gauravpattharearchitects.com/Logo-02.png",
  description:
    "Residential, hospitality, and wellness environments shaped through thoughtful planning, restrained material language, and architectural clarity.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "gauravpattharearchitects@gmail.com",
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
        className={`${montserrat.variable} ${headingFont.variable} ${cormorant.variable} font-body overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MagneticCursor />
        <PreloaderGate>{children}</PreloaderGate>
      </body>
    </html>
  );
}
