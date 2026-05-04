"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Selected Projects", href: "/#services" },
  { label: "Our Services", href: "/#services" },
  { label: "Studio Identity", href: "/#about" },
  { label: "Get in Touch", href: "/contact" },
];

const socialLinks = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    href: "https://www.instagram.com/gaurav_patthare_architectss/?__pwa=1#",
    label: "Instagram"
  },
  { icon: <Mail size={18} />, href: "mailto:gauravpattharearchitects@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative border-t mt-12 border-black/5 bg-[#fcfbf9] px-6 py-6 md:px-12 md:py-5 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(33,32,32,0.01)_0,rgba(33,32,32,0.01)_1px,transparent_1px,transparent_100px)]" />

      <div className="relative mx-auto max-w-[96rem]">
        {/* Logo - Middle of Page */}
        <div className="flex justify-center mb-16 border-b border-black/5 pb-10">
          <Image
            src="/Logo-03.png"
            alt="Gaurav Patthare Architects"
            width={240}
            height={70}
            className="h-14 md:h-16 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-16 lg:grid-cols-12 lg:gap-8">

          {/* Brand & Signature Column */}
          <div className="col-span-1 lg:col-span-6 mt-12 space-y-10">

            <h2 className="font-signature text-4xl md:text-5xl xl:text-7xl font-light leading-tight tracking-tight">
              <span className="block text-rustic-red">Calm spaces,</span>
              <span className="flex items-baseline gap-4 text-rustic-red">
                drawn <span className="text-[#A34E24] font-medium italic">with precision.</span>
              </span>
            </h2>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-transparent text-black/60 transition-all hover:border-black/30 hover:bg-black/5 hover:text-black"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="col-span-1 lg:col-span-3 mt-12 lg:mt-0 lg:pt-16">
            <p className="mb-8 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-black/30">
              Navigation
            </p>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group relative inline-block text-body-base text-black/60 transition-colors hover:text-black"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-rustic-red transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Studio Info Column */}
          <div className="hidden lg:block lg:col-span-3 lg:pt-16">
            <p className="mb-8 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-black/30">
              Studio
            </p>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-body-sm text-black/60 leading-relaxed">
                  Residential, hospitality, and wellness environments shaped through
                  thoughtful planning and restrained material language.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[0.68rem] uppercase tracking-widest text-black/40">Studio Location</p>
                <p className="text-body-sm font-medium">Pune, Maharashtra, India</p>
              </div>
              <a
                href="mailto:gauravpattharearchitects@gmail.com"
                className="group inline-flex items-center gap-2 text-body-sm font-medium text-rustic-red transition-all hover:gap-3"
              >
                Let&apos;s talk project
                <span className="h-[1px] w-6 bg-rustic-red/30 transition-all group-hover:w-10 group-hover:bg-rustic-red" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-black/8 pt-2 md:flex-row">
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            <p className="text-label-xs text-black/40">
              ©2026 Gaurav Patthare Architects. All rights reserved.
            </p>
            <Link href="/privacy" className="text-label-xs text-black/40 transition hover:text-black">
              Privacy Policy
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-label-xs uppercase tracking-[0.2em] text-black/50 transition hover:text-black"
          >
            Back to top
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition-all group-hover:border-black/30 group-hover:-translate-y-1">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
