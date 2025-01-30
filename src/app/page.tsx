import { Hero } from '@/components'
import { Team } from '@/components/Team'
import { About } from '@/components/About'
import { Events } from '@/components/Events'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
