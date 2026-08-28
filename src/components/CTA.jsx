import { Link } from 'react-router-dom'
import { useContent } from '../context/RegionContext'
import Button from './Button'

// The global CTA block from the bottom of most pages (deck §1.4).
//
// Headline and body are the same in both markets; the button pair is not —
// the US asks for a quote or a walkthrough, Nigeria for a facility assessment
// or a waste conversation. Callers can still override any of the four.
export default function CTA({
  title,
  text,
  primaryLabel,
  secondaryLabel,
}) {
  const { closingCta, ctas } = useContent()

  return (
    <section id="contact" className="bg-white px-6 py-16 md:px-16 md:py-28">
      <div className="mx-auto flex max-w-[768px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-6 text-ink">
          <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
            {title ?? closingCta.heading}
          </h2>
          <p className="font-sans text-lg leading-[1.5]">
            {text ?? closingCta.body}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button as={Link} to="/contact" variant="green">
            {primaryLabel ?? ctas.primary}
          </Button>
          <Button as={Link} to="/contact" variant="cream">
            {secondaryLabel ?? ctas.secondary}
          </Button>
        </div>
      </div>
    </section>
  )
}
