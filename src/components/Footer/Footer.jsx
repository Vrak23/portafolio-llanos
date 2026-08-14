import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer-container">

        <h2>
          Rodrigo Portfolio
        </h2>

        <p>
          Desarrollo web moderno con React y tecnologías frontend.
        </p>

        <div className="footer-links">

          <Link to="/">
            Inicio
          </Link>

          <Link to="/about">
            Sobre Mí
          </Link>

          <Link to="/projects">
            Proyectos
          </Link>

          <Link to="/certificates">
            Certificados
          </Link>

          <Link to="/contact">
            Contacto
          </Link>

        </div>

        <span className="footer-copy">
          © <Link to="/admin" className="footer-admin-link">2026</Link> Rodrigo - Todos los derechos reservados
        </span>

      </div>

    </footer>
  )
}

export default Footer