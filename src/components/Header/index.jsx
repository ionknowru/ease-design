import React from 'react'

import logoPng from '../../assets/img/logo.png';

function Header() {
    return (
        <header className="header">
          <div className="header__inner">
            <img className="logo" src={ logoPng } alt="logo" />
            <nav className="nav">
              <a className="nav__link" href="#">Collesctions</a>
              <a className="nav__link" href="#">blog</a>
              <a className="nav__link" href="#">About</a>
              <a className="nav__link" href="#">contacts</a>
            </nav>
          </div>
        </header>
    )
}

export default Header
