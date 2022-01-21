import About from "./components/About"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Proyectos from "./components/Proyectos"
import Skills from "./components/Skills"


function App() {

  return (
    <div 
    className="text-white">
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
        <Proyectos/>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default App
