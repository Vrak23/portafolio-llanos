import { Link } from 'react-router-dom'
import './Proyectos.css'
import { proyectos } from '../../data/proyectos'

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-container">
        <span className="section-tag">PROYECTOS</span>
        <h2>Algunos proyectos realizados</h2>

        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => (
            <div className="proyecto-card" key={index}>
              <Link to={`/projects/${proyecto.slug}`} className="proyecto-image-link">
                {proyecto.imagen ? (
                  <img src={proyecto.imagen} alt={proyecto.titulo} />
                ) : (
                  <div className="proyecto-placeholder">
                    <span>🚀</span>
                  </div>
                )}
              </Link>

              <div className="proyecto-content">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>

                <div className="tags">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="buttons-container">
                  <Link
                    to={`/projects/${proyecto.slug}`}
                    className="details-btn"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
