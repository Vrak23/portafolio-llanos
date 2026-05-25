import './Certificados.css'

import concienciaDigital from '../../assets/certificados/Digital_Awareness_certificate.pdf'
import emprendimiento from '../../assets/certificados/Discovering_Entrepreneurship_certificate.pdf'
import hardware from '../../assets/certificados/hardware basico.pdf'
import cienciaDatos from '../../assets/certificados/introduccion a la ciencia de datos.pdf'
import ciberseguridad from '../../assets/certificados/introduccion a la ciberseguridad.pdf'

const Certificados = () => {

  const certificados = [

    {
      titulo: 'Conciencia Digital',
      pdf: concienciaDigital
    },

    {
      titulo: 'Descubriendo el Emprendimiento',
      pdf: emprendimiento
    },

    {
      titulo: 'Conceptos Básicos de Hardware',
      pdf: hardware
    },

    {
      titulo: 'Introducción a la Ciencia de Datos',
      pdf: cienciaDatos
    },

    {
      titulo: 'Introducción a la Ciberseguridad',
      pdf: ciberseguridad
    }

  ]

  return (

    <section id="certificados" className="certificados">

      <div className="certificados-container">

        <span className="section-tag">
          CERTIFICADOS
        </span>

        <h2>
          Certificaciones Cisco
        </h2>

        <div className="certificados-grid">

          {certificados.map((certificado, index) => (

            <div className="certificado-card" key={index}>

              <h3>
                {certificado.titulo}
              </h3>

              <a
                href={certificado.pdf}
                download
                className="certificado-btn"
              >
                Descargar PDF
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default Certificados