import '../styles/footer.scss';

import Japanese from '../img/japanese.svg'
import SouthKorean from '../img/south_korean.svg'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__wrapper">
        <div className="footer__nav">
          <div className="footer__nav__item">
            <div className="footer__nav__item__header">
              Help
            </div>
            <ul className="footer__nav__item__list">
              <li>
                <a href="/">
                  1-888-963-8944
                </a>
              </li>
              <li>
                <a href="/">
                  1-814-251-9966 (Text)
                </a>
              </li>
              <li>
                <a href="/">
                  help@allbirds.com
                </a>
              </li>
              <li>
                <a href="/">
                  Returns/Exchanges
                </a>
              </li>
              <li>
                <a href="/">
                  FAQ/Contact Us
                </a>
              </li>
              <li>
                <a href="/">
                  Afterpay
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__nav__item">
            <div className="footer__nav__item__header">
              Shop
            </div>
            <ul className="footer__nav__item__list">
              <li>
                <a href="/">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a href="/">
                  Women's Shoes
                </a>
              </li>
              <li>
                <a href="/">
                  Men's Apparel
                </a>
              </li>
              <li>
                <a href="/">
                  Women's Apparel
                </a>
              </li>
              <li>
                <a href="/">
                  Socks
                </a>
              </li>
              <li>
                <a href="/">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="/">
                  Download the Allbirds App
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__nav__item">
            <div className="footer__nav__item__header">
              Company
            </div>
            <ul className="footer__nav__item__list">
              <li>
                <a href="/">
                  Our Stores
                </a>
              </li>
              <li>
                <a href="/">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/">
                  Our Materials
                </a>
              </li>
              <li>
                <a href="/">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="/">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="/">
                  Product Testing
                </a>
              </li>
              <li>
                <a href="/">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="/">
                  Bulk Orders
                </a>
              </li>
              <li>
                <a href="/">
                  Careers
                </a>
              </li>
              <li>
                <a href="/">
                  Press
                </a>
              </li>
              <li>
                <a href="/">
                  California Transparency Act
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__additional">
          <div className="footer__user-message">
            <div className="footer__user-message__header">
              Follow the Flock
            </div>
            <div className="footer__user-message__text">
              Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild. Oh, we have cute sheep, too. #weareallbirds
            </div>
          </div>
          <div className="footer__languages">
            <a href='/' className="footer__languages__japanese">
              <img src={Japanese} alt="" />
            </a>
            <a href='/' className="footer__languages__south-korean">
              <img src={SouthKorean} alt="" />
            </a>
          </div>
        </div>
        <div className="footer__policy">
          © 2021 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility
        </div>
      </div>
    </footer>
  )
}