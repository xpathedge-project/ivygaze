import Button from './Button'

export default function CTA() {
  return (
    <section id="contact" className="bg-white px-6 py-16 md:px-16 md:py-28">
      <div className="mx-auto flex max-w-[768px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-6 text-ink">
          <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
            Ready to protect what matters
          </h2>
          <p className="font-sans text-lg leading-[1.5]">
            Start your consultation today. We respond within 24 business hours.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button as="a" href="#contact" variant="green">
            Book Us
          </Button>
          <Button as="a" href="#contact" variant="cream">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
