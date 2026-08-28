import { Link } from "react-router-dom";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import PageHeader from "../components/PageHeader";
import ProjectFacts from "../components/ProjectFacts";
import VideoPanel from "../components/VideoPanel";
import CTA from "../components/CTA";
import { PORTFOLIO } from "../content/content";

// The feature band under "Our work": the site video bleeding off the left edge
// of the viewport, copy on the right inside the page gutter. Below lg it stacks
// video over copy so the video still reads first.
function ProjectFeature({ project, video }) {
  const intro = project.sections[0];

  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="flex w-full flex-col justify-center gap-8 px-6 py-16 md:px-16 md:py-28 lg:w-1/2">
          <div className="flex flex-col gap-[52px] lg:max-w-[560px]">
            <h2 className="font-heading text-[32px] leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-h2">
              {project.title}
            </h2>
            <div className="flex flex-col gap-6">
              <ProjectFacts
                facts={project.facts}
                className="text-base lg:text-h6"
              />
              {intro && (
                <div className="flex flex-col gap-2">
                  <h3 className="font-body text-base font-semibold leading-[1.5] text-ink lg:text-h6">
                    {intro.heading}
                  </h3>
                  <p className="font-body text-base leading-[1.5] text-ink lg:text-h6">
                    {intro.body}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <Button as={Link} to={`/portfolio/${project.slug}`} variant="cream">
              Details
            </Button>
          </div>
        </div>

        <VideoPanel
          {...video}
          className="h-64 w-full sm:h-96 lg:h-auto lg:min-h-[720px] lg:w-1/2"
        />
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader
        heading={PORTFOLIO.heroHeading}
        body={PORTFOLIO.heroBody}
        headingClassName="max-w-[768px]"
      />

      {/* "Our work" — left-aligned title over the wide carousel */}
      <section className="bg-white px-6 pt-16 pb-16 md:px-16 md:pt-28 md:pb-28">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:gap-20">
          <div className="flex max-w-[509px] flex-col gap-6 text-ink">
            <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
              {PORTFOLIO.workHeading}
            </h2>
            <p className="font-body text-lg leading-[1.4] tracking-[-0.01em] lg:text-h5">
              {PORTFOLIO.workBody}
            </p>
          </div>
          <Carousel images={PORTFOLIO.gallery} label="Selected projects" />
        </div>
      </section>

      <ProjectFeature project={PORTFOLIO.projects[0]} video={PORTFOLIO.video} />

      <CTA
        text="Let's discuss how Ivy Gaze can serve your property and preserve its value."
        primaryLabel="Book"
        secondaryLabel="Contact"
      />
    </main>
  );
}
