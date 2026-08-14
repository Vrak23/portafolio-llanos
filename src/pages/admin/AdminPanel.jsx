import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../../services/supabaseClient'
import Swal from 'sweetalert2'
import './AdminPanel.css'

const AdminPanel = ({ onLogout }) => {
  const [proyectos, setProyectos] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    tecnologias: [],
    imagen_url: '',
    enlace: ''
  })
  const [techInput, setTechInput] = useState('')

  const fetchProyectos = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('proyectos')
        .select('*')
        .order('fecha_creacion', { ascending: false })

      if (error) throw error
      setProyectos(data || [])
    } catch (error) {
      console.error('Error al cargar proyectos:', error)
      Swal.fire('Error', 'No se pudieron cargar los proyectos', 'error')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    // React 19/ESLint puede marcar este patrón como advertencia, pero en un panel
    // con carga inicial desde Supabase es la forma estándar de inicializar datos.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchProyectos()
  }, [fetchProyectos])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddTechnology = () => {
    if (techInput.trim()) {
      setFormData(prev => ({
        ...prev,
        tecnologias: [...prev.tecnologias, techInput.trim()]
      }))
      setTechInput('')
    }
  }

  const handleRemoveTechnology = (index) => {
    setFormData(prev => ({
      ...prev,
      tecnologias: prev.tecnologias.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.titulo || !formData.descripcion) {
      Swal.fire('Validación', 'Título y descripción son requeridos', 'warning')
      return
    }

    try {
      if (editingId) {
        const { error } = await supabase
          .from('proyectos')
          .update({
            titulo: formData.titulo,
            descripcion: formData.descripcion,
            tecnologias: formData.tecnologias,
            imagen_url: formData.imagen_url,
            enlace: formData.enlace,
            fecha_actualizacion: new Date().toISOString()
          })
          .eq('id', editingId)

        if (error) throw error
        Swal.fire('Éxito', 'Proyecto actualizado', 'success')
      } else {
        const { error } = await supabase
          .from('proyectos')
          .insert([{
            titulo: formData.titulo,
            descripcion: formData.descripcion,
            tecnologias: formData.tecnologias,
            imagen_url: formData.imagen_url,
            enlace: formData.enlace
          }])

        if (error) throw error
        Swal.fire('Éxito', 'Proyecto creado', 'success')
      }

      resetForm()
      fetchProyectos()
    } catch (error) {
      console.error('Error al guardar:', error)
      Swal.fire('Error', error.message, 'error')
    }
  }

  const handleEdit = (proyecto) => {
    setFormData({
      titulo: proyecto.titulo,
      descripcion: proyecto.descripcion,
      tecnologias: proyecto.tecnologias || [],
      imagen_url: proyecto.imagen_url || '',
      enlace: proyecto.enlace || ''
    })
    setEditingId(proyecto.id)
  }

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: '¿Eliminar proyecto?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#00ff88'
    })

    if (result.isConfirmed) {
      try {
        const { error } = await supabase
          .from('proyectos')
          .delete()
          .eq('id', id)

        if (error) throw error
        Swal.fire('Eliminado', 'Proyecto eliminado', 'success')
        fetchProyectos()
      } catch (error) {
        console.error('Error al eliminar:', error)
        Swal.fire('Error', error.message, 'error')
      }
    }
  }

  const resetForm = () => {
    setFormData({
      titulo: '',
      descripcion: '',
      tecnologias: [],
      imagen_url: '',
      enlace: ''
    })
    setEditingId(null)
    setTechInput('')
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>🚀 Panel de Administración</h1>
        <button
          onClick={onLogout}
          className="btn btn-outline-danger"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="admin-content">
        <div className="admin-section form-section">
          <h2>{editingId ? 'Editar Proyecto' : 'Nuevo Proyecto'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Título *</label>
              <input
                type="text"
                name="titulo"
                className="form-control"
                value={formData.titulo}
                onChange={handleInputChange}
                placeholder="Título del proyecto"
              />
            </div>

            <div className="form-group">
              <label>Descripción *</label>
              <textarea
                name="descripcion"
                className="form-control"
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder="Descripción del proyecto"
                rows="4"
              />
            </div>

            <div className="form-group">
              <label>Tecnologías</label>
              <div className="tech-input-group">
                <input
                  type="text"
                  className="form-control"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="Ej: React, Supabase, CSS"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTechnology())}
                />
                <button
                  type="button"
                  className="btn btn-admin-add"
                  onClick={handleAddTechnology}
                >
                  +
                </button>
              </div>
              <div className="tech-tags">
                {formData.tecnologias.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                    <button
                      type="button"
                      className="btn-remove-tech"
                      onClick={() => handleRemoveTechnology(index)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>URL de imagen</label>
              <input
                type="url"
                name="imagen_url"
                className="form-control"
                value={formData.imagen_url}
                onChange={handleInputChange}
                placeholder="https://ejemplo.com/imagen.jpg"
              />
            </div>

            <div className="form-group">
              <label>Enlace del proyecto</label>
              <input
                type="url"
                name="enlace"
                className="form-control"
                value={formData.enlace}
                onChange={handleInputChange}
                placeholder="https://proyecto.com"
              />
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn btn-admin-primary">
                {editingId ? 'Actualizar' : 'Crear'} Proyecto
              </button>
              {editingId && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={resetForm}
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="admin-section list-section">
          <h2>Proyectos ({proyectos.length})</h2>
          {loading ? (
            <div className="loading">Cargando...</div>
          ) : proyectos.length === 0 ? (
            <div className="empty-state">
              <p>No hay proyectos aún. ¡Crea el primero!</p>
            </div>
          ) : (
            <div className="proyectos-list">
              {proyectos.map(proyecto => (
                <div key={proyecto.id} className="proyecto-card">
                  <div className="proyecto-header">
                    <h3>{proyecto.titulo}</h3>
                    <div className="proyecto-actions">
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => handleEdit(proyecto)}
                      >
                        ✏️ Editar
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(proyecto.id)}
                      >
                        🗑️ Eliminar
                      </button>
                    </div>
                  </div>
                  <p className="proyecto-desc">{proyecto.descripcion}</p>
                  {proyecto.tecnologias && proyecto.tecnologias.length > 0 && (
                    <div className="proyecto-techs">
                      {proyecto.tecnologias.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  )}
                  {proyecto.imagen_url && (
                    <img
                      src={proyecto.imagen_url}
                      alt={proyecto.titulo}
                      className="proyecto-img"
                    />
                  )}
                  {proyecto.enlace && (
                    <a
                      href={proyecto.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proyecto-link"
                    >
                      Ver proyecto →
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel