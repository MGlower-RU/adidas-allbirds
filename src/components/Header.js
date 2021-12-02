import { useState } from 'react';

import '../styles/header.scss';

import Logo from '../img/logo.svg';
import Profile from '../img/profile.svg';
import Question from '../img/question.svg';
import Cart from '../img/cart.svg';

export default function Header() {
  const [cartItems] = useState(0)

  return (
    <header className="header__wrapper">
      <div className="header__collections">
        <a href="/">
          Men
        </a>
        <a href="/">
          Women
        </a>
        <a href="/">
          New arrivals
        </a>
      </div>
      <div className="header__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="header__right">
        <a href="/">
          Sustainability
        </a>
        <a href="/">
          Stores
        </a>
        <div className="header__right__user">
          <a
            href="/"
            className='header__right__user__profile'
          >
            <img src={Profile} alt="" />
          </a>
          <a
            href="/"
            className='header__right__user__faq'
          >
            <img src={Question} alt="" />
          </a>
          <a
            href="/"
            className='header__right__user__cart'
          >
            <img src={Cart} alt="" />
            <span
              style={{
                left: cartItems > 9 ? '1.3rem' : '1.7rem'
              }}
            >{cartItems}</span>
          </a>
        </div>
      </div>
    </header>
  )
}