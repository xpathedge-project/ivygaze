import heroBuilding from '../assets/images/hero-building.png'
import Button from './Button'

export default function Hero() {
  return (
    <section id="home" className="bg-white px-6 py-16 md:px-16 md:py-28">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Copy */}
        <div className="flex w-full max-w-[485px] flex-col gap-8 lg:flex-1">
          <div className="flex flex-col gap-6 text-ink">
            <h1 className="font-heading text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[48px] lg:text-h1">
              Protecting properties. Preserving value. Delivering peace of mind.
            </h1>
            <p className="font-body text-lg leading-[1.5]">
              One partner for all your property needs across the United States
              and Nigeria. Six integrated services, one accountable team.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="a" href="#contact" variant="book">
              Book Us
            </Button>
            <Button as="a" href="#services" variant="cream">
              View Our Services
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[715px] lg:shrink-0">
          <img
            src={heroBuilding}
            alt="Modern commercial building under Ivy Gaze care"
            className="h-[320px] w-full rounded-l-[80px] object-cover sm:h-[440px] lg:h-[589px] lg:rounded-l-[178px]"
          />
        </div>
      </div>
    </section>
  )
}
