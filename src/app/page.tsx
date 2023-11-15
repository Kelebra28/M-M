import Image from 'next/image'
import AboutUs from './sections/AboutUs'
import OurCompromise from './sections/OurCompromise'

export default function Home() {
  return (
    <main className="bg-red-600">
      <AboutUs />
      <OurCompromise />
    </main>
  )
}
