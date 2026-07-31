import Button, { TextLink } from '../components/Button'
import CTA from '../components/CTA'
import { ChevronRight } from '../components/Icons'
import imgMission from '../assets/images/about-mission.jpg'
import imgVision from '../assets/images/about-vision.jpg'
import imgExcellence from '../assets/images/about-excellence.jpg'
import imgIntegrity from '../assets/images/about-integrity.jpg'
import imgClients from '../assets/images/about-clients.jpg'
import iconManageAccounts from '../assets/icons/icon-manage-accounts.svg'
import iconHome from '../assets/icons/icon-home.svg'
import iconAddBusiness from '../assets/icons/icon-add-business.svg'
import iconWebAsset from '../assets/icons/icon-web-asset.svg'

const STORY = [
  'Ivy Gaze was founded on a simple but powerful belief: people deserve peace of mind knowing that the places they live, work, invest in, and care about are professionally maintained, protected, and managed.',
  'We don’t see our work as a list of tasks, we see it as a responsibility. We are not simply maintaining properties; we are protecting investments. We are not simply managing facilities; we are enabling productivity. We are not simply cleaning environments; we are improving lives.',
  'Today, Ivy Gaze operates as an integrated property care, facility management, environmental services, waste management, grounds maintenance, and workforce Solutions Company, serving government agencies, corporations, institutions, residential communities, and diaspora property owners across the United States and Nigeria.',
]

const CLIENTS = [
  {
    icon: iconManageAccounts,
    title: 'Government and corporate',
    text: 'Compliance-grade service for institutions that demand accountability',
  },
  {
    icon: iconHome,
    title: 'Residential homeowners',
    text: 'Your home deserves the same care we give to institutions',
  },
  {
    icon: iconAddBusiness,
    title: 'Real estate and business',
    text: 'Developers and managers who need one partner, not many',
  },
  {
    icon: iconWebAsset,
    title: 'Diaspora property owners',
    text: 'Real-time reporting and trustworthy hands on your Nigerian assets',
  },
]

