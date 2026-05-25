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

          <a href="#sobre-mi">
            Perfil
          </a>

          <a href="#tech-stack">
            Habilidades
          </a>

          <a href="#servicios">
            Servicios
          </a>

          <a href="#proyectos">
            Proyectos
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </div>

        <span className="footer-copy">
          © 2026 Rodrigo - Todos los derechos reservados
        </span>

      </div>

    </footer>
  )
}

export default Footer