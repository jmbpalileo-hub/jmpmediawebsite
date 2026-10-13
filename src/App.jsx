import { useCallback, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import VideoModal from './components/VideoModal'
import { About, Clients, Services, Contact, Footer } from './components/Sections'
import { site } from './data/site'

export default function App() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  const playReel = () => setActive({ client: site.brandFull, title: 'Showreel', video: site.showreel })

  return (
    <>
      <a href="#work" className="skip">Skip to work</a>
      <Nav />
      <main>
        <Hero onPlayReel={playReel} />
        <About />
        <Clients />
        <Work onOpen={setActive} />
        <Services />
        <Contact />
      </main>
      <Footer />
      <VideoModal item={active} onClose={close} />
    </>
  )
}
