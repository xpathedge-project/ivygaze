import Button, { TextLink } from './Button'
import { ChevronRight } from './Icons'

const STATS = [
  {
    label: 'Properties protected',
    value: '500+',
    note: 'Across the United States and Nigeria.',
  },
  {
    label: 'Years in operation',
    value: '12+',
    note: 'Trusted by Government, Corporate, Residential & Diaspora Clients',
  },
  {
    label: 'Client retention rate',
    value: '95%',
    note: 'Long-term partnerships built on performance.',
  },
  {
    label: 'Technology-Enabled Inspections, Reporting & Quality Assurance',
    value: '10K+',
    note: 'Real-time transparency and accountability.',
  },
]

export default function Stats() {
  return (
    <section id="about" className="bg-white px-6 py-16 md:px-16 md:py-28">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:items-stretch lg:gap-20">
        {/* Intro column */}
        <div className="flex w-full max-w-[400px] flex-col justify-between gap-12 lg:flex-1">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-base font-semibold text-ink">Impact</p>
            <div className="flex flex-col gap-6 text-ink">
              <h2 className="font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
                Numbers that speak for themselves
              </h2>
              <p className="font-body text-lg leading-[1.5]">
                Ivy Gaze is an integrated property care, facility management, and
                environmental services partner serving property owners,
                businesses, institutions, and diaspora clients across the United
                States and Nigeria.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button as="a" href="#projects" variant="cream">
              View our work
            </Button>
            <TextLink className="text-ink">
              Explore
              <ChevronRight size={24} />
            </TextLink>
          </div>
        </div>

        {/* Stat grid */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:flex-1">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-3 border border-ink/15 bg-ivy-cream p-8"
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
  )
}
