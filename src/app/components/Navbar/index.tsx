'use-client'

import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`nav ${isActive ? 'nav--active' : ''}`}>
      <div className="burger" onClick={toggleNav}>
        <div className={`burger__patty ${isActive ? 'burger--active' : ''}`}></div>
      </div>

      <ul className={`nav__list ${isActive ? 'nav__list--active' : ''}`}>
        <li className="nav__item">
          <a href="#1" className="nav__link c-blue">
            <i className="fa fa-camera-retro"></i>
          </a>
        </li>
        <li className="nav__item">
          <a href="#2" className="nav__link c-yellow scrolly">
            <i className="fa fa-bolt"></i>
          </a>
        </li>
        <li className="nav__item">
          <a href="#3" className="nav__link c-red">
            <i className="fa fa-music"></i>
          </a>
        </li>
        <li className="nav__item">
          <a href="#4" className="nav__link c-green">
            <i className="fa fa-paper-plane"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;