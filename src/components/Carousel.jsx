import { useState } from 'react'
import { ArrowLeft, ArrowRight } from './Icons'

// Image carousel used across the portfolio pages.
//
// The Figma frame shows the active slide at the container width (1280) with
// the next one peeking past the right edge, so the track is a flex row that
// slides by one slide-width plus the gap. Slides keep their 16:9 ratio and the
// track is clipped by an overflow wrapper that runs to the viewport edge.
export default function Carousel({ images, className = '', label = 'Gallery' }) {
  const [index, setIndex] = useState(0)
  const count = images.length
  const go = (dir) => setIndex((i) => (i + dir + count) % count)

  return (
    <div className={`flex flex-col gap-12 ${className}`} aria-roledescription="carousel" aria-label={label}>
      {/* Track. The wrapper is only clipped on the right so a slide can peek
          out of the container the way it does in the design. */}
      <div className="overflow-hidden">
        <ul
          className="flex gap-8 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(${-index} * (100% + 2rem)))` }}
        >
          {images.map((img, i) => (
            <li
              key={img.src}
              className="w-full shrink-0"
              aria-hidden={i === index ? undefined : true}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-video w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Controls — dots left, arrows right */}
      {count > 1 && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? 'bg-ink' : 'bg-ink/20'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="flex items-center justify-center border border-ink/15 bg-ivy-cream p-3 text-ink transition-colors hover:bg-ivy-cream/70"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="flex items-center justify-center border border-ink/15 bg-ivy-cream p-3 text-ink transition-colors hover:bg-ivy-cream/70"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
