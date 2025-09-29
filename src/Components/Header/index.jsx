import simPsicologia from "./assets/simbolo.png"

import { Link } from "react-router-dom";

function Cabecalho() {
    return (
        <header className="flex justify-between items-center p-6 pr-15 bg-yellow-50 border-b-1 shadow-md fixed w-full z-10">
            <Link href="" to="/">
                <div className="flex w-14 h-15 items-center gap-4">
                <img className="w-14" src={simPsicologia}/>
                <h1 className="text-3xl text-blue-900">Patrícia Pisicóloga</h1>
            </div>
            </Link>
            <nav>
                <ul className="flex gap-8">
                    <Link to="/" className="text-cyan-900 text-2xl p-1 pb-2 px-2 rounded-lg hover:scale-125 hover:bg-sky-700 hover:text-red-50"><a href="">Home</a></Link>
                    <Link to="/sobre" className="text-cyan-900 text-2xl p-1 pb-2 px-2 rounded-lg hover:scale-125 hover:bg-sky-700 hover:text-red-50"><a href="">Sobre Mim</a></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecalho