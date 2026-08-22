import { Link, Navigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import PageHeader from '../components/PageHeader'
import ProjectFacts from '../components/ProjectFacts'
import CTA from '../components/CTA'
import { ChevronRight } from '../components/Icons'
import { PORTFOLIO } from '../content/content'

export default function PortfolioDetail() {
  const { slug } = useParams()
  const project = PORTFOLIO.projects.find((p) => p.slug === slug)

  // An unknown slug is a bad URL rather than a page — send it back to the list.
  if (!project) return <Navigate to="/portfolio" replace />

  // Text blocks with no body are placeholders waiting on client copy; skipping
  // them here keeps a bare heading off the page until the words arrive.
  const blocks = project.blocks.filter(
    (b) => b.type !== 'text' || b.body,
  )

  return (
    <main>
      <PageHeader heading={PORTFOLIO.heroHeading} body={PORTFOLIO.heroBody} />

      <article className="bg-white px-6 pt-16 pb-16 md:px-16 md:pt-20 md:pb-28">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-16 lg:gap-20">
          <header className="flex flex-col gap-6">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1 self-start font-sans text-sm font-medium text-ivy-green transition-opacity hover:opacity-70"
            >
              <ChevronRight size={16} className="rotate-180" />
              Back to portfolio
            </Link>
            <h2 className="font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-h2">
              {project.title}
            </h2>
            <ProjectFacts facts={project.facts} />
          </header>

          {blocks.map((block, i) =>
            block.type === 'gallery' ? (
              <Carousel
                key={`gallery-${i}`}
                images={block.images}
                label={`${project.title} photos`}
              />
            ) : (
              <section key={block.heading} className="flex flex-col gap-6">
                <h3 className="font-heading text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-ink lg:text-h4">
                  {block.heading}
                </h3>
                <p className="max-w-[1196px] font-body text-lg leading-[1.5] text-ink">
                  {block.body}
                </p>
              </section>
            ),
          )}
        </div>
      </article>

      <CTA
        text="Let's discuss how Ivy Gaze can serve your property and preserve its value."
        primaryLabel="Book"
        secondaryLabel="Contact"
      />
    </main>
  )
}
