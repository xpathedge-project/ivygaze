import { Navigate, useParams } from 'react-router-dom'
import ServiceCTA from '../components/ServiceCTA'
import { SERVICE_MEDIA, SERVICE_ORDER } from '../content/content'
import { useContent } from '../context/RegionContext'

// One section of the sub-service body: a 40px heading followed by either a
// bulleted list or a paragraph, depending on which the design uses.
function DetailSection({ section }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[32px] lg:text-h3">
        {section.heading}
      </h2>
      {section.items ? (
        <ul className="ml-9 flex list-disc flex-col gap-1 font-body text-lg leading-[1.4] tracking-[-0.01em] lg:text-h5">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="font-body text-lg leading-[1.4] tracking-[-0.01em] lg:text-h5">
          {section.body}
        </p>
      )}
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const { services } = useContent()
  const service = services[slug]
  const media = SERVICE_MEDIA[slug]

  if (!service || !SERVICE_ORDER.includes(slug)) {
    return <Navigate to="/services" replace />
  }

  return (
    <main className="bg-ivy-green-darkest text-white">
      {/* Page title */}
      <section className="px-6 pt-20 pb-16 md:px-16 md:pt-[208px] md:pb-24">
        <div className="mx-auto flex max-w-[918px] flex-col items-center gap-3 text-center">
          <h1 className="font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
            {service.pageHeading}
          </h1>
          <p className="max-w-[768px] font-body text-lg leading-[1.5]">
            {service.pageIntro}
          </p>
        </div>
      </section>

      {/* Two-up gallery */}
      <section className="px-6 md:px-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-2">
          {media.gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${service.name} work in progress`}
              aria-hidden={i > 0 ? 'true' : undefined}
              className="h-[240px] w-full rounded-[47px] object-cover sm:h-[320px] lg:h-[390px]"
            />
          ))}
        </div>
      </section>

      {/* Body copy */}
      <section className="px-6 py-16 md:px-16 md:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-14">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[32px] lg:text-h3">
              {service.bodyHeading}
            </h2>
            <p className="font-body text-lg leading-[1.4] tracking-[-0.01em] md:text-justify lg:text-h5">
              {service.body}
            </p>
          </div>

          {service.sections.map((section) => (
            <DetailSection key={section.heading} section={section} />
          ))}
        </div>
      </section>

      <ServiceCTA
        heading="Ready to protect your property?"
        body={`Request ${service.name} Information`}
      />
    </main>
  )
}
