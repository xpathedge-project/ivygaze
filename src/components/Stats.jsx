import { Link } from "react-router-dom";
import { useContent } from "../context/RegionContext";
import Button, { TextLink } from "./Button";
import { ChevronRight } from "./Icons";

export default function Stats() {
  const { stats } = useContent();

  const stretchLast = stats.items.length % 2 === 1;

  return (
    <section id="about" className="bg-white px-6 py-16 md:px-16 md:py-28">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:items-stretch lg:gap-20">
        {/* Intro column */}
        <div className="flex w-full max-w-[400px] flex-col justify-between gap-12 lg:flex-1">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-base font-semibold text-ink">Impact</p>
            <div className="flex flex-col gap-6 text-ink">
              <h2 className="font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
                {stats.heading}
              </h2>
              <p className="font-body text-lg leading-[1.5]">{stats.body}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button as={Link} to="/portfolio" variant="cream">
              View our work
            </Button>
            <TextLink as={Link} to="/services" className="text-ink">
              Explore
              <ChevronRight size={24} />
            </TextLink>
          </div>
        </div>

        {/* Stat grid */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:flex-1">
          {stats.items.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-3 border border-ink/15 bg-ivy-cream p-8 ${
                stretchLast && i === stats.items.length - 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <p className="text-right font-sans text-h6 leading-[1.4] tracking-[-0.01em] text-ink">
                {s.label}
              </p>
              <div className="flex flex-col gap-4">
                <p className="text-right font-heading text-[56px] font-bold leading-[1.1] text-ivy-green-dark sm:text-[64px] lg:text-[80px]">
                  {s.value}
                </p>
                <div className="h-px w-full bg-ink/15" />
                <p className="text-right font-sans text-base leading-[1.5] text-ink">
                  {s.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
