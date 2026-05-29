import deliveryTruck from '../assets/entregas-camion.png'
import mailIcon from '../assets/icon-mail-white.png'

function Delivery({ delivery, contact }) {
  return (
    <section className="px-0 py-10 sm:py-12" id="entregas">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-slate-200 shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
          <img
            src={deliveryTruck}
            alt="Camion de entregas de Vemuza Corrugados"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(7,15,32,0.16)_38%,rgba(7,15,32,0.32)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,15,32,0.58)_0%,rgba(7,15,32,0.42)_30%,rgba(7,15,32,0.16)_58%,rgba(7,15,32,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(28,134,218,0.08)_0%,rgba(255,106,0,0.05)_100%)]" />

          <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 text-left text-white">
              <div className="grid min-h-[11rem] max-w-[46rem] content-center gap-4 lg:min-h-[13rem]">
                <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-sky-200">
                  {delivery.eyebrow}
                </span>

                <h2 className="max-w-[14ch] text-4xl font-black leading-none tracking-tight sm:text-5xl">
                  {delivery.titlePrefix}{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, #ffb347 0%, #ff7a18 50%, #ff4d2d 100%)',
                    }}
                  >
                    {delivery.titleAccent}
                  </span>
                </h2>
              </div>

              <div className="grid max-w-[46rem] gap-4">
                <p className="max-w-[68ch] text-lg leading-8 text-white/84">
                  {delivery.description}
                </p>
              </div>

              <div className="grid max-w-[46rem] gap-6">
                {delivery.cards.map((card) => (
                  <div key={card.title} className="grid gap-3">
                    <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-sky-200/90">
                      {card.kicker}
                    </span>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[70ch] text-base leading-8 text-white/78">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 max-sm:flex-col">
                <a
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #ff9a00 0%, #ff5b14 52%, #eb1f34 100%)',
                  }}
                  href="#cotizar"
                >
                  <img src={mailIcon} alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
                  Solicitar cotizacion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery
