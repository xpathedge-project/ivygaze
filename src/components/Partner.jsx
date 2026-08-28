import iconAutomation from '../assets/icons/icon-automation.svg'
import iconLicense from '../assets/icons/icon-license.svg'
import iconDomain from '../assets/icons/icon-domain.svg'
import { TECHNOLOGY } from '../content/content'

export default function Partner() {
  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-28">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
        {/* Section title */}
        <div className="flex max-w-[768px] flex-col items-center gap-6 text-center text-ink">
          <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
            {TECHNOLOGY.heading}
          </h2>
          <p className="font-sans text-lg leading-[1.5]">{TECHNOLOGY.body}</p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[640px_1fr_1fr]">
          {/* Large feature card */}
          <article className="flex flex-col justify-center gap-8 border border-ink/15 bg-ivy-green-muted p-12 text-white">
            <div className="flex flex-col gap-6">
              <img src={iconAutomation} alt="" className="h-12 w-12" />
              <div className="flex flex-col gap-6">
                <h3 className="font-sans text-[32px] leading-[1.2] tracking-[-0.01em] lg:text-h3">
                  {TECHNOLOGY.cards[0].title}
                </h3>
                <p className="font-sans text-base leading-[1.5]">
                  {TECHNOLOGY.cards[0].body}
                </p>
              </div>
            </div>
          </article>

          {/* Compact card */}
          <article className="flex flex-col gap-6 border border-ink/15 bg-ivy-green-muted p-6 text-white">
            <img src={iconLicense} alt="" className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-h5 font-medium leading-[1.4] tracking-[-0.01em]">
                {TECHNOLOGY.cards[1].title}
              </h3>
              <p className="font-sans text-base leading-[1.5]">
                {TECHNOLOGY.cards[1].body}
              </p>
            </div>
          </article>

          {/* Compact card */}
          <article className="flex flex-col gap-6 border border-ink/15 bg-ivy-green-muted p-6 text-white">
            <img src={iconDomain} alt="" className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-h5 font-medium leading-[1.4] tracking-[-0.01em]">
                {TECHNOLOGY.cards[4].title}
              </h3>
              <p className="font-sans text-base leading-[1.5]">
                {TECHNOLOGY.cards[4].body}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
