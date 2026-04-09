import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { img } from '../utils/img'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'About' },
  { to: '/reading-with-babies', label: 'Reading with Babies' },
  { to: '/videos', label: 'Videos' },
  { to: '/contact-us', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function handleLinkClick() {
    setOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={img('SideBabyweb.gif')} alt="Reading with Babies" />
        </NavLink>

        <button
          className={`hamburger${open ? ' is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-nav${open ? ' is-open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={handleLinkClick}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
