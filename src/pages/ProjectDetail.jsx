import { useParams, Link } from 'react-router-dom'
import { proyectos } from '../data/proyectos'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { slug } = useParams()
  const proyecto = proyectos.find((p) => p.slug === slug)

  if (!proyecto) {
    return (
      <div className="project-not-found">
        <h2>Proyecto no encontrado</h2>
        <p>El proyecto que estás buscando no existe o ha sido movido.</p>
        <Link to="/projects" className="back-home-btn">
          Volver a Proyectos
        </Link>
      </div>
    )
  }

  return (
    <div className="project-detail-container">
      <div className="back-nav">
        <Link to="/projects" className="back-link">
          <span className="arrow">←</span> Volver a Proyectos
        </Link>
      </div>

      <div className="project-main-grid">
        {/* Left Column: Visuals */}
        <div className="project-visuals animate-fade-in">
          {proyecto.imagen ? (
            <div className="project-img-card">
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <div className="image-glow"></div>
            </div>
          ) : (
            <div className="project-placeholder-detail">
              <span>🚀</span>
            </div>
          )}
        </div>

        {/* Right Column: Information */}
        <div className="project-info-panel animate-slide-up">
          <span className="section-tag">Detalle de Proyecto</span>
          <h1 className="project-title">{proyecto.titulo}</h1>

          <div className="project-tech-stack">
            {proyecto.tecnologias.map((tech, i) => (
              <span key={i} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-description-section">
            <h3>Sobre el proyecto</h3>
            <p className="project-description-text">
              {proyecto.descripcionLarga || proyecto.descripcion}
            </p>
          </div>

          {proyecto.funcionalidades && proyecto.funcionalidades.length > 0 && (
            <div className="project-features-section">
              <h3>Características principales</h3>
              <ul className="features-list">
                {proyecto.funcionalidades.map((func, i) => (
                  <li key={i}>
                    <span className="check-dot">✓</span>
                    {func}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-links-actions">
            <a
              href={proyecto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn github-btn"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Ver Código
            </a>

            {proyecto.demo && proyecto.demo !== '#' && (
              <a
                href={proyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn demo-btn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Visitar Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
