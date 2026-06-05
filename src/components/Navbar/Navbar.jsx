import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navbarLinks } from './navbar.config'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
        <span className="logo-accent">Rodrigo</span>
        <span className="logo-name">Portafolio</span>
      </Link>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {navbarLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div
        className={`navbar-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  )
}

export default Navbar