// Shared eyebrow + heading block used by the white sections.
function SectionTitle({ tagline, heading, subheading }) {
  return (
    <div className="flex max-w-[768px] flex-col items-center gap-4 text-center">
      <p className="font-sans text-base font-semibold text-ink">{tagline}</p>
      <div className="flex flex-col gap-6 text-ink">
        <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
          {heading}
        </h2>
        <p className="font-body text-lg leading-[1.5]">{subheading}</p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-ivy-green px-6 pt-16 pb-12 md:px-16 md:pt-28 md:pb-16">
        <div className="mx-auto flex max-w-[768px] flex-col items-center gap-6 text-center text-white">
          <h1 className="font-heading text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[48px] lg:text-h1">
            Built on trust. Driven by standards. Defined by peace of mind.
          </h1>
          <p className="font-body text-lg leading-[1.5]">
            Ivy Gaze is more than a service provider, we are an integrated
            property care, facility management, and environmental services
            partner trusted by property owners, businesses, institutions, and
            diaspora clients across two countries.
          </p>
        </div>
      </section>

      {/* The Ivy Gaze story */}
      <section className="bg-ivy-green px-6 pb-16 md:px-16 md:pb-[148px]">
        <div className="mx-auto max-w-[1280px]">
          <article className="flex flex-col justify-center gap-6 border border-white/20 bg-ivy-green-deep p-8 text-white md:p-12">
            <h2 className="font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
              The Ivy Gaze Story
            </h2>
            <div className="flex flex-col gap-6 font-body text-base leading-[1.5] md:text-h6">
              {STORY.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white px-6 py-16 md:px-16 md:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
          <SectionTitle
            tagline="Purpose"
            heading="Mission & Vision"
            subheading="To serve those who refuse compromise on their properties"
          />

          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Our Mission */}
            <article className="flex flex-col border border-ink/15 sm:flex-row lg:min-h-[369px]">
              <img
                src={imgMission}
                alt="Ivy Gaze crew reviewing a maintenance plan on site"
                className="h-56 w-full object-cover sm:h-auto sm:w-1/2"
              />
              <div className="flex flex-col justify-center gap-6 bg-ivy-cream p-6 sm:w-1/2">
                <h3 className="font-heading text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-ink sm:text-[36px]">
                  Our Mission
                </h3>
                <p className="font-body text-base leading-[1.5] text-ink">
                  To protect and enhance the spaces people depend on by
                  delivering integrated property care, facility management,
                  environmental services, and operational support, through
                  skilled professionals, intelligent systems, and unwavering
                  service excellence.
                </p>
              </div>
            </article>

            {/* Our Vision */}
            <article className="flex flex-col border border-ink/15 sm:flex-row lg:min-h-[369px]">
              <img
                src={imgVision}
                alt="City skyline representing the properties Ivy Gaze protects"
                className="h-56 w-full object-cover sm:h-auto sm:w-1/2"
              />
              <div className="flex flex-col justify-center gap-6 bg-ivy-cream p-6 sm:w-1/2">
                <h3 className="font-heading text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-ink sm:text-[36px]">
                  Our Vision
                </h3>
                <div className="flex flex-col gap-2 text-ink">
                  <p className="font-sans text-h5 leading-[1.4] tracking-[-0.01em]">
                    What drives us forward
                  </p>
                  <p className="font-body text-base leading-[1.5]">
                    Excellence in every service, every time, everywhere
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-6 py-16 md:px-16 md:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
          <SectionTitle
            tagline="Foundation"
            heading="The Values We Work By"
            subheading="Principles that define how we work and who we are"
          />

          <div className="flex w-full flex-col gap-8 lg:flex-row">
            {/* Excellence — tall card with the sculpted image */}
            <article className="flex flex-col border border-ink/15 lg:w-[384px] lg:shrink-0">
              <div className="flex flex-col justify-center gap-6 bg-ivy-cream p-8">
                <h3 className="font-heading text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-ink lg:text-[32px]">
                  Excellence
                </h3>
                <p className="font-body text-base leading-[1.5] text-ink">
                  Pursuing the highest standards in every service, process, and
                  interaction.
                </p>
              </div>
              <img
                src={imgExcellence}
                alt="Ivy Gaze team member shaking hands with a client"
                className="h-64 w-full rounded-bl-[4px] rounded-tr-[120px] rounded-br-[120px] object-cover lg:h-auto lg:min-h-[416px] lg:flex-1 lg:rounded-tr-[190px] lg:rounded-br-[190px]"
              />
            </article>

            <div className="flex flex-col gap-8 lg:flex-1">
              {/* Integrity */}
              <article className="flex flex-col border border-ink/15 sm:flex-row lg:flex-1">
                <div className="flex flex-col justify-center gap-6 bg-ivy-cream p-8 sm:flex-1">
                  <h3 className="font-heading text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-ink lg:text-[32px]">
                    Integrity
                  </h3>
                  <p className="font-body text-base leading-[1.5] text-ink">
                    Acting honestly, ethically, and transparently, trust earned
                    through consistency.
                  </p>
                </div>
                <img
                  src={imgIntegrity}
                  alt="Hands joined together in a team huddle"
                  className="h-64 w-full rounded-tl-[120px] rounded-bl-[120px] object-cover sm:h-auto sm:w-[280px] sm:shrink-0 lg:w-[432px] lg:rounded-tl-[190px] lg:rounded-bl-[190px]"
                />
              </article>

              {/* Ownership + Customer Care */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <article className="flex flex-col justify-center gap-6 border border-ink/15 bg-ivy-cream p-8 lg:min-h-[218px]">
                  <h3 className="font-heading text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-ink lg:text-[32px]">
                    Ownership
                  </h3>
                  <p className="font-body text-base leading-[1.5] text-ink">
                    Taking full responsibility for every property in our care,
                    from first visit to final report.
                  </p>
                </article>
                <article className="flex flex-col justify-center gap-6 border border-ink/15 bg-ivy-cream p-8 lg:min-h-[218px]">
                  <h3 className="font-heading text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-ink lg:text-[32px]">
                    Customer Care
                  </h3>
                  <p className="font-body text-base leading-[1.5] text-ink">
                    Placing clients at the centre of every decision and service
                    experience
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-ivy-green px-6 py-16 md:px-16 md:py-28">
        <div className="mx-auto flex max-w-[768px] flex-col items-center gap-8 text-center text-white">
          <div className="flex flex-col items-center gap-4">
            <p className="font-sans text-base font-semibold">Promise</p>
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
                What we deliver, always
              </h2>
              <p className="font-body text-lg leading-[1.5]">
                “Protecting properties. Preserving value. Delivering peace of
                mind.”
              </p>
            </div>
          </div>
          <Button as="a" href="#contact" variant="ghostWhite">
            Learn More
          </Button>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-white px-6 py-16 md:px-16 md:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
          <SectionTitle
            tagline="Clients"
            heading="Who we serve"
            subheading="From government agencies to families abroad, we handle it all"
          />

          <div className="flex w-full flex-col gap-8 lg:flex-row">
            {/* Client type cards */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-[640px] lg:shrink-0">
              {CLIENTS.map((client) => (
                <article
                  key={client.title}
                  className="flex flex-col gap-4 border border-ink/15 bg-ivy-cream p-6"
                >
                  <img src={client.icon} alt="" className="h-12 w-12" />
                  <div className="flex flex-col gap-2 text-ink">
                    <h3 className="font-heading text-h5 font-medium leading-[1.4] tracking-[-0.01em]">
                      {client.title}
                    </h3>
                    <p className="font-body text-base leading-[1.5]">
                      {client.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Feature card */}
            <article className="flex flex-col border border-ink/15 lg:flex-1">
              <img
                src={imgClients}
                alt="Ivy Gaze account manager in front of a client property"
                className="h-64 w-full object-cover lg:h-[360px]"
              />
              <div className="flex flex-1 flex-col justify-center gap-8 bg-ivy-cream p-8 lg:p-12">
                <div className="flex flex-col gap-6 text-ink">
                  <h3 className="font-heading text-[28px] font-medium leading-[1.4] tracking-[-0.01em] lg:text-[32px]">
                    Who we serve
                  </h3>
                  <p className="font-body text-base leading-[1.5]">
                    From government agencies to families abroad, we handle it
                    all
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <Button as="a" href="#contact" variant="cream">
                    Explore
                  </Button>
                  <TextLink className="text-ink">
                    <ChevronRight size={24} />
                  </TextLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to protect what matters"
        text="Let's discuss how Ivy Gaze can serve your property and preserve its value."
        primaryLabel="Book"
        secondaryLabel="Contact"
      />
    </main>
  )
}
