import './Habilidades.css'

const Habilidades = () => {

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Bootstrap',
    'PHP',
    'Laravel',
    'MySQL',
    'Git',
    'GitHub',
    'Responsive Design',
    'Vite'
  ]

  return (
    <section id="tech-stack" className="habilidades">

      <div className="habilidades-container">

        <span className="section-tag">
          HABILIDADES
        </span>

        <h2>
          Tecnologias y herramientas
        </h2>

        <p className="habilidades-desc">
          Tecnologias que utilizo en proyectos academicos y personales
          para crear interfaces, aplicaciones web y soluciones adaptables
          a distintos dispositivos.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Habilidades
