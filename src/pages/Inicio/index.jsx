import psciologa from "./assets/psicologa.jpg"
import online from "./assets/online.jpg"
import casal from "./assets/casal.jpg"
import terapia from "./assets/terapia.jpg"
import homemCaminhando from "./assets/caminhando.jpg"
import criancaTerapia from "./assets/criancaTerapia.jpg"
import cansada from "./assets/cansada.jpg"

import Cabecalho from "../../Components/Header";
import Rodape from "../../Components/Rodape";

import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Inicio() {
    return (
        <>
            <Cabecalho></Cabecalho>
            {/* INICIO SEÇAO TOPO */}
            <section className="flex flex-col gap-8 h-170 items-center justify-center bg-gradient-to-r from-violet-400 to-pink-100">
                <div>
                    <h1 className="text-7xl w-160 text-center text-cyan-900 font-semibold mb-6">Psicóloga Clínica & Organizacional</h1>
                    <h3 className="text-2xl text-center text-cyan-900 font-semibold mb-20">Especialista em comportamento e Neurociências</h3>
                    <a href="" className="text-2xl text-red-50 mb-6 bg-sky-800 rounded-2xl p-2 pb-3 ml-55 hover:bg-sky-500">Entre em contato</a>
                </div>

                <div className="flex gap-4 ml-210">
                    <FaWhatsapp className="text-5xl bg-lime-600 text-stone-50 rounded-xl p-1 cursor-pointer hover:scale-135" />
                    <FaLinkedinIn className="text-5xl bg-sky-800 text-stone-50 rounded-xl p-1 cursor-pointer hover:scale-135" />
                    <FaInstagram className="text-5xl bg-red-400 text-stone-50 rounded-xl p-1 cursor-pointer hover:scale-135" />
                </div>
            </section>
            {/* FIM SEÇAO TOPO */}

            {/* INICIO SEÇÃO APRESENTAÇÃO */}
            <section className="grid grid-cols-[800px_minmax(550px,_1fr)_100px] items-center shadow-2xl">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl text-cyan-900 text-center mb-5">Olá! Sou Patrícia</h1>
                    <p className="text-2xl w-130 text-justify mb-10 text-stone-700">Psicóloga formada pela universidade ficticia e atuo com foco em saúde mental, desenvolvimento pessoal, relacionamentos e autoconhecimento. Tenho experiência no atendimento a adolescentes, adultos e idosos, utilizando uma abordagem cognitivo-comportamental, psicanalítica, humanista para promover o bem-estar emocional e auxiliar meus pacientes em seus processos de transformação e crescimento.
                        Acredito em um atendimento empático, ético e personalizado, respeitando sempre a individualidade de cada pessoa. Estou aqui para te ajudar a lidar com desafios, encontrar novos caminhos e fortalecer sua saúde mental.
                        Seja bem-vindo(a)!</p>
                    <a href="" className="bg-cyan-900 text-red-50 py-1 px-4 text-2xl rounded-xl pb-2 hover:scale-125 hover:opacity-40">Saiba mais</a>
                </div>
                <div className="flex bg-cyan-900 ">
                    <img className="p-20" src={psciologa} alt="" />
                </div>
            </section>
            {/* FIM SEÇÃO APRESENTAÇÃO */}

            {/* INICIO SEÇÃO ATENDIMENTO */}
            <section className="p-10">
                <h1 className="text-7xl text-cyan-900 text-center mb-10 font-semibold">Atendimentos</h1>
                <div className="flex flex-wrap gap-13">
                    <div className="w-150 p-7 shadow-[0_15px_15px_rgba(0,0,0,0.35)] rounded-3xl h-fit">
                        <h1 className="text-2xl text-cyan-900 ml-20 mb-2">Terapia online</h1>
                        <div className="flex gap-7">
                            <img src={online} alt="" className="w-60 h-60 rounded-3xl" />
                            <p className="text-justify text-stone-700">A consulta psicológica online é uma modalidade de atendimento autorizado pelo conselho federal de psicologia, trata-se de um atendimento realizado por profissional especializado para ajudar pessoas de toda parte do mundo a aliviarem suas angústias e encontrarem novos recursos para se realizarem nos diversos âmbitos da vida.</p>
                        </div>
                    </div>
                    <div className="w-150 p-7 shadow-[0_15px_15px_rgba(0,0,0,0.35)] rounded-3xl h-fit">
                        <h1 className="text-2xl text-cyan-900 ml-20 mb-2">Terapia convencional</h1>
                        <div className="flex gap-7">
                            <img src={terapia} alt="" className="w-60 h-60 rounded-3xl" />
                            <p className="text-justify">Terapia convencional para adolescentes e adultos é um processo de acompanhamento que ajuda a lidar com desafios emocionais, comportamentais e mentais. Ela promove autoconhecimento, mudança de padrões negativos e desenvolvimento de habilidades para enfrentar crises.</p>
                        </div>
                    </div>
                    <div className="w-150 p-7 shadow-[0_15px_15px_rgba(0,0,0,0.35)] rounded-3xl h-fit">
                        <h1 className="text-2xl text-cyan-900 ml-20 mb-2">Terapia de Casal</h1>
                        <div className="flex gap-7">
                            <img src={casal} alt="" className="w-60 h-60 rounded-3xl" />
                            <p className="text-justify">A maior dificuldade que os casais tém hoje em dia é estabelecer um diálogo aberto e saudável. Durante a terapia, o casal descobre junto a oportunidade de rever seus valores por meio da conversa franca em um cenário propicio para a escuta e a mudança de comportamento.
                                A terapia não é só para casais "em crise", pode ser um espaço de crescimento conjunto. O sucesso depende do comprometimento de ambos em mudar dinâmicas prejudiciais.</p>
                        </div>
                    </div>
                    <div className="w-150 p-7 shadow-[0_15px_15px_rgba(0,0,0,0.35)] rounded-3xl h-fit">
                        <h1 className="text-2xl text-cyan-900 ml-20 mb-2 rounded-3xl">Terapia ABA</h1>
                        <div className="flex gap-7">
                            <img src={criancaTerapia} alt="" className="w-60 h-60 rounded-3xl" />
                            <p className="text-justify">A Terapia ABA (Applied Behavior Analysis) é uma abordagem científica baseada nos princípios da aprendizagem e do comportamento, frequentemente utilizada para ajudar pessoas com Transtorno do Espectro Autista (TEA) e outras condições do desenvolvimento. Com o objetivo de : Ensinar habilidades (comunicação, socialização, autonomia). Redução de comportamentos desafiadores ( agressividade, autoestimulação excessiva, birras). Usar reforço positivo para motivar a aprendizagem.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* FIM SEÇÃO ATENDIMENTO */}

            {/* INICIO SEÇÃO SAIBA MAIS */}
            <section className="bg-cyan-900 p-6">
                <h1 className="text-6xl text-center text-red-50">Saiba mais!</h1>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="w-screen flex justify-center items-center rounded-2xl p-13 pr-29">
                            <div className="h-fit items-center w-140 flex flex-col gap-5 bg-red-50 p-13 z-0">
                                <h1 className="text-3xl text-center text-cyan-900">Quando devemos procurar um psicólogo?</h1>
                                <img src={homemCaminhando} alt="" className="w-80 h-100 rounded-xl" />
                                <p className="w-full text-justify">No mundo agitado de hoje, onde o estresse e as pressões são constantes, cuidar da saúde mental tornou-se tão importante quanto cuidar da saúde física.
                                    Assim como é essencial conhecer primeiro socorros para as emergências físicas, é importante saber e entender quando procurar ajuda profissional para a saúde mental.</p>
                                <a href="" className="bg-cyan-900 text-red-50 py-1 px-4 text-2xl rounded-xl hover:scale-125 hover:opacity-40 pb-2">Saiba mais</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-screen flex justify-center items-center rounded-2xl p-13 pr-29">
                            <div className="h-fit items-center w-140 flex flex-col gap-5 bg-red-50 p-13 z-0">
                                <h1 className="text-3xl text-center text-cyan-900">Burnout: O que ninguém te conta</h1>
                                <img src={cansada} alt="" className="w-80 h-100 rounded-xl" />
                                <p className="w-full text-justify">Burnout não é só "cansado" – é um estado de esgotamento neurobiológico que pode levar a: Queda de testosterona (em homens e mulheres), afetando libido e energia. Envelhecimento celular acelerado (telômeros mais curtos = sinais precoces de envelhecimento). Disfunção imunológica (mais gripes, alergias e inflamações).</p>
                                <a href="" className="bg-cyan-900 text-red-50 py-1 px-4 text-2xl rounded-xl hover:scale-125 hover:opacity-40 pb-2">Saiba mais</a>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>
            {/* FIM SEÇÃO SAIBA MAIS */}
            <Rodape></Rodape>
        </>

    )
}

export default Inicio