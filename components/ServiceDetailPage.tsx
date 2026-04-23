"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServiceDetailPage({ service }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <section className="relative px-6 py-16 md:px-12 md:py-24 pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(33,32,32,0.018)_0,rgba(33,32,32,0.018)_1px,transparent_1px,transparent_86px)]" />

        <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Link
              href="/#services"
              className="mb-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-ink/55 transition hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to services
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-ink/45">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 max-w-[8ch] text-6xl font-light leading-[0.88] tracking-[-0.04em] md:text-8xl lg:text-9xl">
              {service.title}
            </h1>
          </div>

          <div className="relative min-h-[62vh] overflow-hidden rounded-[2rem] bg-ink/10 shadow-[0_34px_90px_rgba(33,32,32,0.14)]">
            <Image
              src={service.img || service.heroImage}
              alt={`${service.title} design reference`}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <p className="absolute bottom-8 left-8 max-w-xl text-2xl leading-snug text-white md:text-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {service.highlights?.length ? (
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-3 border-y border-ink/10 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="flex items-center justify-between bg-paper-soft px-5 py-4"
              >
                <span className="text-sm uppercase tracking-[0.2em] text-ink/62">
                  {highlight}
                </span>
                <span className="text-xs text-ink/35">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-10 border-y border-ink/10 py-12 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-ink/45">
            Design Intent
          </p>
          <p className="max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] text-rustic-red md:text-5xl">
            {service.summary}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-2">
          {service.gallery.map((item, index) => (
            <article
              key={item.src}
              className="group overflow-hidden border border-ink/10 bg-paper-soft"
            >
              <div className="relative h-[32rem] overflow-hidden bg-ink/10">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover transition duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="mb-4 text-xs uppercase tracking-[0.24em] text-ink/42">
                  Study 0{index + 1}
                </p>
                <h2 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-ink/62">
                  {item.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-6 rounded-[1.5rem] bg-ink p-6 text-paper md:grid-cols-[0.7fr_1.3fr] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-paper/45">
              Process
            </p>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.03em]">
              How we shape it
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="flex items-center justify-between border border-paper/14 px-5 py-4"
              >
                <span className="text-sm uppercase tracking-[0.18em] text-paper/80">
                  {step}
                </span>
                <ArrowRight className="h-4 w-4 text-paper/55" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
