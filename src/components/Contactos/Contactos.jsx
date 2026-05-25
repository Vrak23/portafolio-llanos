import { useState } from 'react'
import "./Contactos.css";

const Contacto = () => {

  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const manejarCambio = (e) => {

    const { name, value } = e.target

    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  const manejarEnvio = (e) => {

    e.preventDefault()

    alert(`Gracias ${formulario.nombre}, tu mensaje fue enviado.`)

    setFormulario({
      nombre: '',
      email: '',
      mensaje: ''
    })
  }

  return (
    <section id="contacto" className="contacto">

      <div className="contacto-container">

        <span className="section-tag">
          CONTACTO
        </span>

        <h2>
          Trabajemos juntos
        </h2>

        <form
          className="contacto-form"
          onSubmit={manejarEnvio}
        >

          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            value={formulario.email}
            onChange={manejarCambio}
            required
          />

          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            rows="6"
            value={formulario.mensaje}
            onChange={manejarCambio}
            required
          ></textarea>

          <button type="submit">
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contacto