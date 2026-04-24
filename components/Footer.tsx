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
      className="border-t border-black/8 bg-[linear-gradient(180deg,#fcfbf9_0%,#f4f0e8_100%)] px-6 py-10 md:px-12 md:py-24"
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

      <div className="flex flex-col items-center text-center gap-6 md:grid md:grid-cols-2 md:items-end md:text-left">
        <div className="space-y-4">
          <h2 className="max-w-[8ch] font-signature text-h2-section">
            <span className="block whitespace-nowrap text-rustic-red">Calm spaces,</span>
            <span className="block text-rustic-red">drawn</span>
            <span className="block whitespace-nowrap text-[#A34E24]">with precision.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:text-right md:justify-items-end">
          <p className="max-w-[34rem] text-body-base text-black/62">
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
      <div className="mt-10 flex flex-col items-center text-center gap-4 border-t border-black/8 pt-6 md:flex-row md:items-center md:justify-between md:text-left">
        <p className="text-label-xs text-black/40">
          ©2026 Gaurav Patthare Architects. All rights reserved.
        </p>
        <nav aria-label="Footer navigation">
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
