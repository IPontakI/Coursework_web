import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'

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
                    <a href='/about-us'>Про факультет</a>
                  </li>
                  <li>
                    <a href='/gallery'>Галерея</a>
                  </li>
                  <li>
                    <a href={'/news'}>Новини</a>
                  </li>
                  <li>
                    <a href={'/contact-us'}>Контакти</a>
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
          © Copyright {new Date().getFullYear()}.{' '}
          <a replace={true} href={'/'}>
            FukPontak
          </a>
        </div>
      </div>
    </footer>
  )
}
