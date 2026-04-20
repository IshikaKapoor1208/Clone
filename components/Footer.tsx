export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-black/8 bg-[linear-gradient(180deg,#fcfbf9_0%,#f4f0e8_100%)] px-4 py-10 md:px-10 md:py-12 lg:px-20"
    >
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <div className="space-y-3">
          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-black/48">
            Gaurav Patharey Architects
          </p>
          <h2 className="max-w-[8ch] text-[2.2rem] leading-[0.92] tracking-[0.03em] md:text-[3rem] lg:text-[4rem]">
            <span className="block whitespace-nowrap">Calm spaces,</span>
            <span className="block">drawn</span>
            <span className="block whitespace-nowrap">with precision.</span>
          </h2>
        </div>

        <div className="grid gap-2 md:justify-items-end">
          <p className="max-w-[28rem] text-sm leading-6 text-black/62 md:text-right md:text-[0.9rem]">
            Residential, hospitality, and wellness environments shaped through
            thoughtful planning, restrained material language, and architectural
            clarity.
          </p>
          <a
            href="mailto:studio@example.com"
            className="text-[0.72rem] uppercase tracking-[0.22em] text-black/58 transition hover:text-black"
          >
            studio@example.com
          </a>
        </div>
      </div>
    </footer>
  );
}
