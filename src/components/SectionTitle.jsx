function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
  centered = true,
  plainEyebrow = false,
}) {
  return (
    <div className={`mb-10 grid gap-4 ${centered ? 'justify-items-center text-center' : ''}`}>
      <span
        className={`inline-flex w-fit items-center text-sm font-extrabold uppercase tracking-widest ${
          plainEyebrow
            ? 'px-0 py-0 text-orange-600'
            : 'rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-orange-600'
        }`}
      >
        {eyebrow}
      </span>
      <h2 className="max-w-[13ch] text-4xl font-black leading-none tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        {title} {accent ? <span>{accent}</span> : null}
      </h2>
      {description ? <p className="max-w-[58ch] text-slate-600">{description}</p> : null}
    </div>
  )
}

export default SectionTitle
