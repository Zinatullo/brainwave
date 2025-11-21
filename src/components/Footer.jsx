import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/Footer.scss'

const navLinks = [
  { id: 1, name: "features", href: "/features" },
  { id: 2, name: "pricing", href: "/pricing" },
  { id: 3, name: "how to use", href: "/how-to-use" },
  { id: 4, name: "roadmap", href: "/roadmap" },
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-item">
          <div className="footer-logo">
            <img src="/logo.svg" alt="Logo" />
          </div>
          <div className="footer-nav">
            {navLinks.map((el) => (
              <NavLink 
                key={el.id} 
                to={el.href} 
                className='nav-link-2 nav-link'
              >
                {el.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="footer-item-2">
          <div className="footer-text">
            <span className=''>© 2023 UI8</span>
          </div>
          <div className="footer-social">
            <img width={32} height={32} src="/discord.png" alt="Discord" />
            <img width={32} height={32} src="/twitter.png" alt="Twitter" />
            <img width={32} height={32} src="/instagram.png" alt="Instagram" />
            <img width={32} height={32} src="/telegram.png" alt="Telegram" />
            <img width={32} height={32} src="/facebook.png" alt="Facebook" />
          </div>
        </div>
      </div>
    </footer>
  )
}