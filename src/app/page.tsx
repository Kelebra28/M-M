import Image from 'next/image'
import AboutUs from './sections/AboutUs'
import OurCompromise from './sections/OurCompromise'
import Services from './layouts/Services/Service'

export default function Home() {
  return (
    <main className="bg-red-600">
      <AboutUs />
      <OurCompromise />
      <Services />

    </main>
  )
}
