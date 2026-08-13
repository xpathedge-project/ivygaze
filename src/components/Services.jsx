import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../context/RegionContext'
import Button from './Button'

const TABS = [
  {
    tab: 'Property care for every building',
    heading: 'Cleaning and inspections that protect',
    text: 'Cleaning, maintenance, and inspections that protect your investment.',
    to: '/services/property-care',
  },
  {
    tab: 'Facility management at scale',
    heading: 'Operations that run without friction',
    text: 'End-to-end facility operations, maintenance, and vendor coordination handled by one accountable team.',
    to: '/services/facility-management',
  },
  {
    tab: 'Environmental services that matter',
    heading: 'Sustainable care for healthier spaces',
    text: 'Responsible environmental services that keep your properties clean, safe, and compliant.',
    to: '/services/environmental-services',
  },
  {
    tab: 'Waste management done right',
    heading: 'Waste handled responsibly, every time',
    text: 'Reliable collection, disposal, and recycling programs tailored to your site and schedule.',
    to: '/services/waste-management',
  },
  {
    tab: 'Grounds maintenance with precision',
    heading: 'Landscapes that make an impression',
    text: 'Precision grounds keeping that keeps every exterior polished, green, and welcoming.',
    to: '/services/grounds-maintenance',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const { homeServices } = useContent()
  const pane = TABS[active]

  return (
    <section id="services" className="bg-white px-6 pt-12 pb-16 md:px-16 md:pb-28">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
        {/* Section title */}
        <div className="flex max-w-[768px] flex-col items-center gap-4 text-center">
          <p className="font-sans text-base font-semibold text-ink">Complete</p>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-h2">
              Six services under one roof
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
            {TABS.map((t, i) => {
              const isActive = i === active
              return (
                <button
                  key={t.tab}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`flex flex-1 items-center border-b border-ink/15 px-8 py-6 text-left transition-colors last:border-b-0 ${
                    isActive ? 'bg-white' : 'bg-transparent hover:bg-white/40'
                  }`}
                >
                  <span
                    className={`flex items-center gap-3 font-body text-h5 leading-[1.4] tracking-[-0.01em] ${
                      isActive ? 'text-ink' : 'text-ink/70'
                    }`}
                  >
                    <span
                      className={`h-6 w-1 shrink-0 transition-colors ${
                        isActive ? 'bg-ivy-green' : 'bg-transparent'
                      }`}
                    />
                    {t.tab}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Tab content */}
          <div
            role="tabpanel"
            className="flex min-h-[360px] flex-col justify-center gap-8 p-10 lg:h-[448px] lg:w-[800px] lg:p-16"
          >
            <div className="flex flex-col gap-6 text-ink">
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
  )
}
