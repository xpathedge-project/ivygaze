// Reusable button matching the Ivy Gaze design system.
// Corners are square (Radius = 0 across the design tokens).

const VARIANTS = {
  // Hero primary — deep green with glossy inset highlight
  book: 'bg-ivy-book text-white btn-primary-inset',
  // Section primary — brand green
  green: 'bg-ivy-green text-white btn-soft-inset',
  // Soft neutral — warm off-white
  cream: 'bg-ivy-cream text-ink btn-soft-inset',
  // On dark/green backgrounds — translucent white
  ghostWhite:
    'bg-white/10 text-white shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.1)]',
  // Newsletter — gold
  gold: 'bg-ivy-gold text-white',
}

export default function Button({
  variant = 'green',
  children,
  as = 'button',
  className = '',
  ...props
}) {
  const Tag = as
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 font-sans text-base font-medium leading-normal whitespace-nowrap transition-[filter,background-color] duration-200 hover:brightness-[0.97] active:brightness-95 cursor-pointer ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

// A borderless text link with a trailing chevron ("Explore ›")
export function TextLink({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 font-sans text-base font-medium leading-normal transition-opacity duration-200 hover:opacity-70 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
