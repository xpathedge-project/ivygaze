import { useState } from 'react'
import logoWhite from '../assets/images/logo-white.png'
import Button from './Button'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Project', href: '#projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ivy-green">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-16">
        {/* Logo */}
        <a href="#home" className="flex shrink-0 items-center">
          <img
            src={logoWhite}
            alt="Ivy Gaze"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-sans text-base text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button as="a" href="#contact" variant="cream">
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
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-sans text-base text-white/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button as="a" href="#contact" variant="cream" className="w-full">
            Contact us
          </Button>
        </div>
      )}
    </header>
  )
}
