import Image from 'next/image';
import AboutUs from './sections/AboutUs';
import OurCompromise from './sections/OurCompromise';
import Services from './sections/Services/Service';
import MaxTime from './sections/MaxTime/MaxTime';
import Testimonials from './sections/Testimonials/Testimonials';
import Promise from './sections/Promise/Promise';
import Footer from './components/global/Footer/Footer';
import WhatsApp from './components/global/WhatsApp/WhatsApp';

export default function Home() {
  return (
    <main className="">
      <AboutUs />
      <OurCompromise />
      <MaxTime />
      <Services />
      <Testimonials />
      <Promise />
      <Footer />
      <WhatsApp />
    </main>
  )
}
