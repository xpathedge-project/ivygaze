import iconAutomation from '../assets/icons/icon-automation.svg'
import iconLicense from '../assets/icons/icon-license.svg'
import iconDomain from '../assets/icons/icon-domain.svg'
import { TextLink } from './Button'
import { ChevronRight } from './Icons'

export default function Partner() {
  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-28">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
        {/* Section title */}
        <div className="flex max-w-[768px] flex-col items-center gap-6 text-center text-ink">
          <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
            One partner, six services
          </h2>
          <p className="font-sans text-lg leading-[1.5]">
            Property care, facility management, environmental services, waste
            management, grounds maintenance, and workforce solutions, delivered
            under one accountable brand.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[640px_1fr_1fr]">
          {/* Large feature card */}
          <article className="flex flex-col justify-center gap-8 border border-ink/15 bg-ivy-green-muted p-12 text-white">
            <div className="flex flex-col gap-6">
              <img src={iconAutomation} alt="" className="h-12 w-12" />
              <div className="flex flex-col gap-6">
                <h3 className="font-sans text-[32px] leading-[1.2] tracking-[-0.01em] lg:text-h3">
                  Technology-enabled operations
                </h3>
                <p className="font-sans text-base leading-[1.5]">
                  Real-time reporting and GPS-tracked teams
                </p>
              </div>
            </div>
          </article>

          {/* Compact card */}
          <article className="flex flex-col gap-6 border border-ink/15 bg-ivy-green-muted p-6 text-white">
            <img src={iconLicense} alt="" className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-h5 font-medium leading-[1.4] tracking-[-0.01em]">
                Premium standards, fully certified
              </h3>
              <p className="font-sans text-base leading-[1.5]">
                Licensed, insured, and compliant
              </p>
            </div>
          </article>

          {/* Compact card with action */}
          <article className="flex flex-col justify-between gap-6 border border-ink/15 bg-ivy-green-muted p-6 text-white">
            <div className="flex flex-col gap-6">
              <img src={iconDomain} alt="" className="h-12 w-12" />
              <h3 className="font-sans text-h5 font-medium leading-[1.4] tracking-[-0.01em]">
                Manage properties in Nigeria from anywhere in the world
              </h3>
            </div>
            <TextLink className="justify-end text-white">
              Explore
              <ChevronRight size={24} />
            </TextLink>
          </article>
        </div>
      </div>
    </section>
  )
}
