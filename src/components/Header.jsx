import brandLogo from '../assets/vemuza-logo-corrugados.png'
import whatsappIcon from '../assets/icon-whatsapp-white.png'

function Header({ company, navigation, contact }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-22 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          className="flex min-w-0 items-center gap-3 rounded-3xl border border-slate-200 bg-white/80 px-4 py-3 shadow-lg transition hover:shadow-xl"
          href="#inicio"
          aria-label={`Ir al inicio de ${company.name}`}
        >
          <div className="flex h-14 w-36 shrink-0 items-center justify-center sm:h-16 sm:w-22">
            <img
              src={brandLogo}
              alt={company.name}
              className="h-full w-full object-contain object-left"
            />
          </div>

          <div className="hidden min-w-0 sm:flex sm:flex-col sm:justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
              {company.shortName}
            </span>
            <span className="text-sm font-semibold leading-tight text-slate-900">
              {company.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegacion principal">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            className="rounded-full bg-slate-100 px-4 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-200"
            href={`tel:${contact.phoneHref}`}
          >
            {contact.phoneDisplay}
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            style={{ backgroundImage: 'linear-gradient(135deg, #ff9a00 0%, #ff5b14 52%, #eb1f34 100%)' }}
            href={contact.whatsAppHref}
          >
            <img src={whatsappIcon} alt="" className="h-4 w-4 object-contain" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
