import { useState } from 'react'
import SectionTitle from './SectionTitle'
import mailIcon from '../assets/icon-mail-white.png'

const fieldClassName =
  'min-h-[3.5rem] rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100'

function encodeFormData(formData) {
  return new URLSearchParams([...formData.entries()]).toString()
}

function QuoteForm({ form, productOptions }) {
  const [submitState, setSubmitState] = useState('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const formElement = event.currentTarget
    const formData = new FormData(formElement)

    setSubmitState('submitting')
    setFeedbackMessage('')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData(formData),
      })

      if (!response.ok) {
        throw new Error('No fue posible enviar la solicitud.')
      }

      formElement.reset()
      setSubmitState('success')
      setFeedbackMessage('Solicitud enviada correctamente. Te responderemos pronto.')
    } catch {
      setSubmitState('error')
      setFeedbackMessage(
        'No pudimos enviar tu solicitud en este momento. Intenta nuevamente en unos minutos.',
      )
    }
  }

  const isSubmitting = submitState === 'submitting'

  return (
    <section className="px-0 pb-10 pt-6 sm:pb-12 sm:pt-8" id="cotizar">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 rounded-[2.2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:p-8">
          <div className="grid gap-5 self-start">
            <SectionTitle
              eyebrow="Formulario de cotizacion"
              title="Dejanos los datos de tu pedido y"
              accent="te contactamos"
              description={form.description}
              centered={false}
              plainEyebrow
            />

            <div className="rounded-[1.7rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_12px_34px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-sky-600">
                Cotizacion directa
              </p>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Completa los datos principales de tu pedido y te contactamos con una
                respuesta comercial clara para avanzar con tu cotizacion.
              </p>
            </div>
          </div>

          <form
            className="rounded-[1.9rem] border border-slate-200 bg-white/92 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            name="cotizacion-vemuza"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="cotizacion-vemuza" />
            <input type="hidden" name="bot-field" />

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-[0.95rem] font-semibold text-slate-600">
                Nombre
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                  className={fieldClassName}
                />
              </label>

              <label className="grid gap-2 text-[0.95rem] font-semibold text-slate-600">
                Empresa
                <input
                  type="text"
                  name="empresa"
                  placeholder="Nombre de tu empresa"
                  required
                  className={fieldClassName}
                />
              </label>

              <label className="grid gap-2 text-[0.95rem] font-semibold text-slate-600">
                Correo
                <input
                  type="email"
                  name="correo"
                  placeholder="ventas@empresa.cl"
                  required
                  className={fieldClassName}
                />
              </label>

              <label className="grid gap-2 text-[0.95rem] font-semibold text-slate-600">
                Telefono
                <input
                  type="tel"
                  name="telefono"
                  placeholder="+56 9 ..."
                  required
                  className={fieldClassName}
                />
              </label>

              <label className="grid gap-2 text-[0.95rem] font-semibold text-slate-600">
                Tipo de caja
                <select name="tipoCaja" defaultValue="" required className={fieldClassName}>
                  <option value="" disabled>
                    Selecciona una opcion
                  </option>
                  {productOptions.map((product) => (
                    <option key={product.name} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-[0.95rem] font-semibold text-slate-600">
                Cantidad estimada (Minimo 1.000 unidades)
                <input
                  type="text"
                  name="cantidad"
                  placeholder="Ej: 1.000 unidades"
                  required
                  className={fieldClassName}
                />
              </label>
            </div>

            <label className="grid gap-2 text-[0.95rem] font-semibold text-slate-600">
              Medidas o especificaciones
              <textarea
                name="detalles"
                rows="5"
                placeholder="Largo, ancho, alto, uso del producto, tipo de cierre o cualquier detalle relevante."
                required
                className={`${fieldClassName} mb-4 min-h-32 resize-y`}
              />
            </label>

            <button
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-80"
              style={{
                backgroundImage: 'linear-gradient(135deg, #ff9a00 0%, #ff5b14 52%, #eb1f34 100%)',
              }}
              type="submit"
              disabled={isSubmitting}
            >
              <img src={mailIcon} alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
              {isSubmitting ? 'Enviando solicitud...' : 'Enviar solicitud'}
            </button>

            {feedbackMessage ? (
              <div
                className={`mt-4 rounded-[1.2rem] border px-4 py-4 text-sm font-semibold sm:px-5 ${
                  submitState === 'success'
                    ? 'border-emerald-500/35 bg-[linear-gradient(135deg,rgba(16,185,129,0.14)_0%,rgba(15,23,42,0.02)_100%)] text-emerald-800'
                    : 'border-rose-500/30 bg-[linear-gradient(135deg,rgba(244,63,94,0.10)_0%,rgba(15,23,42,0.02)_100%)] text-rose-700'
                }`}
                role="status"
                aria-live="polite"
              >
                {feedbackMessage}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

export default QuoteForm
