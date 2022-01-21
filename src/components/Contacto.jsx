import{ sendForm } from '@emailjs/browser';
const enviarEmail = e => {
    e.preventDefault();
    sendForm('service_zids7to', 'template_ng7dfbm', e.target, 'user_fTgL6CyTsUZH1uY0AQTno')
}

const Contacto = () => {
    return (
        <section id="contacto" className="bg-white text-black pt-14">
            <div className="md:w-4/6 mx-auto">
                <h2 className="text-5xl font-bold text-center mb-14">Contáctame</h2>
                <form onSubmit={enviarEmail} className="w-80-max grid md:grid-cols-2 md:grid-rows-4 gap-4">
                    <textarea name="message" id="message" rows="8" required="required" 
                    placeholder="Tu mensaje..."
                    className="field row-start-3 md:row-span-4"
                    ></textarea>
                    <input type="text" name="name" placeholder="Tu nombre..." required="required" 
                    className="field"
                    />
                    <input type="email" name="user_email" id="" placeholder="Tu E-mail ..." required="required" 
                    className="field"
                    />
                    <input type="submit" value="Enviar" 
                    className="field cursor-pointer hover:bg-emerald-800 hover:text-white  md:row-start-4 md:col-start-2 "
                    />
                </form>
                <p className="text-center mt-10">O escríbeme a mi email personal <a className="text-emerald-700" href="mailto: marillancadaniel@gmail.com">marillancadaniel@gmail.com</a> </p>
            </div>

        </section>
    )
}

export default Contacto
