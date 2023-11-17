"use client"
import { useState } from 'react';
import styles from './Navbar.module.scss'; // Importa los estilos de SCSS

type HeaderProps = {
  handleContactPopUp: () => void;
};


const Navbar = ({handleContactPopUp}: HeaderProps) => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className={`${styles.navbar} ${isNavbarOpen ? styles.open : ''}`} id="navbar">
      <button
        onClick={toggleNavbar}
        className={`${styles.toggleButton} ${isNavbarOpen ? styles.active : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="82" viewBox="0 0 90 82" fill="none">
          <path
            d="M0 -1H90V82H32C14.3269 82 0 67.6731 0 50V-1Z"
            fill={`${isNavbarOpen ? '#D7000D' : '#080910'}`}
          />
          <rect x="19" y="30" width="53" height="4" fill="white" />
          <rect x="46" y="46" width="26" height="4" fill="white" />
        </svg>
      </button>
      <nav className={`${styles.nav} ${isNavbarOpen ? styles.navOpen : ''}`}>
        <a href="#" className={`${styles.navItem}`}>Inicio</a>
        <a href="#services" className={`${styles.navItem}`}>Servicios</a>
        <button onClick={() => handleContactPopUp()} className={`${styles.navItem}`}>Contacto</button>
        <a href="#" className={`${styles.navItem}`}>Quiénes Somos</a>
      </nav>
    </div>
  );
};

export default Navbar;