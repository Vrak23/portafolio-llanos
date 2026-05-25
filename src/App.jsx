import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Perfil from './components/Perfil/Perfil'
import Habilidades from './components/Habilidades/Habilidades'
import Servicios from './components/Servicios/Servicios'
import Proyectos from './components/Proyectos/Proyectos'
import Certificados from './components/Certificados/Certificados'
import Contactos from './components/Contactos/Contactos'
import Footer from './components/Footer/Footer'


import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Servicios />
      <Proyectos />
      <Certificados />
      <Contactos />
      <Footer />
    </>
  )
}

export default App