import './Perfil.css'

const Perfil = () => {

  return (
    <section id="perfil" className="perfil">

      <div className="perfil-container">

        <div className="perfil-left">
          <span className="section-tag">
            PERFIL
          </span>

          <h2>
            Construyendo experiencias web modernas
          </h2>
        </div>

        <div className="perfil-right">

          <p>
            Soy estudiante de desarrollo de software con interés
            en tecnologías frontend, diseño de interfaces y
            aplicaciones modernas utilizando React.
          </p>

          <p>
            Actualmente continúo fortaleciendo mis habilidades
            en JavaScript, diseño responsive y desarrollo web.
          </p>

          <div className="perfil-stats">

            <div className="stat-card">
              <h3>Frontend</h3>
              <span>React</span>
            </div>

            <div className="stat-card">
              <h3>Diseño</h3>
              <span>Responsive</span>
            </div>

            <div className="stat-card">
              <h3>Aprendizaje</h3>
              <span>Constante</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Perfil