import { Link } from "react-router-dom";
import Button from "../components/Button";
import CTA from "../components/CTA";
import { Check } from "../components/Icons";
import {
  ABOUT,
  BRAND_PROMISE,
  CLIENT_EXPERIENCE,
  VALUES,
} from "../content/content";
import { useContent } from "../context/RegionContext";
import imgMission from "../assets/images/about-mission.jpg";
import imgVision from "../assets/images/about-vision.jpg";
import imgExcellence from "../assets/images/about-excellence.jpg";
import imgIntegrity from "../assets/images/about-integrity.jpg";
import imgClients from "../assets/images/about-clients.jpg";
import iconManageAccounts from "../assets/icons/icon-manage-accounts.svg";
import iconHome from "../assets/icons/icon-home.svg";
import iconAddBusiness from "../assets/icons/icon-add-business.svg";
import iconWebAsset from "../assets/icons/icon-web-asset.svg";

const CLIENT_ICONS = [
  iconManageAccounts,
  iconAddBusiness,
  iconHome,
  iconWebAsset,
];

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
  );
}

export default function About() {
  const { certifications, clientTypes } = useContent();

  return (
    <main>
      {/* Page header */}
      <section className="bg-ivy-green px-6 pt-16 pb-12 md:px-16 md:pt-28 md:pb-16">
        <div className="mx-auto flex max-w-[768px] flex-col items-center gap-6 text-center text-white">
          <h1 className="font-heading text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[48px] lg:text-h1">
            {ABOUT.heroHeading}
          </h1>
          <p className="font-body text-lg leading-[1.5]">{ABOUT.heroBody}</p>
        </div>
      </section>

      {/* The Ivy Gaze story */}
      <section className="bg-ivy-green px-6 pb-16 md:px-16 md:pb-[148px]">
        <div className="mx-auto max-w-[1280px]">
          <article className="flex flex-col justify-center gap-6 border border-white/20 bg-ivy-green-deep p-8 text-white md:p-12">
            <h2 className="font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
              {ABOUT.storyHeading}
            </h2>
            <div className="flex flex-col gap-6 font-body text-base leading-[1.5] md:text-h6">
              {ABOUT.story.map((paragraph) => (
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
            subheading="One brand, two divisions, and the same standard behind both."
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
                <h3 className="font-heading text-[28px] text-ivy-green font-bold leading-[1.2] tracking-[-0.01em] sm:text-[36px]">
                  Our Mission
                </h3>
                <p className="font-body text-base leading-[1.5] text-ink">
                  {ABOUT.mission}
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
                <h3 className="font-heading text-[28px] text-ivy-green font-bold leading-[1.2] tracking-[-0.01em] sm:text-[36px]">
                  Our Vision
                </h3>
                <p className="font-body text-base leading-[1.5] text-ink">
                  {ABOUT.vision}
                </p>
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
            subheading="Reliability and Innovation sit alongside these four; every value below is measured by what it changes on site."
          />

          <div className="flex w-full flex-col gap-8 lg:flex-row">
            <article className="flex flex-col border border-ink/15 lg:w-[384px] lg:shrink-0">
              <div className="flex flex-col justify-center gap-6 bg-ivy-cream p-8">
                <h3 className="font-heading text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-ink lg:text-[32px]">
                  {VALUES[0].name}
                </h3>
                <p className="font-body text-base leading-[1.5] text-ink">
                  {VALUES[0].body}
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
                    {VALUES[1].name}
                  </h3>
                  <p className="font-body text-base leading-[1.5] text-ink">
                    {VALUES[1].body}
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
                    {VALUES[2].name}
                  </h3>
                  <p className="font-body text-base leading-[1.5] text-ink">
                    {VALUES[2].body}
                  </p>
                </article>
                <article className="flex flex-col justify-center gap-6 border border-ink/15 bg-ivy-cream p-8 lg:min-h-[218px]">
                  <h3 className="font-heading text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-ink lg:text-[32px]">
                    {VALUES[5].name}
                  </h3>
                  <p className="font-body text-base leading-[1.5] text-ink">
                    {VALUES[5].body}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-ivy-green px-6 py-16 md:px-16 md:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 text-white lg:gap-20">
          <div className="flex max-w-[768px] flex-col items-center gap-4 text-center">
            <p className="font-sans text-base font-semibold">Promise</p>
            <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
              {BRAND_PROMISE.heading}
            </h2>
            <p className="font-body text-lg leading-[1.5]">
              {BRAND_PROMISE.intro}
            </p>
          </div>
          <ul className="grid w-full max-w-[1024px] grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
            {BRAND_PROMISE.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={20} className="mt-1 shrink-0 text-ivy-gold" />
                <span className="font-body text-base leading-[1.5]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <Button as={Link} to="/contact" variant="ghostWhite">
            Talk to Our Team
          </Button>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 md:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
          <SectionTitle
            tagline="Standards"
            heading={certifications.heading}
            subheading={certifications.body}
          />
          <ul className="grid w-full max-w-[1024px] grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
            {certifications.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={20} className="mt-1 shrink-0 text-ivy-green" />
                <span className="font-body text-base leading-[1.5] text-ink">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we want every client to feel — deck §3.6 */}
      <section className="bg-white px-6 pb-16 md:px-16 md:pb-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
          <SectionTitle
            tagline="Experience"
            heading={CLIENT_EXPERIENCE.heading}
            subheading="Five feelings, and the concrete thing we do to create each one."
          />
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENT_EXPERIENCE.rows.map(([feeling, meaning, how]) => (
              <article
                key={feeling}
                className="flex flex-col gap-3 border border-ink/15 bg-ivy-cream p-8"
              >
                <h3 className="font-heading text-h5 font-medium leading-[1.4] tracking-[-0.01em] text-ivy-green">
                  {feeling}
                </h3>
                <p className="font-body text-base leading-[1.5] text-ink">
                  {meaning}
                </p>
                <p className="font-body text-sm leading-[1.5] text-ink/70">
                  {how}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-white px-6 py-16 md:px-16 md:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
          <SectionTitle
            tagline="Clients"
            heading="Who we serve"
            subheading="From procurement officers running competitive bids to owners protecting a property they cannot personally check on."
          />

          <div className="flex w-full flex-col gap-8 lg:flex-row">
            {/* Client type cards */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-[640px] lg:shrink-0">
              {clientTypes.map((client, i) => (
                <article
                  key={client.title}
                  className="flex flex-col gap-4 border border-ink/15 bg-ivy-cream p-6"
                >
                  <img src={CLIENT_ICONS[i]} alt="" className="h-12 w-12" />
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
                    Trusted by the People Who Can&rsquo;t Afford to Take Chances
                  </h3>
                  <p className="font-body text-base leading-[1.5]">
                    Tell us your sector and what you are dealing with. We will
                    point you at the right division and the right conversation.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <Button as={Link} to="/contact" variant="cream">
                    Talk to Our Team
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTA
        title="Let's Talk About What Your Property Deserves"
        text="Whether you manage a single facility, a portfolio across two continents, or a waste stream that should be doing more than going to landfill: Ivy Gaze has the people, the systems and the standards to become your most trusted partner."
      />
    </main>
  );
}
