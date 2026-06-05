import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App