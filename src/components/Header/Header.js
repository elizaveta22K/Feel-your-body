import React, { useState } from 'react'

import '../Header/header.css'
import logoImg from '../../img/logo.svg'

export default function Header() {
  const [nav, setNav] = useState(false);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo'>
            <a href='/'>
              <img src={logoImg} alt='Logo' />
            </a>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className={`header__burger ${nav ? 'active' : ''}`}
          >
            <span></span>
          </div>
          <div className='header__nav'>
            <nav className={`nav__menu ${nav ? 'active' : ''}`}>
              <ul className='nav__menu_items'>
                <li>
                  <a href='/'>Тренування</a>
                </li>
                <li>
                  <a href='/'>Тренери</a>
                </li>
                <li>
                  <a href='/'>FAQ</a>
                </li>
                <li>
                  <a href='/'>Мій кабінет</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
