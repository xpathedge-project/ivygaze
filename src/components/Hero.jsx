import { Link } from 'react-router-dom'
import heroBuilding from '../assets/images/hero-building.png'
import { useContent } from '../context/RegionContext'
import Button from './Button'

export default function Hero() {
  const { hero } = useContent()

  return (
    <section id="home" className="bg-white px-6 py-16 md:px-16 md:pt-28 md:pb-16">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Copy. The headline is intentionally wider than its column (662px vs
            584px) so "Protecting properties." and "Preserving value." each land
            on their own line, exactly as in the Figma header. */}
        <div className="flex w-full flex-col gap-8 lg:w-[584px] lg:shrink-0">
          <div className="flex flex-col gap-6 text-ink">
            <h1 className="font-heading text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[48px] lg:w-[662px] lg:text-h1">
              {hero.heading}
            </h1>
            <p className="font-body text-lg leading-[1.5]">{hero.body}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as={Link} to="/contact" variant="book">
              Book Us
            </Button>
            <Button as={Link} to="/services" variant="cream">
              View Our Services
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:min-w-0 lg:flex-1">
          <img
            src={heroBuilding}
            alt="Modern commercial building under Ivy Gaze care"
            className="h-[320px] w-full rounded-l-[80px] object-cover sm:h-[440px] lg:h-[507px] lg:rounded-l-[178px]"
          />
        </div>
      </div>
    </section>
  )
}
