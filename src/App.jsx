import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import TwoMarkets from './components/TwoMarkets'
import Partner from './components/Partner'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <TwoMarkets />
        <Partner />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
