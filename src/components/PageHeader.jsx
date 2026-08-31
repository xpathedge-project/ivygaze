export default function PageHeader({
  heading,
  body,
  className = "pt-20 pb-20 md:pt-[112px] md:pb-[112px]",
  headingClassName = "max-w-[768px]",
  bodyClassName = "max-w-[768px]",
}) {
  return (
    <section className={`bg-ivy-green px-6 md:px-16 ${className}`}>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center">
        <div className="flex max-w-[768px] flex-col items-center gap-6 text-center text-white">
          <h1
            className={`font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] sm:text-[40px] lg:text-h2 ${headingClassName}`}
          >
            {heading}
          </h1>
          <p className={`font-body text-lg leading-[1.5] ${bodyClassName}`}>
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
