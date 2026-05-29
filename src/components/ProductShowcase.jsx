import catalogHeaderBox from '../assets/caja-vemuza-corrugados.png'
import cajaConvencional from '../assets/catalogo-caja-convencional.png'
import cajaTapaFondo from '../assets/catalogo-caja-tapa-fondo.png'
import cajaBandeja from '../assets/catalogo-caja-bandeja.png'
import cajaAutoarmable from '../assets/catalogo-caja-autoarmable.png'
import cajaVinos from '../assets/catalogo-caja-vinos.png'
import cajaPizza from '../assets/catalogo-caja-pizza.png'
import iconoProteccion from '../assets/catalogo-icono-proteccion.png'
import iconoMateriales from '../assets/catalogo-icono-materiales.png'
import iconoEntregas from '../assets/catalogo-icono-entregas.png'
import iconoPersonalizacion from '../assets/catalogo-icono-personalizacion.png'
import iconoAsesoria from '../assets/catalogo-icono-asesoria.png'

const productImages = {
  convencional: cajaConvencional,
  tapaFondo: cajaTapaFondo,
  bandeja: cajaBandeja,
  autoarmable: cajaAutoarmable,
  vinos: cajaVinos,
  pizza: cajaPizza,
}

const benefitImages = {
  proteccion: iconoProteccion,
  materiales: iconoMateriales,
  entregas: iconoEntregas,
  personalizacion: iconoPersonalizacion,
  asesoria: iconoAsesoria,
}

function ProductShowcase({ products, catalogBenefits }) {
  return (
    <section className="px-0 py-10 sm:py-12" id="cajas">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center xl:grid-cols-[380px_minmax(0,1fr)]">
            <div className="flex items-center justify-center rounded-[1.8rem] border border-slate-200 bg-white/90 px-4 py-4">
              <img
                src={catalogHeaderBox}
                alt="Caja Vemuza Corrugados"
                className="h-auto w-full max-w-[280px] object-contain xl:max-w-[340px]"
              />
            </div>

            <div className="grid gap-3">
              <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-sky-600">
                Soluciones de embalaje
              </span>
              <h2 className="max-w-[11ch] text-4xl font-black leading-none tracking-tight text-slate-950 sm:text-5xl lg:max-w-[12ch] lg:text-6xl">
                Cajas de carton para <span>proteger y potenciar</span> tu negocio
              </h2>
              <p className="max-w-[48ch] text-lg leading-8 text-slate-600">
                Cajas de carton diseñadas para proteger, optimizar y potenciar tu operación
                comercial con una presentación profesional.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group grid overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)]"
              >
                <div className="grid gap-5 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-3xl bg-sky-50">
                      <span className="text-lg font-black text-sky-700">{product.index}</span>
                    </div>
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">
                      {product.index}
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_160px] lg:items-center">
                    <div className="grid gap-3">
                      <h3 className="max-w-[11ch] text-[1.85rem] font-black leading-tight text-slate-950">
                        {product.name}
                      </h3>
                      <p className="text-base leading-8 text-slate-600">{product.description}</p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                      <img
                        src={productImages[product.imageKey]}
                        alt={product.name}
                        className="h-auto max-h-[152px] w-full max-w-[170px] object-contain transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-slate-200 bg-slate-50/80 px-5 py-4">
                  <span className="text-sm font-bold text-sky-700">{product.cta}</span>
                  <span className="text-lg font-black text-sky-700">{product.index}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 md:grid-cols-2 xl:grid-cols-5">
            {catalogBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-center gap-4 rounded-[1.4rem] bg-white/80 px-4 py-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50">
                  <img
                    src={benefitImages[benefit.imageKey]}
                    alt={benefit.title}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <span className="text-sm font-extrabold uppercase leading-6 tracking-[0.08em] text-slate-900">
                  {benefit.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
