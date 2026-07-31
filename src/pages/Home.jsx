import Hero from '../components/Hero'
import Services from '../components/Services'
import Stats from '../components/Stats'
import TwoMarkets from '../components/TwoMarkets'
import Partner from '../components/Partner'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <TwoMarkets />
      <Partner />
      <Testimonials />
      <CTA />
    </main>
  )
}
