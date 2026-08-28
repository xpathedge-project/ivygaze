import { useState } from 'react'
import { Link } from 'react-router-dom'
import contactOffice from '../assets/images/contact-office.png'
import iconCall from '../assets/icons/timeline-call.svg'
import iconCalendar from '../assets/icons/timeline-calendar.svg'
import iconMap from '../assets/icons/timeline-map.svg'
import iconNote from '../assets/icons/timeline-note.svg'
import Button, { TextLink } from '../components/Button'
import {
  Call,
  Check,
  ChevronRight,
  Mail,
  Pin,
  Whatsapp,
} from '../components/Icons'
import {
  COVERAGE,
  DIVISION_OPTIONS,
  FAQS,
  SERVICE_ORDER,
  TIMELINE,
} from '../content/content'
import { useContent } from '../context/RegionContext'

const TIMELINE_ICONS = {
  call: iconCall,
  calendar: iconCalendar,
  map: iconMap,
  note: iconNote,
}

const METHOD_ICONS = { mail: Mail, whatsapp: Whatsapp, call: Call, pin: Pin }

const FIELD_CLASS =
  'w-full border border-white/20 bg-white/10 px-4 py-2 font-sans text-base text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none'

// ---------------------------------------------------------------------------

function BookingForm() {
  const { contact, services } = useContent()
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-[752px] flex-col items-center gap-4 bg-ivy-cream px-6 py-16 text-center">
        <div className="flex size-[104px] items-center justify-center rounded-full bg-ivy-gold">
          <Check size={56} className="text-ivy-green" />
        </div>
        <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-ivy-green-darkest">
          {contact.confirmHeading}
        </h2>
        <p className="max-w-[520px] font-body text-lg leading-[1.5] text-ink">
          {contact.confirmBody}
        </p>
      </div>
    )
  }

  return (
    <form
      className="mx-auto flex w-full max-w-[977px] flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <input
        className={FIELD_CLASS}
        required
        name="name"
        placeholder="Enter your full name"
        aria-label="Full name"
      />
      <input
        className={FIELD_CLASS}
        required
        type="email"
        name="email"
        placeholder="Enter your email address"
        aria-label="Email address"
      />
      <input
        className={FIELD_CLASS}
        type="tel"
        name="phone"
        placeholder="Enter your phone number"
        aria-label="Phone number"
      />
      <input
        className={FIELD_CLASS}
        name="location"
        placeholder="Enter Property address or location"
        aria-label="Property address or location"
      />
      <select
        className={FIELD_CLASS}
        required
        name="division"
        defaultValue=""
        aria-label="Division"
      >
        <option value="" disabled>
          Which division do you need?
        </option>
        {DIVISION_OPTIONS.map((option) => (
          <option key={option} value={option} className="text-ink">
            {option}
          </option>
        ))}
      </select>
      <select
        className={FIELD_CLASS}
        name="service"
        defaultValue=""
        aria-label="Service of interest"
      >
        <option value="" disabled>
          Service of interest (optional)
        </option>
        {SERVICE_ORDER.map((slug) => (
          <option key={slug} value={slug} className="text-ink">
            {services[slug].name}
          </option>
        ))}
      </select>
      <textarea
        className={`${FIELD_CLASS} min-h-[96px] resize-y`}
        name="message"
        placeholder="Tell us about your request....."
        aria-label="Your request"
      />

      <div className="flex flex-col gap-10 pt-4 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <button
          type="submit"
          className="w-[172px] bg-ivy-gold px-6 py-2.5 font-sans text-base font-medium whitespace-nowrap text-ivy-green-darkest transition-[filter] hover:brightness-[0.97] cursor-pointer"
        >
          {contact.submitLabel}
        </button>

        <div className="max-w-[332px] font-body leading-[1.35] text-white">
          <p className="font-heading text-h5 font-semibold text-ivy-gold">
            {contact.hoursHeading}
          </p>
          <p className="mt-6 text-lg">
            {contact.hoursLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-6 text-lg">{contact.hoursNote}</p>
          <p className="mt-6 text-sm">{contact.hoursFinePrint}</p>
        </div>
      </div>
    </form>
  )
}

// ---------------------------------------------------------------------------

