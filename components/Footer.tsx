"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";

// Custom Instagram Icon as it's missing from the current lucide-react version
const Instagram = ({ size = 24, strokeWidth = 2, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const footerLinks = [
  { label: "Selected Projects", href: "/#projects" },
  { label: "Our Services", href: "/#services" },
  { label: "Studio Identity", href: "/#about" },
  { label: "Get in Touch", href: "/contact" },
];

const socialLinks = [
  { icon: <Instagram size={18} strokeWidth={1.5} />, href: "https://instagram.com", label: "Instagram" },
  { icon: <Mail size={18} strokeWidth={1.5} />, href: "mailto:gauravpattharearchitects@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-black/5 bg-[#fcfbf9] px-6 py-20 md:px-16 md:py-24 overflow-hidden"
    >
      {/* Premium Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="relative mx-auto max-w-[110rem]">
        {/* Top Section: Logo & Navigation */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start mb-24">

          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-12">
            <Image
              src="/Logo-03.png"
              alt="Gaurav Patthare Architects"
              width={200}
              height={60}
              className="h-12 w-auto object-contain brightness-0"
            />

            <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl font-light leading-[1.1] tracking-tight text-black/90">
              <span className="block italic">Calm spaces,</span>
              <span className="block">drawn with <span className="text-rustic-red font-medium">precision.</span></span>
            </h2>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white shadow-sm transition-all hover:scale-110 hover:border-black/20 hover:shadow-md"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-8">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-black/30">
              Navigation
            </p>
            <ul className="space-y-5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[0.95rem] font-light text-black/50 transition-all hover:text-black"
                  >
                    <span className="h-[1px] w-0 bg-rustic-red transition-all duration-300 group-hover:w-4 group-hover:mr-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Studio Info */}
          <div className="lg:col-span-3 space-y-8">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-black/30">
              Studio
            </p>
            <div className="space-y-8">
              <p className="text-[0.9rem] font-light leading-relaxed text-black/60">
                Crafting residential and wellness environments through a
                <span className="text-black font-normal"> restrained material language</span> and thoughtful site-specific planning.
              </p>

              <div>
                <p className="text-[0.6rem] uppercase tracking-widest text-black/40 mb-1">Office</p>
                <p className="text-[0.9rem]">Pune, Maharashtra, India</p>
              </div>

              <a
                href="mailto:gauravpattharearchitects@gmail.com"
                className="group relative inline-flex items-center text-[0.85rem] font-semibold uppercase tracking-widest text-rustic-red"
              >
                Start a conversation
                <span className="ml-3 block h-[1px] w-8 bg-rustic-red/40 transition-all group-hover:w-16 group-hover:bg-rustic-red" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-10 border-t border-black/[0.06] pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-12">
            <p className="text-[0.7rem] tracking-wider text-black/30">
              © 2026 Gaurav Patthare Architects
            </p>
            <Link
              href="/privacy"
              className="text-[0.7rem] tracking-wider text-black/30 transition hover:text-rustic-red"
            >
              Privacy Policy
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40 transition-colors hover:text-black"
          >
            <span className="hidden md:inline">Back to Top</span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-white transition-all group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-black/10">
              <ArrowUp size={16} strokeWidth={1.5} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
