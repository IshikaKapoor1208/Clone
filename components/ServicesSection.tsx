"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Architecture",
    description: "From conceptualization to execution, we craft iconic structures that blend aesthetics, sustainability, and purpose.",
    img: "/service-architecture.png",
  },
  {
    title: "Interior Design",
    description: "Transforming empty spaces into living experiences. We design interiors that perfectly balance form and function.",
    img: "/service-interiors.png",
  },
  {
    title: "Urban Planning",
    description: "Designing the future of our cities with comprehensive master planning and sustainable urban development strategies.",
    img: "/service-urban.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-paper text-ink">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-ink/60 font-semibold shrink-0">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight max-w-3xl text-right md:text-left">
            How GP Architects <span className="font-medium italic">Can Help You</span>
          </h2>
        </div>

        {/* Accordion / Cards */}
        <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[600px] w-full">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex-1 hover:flex-[2.5_2.5_0%] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden rounded-2xl bg-ink/10"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end h-full">
                <div className="overflow-hidden">
                  <p className="text-paper/90 text-lg md:text-xl md:leading-relaxed max-w-md translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-paper border-t border-paper/30 pt-6 group-hover:border-paper/60 transition-colors duration-500">
                  <span className="text-xl md:text-2xl tracking-wide font-medium">{service.title}</span>
                  <div className="bg-paper text-ink w-10 h-10 rounded-full flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-t border-ink/10 pt-10">
          <div className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            Our certified architects guide you through every stage of development <span className="font-medium italic">with expert knowledge and innovative solutions.</span>
          </div>
          <button className="group shrink-0 rounded-full bg-ink text-paper px-8 py-4 flex items-center gap-3 hover:bg-ink/90 transition-all active:scale-95">
            <span className="font-medium tracking-wide">Get Started</span>
            <div className="w-8 h-8 rounded-full bg-paper/20 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
