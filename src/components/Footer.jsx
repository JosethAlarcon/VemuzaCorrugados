import brandMark from '../assets/vemuza-corrugados-footer.png'
import whatsappIcon from '../assets/icon-whatsapp-white.png'

function Footer({ company, navigation, contact }) {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="px-4 pb-10 sm:px-6 sm:pb-12">
        <div className="mx-auto w-full max-w-7xl rounded-[1.9rem] border border-slate-200 bg-white/82 px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-8">
          <div className="grid justify-items-center gap-5 text-center">
            <a
              href="#inicio"
              className="inline-flex rounded-[1.7rem] border border-slate-200 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
              aria-label={`Ir al inicio de ${company.name}`}
            >
              <span className="flex h-20 w-56 items-center justify-center sm:h-24 sm:w-72">
                <img
                  src={brandMark}
                  alt={company.name}
                  className="max-h-full w-full object-contain"
                />
              </span>
            </a>

            <p className="max-w-2xl text-slate-600">{company.description}</p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${contact.phoneHref}`}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {contact.email}
              </a>
            </div>

            <div className="h-px w-full max-w-5xl bg-slate-200" />

            <p className="text-sm text-slate-500">
              © {currentYear} Vemuza Corrugados Chile - Todos los derechos reservados ·
              JosethDev
            </p>
          </div>
        </div>
      </footer>

      <a
        className="fixed bottom-5 right-5 grid h-15 w-15 place-items-center rounded-full text-white no-underline shadow-[0_18px_32px_rgba(37,211,102,0.38)] ring-1 ring-white/35 transition hover:scale-[1.03] hover:shadow-[0_22px_36px_rgba(37,211,102,0.46)]"
        style={{ backgroundImage: 'linear-gradient(180deg, #2be36f 0%, #18b04f 100%)' }}
        href={contact.whatsAppHref}
        aria-label="Abrir WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt=""
          className="h-8 w-8 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]"
          aria-hidden="true"
        />
      </a>
    </>
  )
}

export default Footer
