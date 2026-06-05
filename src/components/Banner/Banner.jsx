import { Link } from 'react-router-dom'
import './Banner.css'
import miFoto from '../../assets/mifoto.jpeg'

const Banner = () => {

  return (
    <section className="hero-section">

      <div className="hero-content">

        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para proyectos
        </div>

        <div className="profile-photo-container">
          <img
            src={miFoto}
            alt="Foto Perfil"
            className="profile-photo"
          />
        </div>

        <h1 className="hero-title">
          Rodrigo <br />
          <span className="text-green">Portafolio</span>
        </h1>

        <h2 className="hero-subtitle">
          Estudiante de Informatica y Desarrollo de Aplicaciones Web
        </h2>

        <p className="hero-description">
          Construyo interfaces web modernas, funcionales y adaptables,
          enfocandome en aprender, mejorar y crear soluciones digitales
          cada vez mas completas.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            Ver Proyectos
          </Link>

          <Link to="/contact" className="btn btn-secondary">
            Contacto
          </Link>
        </div>

      </div>

    </section>
  )
}

export default Banner
