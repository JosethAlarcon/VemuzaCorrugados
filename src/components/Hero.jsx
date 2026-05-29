import boxVisual from '../assets/caja-vemuza-corrugados.png'
import whatsappIcon from '../assets/icon-whatsapp-white.png'
import mailIcon from '../assets/icon-mail-white.png'

function Hero({ hero, contact }) {
  return (
    <section className="px-0 pb-8 pt-6 sm:pb-10 sm:pt-10" id="inicio">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.10)]">
          <div className="grid gap-8 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.92)_58%,rgba(255,245,240,0.88)_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:px-10 xl:px-12">
            <div className="grid gap-7">
              <div className="grid gap-4">
                <span className="inline-flex w-fit items-center text-sm font-extrabold uppercase tracking-[0.32em] text-orange-600">
                  {hero.badge}
                </span>

                <h1 className="max-w-[11ch] text-5xl font-black leading-none tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.1rem]">
                  {hero.titlePrefix} <span>{hero.titleAccent}</span> {hero.titleSuffix}
                </h1>

                <p className="max-w-[60ch] text-lg leading-8 text-slate-600">
                  {hero.description}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-sm:flex-col sm:justify-start lg:justify-center">
                <a
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #ff9a00 0%, #ff5b14 52%, #eb1f34 100%)',
                  }}
                  href="#cotizar"
                >
                  <img src={mailIcon} alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
                  Solicitar cotizacion
                </a>
                <a
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #0f4fd6 0%, #1c86da 52%, #67c3ff 100%)',
                  }}
                  href={contact.whatsAppHref}
                >
                  <img src={whatsappIcon} alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
                  WhatsApp directo
                </a>
              </div>
            </div>

            <div className="grid lg:content-start">
              <div className="relative overflow-hidden rounded-[1.9rem] border border-slate-800/10 bg-slate-950 px-6 py-6 text-white shadow-2xl sm:px-7 sm:py-7">
                <div
                  className="pointer-events-none absolute inset-0 opacity-90"
                  style={{
                    background:
                      'radial-gradient(circle at top right, rgba(255,154,0,0.16), transparent 28%), radial-gradient(circle at bottom left, rgba(28,134,218,0.15), transparent 34%)',
                  }}
                />

                <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_180px] lg:items-center">
                  <div className="grid gap-4">
                    <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-white/55">
                      Solucion Vemuza Corrugados
                    </span>
                    <h2 className="max-w-[11ch] text-4xl font-black leading-tight text-white sm:text-5xl">
                      Pedidos a partir de 1.000 unidades.
                    </h2>
                    <p className="max-w-[34ch] text-base leading-9 text-white/68">
                      Presenta tus productos con cajas diseñadas para transmitir confianza desde el primer contacto. Ideales para ventas al por mayor, distribución, despacho y marcas que buscan una presentación más profesional.
                    </p>
                  </div>

                  <div className="relative flex justify-center lg:justify-end">
                    <div className="absolute h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />
                    <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 p-3">
                      <img
                        src={boxVisual}
                        alt="Caja Vemuza Corrugados"
                        className="h-full w-full object-contain drop-shadow-[0_24px_30px_rgba(15,23,42,0.35)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50/70 px-6 py-5 sm:px-8 lg:px-10 xl:px-12">
            <div className="flex justify-center">
              <a
                className="text-sm font-bold text-sky-700 transition hover:text-sky-900"
                href="#cajas"
              >
                Ver tipos de cajas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
