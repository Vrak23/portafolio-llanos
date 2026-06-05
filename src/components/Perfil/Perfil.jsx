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
            Creciendo como desarrollador web
          </h2>
        </div>

        <div className="perfil-right">

          <p>
            Soy estudiante de Informatica y Desarrollo de Aplicaciones Web
            en SENATI, actualmente cursando el cuarto ciclo. Me interesa
            el desarrollo de software en distintas areas, especialmente la
            creacion de paginas web, aplicaciones, sistemas con bases de
            datos e interfaces modernas.
          </p>

          <p>
            Me considero una persona responsable, ordenada y con facilidad
            para aprender rapido. Me gusta mejorar mis proyectos paso a paso,
            cuidar los detalles y asumir nuevos retos que me ayuden a crecer
            como desarrollador en formacion.
          </p>

          <div className="perfil-stats">

            <div className="stat-card">
              <h3>Web</h3>
              <span>React</span>
            </div>

            <div className="stat-card">
              <h3>Backend</h3>
              <span>Laravel</span>
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
