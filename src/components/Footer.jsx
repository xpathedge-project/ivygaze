import { useState } from 'react'
import { Link } from 'react-router-dom'
import iconFacebook from '../assets/icons/social-facebook.svg'
import iconInstagram from '../assets/icons/social-instagram.svg'
import iconX from '../assets/icons/social-x.svg'

const SERVICE_LINKS = [
  { label: 'Property Care', to: '/services/property-care' },
  { label: 'Facility Management', to: '/services/facility-management' },
  { label: 'Environmental Services', to: '/services/environmental-services' },
  { label: 'Grounds Maintenance', to: '/services/grounds-maintenance' },
  { label: 'Workforce Solutions', to: '/services/workforce-solutions' },
]
const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/#projects' },
  { label: 'Book Us', to: '/contact' },
  { label: 'Contact', to: '/contact' },
]
const SOCIAL_LINKS = [
  { label: 'Facebook', icon: iconFacebook },
  { label: 'Instagram', icon: iconInstagram },
  { label: 'X', icon: iconX },
]
const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service', 'Cookies Settings']

// Links are either plain labels (not yet routed) or { label, to } pairs.
function LinkColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-sans text-base font-semibold text-ink">{title}</p>
      <ul className="flex flex-col">
        {links.map((l) => {
          const { label, to } = typeof l === 'string' ? { label: l } : l
          const className =
            'block py-2 font-sans text-sm text-ink transition-opacity hover:opacity-70'
          return (
            <li key={label}>
              {to ? (
                <Link to={to} className={className}>
                  {label}
                </Link>
              ) : (
                <a href="#" className={className}>
                  {label}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-20">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-32">
          {/* Newsletter */}
          <div className="flex w-full max-w-[500px] flex-col gap-6">
            <span className="font-heading text-2xl font-bold tracking-tight text-ivy-green">
              IVY GAZE
            </span>
            <p className="font-sans text-base leading-[1.5] text-ink">
              Get updates on service expansions and industry insights.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 border border-ink/15 bg-ivy-cream px-3 py-2 font-sans text-base text-ink placeholder:text-ink/60 focus:outline-none focus:ring-2 focus:ring-ivy-green/40"
                />
                <button
                  type="submit"
                  className="bg-ivy-gold px-6 py-2.5 font-sans text-base font-medium text-white transition-colors hover:brightness-[0.97]"
                >
                  Subscribe
                </button>
              </div>
              <p className="font-sans text-xs leading-[1.5] text-ink">
                We respect your privacy and only send relevant updates.
              </p>
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:flex-1">
            <LinkColumn title="Services" links={SERVICE_LINKS} />
            <LinkColumn title="Company" links={COMPANY_LINKS} />
            <div className="flex flex-col gap-4">
              <p className="font-sans text-base font-semibold text-ink">
                Follow Us
              </p>
              <ul className="flex flex-col">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.label}>
                    <a
                      href="#"
                      className="flex items-center gap-3 py-2 font-sans text-sm text-ink transition-opacity hover:opacity-70"
                    >
                      <img src={s.icon} alt="" className="h-6 w-6" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="flex flex-col gap-8">
          <div className="h-px w-full bg-ink/15" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-sm text-ink">
              © 2026 Ivy Gaze. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {LEGAL_LINKS.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="font-sans text-sm text-ink underline transition-opacity hover:opacity-70"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
