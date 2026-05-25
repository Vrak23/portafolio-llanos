import './Servicios.css'

const Servicios = () => {

  const servicios = [
    {
      titulo: 'Desarrollo Web',
      descripcion:
        'Creación de aplicaciones y páginas web modernas utilizando React.'
    },

    {
      titulo: 'Diseño Responsive',
      descripcion:
        'Interfaces adaptables para computadoras, tablets y móviles.'
    },

    {
      titulo: 'UI / UX',
      descripcion:
        'Diseño de experiencias limpias, modernas y fáciles de usar.'
    },

    {
      titulo: 'Mantenimiento',
      descripcion:
        'Optimización y mejora de proyectos web existentes.'
    }
  ]

  return (
    <section id="servicios" className="servicios">

      <div className="servicios-container">

        <span className="section-tag">
          SERVICIOS
        </span>

        <h2>
          Lo que puedo desarrollar
        </h2>

        <div className="servicios-grid">

          {servicios.map((servicio, index) => (

            <div className="servicio-card" key={index}>

              <div className="servicio-number">
                0{index + 1}
              </div>

              <h3>
                {servicio.titulo}
              </h3>

              <p>
                {servicio.descripcion}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Servicios