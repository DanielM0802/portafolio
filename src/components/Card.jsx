
const Card = ({source,titulo, tec, info, repo, sitio}) => {
    return (
        <div className="flex-center ">
            <div className="card">
                <div>
                    <div className="h-36" style={{backgroundImage: `url(${source})`,backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}>
                    </div>
                        <div className="px-6 py-4">
                            <h4 className="text-center font-bold pb-2">{titulo}</h4>
                            <p className="text-center pb-2 font-semibold text-gray-500">{tec}</p>
                            <p className="text-center" >{info}</p>
                        </div>
                    </div>

                <div className="pb-5 px-8 flex justify-between">
                            <a href={repo} target={'_blank'} className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold p-2 border-b-4 border-emerald-700 hover:border-emerald-500 rounded cursor-pointer">
                                Repositorio
                            </a>
                            <a href={sitio} target={'_blank'} className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold p-2 border-b-4 border-emerald-700 hover:border-emerald-500 rounded cursor-pointer">
                                Visualizar
                            </a>
                </div>

            </div>
        </div>
    )
}

export default Card
