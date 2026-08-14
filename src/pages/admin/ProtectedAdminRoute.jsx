import { useState } from 'react'
import AdminPanel from './AdminPanel'
import './AdminPanel.css'

const ADMIN_PASSWORD = 'admin123' // Cambiar por contraseña segura

const ProtectedAdminRoute = () => {
  console.log('ProtectedAdminRoute mounted — checking admin access')

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('adminSession') === 'true'
  })
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminSession', 'true')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Contraseña incorrecta')
      setPassword('')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminSession')
    setIsAuthenticated(false)
    setPassword('')
    setError('')
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-glass">
          <h1>Panel de Administración</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa la contraseña"
                autoFocus
              />
            </div>
            {error && <div className="alert alert-danger mb-3">{error}</div>}
            <button type="submit" className="btn btn-admin-login w-100">
              Acceder
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <AdminPanel onLogout={handleLogout} />
}

export default ProtectedAdminRoute