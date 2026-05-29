import whatsappIcon from '../assets/icon-whatsapp-white.png'

function FinalCTA({ cta, contact }) {
  return (
    <section className="px-4 pb-10 sm:px-6 sm:pb-12">
      <div
        className="mx-auto grid w-full max-w-7xl items-center gap-6 rounded-[2rem] px-8 py-8 text-white shadow-2xl sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto]"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(255,154,0,0.22), transparent 35%), linear-gradient(145deg, #0f2348 0%, #0b1730 100%)',
        }}
      >
        <div>
          <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-extrabold uppercase tracking-widest text-white/85">
            {cta.badge}
          </span>
          <h2 className="mt-4 max-w-[12ch] text-4xl font-black leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            {cta.titlePrefix} <span>{cta.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-[52ch] text-white/78">{cta.description}</p>
        </div>

        <div className="flex flex-wrap gap-4 max-sm:flex-col">
          <a
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1c86da 0%, #1f6dff 50%, #0f52d6 100%)',
            }}
            href={contact.whatsAppHref}
          >
            <img src={whatsappIcon} alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
