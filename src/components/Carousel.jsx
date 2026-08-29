import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from './Icons'

// Image carousel used across the portfolio pages.
//
// The Figma frame shows the active slide at the container width (1280) with
// the next one peeking past the right edge, so the track is a flex row that
// slides by one slide-width plus the gap. Slides keep their 16:9 ratio and the
// track is clipped by an overflow wrapper that runs to the viewport edge.
export default function Carousel({
  images,
  className = '',
  label = 'Gallery',
  // Slide box ratio. The Figma frames are 1280x720 on /portfolio and the Dallas
  // case study, and 1280x863 on the Midland one.
  aspect = 'aspect-video',
  // Slides advance on their own; hovering or focusing the carousel pauses it
  // so nobody loses a slide mid-read.
  autoPlay = true,
  interval = 4000,
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  // Bumped whenever a countdown starts over, so the bar remounts and sweeps
  // from empty in step with the timer below.
  const [run, setRun] = useState(0)
  const count = images.length
  const go = (dir) => setIndex((i) => (i + dir + count) % count)

  // Pausing freezes the bar where it stands; leaving gives the slide a full
  // wait again rather than the sliver that was left when the pointer arrived.
  const hold = () => setPaused(true)
  const release = () => {
    setPaused(false)
    setRun((n) => n + 1)
  }

  // Readers who ask for less motion keep the manual controls only — no
  // countdown bar and no self-advancing.
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  const autoRun = autoPlay && count > 1 && !reducedMotion

  // The timer owns the advance and the bar mirrors it — both start together on
  // every run, so the sweep always lands exactly when the slide changes.
  // `index` and `run` are dependencies on purpose: choosing a slide by hand, or
  // moving the pointer away, restarts the wait from the top.
  useEffect(() => {
    if (!autoRun || paused) return
    const id = setTimeout(() => go(1), interval)
    return () => clearTimeout(id)
  }, [autoRun, paused, interval, count, index, run])

  return (
    <div
      className={`flex flex-col gap-12 ${className}`}
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={hold}
      onMouseLeave={release}
      onFocus={hold}
      onBlur={release}
    >
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
                className={`${aspect} w-full object-cover`}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Controls — dots left, arrows right */}
      {count > 1 && (
        <div className="flex items-center justify-between">
          {/* Dots. The active one stretches into a pill whose fill sweeps
              across before the carousel advances, so the wait is visible —
              and stalls, dimmed, while the carousel is paused. */}
          <div className="flex items-center gap-2">
            {images.map((img, i) => {
              const active = i === index
              const showBar = active && autoRun
              return (
                <button
                  key={img.src}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => setIndex(i)}
                  className={`h-2 overflow-hidden rounded-full transition-all duration-300 ${
                    showBar ? 'w-10 bg-ink/20' : active ? 'w-2 bg-ink' : 'w-2 bg-ink/20'
                  }`}
                >
                  {showBar && (
                    <span
                      key={`${index}-${run}`}
                      className={`carousel-progress block h-full w-full rounded-full transition-colors duration-200 ${
                        paused ? 'bg-ink/30' : 'bg-ink'
                      }`}
                      style={{
                        animationDuration: `${interval}ms`,
                        animationPlayState: paused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </button>
              )
            })}
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
