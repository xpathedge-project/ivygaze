import marketGovernment from '../assets/images/market-government.png'
import marketDiaspora from '../assets/images/market-diaspora.png'
import Button from './Button'

const CARDS = [
  {
    image: marketGovernment,
    alt: 'Field operations professional coordinating on site',
    title: 'Government and Corporate Compliance',
    text: 'Licensed, insured, and certified for federal and institutional procurement. Real-time digital reporting and GPS-tracked operations.',
  },
  {
    image: marketDiaspora,
    alt: 'Managed residential property in Nigeria',
    title: 'Remote Property Management For Diaspora Owners',
    text: 'Manage your Nigerian real estate from anywhere. Transparent reporting, trustworthy teams, and peace of mind across continents.',
  },
]

export default function TwoMarkets() {
  return (
    <section className="bg-ivy-green px-6 pt-16 pb-16 md:px-16 md:pt-28 md:pb-[74px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
        {/* Section title */}
        <div className="flex max-w-[768px] flex-col items-center gap-4 text-center text-white">
          <p className="font-sans text-base font-semibold">Global</p>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
              Built For Two Markets
            </h2>
            <p className="font-body text-lg leading-[1.5]">
              The same standards, adapted to where you are.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden border border-white/20 bg-ivy-green-deep"
            >
              <img
                src={c.image}
                alt={c.alt}
                className="aspect-square w-full rounded-b-[120px] rounded-tr-[104px] object-cover sm:rounded-b-[180px] sm:rounded-tr-[160px] lg:rounded-b-[242px] lg:rounded-tr-[208px]"
              />
              <div className="flex flex-col gap-6 px-6 pt-10 pb-8 text-white sm:px-12 sm:pr-20">
                <div className="flex flex-col gap-6">
                  <h3 className="font-heading text-[28px] font-medium leading-[1.2] tracking-[-0.01em] lg:text-h3">
                    {c.title}
                  </h3>
                  <p className="font-body text-base leading-[1.5] max-w-[420px]">
                    {c.text}
                  </p>
                </div>
                <div>
                  <Button as="a" href="#contact" variant="ghostWhite">
                    Explore
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