function TimelineCard({ step }) {
  return (
    <div className="flex flex-col gap-8 border border-ink/15 bg-ivy-cream p-8">
      <div className="flex flex-col gap-4">
        <img src={TIMELINE_ICONS[step.icon]} alt="" className="size-14" />
        <p className="font-sans text-[32px] leading-[1.2] tracking-[-0.01em] text-ink lg:text-h3">
          {step.when}
        </p>
        <p className="font-body text-2xl leading-[1.3] tracking-[-0.01em] text-ink lg:text-h4">
          {step.title}
        </p>
      </div>
      <p className="font-body text-lg leading-[1.5] text-ink">{step.body}</p>
    </div>
  )
}

// The vertical rail that runs between the alternating timeline cards.
function TimelineRail() {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="w-[3px] flex-1 bg-ink" />
      <div className="my-2 size-[26px] shrink-0 rounded-full bg-ivy-green" />
      <div className="size-[7px] shrink-0 rounded-full bg-ink" />
      <div className="w-[3px] flex-1 bg-ink" />
    </div>
  )
}

// Desktop rows: the section intro fills the first left-hand slot, then the
// cards alternate right / left / right / … down the rail, as in the design.
// Derived from TIMELINE so the deck can add or drop a step without this
// layout needing to be rewritten.
const TIMELINE_ROWS = TIMELINE.map((step, i) => ({
  left: i === 0 ? 'intro' : i % 2 === 1 ? step : null,
  right: i === 0 ? step : i % 2 === 0 ? step : null,
}))

