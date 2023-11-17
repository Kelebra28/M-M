'use client';
import { useState } from 'react';

import Image from 'next/image';
import AboutUs from './sections/AboutUs';
import OurCompromise from './sections/OurCompromise';
import Services from './sections/Services/Service';
import MaxTime from './sections/MaxTime/MaxTime';
import Testimonials from './sections/Testimonials/Testimonials';
import Promise from './sections/Promise/Promise';
import Footer from './components/global/Footer/Footer';
import WhatsApp from './components/global/WhatsApp/WhatsApp';
import GoogleMaps from './sections/GoogleMaps/GoogleMaps';
import EmailPopUp from './components/global/ContactEmail/ContactEmail';

export default function Home() {
  const [contactPopUp, setContactPopUp] = useState<boolean>(false);
const handleContactPopUp = () => {
    setContactPopUp(!contactPopUp);
  }
  return (
    <main className="">
      { contactPopUp ? <EmailPopUp handleContactPopUp={handleContactPopUp} /> : null }
      <AboutUs />
      <OurCompromise />
      <MaxTime />
      <Services />
      <Testimonials />
      <Promise />
      <GoogleMaps />
      <Footer handleContactPopUp={handleContactPopUp} />
      <WhatsApp  />
    </main>
  )
}
