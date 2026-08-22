// The "Project Type: … / Client: …" pairs that open a case study.
//
// Label and value share a line and wrap together as one paragraph, which is how
// the Figma copy reads — a two-column dl would hang the overflow under the
// value instead.
export default function ProjectFacts({ facts, className = 'text-lg' }) {
  return (
    <dl className={`flex flex-col gap-2 font-body leading-[1.5] text-ink ${className}`}>
      {facts.map(([label, value]) => (
        <div key={label}>
          <dt className="inline font-semibold">{label}:</dt>{' '}
          <dd className="inline">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
