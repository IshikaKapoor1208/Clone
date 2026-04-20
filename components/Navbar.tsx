"use client";

import { useState } from "react";

const mainLinks = ["Home", "About", "Services", "Contact"];

const menuColumns = [
  {
    title: "Products",
    links: ["Residences", "Workspaces", "Hospitality", "Wellness"],
  },
  {
    title: "Projects",
    links: ["Selected Work", "Case Studies", "Process", "Archive"],
  },
  {
    title: "Useful Links",
    links: ["Studio", "Journal", "Careers", "Enquiries"],
  },
];
//dndhjs
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed left-4 top-4 z-[70] md:left-10 lg:left-20 h-12 flex items-center">
        <a 
          href="#home" 
          onClick={() => setIsOpen(false)}
          className="font-signature text-2xl tracking-[0.02em] text-[#212020] transition duration-300 hover:text-black/60 md:text-3xl"
        >
          GP Architecture
        </a>
      </div>

      <nav className="fixed right-4 top-4 z-[70] md:right-10 lg:right-20">
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="group grid h-12 w-12 place-items-center border border-black/10 bg-white/96 backdrop-blur-md transition duration-300 hover:bg-white"
        >
          <span className="grid w-6 gap-1.5">
            <span
              className={`h-px w-full bg-[#212020] transition duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`h-px w-full bg-[#212020] transition duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`h-px w-full bg-[#212020] transition duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[60] overflow-y-auto bg-white px-4 py-24 text-[#212020] transition duration-300 md:px-10 lg:px-20 ${isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      >
        <div
          className={`grid min-h-[calc(100vh-12rem)] gap-12 transition duration-300 md:grid-cols-[minmax(0,1.1fr)_1px_minmax(0,0.9fr)] md:gap-12 lg:gap-16 ${isOpen ? "translate-y-0" : "translate-y-4"
            }`}
        >
          <div className="flex items-center">
            <ul className="space-y-5 md:space-y-7">
              {mainLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-5xl font-semibold uppercase leading-none tracking-[0.08em] transition duration-300 hover:translate-x-2 hover:text-black/55 md:text-7xl lg:text-8xl"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden bg-black/10 md:block" />

          <div className="grid content-center gap-10 border-t border-black/10 pt-10 md:border-t-0 md:pt-0">
            <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {menuColumns.map((column) => (
                <div key={column.title} className="space-y-5">
                  <p className="text-[0.72rem] uppercase tracking-[0.32em] text-black/42">
                    {column.title}
                  </p>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                          onClick={() => setIsOpen(false)}
                          className="text-sm uppercase tracking-[0.18em] text-black/62 transition duration-300 hover:text-black md:text-[0.82rem]"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="max-w-[28rem] border-t border-black/10 pt-8">
              <p className="text-sm leading-7 text-black/58 md:text-[0.98rem]">
                Quiet spaces, measured details, and architecture shaped through
                clarity of plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
