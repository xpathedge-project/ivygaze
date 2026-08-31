import { useState } from "react";
import starsIcon from "../assets/icons/stars.svg";
import { TESTIMONIALS } from "../content/content";
import { ArrowLeft, ArrowRight } from "./Icons";

const PER_PAGE = 2;

function Avatar() {
  return (
    <div
      aria-hidden="true"
      className="h-14 w-14 shrink-0 rounded-full bg-ivy-green/15"
    />
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const items = TESTIMONIALS.items;
  const pages = Math.ceil(items.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = items.slice(start, start + PER_PAGE);

  const go = (dir) => setPage((p) => (p + dir + pages) % pages);

  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-28">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:gap-20">
        {/* Section title */}
        <div className="flex max-w-[768px] flex-col gap-6 text-ink">
          <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
            {TESTIMONIALS.heading}
          </h2>
          <p className="font-sans text-lg leading-[1.5]">{TESTIMONIALS.body}</p>
        </div>

        {/* Slider */}
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {visible.map((t) => (
              <figure
                key={t.quote.slice(0, 32)}
                className="flex flex-col gap-8"
              >
                <img
                  src={starsIcon}
                  alt="5 out of 5 stars"
                  width={116}
                  height={19}
                  className="h-[19px] w-[116px] shrink-0 self-start"
                />
                <blockquote className="font-sans text-h6 leading-[1.4] tracking-[-0.01em] text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-5">
                  <Avatar />
                  <div className="flex flex-col font-sans text-base leading-[1.5] text-ink">
                    <span className="font-semibold">{t.name}</span>
                    <span>{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === page ? "bg-ink" : "bg-ink/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                aria-label="Previous testimonials"
                onClick={() => go(-1)}
                className="flex items-center justify-center border border-ink/15 bg-ivy-cream p-3 text-ink transition-colors hover:bg-ivy-cream/70"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                aria-label="Next testimonials"
                onClick={() => go(1)}
                className="flex items-center justify-center border border-ink/15 bg-ivy-cream p-3 text-ink transition-colors hover:bg-ivy-cream/70"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
