"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "../lib/data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-paper px-section-px py-section-py text-ink md:px-section-px-md lg:px-section-px-lg"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="text-label-xs text-ink/60 font-semibold shrink-0">
            Services
          </div>
          <h2 className="text-h2-section font-light max-w-3xl text-right md:text-left">
            <span className="text-rustic-red">How GP Architects </span>
            <span className="text-[#A34E24] font-medium italic">Can Help You</span>
          </h2>
        </div>

        {/* Accordion / Cards */}
        <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[600px] xl:h-[700px] w-full">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={`/services/${service.slug}`}
              className="group relative flex-1 hover:flex-[2.5_2.5_0%] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden bg-ink/10"
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
                  <p className="text-paper/90 text-lg md:text-xl xl:text-2xl md:leading-relaxed max-w-md translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 text-paper border-t border-paper/30 pt-6 group-hover:border-paper/60 transition-colors duration-500">
                  <span className="text-xl md:text-2xl xl:text-3xl tracking-wide font-medium">
                    {service.title}
                  </span>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-t border-ink/10 pt-10">
          <div className="text-xl md:text-2xl xl:text-3xl font-light max-w-3xl leading-relaxed">
            Our certified architects guide you through every stage of development <span className="font-medium italic">with expert knowledge and innovative solutions.</span>
          </div>
          <button className="group shrink-0 bg-ink px-8 py-4 text-paper flex items-center gap-3 hover:bg-ink/90 transition-all active:scale-95">
            <span className="font-medium tracking-wide">Get Started</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/20 transform group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
