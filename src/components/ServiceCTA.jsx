import { Link } from "react-router-dom";
import Button from "./Button";

// "Ready to protect your property?" — appears twice in the Figma file: as a
// rounded green card at the bottom of the Services page (card), and flat on the
// dark background at the bottom of every sub-service page (card={false}).
export default function ServiceCTA({
  heading,
  body,
  card = false,
  primaryLabel = "Book",
  secondaryLabel,
}) {
  const lines = Array.isArray(body) ? body : [body];

  return (
    <section
      className={
        card
          ? "bg-white px-6 pb-16 md:px-16 md:pb-28"
          : "bg-ivy-green-darkest px-6 pb-16 md:px-16 md:pb-28"
      }
    >
      <div
        className={`mx-auto flex max-w-[1280px] flex-col items-center px-6 py-16 text-center md:px-16 md:pt-24 md:pb-28 ${
          card ? "rounded-[60px] bg-ivy-green" : ""
        }`}
      >
        <div className="flex max-w-[768px] flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-10 text-white md:gap-24">
            <h2 className="max-w-[652px] font-heading text-[32px] font-semibold leading-[1.33] tracking-[-0.01em] sm:text-[40px] lg:text-h2">
              {heading}
            </h2>
            <div className="flex flex-col font-body text-lg leading-[1.5]">
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/contact" variant="book">
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button as={Link} to="/about" variant="ghostWhite">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
