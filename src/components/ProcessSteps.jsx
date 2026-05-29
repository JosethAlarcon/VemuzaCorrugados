import SectionTitle from './SectionTitle'

function ProcessSteps({ steps }) {
  return (
    <section className="px-0 py-16" id="proceso">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Proceso comercial"
          title="Cotizar tus cajas al por mayor es"
          accent="simple y claro"
          description="Reducimos friccion con un flujo directo para que tu empresa cotice rapido y con informacion precisa."
        />

        <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div
            className="absolute left-[8%] right-[8%] top-[2.1rem] hidden h-px xl:block"
            style={{ background: 'linear-gradient(90deg, rgba(28,134,218,0.22), rgba(235,31,52,0.32))' }}
          />
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative grid gap-3 rounded-[1.7rem] border border-slate-200 bg-white/85 p-6 shadow-xl"
            >
              <div
                className="grid h-[4.2rem] w-[4.2rem] place-items-center rounded-full text-[1.4rem] font-black text-white shadow-lg"
                style={{ backgroundImage: 'linear-gradient(135deg, #ff3c88 0%, #ff5b14 100%)' }}
              >
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-slate-950">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
