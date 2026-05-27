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
          Estudiante de Desarrollo de Software
        </h2>

        <p className="hero-description">
          Desarrollo aplicaciones web modernas utilizando React,
          JavaScript y tecnologías frontend.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">
            Ver Proyectos
          </a>

          <a href="#contacto" className="btn btn-secondary">
            Contacto
          </a>
        </div>

      </div>

    </section>
  )
}

export default Banner