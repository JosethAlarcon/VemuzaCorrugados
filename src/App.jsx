import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import Delivery from './components/Delivery'
import QuoteForm from './components/QuoteForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { siteContent } from './data/siteContent'

function App() {
  return (
    <div className="relative overflow-x-clip">
      <div
        className="pointer-events-none fixed -right-24 top-20 -z-10 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(255, 106, 0, 0.24)' }}
      />
      <div
        className="pointer-events-none fixed -left-24 bottom-24 -z-10 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(28, 134, 218, 0.18)' }}
      />

      <Header
        company={siteContent.company}
        navigation={siteContent.navigation}
        contact={siteContent.contact}
      />

      <main>
        <Hero
          company={siteContent.company}
          hero={siteContent.hero}
          contact={siteContent.contact}
        />
        <ProductShowcase
          products={siteContent.products}
          catalogBenefits={siteContent.catalogBenefits}
        />
        <Delivery delivery={siteContent.delivery} contact={siteContent.contact} />
        <QuoteForm form={siteContent.form} productOptions={siteContent.products} />
        <FinalCTA cta={siteContent.finalCta} contact={siteContent.contact} />
      </main>

      <Footer
        company={siteContent.company}
        navigation={siteContent.navigation}
        contact={siteContent.contact}
      />
    </div>
  )
}

export default App
