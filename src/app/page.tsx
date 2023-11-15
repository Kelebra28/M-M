import Image from 'next/image'
import AboutUs from './sections/AboutUs'
import OurCompromise from './sections/OurCompromise'
import Services from './sections/Services/Service'

export default function Home() {
  return (
    <main className="">
      <AboutUs />
      <OurCompromise />
      <Services />

    </main>
  )
}
