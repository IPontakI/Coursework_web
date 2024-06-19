import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'footer-container'}>
        <div className={'footer-main'}>
          <a href={'/'}>FukPontak</a>
          <div className={'footer-center'}>
            <div className={'footer-left'}>
              <nav>
                <ul>
                  <li>
                    <Link to='/fukpage'>Про факультет</Link>
                  </li>
                  <li>
                    <Link to='/gallery'>Галерея</Link>
                  </li>
                  <li>
                    <Link to='/news'>Новини</Link>
                  </li>
                  <li>
                    <Link to='/contacts'>Контакти</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={'footer-right'}>
              <p>Follow us</p>
              <ul>
                <li>
                  <a href={'https://www.instagram.com/'}>
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href={'https://twitter.com/'}>
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href={'https://www.facebook.com/'}>
                    <FaFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={'footer-bottom'}>
          © Copyright {new Date().getFullYear()}. <a href={'/'}>FukPontak</a>{' '}
          <a href='https://nupp.edu.ua/' target='_blank'>
            https://nupp.edu.ua/
          </a>
        </div>
      </div>
    </footer>
  )
}
