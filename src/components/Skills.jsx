import html5 from '../img/skills/html5.svg'
import css3 from '../img/skills/css3.svg'
import javascript from '../img/skills/javascript.svg'
import git from '../img/skills/git.svg'
import mysql from '../img/skills/mysql.svg'
import react_icon from '../img/skills/react.svg'
import sass from '../img/skills/sass.svg'
import tailwindcss from '../img/skills/tailwindcss.svg'
import java from '../img/skills/java.svg'
import bootstrap from '../img/skills/bootstrap.svg'


const Skills = () => {
    return (
            <section id="skills" className="text-black flex-center pt-10 font-bold text-center bg-white mb-20 mt-10">
                <div>
                    <h3 className="text-5xl mb-10">Skills</h3>
                    <div className="skills w-80-max md:grid grid-cols-2 grid-rows-2 gap-6 ">
                            <div className="frontend skills-container">
                                <div>
                                    <h4 className="mb-2">Frontend</h4>
                                    <div className="grid grid-cols-3 gap-10">
                                        <div className="flex flex-col items-center">
                                            <img src={html5} alt="htm5-icon" width={60}  className="hover-skill"/>
                                            <p>HTML5</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img src={css3} alt="css3-icon" width={60} className="hover-skill" />
                                            <p>CSS3</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img src={javascript} alt="javascript-icon" width={60} className="hover-skill" />
                                            <p>Javascript</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="backend skills-container">
                                <div>
                                    <h4 className="mb-2">Backend</h4>
                                    <div className="flex gap-10">
                                        <div className="flex flex-col items-center">
                                            <img src={mysql} alt="mysql-icon" width={60} className="hover-skill" />
                                            <p>MySQL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 skills-container">
                                <div>
                                    <h4 className="mb-2">Frameworks y otras tecnologías</h4>
                                    <div className="grid grid-cols-3 md:flex gap-10">
                                        <div className="flex flex-col items-center">
                                            <img src={react_icon} alt="react-icon" width={60} className="hover-skill" />
                                            <p>React</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img src={tailwindcss} alt="htm5-icon" width={60} className="hover-skill" />
                                            <p>TailwindCSS</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img src={sass} alt="htm5-icon" width={60} className="hover-skill" />
                                            <p>Sass</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img src={bootstrap} alt="htm5-icon" width={60} className="hover-skill" />
                                            <p>Bootstrap</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img src={java} alt="htm5-icon" width={60} className="hover-skill" />
                                            <p>Java</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img src={git} alt="htm5-icon" width={60} className="hover-skill" />
                                            <p>Git</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
    )
}

export default Skills
