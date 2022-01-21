import instagram from '../img/instagram.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import perfil from '../img/border-emerald-2.png'
import wave1 from '../img/wave-1.svg'
 import { useEffect } from 'react';


const Hero = () => {

    useEffect( () => { //Consultando solo una vez

        const cambiarLetra = () => { 
            const letra = document.querySelector('.letra');
            setInterval(() => {
                letra.textContent= letra.textContent == 'o!' ? 'a!' : 'o!';
                console.log(letra.textContent)
            }, 2000);
        }

    
        cambiarLetra();
      }, [] );

    return (
        <section className="bg-emerald-800 pt-24 mb-5">
            <div className="pt-10 md:flex justify-between w-5/6 mx-auto mb-36 pb-12">
                
                <div className="text-5xl  font-bold text-center md:text-left md:text-7xl">    
                    <h1>Bienvenid<span className="letra text-emerald-400">o!</span><span className="block">a mi página web</span></h1>
                    <h3 className="text-center font-semibold text-2xl md:max-w-[350px] my-6 md:text-left" >Mi nombre es Daniel y soy desarrollador frontend junior</h3>
                    <div className="social-media max-w-[250px] mx-auto md:ml-0">
                        <div className="grid grid-cols-3 gap">
                            <a href="">
                                <img className="icon-social" src={instagram} alt="instagram-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/daniel-marillanca-015a71213" target={'_blank'}>
                                <img className="icon-social" src={linkedin} alt="linkedin-icon" />
                            </a>
                            <a href="https://github.com/DanielM0802" target={'_blank'}>
                            <img className="icon-social" src={github} alt="github-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-0 flex md:block justify-center">
                    <img className="w-max-60" src={perfil} alt="imagen-perfil" width={270} height={270} />
                </div>
            </div>

        <img src={wave1} alt="wave" className="w-screen bg-emerald-800"/>
      </section>
    )
}

export default Hero
