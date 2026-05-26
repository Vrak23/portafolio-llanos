import './Proyectos.css'

import gestionCitas from '../../assets/gestioncitas.png'
import logosoundvibe from '../../assets/logosoundvibe.png'
import Escuela from '../../assets/escuela.png'
import senatiLogo from '../../assets/senatilogo.jpg'
import loginApp from '../../assets/autenticacion.png'

const Proyectos = () => {

  const proyectos = [

    {
      titulo: 'App Gestión Citas',
      descripcion:
        'Aplicación web para gestionar citas, usuarios y registros de atención.',
      imagen: gestionCitas,
      tecnologias: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/Vrak23/app-gestion-citas',
      demo: 'https://gestion-citas.free.nf/'
    },

    {
      titulo: 'SoundVibe',
      descripcion:
        'Aplicación web para hacer compra de artículos de música.',
      imagen: logosoundvibe,
      tecnologias: ['Laravel', 'MySQL', 'JavaScript'],
      github: 'https://github.com/Vrak23/Proyecto-musica',
      demo: 'https://soundvibe.great-site.net'
    },

    {
      titulo: 'App Matrícula',
      descripcion:
        'Sistema con login y dashboard para administrar alumnos, cursos, citas y profesores.',
      imagen: Escuela,
      tecnologias: ['JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/Vrak23/app-matricula',
      demo: 'https://matriculasystem.infinityfree.me/'
    },

    {
      titulo: 'Portal SENATI',
      descripcion:
        'Portal web institucional para la gestión de alumnos, profesores y cursos.',
      imagen: senatiLogo,
      tecnologias: ['React', 'Laravel', 'MySQL'],
      github: 'https://github.com/Vrak23/portal-senati',
      demo: 'https://portal-senati.vercel.app/'
    },

    {
      titulo: 'Login App',
      descripcion:
        'login con autenticación y dashboard para administrar usuarios, roles y permisos.',
      imagen: loginApp,
      tecnologias: ['React', 'Laravel', 'MySQL'],
      github: 'https://github.com/Vrak23/loginApp',
      demo: '#'
    }

  ]

  return (
    <section id="proyectos" className="proyectos">

      <div className="proyectos-container">

        <span className="section-tag">
          PROYECTOS
        </span>

        <h2>
          Algunos proyectos realizados
        </h2>

        <div className="proyectos-grid">

          {proyectos.map((proyecto, index) => (

            <div className="proyecto-card" key={index}>

              {proyecto.imagen ? (
                <img src={proyecto.imagen} alt={proyecto.titulo} />
              ) : (
                <div className="proyecto-placeholder">
                  <span>🚀</span>
                </div>
              )}

              <div className="proyecto-content">

                <h3>{proyecto.titulo}</h3>

                <p>{proyecto.descripcion}</p>

                <div className="tags">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="buttons-container">

                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-btn"
                  >
                    Ver Repositorio
                  </a>

                  {proyecto.demo && proyecto.demo !== '#' && (
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-btn"
                    >
                      Ver Proyecto
                    </a>
                  )}

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
