import { Link } from "react-router-dom";
import servicesHero from "../assets/images/services/serviceheader.png";
import PageHeader from "../components/PageHeader";
import ServiceCTA from "../components/ServiceCTA";
import { ChevronRight } from "../components/Icons";
import {
  DIVISIONS,
  SERVICE_DIVISION,
  SERVICE_MEDIA,
  SERVICE_ORDER,
} from "../content/content";
import { useContent } from "../context/RegionContext";

function ServiceCard({ slug, service, media }) {
  return (
    <article className="flex flex-col">
      <div className="flex flex-1 flex-col justify-center gap-7 bg-ivy-green-deep p-8">
        <div className="flex flex-col gap-4 text-white">
          <p className="font-sans text-sm font-semibold tracking-[0.02em] text-ivy-gold uppercase">
            {DIVISIONS[SERVICE_DIVISION[slug]].name}
          </p>
          <h3 className="font-heading text-[26px] font-semibold leading-[1.2] tracking-[-0.01em]">
            {service.name}
          </h3>
          <p className="font-body text-sm leading-[1.5]">{service.cardBody}</p>
        </div>
        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center gap-1 self-start font-sans text-sm font-medium text-white transition-opacity hover:opacity-70"
        >
          More
          <ChevronRight size={16} />
        </Link>
      </div>
      <img
        src={media.card}
        alt={media.cardAlt}
        className="aspect-4/3 w-full shrink-0 object-cover"
      />
    </article>
  );
}

export default function ServicesPage() {
  const { servicesPage, servicesCta, services } = useContent();

  return (
    <main>
      {/* Green header */}
      <PageHeader
        heading={servicesPage.heroHeading}
        body={servicesPage.heroBody}
        className="pt-20 pb-28 md:pt-[114px] md:pb-[238px]"
        headingClassName="max-w-[566px]"
        bodyClassName="max-w-[522px]"
      />

      {/* "What we do for you" + full-bleed card image */}
      <section className="bg-white px-6 pt-20 pb-16 md:px-16 md:pt-[137px] md:pb-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-4 text-center">
            <p className="font-sans text-base font-semibold text-ink">
              {servicesPage.tagline}
            </p>
            <div className="flex w-full flex-col items-center gap-6 text-ink">
              <h2 className="w-full font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
                {servicesPage.heading}
              </h2>
              <p className="max-w-[444px] font-body text-sm leading-[1.5]">
                {servicesPage.body}
              </p>
            </div>
          </div>
          <img
            src={servicesHero}
            alt="Ivy Gaze supervisor briefing a team at a site orientation"
            className="h-60 w-full border border-ink/15 object-cover object-[50%_25%] sm:h-45 lg:h-112"
          />
        </div>
      </section>

      {/* Six-card grid */}
      <section className="bg-white px-6 pb-16 md:px-16 md:pb-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16 lg:gap-24">
          <div className="flex max-w-[862px] flex-col items-center gap-3 text-center">
            <h2 className="font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] text-ivy-black sm:text-[40px] lg:text-h2">
              {servicesPage.featureHeading}
            </h2>
            <p className="font-body text-lg leading-[1.5] text-ivy-green">
              {servicesPage.featureBody}
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-x-[18px] gap-y-[55px] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_ORDER.map((slug) => (
              <ServiceCard
                key={slug}
                slug={slug}
                service={services[slug]}
                media={SERVICE_MEDIA[slug]}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading={servicesCta.heading}
        body={servicesCta.body}
        card
        secondaryLabel="Learn"
      />
    </main>
  );
}
