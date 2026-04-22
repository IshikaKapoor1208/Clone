import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Pinterest", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-black/8 bg-[linear-gradient(180deg,#fcfbf9_0%,#f4f0e8_100%)] px-4 py-10 md:px-10 md:py-12 lg:px-20"
    >
      <div className="grid gap-10 border-b border-black/8 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="space-y-5">
          <Image
            src="/Logo-03.png"
            alt="Gaurav Patharey Architects"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
          />

          <h2 className="max-w-[8ch] text-[2.2rem] leading-[0.92] tracking-[0.03em] md:text-[3rem] lg:text-[4rem]">
            <span className="block whitespace-nowrap text-rustic-red">Calm spaces,</span>
            <span className="block text-rustic-red">drawn</span>
            <span className="block whitespace-nowrap text-[#A34E24]">with precision.</span>
          </h2>

          <p className="max-w-[34rem] text-sm leading-7 text-black/62 md:text-[0.98rem]">
            Residential, hospitality, and wellness environments shaped through
            thoughtful planning, restrained material language, and architectural
            clarity.
          </p>

          <div className="space-y-2 pt-2">
            <a
              href="mailto:gauravpathareyarchitects@gmail.com"
              className="block text-[0.72rem] uppercase tracking-[0.22em] text-black/58 transition hover:text-black"
            >
              gauravpathareyarchitects@gmail.com
            </a>
            <a
              href="tel:+917420857333"
              className="block text-[0.72rem] uppercase tracking-[0.22em] text-black/58 transition hover:text-black"
            >
              +91 7420 857333
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/42">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm uppercase tracking-[0.18em] text-black/60 transition hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/42">
              Social
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-black/60 transition hover:text-black"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-black/40">
          ©2026 Gaurav Patharey Architects. All rights reserved.
        </p>

        <a
          href="#top"
          className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-black/52 transition hover:text-black"
        >
          Back to top
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
