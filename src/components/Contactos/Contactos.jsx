import { useState } from "react";

import emailjs from "@emailjs/browser";

import Swal from "sweetalert2";

import "./Contactos.css";

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",

    email: "",

    mensaje: "",
  });

  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,

      [name]: value,
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    setCargando(true);

    try {
      const templateParams = {
        nombre: formulario.nombre,

        email: formulario.email,

        mensaje: formulario.mensaje,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,

        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        templateParams,

        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      Swal.fire({
        title: "¡Mensaje enviado!",

        text: "Gracias por contactarme.",

        icon: "success",

        confirmButtonColor: "#00ff88",

        background: "#111111",

        color: "#ffffff",
      });

      setFormulario({
        nombre: "",

        email: "",

        mensaje: "",
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error",

        text: "No se pudo enviar el mensaje.",

        icon: "error",

        confirmButtonColor: "#00ff88",

        background: "#111111",

        color: "#ffffff",
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-container">
        <span className="section-tag">CONTACTO</span>

        <h2>Trabajemos juntos</h2>

        <form className="contacto-form" onSubmit={manejarEnvio}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
            disabled={cargando}
          />

          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            value={formulario.email}
            onChange={manejarCambio}
            required
            disabled={cargando}
          />

          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            rows="6"
            value={formulario.mensaje}
            onChange={manejarCambio}
            required
            disabled={cargando}
          ></textarea>

          <button type="submit" disabled={cargando}>
            {cargando ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
