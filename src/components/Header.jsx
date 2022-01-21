import logo from '../img/logo.svg'

const Header = () => {

    const handleMenu = () => {
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }
    return (
            <header className="bg-emerald-800 fixed w-full">
                <div className="w-5/6 mx-auto flex items-center justify-between flex-wrap py-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <a href="#"> <img src={logo} alt="logo" width={40} /></a>
                    </div>
                    <div className="block lg:hidden" onClick={handleMenu}>
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div className="w-full hidden lg:flex lg:items-center lg:w-auto" id="menu"> 
                        <nav className="text-sm lg:flex-grow text-white">
                            <a onClick={handleMenu} href="#about" className="block mt-4 lg:inline-block lg:mt-0 mr-8 link-header lg:px-2">
                            Sobre Mí
                            </a>
                            <a onClick={handleMenu} href="#skills" className="block mt-4 lg:inline-block lg:mt-0 mr-8 link-header lg:px-2">
                            Skills
                            </a>
                            <a onClick={handleMenu} href="#proyectos" className="block mt-4 lg:inline-block lg:mt-0 mr-8 link-header lg:px-2">
                            Proyectos
                            </a>
                            <a onClick={handleMenu} href="#contacto" className="block mt-4 lg:inline-block lg:mt-0 link-header lg:px-2">
                            Contacto
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
    )
}

export default Header
