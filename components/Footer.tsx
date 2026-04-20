import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper px-6 py-12 md:px-12 md:py-10 lg:px-20 font-sans flex flex-col gap-16 md:gap-24">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 justify-between">
        {/* Left Column */}
        <div className="flex flex-col gap-16 w-full max-w-xl">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl md:text-[1.75rem] font-medium tracking-tight">Subscribe to our Newsletter!</h3>
            <div className="relative border-b border-paper/40 pb-3 group flex items-center justify-between">
              <input
                type="email"
                placeholder="Enter address"
                className="bg-transparent border-none outline-none w-full text-paper placeholder-paper/60 text-base md:text-lg focus:ring-0"
              />
              <button aria-label="Subscribe" className="text-paper/80 group-hover:text-paper transition-colors shrink-0">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-sm">
            <div className="flex flex-col gap-4">
              <span className="text-paper/50 font-medium">Head Office</span>
              <p className="leading-relaxed text-paper/90 font-medium">5 West 37th Street, 12th Floor,<br />New York, NY 10018</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-paper/50 font-medium">Email Us</span>
              <a href="mailto:hello@gparchitects.com" className="hover:text-paper text-paper/90 transition-colors font-medium">hello@gparchitects.com</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-paper/50 font-medium">Call Us</span>
              <a href="tel:+12129949965" className="hover:text-paper text-paper/90 transition-colors font-medium">+1 212 994 9965</a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-row gap-16 md:gap-24 lg:justify-end">
          <div className="flex flex-col gap-5 text-xl md:text-2xl font-medium tracking-tight">
            <a href="#" className="hover:opacity-70 transition-opacity">Search</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Projects</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#" className="hover:opacity-70 transition-opacity">About Us</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Studio Portal</a>
          </div>
          <div className="flex flex-col gap-5 text-sm md:text-base font-medium">
            <a href="#" className="hover:opacity-70 transition-opacity">Facebook</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Youtube</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Linkedin</a>
          </div>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex items-start justify-start overflow-hidden py-4 md:py-8">
        <h1 className="text-[17vw] lg:text-[7.5vw] font-bold tracking-[-0.04em] leading-[0.8] text-paper select-none">
          GP ARCHITECTS
        </h1>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 xl:gap-6 text-[0.7rem] md:text-xs text-paper/60 font-medium tracking-wide border-t border-paper/20 pt-8 flex-wrap">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href="#" className="hover:text-paper transition-colors">Terms</a>
          <a href="#" className="hover:text-paper transition-colors">Privacy policy</a>
          <a href="#" className="hover:text-paper transition-colors">Fair Housing Notice</a>
          <a href="#" className="hover:text-paper transition-colors">Operating Procedure</a>
          <a href="#" className="hover:text-paper transition-colors">Press</a>
          <a href="#" className="hover:text-paper transition-colors">Accessibility</a>
        </div>

        <div className="flex flex-wrap items-center gap-6 xl:gap-8">
          <span>GP Architects Real Estate</span>
          <span>Copyright © 2026</span>
        </div>
      </div>
    </footer>
  );
}
