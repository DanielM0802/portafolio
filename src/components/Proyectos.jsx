import todo from '../img/proyectos/todo.png'
import veterinaria from '../img/proyectos/veterinaria.png'
import blogr from '../img/proyectos/blogr.png'
import peluqueria from '../img/proyectos/peluqueria.png'
import clima from '../img/proyectos/clima.png'
import rockedm from '../img/proyectos/rockedm.png'
import Card from './Card'
import wave3 from '../img/wave-3.svg'
import wave2 from '../img/wave-2.svg'




const Proyectos = () => {
    return (
        <div className="bg-emerald-800">
        <img src={wave2} alt="wave2" className="w-screen bg-white"/>
            <section id="proyectos" className="md:w-5/6 mx-auto pt-5">
            <h2 className="text-5xl font-bold text-center mb-10">Mis Proyectos</h2>
            
            <div className="w-full flex snap-x overflow-x-auto pb-10">
                <div className="snap-center shrink-0 pl-5">
                </div>
                <div className="snap-item">
                    <Card
                        source = {todo}  
                        titulo =  "Todo List"
                        tec =  "HTML5 - CSS3 - Javascript - React - TailwindCSS"
                        info = "Aplicacion que permite crear, ordenar, y filtrar tareas pendientes!"
                        repo= "https://github.com/DanielM0802/todo-app-react"
                        sitio="https://todo-app-react01.netlify.app"
                    />
                </div>
                <div className="snap-item">
                    <Card
                        source = {veterinaria}  
                        titulo =  "Administrador de Pacientes"
                        tec =  "HTML5 - CSS3 - Javascript - React - TailwindCSS"
                        info = "Seguimiento de pacientes que contiene las funciones del CRUD e integración con LocalStorage."
                        repo= "https://github.com/DanielM0802/citas-app"
                        sitio="https://citas-app-react01.netlify.app"
                    />
                </div>
                <div className="snap-item">
                    <Card
                        source = {blogr}  
                        titulo =  "Blogr Landing Page"
                        tec =  "HTML5 - CSS3 - Javascript"
                        info = "Landing page con posicionamiento de vectores svg y diseño responsive."
                        repo = "https://github.com/DanielM0802/blogr-landing-page"
                        sitio = "https://naughty-meninsky-898fb5.netlify.app"
                    />
                </div>
                <div className="snap-item">
                    <Card
                        source = {peluqueria}  
                        titulo =  "App Peluqueria"
                        tec =  "HTML5 - CSS3 - Javascript"
                        info = "Aplicación que permite reservar horarios y servicios en una peluquería."
                        repo = "https://github.com/DanielM0802/peluqueria-js"
                        sitio = "https://adoring-shirley-df0947.netlify.app"
                    />
                </div>
                <div className="snap-item">
                    <Card
                        source = {clima}  
                        titulo =  "Clima React App"
                        tec =  "HTML5 - CSS3 - React"
                        info = "Aplicación que permite consultar el clima de diferentes ciudades usando una API."
                        repo = "https://github.com/DanielM0802/clima-react-app"
                        sitio = "https://clima-react-app01.netlify.app"
                    />
                </div>
                <div className="snap-item">
                    <Card
                        source = {rockedm}  
                        titulo =  "Rock & EDM Festival"
                        tec =  "HTML5 - CSS3 - Javascript"
                        info = "Página web responsive con background animado y galería de imágenes."
                        repo = "https://github.com/DanielM0802/festival-musica-site"
                        sitio = "https://festival-musica-site.netlify.app"
                    />
                </div>
                <div className="snap-center shrink-0">
                <div className="shrink-0 w-4 sm:w-48"></div>
                </div>
                </div>
            </section>


        <img src={wave3} alt="wave-3" className="w-screen mt-20"/>

        </div>
    )
}

export default Proyectos
