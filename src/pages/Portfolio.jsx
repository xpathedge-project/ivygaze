import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import PageHeader from '../components/PageHeader'
import ProjectFacts from '../components/ProjectFacts'
import CTA from '../components/CTA'
import { PORTFOLIO } from '../content/content'

// One case study, laid out as a half-and-half band: copy on the left inside the
// page gutter, photo bleeding to the right edge of the viewport. Below lg it
// stacks copy over photo. `flip` alternates the side the photo sits on, so a
// second project reads as a mirror of the first rather than a repeat.
function ProjectFeature({ project, flip }) {
  return (
    <section className="bg-white">
      <div
        className={`flex flex-col ${
          flip ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <div className="flex w-full flex-col justify-center gap-12 px-6 py-16 md:px-16 md:py-28 lg:w-1/2">
          <div className="flex flex-col gap-6 lg:max-w-[560px]">
            <h2 className="font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px]">
              {project.title}
            </h2>
            <ProjectFacts facts={project.facts} className="text-base" />
            {project.blocks
              .filter((b) => b.type === 'text' && b.body)
              .slice(0, 1)
              .map((b) => (
                <div key={b.heading} className="flex flex-col gap-2">
                  <h3 className="font-body text-base font-semibold leading-[1.5] text-ink">
                    {b.heading}
                  </h3>
                  <p className="font-body text-base leading-[1.5] text-ink">
                    {b.body}
                  </p>
                </div>
              ))}
          </div>
          <div>
            <Button as={Link} to={`/portfolio/${project.slug}`} variant="cream">
              Details
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-64 w-full object-cover sm:h-96 lg:h-full lg:min-h-[600px]"
          />
        </div>
      </div>
    </section>
  )
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
            <h2 className="font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
              {PORTFOLIO.workHeading}
            </h2>
            <p className="font-body text-lg leading-[1.5]">
              {PORTFOLIO.workBody}
            </p>
          </div>
          <Carousel images={PORTFOLIO.gallery} label="Selected projects" />
        </div>
      </section>

      {PORTFOLIO.projects.map((project, i) => (
        <ProjectFeature
          key={project.slug}
          project={project}
          flip={i % 2 === 1}
        />
      ))}

      <CTA
        text="Let's discuss how Ivy Gaze can serve your property and preserve its value."
        primaryLabel="Book"
        secondaryLabel="Contact"
      />
    </main>
  )
}
