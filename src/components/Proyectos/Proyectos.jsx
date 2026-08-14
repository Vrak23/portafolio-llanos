import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Proyectos.css'
import { proyectos as proyectosEstaticos } from '../../data/proyectos'
import { supabase } from '../../services/supabaseClient'

const Proyectos = () => {
  const [proyectosDinamicos, setProyectosDinamicos] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProyectosDinamicos = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('proyectos')
        .select('*')
        .order('fecha_creacion', { ascending: false })

      if (error) throw error

      const adaptados = (data || []).map((p) => ({
        id: p.id,
        titulo: p.titulo,
        descripcion: p.descripcion,
        tecnologias: p.tecnologias || [],
        imagen: p.imagen_url || null,
        enlace: p.enlace || null,
        slug: null,
        esDinamico: true
      }))

      setProyectosDinamicos(adaptados)
    } catch (error) {
      console.error('Error al cargar proyectos de Supabase:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    // La carga inicial de proyectos desde Supabase requiere disparar la petición
    // en este punto; React 19/ESLint puede marcarlo como advertencia. 
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchProyectosDinamicos()
  }, [fetchProyectosDinamicos])

  const todosLosProyectos = [...proyectosDinamicos, ...proyectosEstaticos]

  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-container">
        <span className="section-tag">PROYECTOS</span>
        <h2>Algunos proyectos realizados</h2>

        <div className="proyectos-grid">
          {todosLosProyectos.map((proyecto, index) => {
            const key = proyecto.esDinamico ? `dyn-${proyecto.id}` : `static-${index}`
            const linkDestino = proyecto.esDinamico
              ? (proyecto.enlace || '#')
              : `/projects/${proyecto.slug}`
            const esEnlaceExterno = proyecto.esDinamico && proyecto.enlace

            return (
              <div className="proyecto-card" key={key}>
                {esEnlaceExterno ? (
                  <a
                    href={linkDestino}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyecto-image-link"
                  >
                    {proyecto.imagen ? (
                      <img src={proyecto.imagen} alt={proyecto.titulo} />
                    ) : (
                      <div className="proyecto-placeholder">
                        <span>🚀</span>
                      </div>
                    )}
                  </a>
                ) : (
                  <Link to={linkDestino} className="proyecto-image-link">
                    {proyecto.imagen ? (
                      <img src={proyecto.imagen} alt={proyecto.titulo} />
                    ) : (
                      <div className="proyecto-placeholder">
                        <span>🚀</span>
                      </div>
                    )}
                  </Link>
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
                    {proyecto.esDinamico ? (
                      proyecto.enlace ? (
                        <a
                          href={proyecto.enlace}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="details-btn"
                        >
                          Ver Proyecto
                        </a>
                      ) : (
                        <span className="details-btn" style={{ opacity: 0.5, cursor: 'default' }}>
                          Sin enlace
                        </span>
                      )
                    ) : (
                      <Link to={`/projects/${proyecto.slug}`} className="details-btn">
                        Ver Detalles
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {loading && (
          <p style={{ textAlign: 'center', marginTop: '20px', opacity: 0.6 }}>
            Cargando proyectos...
          </p>
        )}
      </div>
    </section>
  )
}

export default Proyectos