function ProcessTimeline() {
  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="hidden md:grid md:grid-cols-[1fr_128px_1fr] md:gap-x-4">
          {TIMELINE_ROWS.map((row, i) => (
            <div key={i} className="contents">
              <div className="py-4">
                {row.left === 'intro' ? (
                  <TimelineIntro />
                ) : (
                  row.left && <TimelineCard step={row.left} />
                )}
              </div>
              <TimelineRail />
              <div className="py-4">
                {row.right && <TimelineCard step={row.right} />}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: a simple stack. */}
        <div className="flex flex-col gap-8 md:hidden">
          <TimelineIntro />
          {TIMELINE.map((step) => (
            <TimelineCard key={step.when} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineIntro() {
  return (
    <div className="flex max-w-[576px] flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="font-body text-base font-semibold text-ink">Process</p>
        <div className="flex flex-col gap-6 text-ink">
          <h2 className="font-body text-[32px] leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
            What happens next
          </h2>
          <p className="font-body text-lg leading-[1.5]">
            We confirm your request within 24 business hours, then assess,
            propose, deliver and report.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Button as={Link} to="/services" variant="green">
          Learn More
        </Button>
        <TextLink className="text-ink">
          More
          <ChevronRight size={24} />
        </TextLink>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------

// One market in the "Where we serve" comparison: headline facts on the left,
// the service-line checklist on the right. The 469/523 split and the 32px
// gutter come straight from the Figma frame; the two panels are equal height
// so the pair reads as a single band.
function CoverageBlock({ column }) {
  return (
    <section
      aria-label={column.regionName}
      className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[469fr_523fr]"
    >
      <dl className="flex flex-col justify-start gap-[22px] bg-ivy-cream p-8">
        {column.stats.map(([label, value]) => (
          <div key={label} className="flex flex-col gap-[7px]">
            <dt className="font-body text-sm leading-[1.5] text-ink">
              {label}
            </dt>
            <dd className="font-heading text-2xl leading-[1.25] font-semibold tracking-[-0.01em] text-ivy-green-dark">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="flex flex-col justify-start gap-[15px] bg-ivy-cream p-8">
        {column.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check size={20} className="mt-0.5 shrink-0 text-ivy-green" />
            <span className="font-body text-base leading-[1.5] text-ink">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

// ---------------------------------------------------------------------------

export default function Contact() {
  const { contact } = useContent()

  return (
    <main>
      {/* Booking form */}
      <section className="bg-ivy-green-darkest px-6 py-20 md:px-16 md:pt-[182px] md:pb-28">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-16">
          <div className="mx-auto flex max-w-[768px] flex-col items-center gap-6 text-center text-white">
            <p className="font-sans text-2xl font-medium leading-[1.2] tracking-[-0.01em]">
              {contact.tagline}
            </p>
            <h1 className="font-heading text-[32px] font-semibold leading-[1.4] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
              {contact.heading}
            </h1>
            <p className="max-w-[458px] font-body text-lg leading-[1.5]">
              {contact.bodyLead}
              <span className="font-medium text-ivy-gold">
                {contact.bodyHighlight}
              </span>
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      <ProcessTimeline />

      {/* Prefer to talk first? */}
      <section className="bg-white px-6 pb-16 md:px-16 md:pb-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
          <div className="flex max-w-[768px] flex-col items-center gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <p className="font-heading text-base font-semibold text-ink">
                Contact
              </p>
              <div className="flex flex-col gap-6 text-ink">
                <h2 className="font-heading text-[32px] leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
                  Prefer to talk first?
                </h2>
                <p className="font-body text-lg leading-[1.5]">
                  {contact.talkFirst}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Button as="a" href={contact.methods[2].href} variant="green">
                Call
              </Button>
              <a
                href={contact.methods[0].href}
                className="inline-flex items-center gap-2 font-sans text-base font-medium leading-normal text-ink transition-opacity duration-200 hover:opacity-70"
              >
                Email
                <ChevronRight size={24} />
              </a>
            </div>
          </div>
          <img
            src={contactOffice}
            alt="Ivy Gaze team reviewing a site report together"
            className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[699px]"
          />
        </div>
      </section>

      {/* Contact methods */}
      <section className="bg-white px-6 pb-16 md:px-16 md:pb-28">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {contact.methods.map((method) => {
            const Icon = METHOD_ICONS[method.icon]
            return (
              <div key={method.title} className="flex flex-col gap-4">
                <Icon size={32} className="text-ink" />
                <div className="flex flex-col gap-2">
                  <p className="font-body text-h5 leading-[1.4] tracking-[-0.01em] text-ink">
                    {method.title}
                  </p>
                  <p className="font-body text-sm leading-[1.5] text-ink">
                    {method.body}
                  </p>
                </div>
                <a
                  href={method.href}
                  className="font-body text-sm text-ink underline transition-opacity hover:opacity-70"
                >
                  {method.link}
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* Where we serve */}
      <section className="bg-white px-6 pb-16 md:px-16 md:pb-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-20">
          <div className="flex max-w-[768px] flex-col items-center gap-4 text-center">
            <p className="font-heading text-base font-semibold text-ink">
              {COVERAGE.tagline}
            </p>
            <div className="flex flex-col gap-6 text-ink">
              <h2 className="font-heading text-[32px] leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
                {COVERAGE.heading}
              </h2>
              <p className="font-body text-lg leading-[1.5]">{COVERAGE.body}</p>
            </div>
          </div>
          {/* The two markets stack rather than sit side by side — the Figma
              frame gives each one a full-width band 80px apart. */}
          <div className="flex w-full max-w-[1024px] flex-col gap-8 lg:gap-20">
            {COVERAGE.columns.map((column) => (
              <CoverageBlock key={column.region} column={column} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 pb-16 md:px-16 md:pb-28">
        <div className="mx-auto flex max-w-[768px] flex-col gap-12">
          <div className="flex flex-col items-center gap-6 text-center text-ink">
            <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
              FAQs
            </h2>
            <p className="font-body text-lg leading-[1.5]">
              Answers to common questions about booking and our process.
            </p>
          </div>

          <dl className="flex flex-col gap-8">
            {FAQS.map((faq) => (
              <div key={faq.q} className="flex flex-col gap-3">
                <dt className="font-sans text-base font-semibold text-ink">
                  {faq.q}
                </dt>
                <dd className="font-body text-base leading-[1.5] text-ink">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-4 text-ink">
              <h3 className="font-heading text-[28px] leading-[1.2] tracking-[-0.01em] lg:text-h3">
                Still have questions?
              </h3>
              <p className="font-body text-lg leading-[1.5]">
                Contact our team directly for anything we haven&rsquo;t covered.
              </p>
            </div>
            <Button as="a" href={contact.methods[0].href} variant="green">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
