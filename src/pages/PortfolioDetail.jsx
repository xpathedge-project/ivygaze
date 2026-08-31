import { Link, Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import { ChevronRight } from "../components/Icons";
import { PORTFOLIO } from "../content/content";

function CaseStudy({ project }) {
  return (
    <section
      id={project.slug}
      className="flex scroll-mt-24 flex-col gap-12 lg:gap-16"
    >
      <div className="flex flex-col gap-8">
        <h2 className="font-heading text-[32px] leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-h2">
          {project.title}
        </h2>
        <div className="flex max-w-[1196px] flex-col gap-6 font-body text-lg leading-[1.5] text-ink lg:text-[23px]">
          {project.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-normal">{section.heading}</h3>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>

      <Carousel
        images={project.gallery}
        label={`${project.title} photos`}
        aspect={project.galleryAspect}
      />
    </section>
  );
}

export default function PortfolioDetail() {
  const { slug } = useParams();

  // An unknown slug is a bad URL rather than a page — send it back to the list.
  if (!PORTFOLIO.projects.some((p) => p.slug === slug)) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <main>
      <PageHeader heading={PORTFOLIO.heroHeading} body={PORTFOLIO.heroBody} />

      <article className="bg-white px-6 pt-16 pb-16 md:px-16 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-[1312px]">
          <Link
            to="/portfolio"
            className="mb-6 inline-flex items-center gap-1 font-sans text-sm font-medium text-ivy-green transition-opacity hover:opacity-70"
          >
            <ChevronRight size={16} className="rotate-180" />
            Back to portfolio
          </Link>

          <div className="flex flex-col gap-16 lg:gap-28">
            {PORTFOLIO.projects.map((project) => (
              <CaseStudy key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </article>

      <CTA text="Every project on this page started as a conversation about a problem someone was tired of managing." />
    </main>
  );
}
