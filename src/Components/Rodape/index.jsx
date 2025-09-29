import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import simPsicologia from "./assets/simbolo.png"

import { Link } from "react-router-dom";

function Rodape() {
    return (
        <footer className="flex bg-gradient-to-r from-violet-400 to-pink-100 justify-around items-center h-100">
            <div className="w-30 pl-8">
                <div className="flex w-24 h-15 items-center justify-center gap-4 ">
                    <img className="w-16" src={simPsicologia} />
                    <h1 className="text-3xl text-blue-900">Patrícia Pisicóloga</h1>
                </div>
            </div>

            <div className="w-185">
                <h1 className="text-2xl text-cyan-900 text-center" >Código de ética Profissional do Psicólogo</h1>
                <p className="text-cyan-900 text-center mb-40">Atenção, Este site não oferece atendimento imediato a pessoas em crise suicida. Em caso de crise ligue para o CVV - Centro de Valorização da vida (telefone 188) ou acesse o site: www.cvv.org.br. Em caso de emergência, procure o hospital mais próximo. Havendo risco de morte, Ligue imediatamente para o SAMU (telefone 192).</p>
                <p className="text-cyan-900 text-center mt-15">© 2025 Todos os direitos reservados à Psicóloga Patrícia | Criado por Felipe</p>
            </div>
            <div className="flex flex-col gap-2 text-center w-35">
                <Link to="/" href="" className="text-xl bg-sky-800 w-28 text-stone-50 rounded-md p-1 hover:scale-125">Home</Link>
                <Link to="/sobre" href="" className="text-xl bg-sky-800 w-28 text-stone-50 rounded-md p-1 hover:scale-125">Sobre mim</Link>
                <div className="flex gap-4">
                    <FaWhatsapp className="text-4xl bg-lime-600 text-stone-50 rounded-md p-1 cursor-pointer hover:scale-125" />
                    <FaLinkedinIn className="text-4xl bg-sky-800 text-stone-50 rounded-md p-1 cursor-pointer hover:scale-125" />
                    <FaInstagram className="text-4xl bg-red-400 text-stone-50 rounded-md p-1 cursor-pointer hover:scale-125" />
                </div>
            </div>
        </footer>
    )
}

export default Rodape