
const About = () => {
    return (
    <section id="about" className="bg-white pt-20">
        <div className=" text-black text-center container md:w-4/6 mx-auto">
            <div className="about text-xl">
                <h3 className="text-5xl font-bold mb-10">Sobre mí</h3>
                <div className="descripcion">
                    <p>¡Hola! Mi nombre es Daniel Marillanca y tengo 19 años. Actualmente me encuentro cursando el 3 año de la carrera de Ingeniería Informática en la Universidad de la Frontera.</p>
                    <p>Mi principal objetivo es poner en práctica las tecnologías que he ido aprendiendo tanto en mi carrera como de forma autodidacta.</p>
                    <p>Tengo una gran pasión por el desarrollo de software, siempre trato de mejorar cada día aprendiendo nuevas habilidades y poniendolas en práctica mediante proyectos personales.
                    </p>
                </div>
                <a href="https://www.dropbox.com/s/kv4odq3zh223fzi/Marillanca_Daniel_CV.pdf?dl=1" target={"_blank"}>
                    <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-full mt-10">Descargar CV</button>
                </a>
            </div>
        </div>
    </section>
    )
}

export default About
