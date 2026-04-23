import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-black/8 bg-[linear-gradient(180deg,#fcfbf9_0%,#f4f0e8_100%)] px-section-px py-10 md:px-section-px-md lg:px-section-px-lg lg:py-16"
    >
      {/* Centered Logo */}
      <div className="mb-12 flex w-full justify-center">
        <Image
          src="/Logo-03.png"
          alt="Gaurav Patthare Architectss"
          width={240}
          height={72}
          className="h-16 w-auto object-contain md:h-20  transition-all duration-500"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <div className="space-y-4">

          <h2 className="max-w-[8ch] text-[2.2rem] leading-[0.92] tracking-[0.03em] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
            <span className="block whitespace-nowrap text-rustic-red">Calm spaces,</span>
            <span className="block text-rustic-red">drawn</span>
            <span className="block whitespace-nowrap text-[#A34E24]">with precision.</span>
          </h2>
        </div>

        <div className="grid gap-4 text-center md:text-right md:justify-items-end">
          <p className="mx-auto md:mx-0 max-w-[34rem] text-body-base text-black/62">
            Residential, hospitality, and wellness environments shaped through
            thoughtful planning, restrained material language, and architectural
            clarity.
          </p>
          <a
            href="mailto:gauravpattharearchitects@gmail.com"
            className="text-label-xs text-black/58 transition hover:text-black"
          >
            gauravpattharearchitects@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex flex-col gap-4 border-t border-black/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center md:text-left text-label-xs text-black/40">
          ©2026 Gaurav Patthare Architects. All rights reserved.
        </p>
        <nav aria-label="Footer navigation" className="mx-auto md:mx-0">
          <ul className="flex gap-6">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-label-xs text-black/48 transition hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
