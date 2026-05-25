import './Habilidades.css'

const Habilidades = () => {

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'GitHub',
    'Responsive Design',
    'MySQL',
    'Laravel',
    'Vite',
    'Figma',
    'Python'
  ]

  return (
    <section id="tech-stack" className="habilidades">

      <div className="habilidades-container">

        <span className="section-tag">
          HABILIDADES
        </span>

        <h2>
          Tecnologías y herramientas
        </h2>

        <p className="habilidades-desc">
          Tecnologías que utilizo para construir interfaces,
          aplicaciones web y proyectos modernos.
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