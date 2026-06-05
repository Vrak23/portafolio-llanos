import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Certificates from '../pages/Certificates'
import Contact from '../pages/Contact'
import ProjectDetail from '../pages/ProjectDetail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/contact" element={<Contact />} />
      {/* Fallback redirecting to Home page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
