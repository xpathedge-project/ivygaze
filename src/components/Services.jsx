import { useState } from "react";
import { Link } from "react-router-dom";
import { useContent } from "../context/RegionContext";
import { DIVISIONS, SERVICE_DIVISION, SERVICE_ORDER } from "../content/content";
import Button from "./Button";

export default function Services() {
  const [active, setActive] = useState(0);
  const { homeServices, divisions, services } = useContent();

  const tabs = SERVICE_ORDER.map((slug) => ({
    slug,
    label: services[slug].name,
    division: DIVISIONS[SERVICE_DIVISION[slug]].name,
    heading: services[slug].pageHeading,
    text: services[slug].pageIntro,
    to: `/services/${slug}`,
  }));
  const pane = tabs[active];

  return (
    <section
      id="services"
      className="bg-white px-6 pt-12 pb-16 md:px-16 md:pb-28"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
        {/* Section title */}
        <div className="flex max-w-[768px] flex-col items-center gap-4 text-center">
          <p className="font-sans text-base font-semibold text-ink">Complete</p>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-h2">
              {divisions.heading}
            </h2>
            <p className="font-body text-lg leading-[1.5] text-ink">
              {homeServices.body}
            </p>
          </div>
        </div>

        {/* Tabbed card */}
        <div className="flex w-full flex-col border border-ink/15 bg-ivy-cream lg:flex-row">
          {/* Tabs menu */}
          <div
            role="tablist"
            aria-label="Services"
            className="flex w-full flex-col border-b border-ink/15 lg:max-w-[480px] lg:flex-1 lg:border-b-0 lg:border-r"
          >
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.slug}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`flex flex-1 items-center border-b border-ink/15 px-8 py-6 text-left transition-colors last:border-b-0 ${
                    isActive ? "bg-white" : "bg-transparent hover:bg-white/40"
                  }`}
                >
                  <span
                    className={`flex items-center gap-3 font-body text-h6 leading-[1.4] tracking-[-0.01em] lg:text-h5 ${
                      isActive ? "text-ink" : "text-ink/70"
                    }`}
                  >
                    <span
                      className={`h-6 w-1 shrink-0 transition-colors ${
                        isActive ? "bg-ivy-green" : "bg-transparent"
                      }`}
                    />
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div
            role="tabpanel"
            className="flex min-h-[360px] flex-col justify-center gap-8 p-10 lg:h-[520px] lg:w-[800px] lg:p-16"
          >
            <div className="flex flex-col gap-6 text-ink">
              {/* Which division this group belongs to */}
              <p className="font-sans text-base font-semibold text-ivy-green">
                {pane.division}
              </p>
              <h3 className="font-body text-[28px] leading-[1.2] tracking-[-0.01em] lg:text-h3">
                {pane.heading}
              </h3>
              <p className="font-body text-base leading-[1.5]">{pane.text}</p>
            </div>
            <div>
              <Button as={Link} to={pane.to} variant="green">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
