import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoWhite from '../assets/images/logo-white.png'
import Button from './Button'
import RegionSwitcher from './RegionSwitcher'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Project', to: '/#projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const current = `${pathname}${hash}`

  return (
    <header className="sticky top-0 z-50 bg-ivy-green">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-16">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logoWhite}
            alt="Ivy Gaze"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  aria-current={current === link.to ? 'page' : undefined}
                  className={`font-sans text-base transition-colors hover:text-white ${
                    current === link.to ? 'text-white' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <RegionSwitcher />
          <Button as={Link} to="/contact" variant="cream">
            Contact us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-[5px] p-2 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/15 bg-ivy-green px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  aria-current={current === link.to ? 'page' : undefined}
                  className="block py-3 font-sans text-base text-white/90"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <RegionSwitcher className="mb-3" />
          <Button
            as={Link}
            to="/contact"
            variant="cream"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Contact us
          </Button>
        </div>
      )}
    </header>
  )
}
