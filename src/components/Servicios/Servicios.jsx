import './Servicios.css'

const Servicios = () => {

  const servicios = [
    {
      titulo: 'Paginas Web',
      descripcion:
        'Creacion de sitios modernos, ordenados y adaptables para presentar informacion, proyectos o servicios.'
    },

    {
      titulo: 'Interfaces Responsive',
      descripcion:
        'Diseno y construccion de interfaces que se adaptan correctamente a celulares, tablets y computadoras.'
    },

    {
      titulo: 'Sistemas Web Basicos',
      descripcion:
        'Desarrollo de registros, listados, formularios, paneles simples y conexion con bases de datos.'
    },

    {
      titulo: 'Aplicaciones en Formacion',
      descripcion:
        'Creacion y mejora de proyectos con tecnologias como React, Bootstrap, PHP, Laravel y MySQL.'
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
