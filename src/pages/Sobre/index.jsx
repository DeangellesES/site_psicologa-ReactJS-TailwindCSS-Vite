import Cabecalho from "../../Components/Header";
import Rodape from "../../Components/Rodape";

import psicologa from "./assets/psicologa.jpg"

function Sobre() {
    return (
        <>
            <Cabecalho></Cabecalho>
            {/* SEÇÃO TOPO DA PÁGINA */}
            <section className="bg-cyan-900 flex h-330 pt-40 pb-10 px-10 items-center">
                <div className="w-500">
                    <img src={psicologa} alt="" className="w-140 h-180" />
                </div>
                <div className="bg-red-50 w-400 text-lg text-stone-700 text-justify p-12 flex flex-col gap-3">
                    <p><span className="text-cyan-900 text-5xl">Olá!</span> Sou Psicóloga.</p>
                    <p>Atuo na área clínica atendendo presencial e online com foco na abordagem de Analise do comportamento e Terapia Cognitiva Comportamental. Também tenho experiência na área organizacional, o que amplia o meu olhar para questões acerca do trabalho, integrando-as dentro da clínica.</p>
                    <p>Realizo orientação parental para mães atípicas, afim de ajuda-las no processo de entendimento e manejo comportamental.</p>
                    <p>Sou apaixonada por contribuir e promover saúde mental e desenvolvimento pessoal na vida das pessoas.</p>
                    <p>Entendo o quanto isso é importante para termos mais qualidade de vida. E meu objetivo é facilitar esse processo para que você possa viver com mais leveza e construir a vida que deseja, com mais significado.</p>
                    <p>Como psicoterapeuta espero te ajudar nesse caminho. Ficarei feliz em contribuir! Entre em contato e saiba mais.</p>
                    <h1 className="text-cyan-900 text-center text-3xl">Abordagem</h1>
                    <p className="font-semibold">• Terapia Cognitivo Comportamental (TCC) – A Terapia Cognitivo Comportamental é uma abordagem psicológica eficaz, focada em identificar e modificar padrões de pensamentos e comportamentos que causam sofrimento, com base em evidências científicas.</p>
                    <h1 className="text-cyan-900 text-center text-3xl">Especializações</h1>
                    <p className="font-semibold">• Análise do Comportamento Aplicada (ABA) – É uma abordagem científica que identifica como o ambiente influencia comportamentos e como modifica-los de forma eficaz. Por meio de técnicas estruturadas, a ABA ajuda a:</p>
                    <p className="font-semibold">• Psicologia Organizacional (Desenvolvimento de lideranças, saúde mental no trabalho e gestão de carreira).</p>
                    <p className="font-semibold">• Neuropsicologia – Estuda a relação entre o cérebro e o comportamento humano. Através de avaliações e intervenções especializadas</p>
                </div>
            </section>
            {/* FIM TOPO DA PÁGINA */}
            {/* INICIO SEÇÃO VALORES */}
            <section className="text-center py-10 text-lg text-cyan-900 font-semibold">
                <h1>Valores</h1>
                <p>Ética / Sigilo e profissionalismo.</p>
                <p>Empatia / Escuta ativa e acolhimento</p>
                <p>Ciência / Terapias baseadas em evidências</p>
                <p>“Os pensamentos influenciam emoções, que influenciam comportamentos. Mude seus pensamentos e você mudará sua vida” Aaron Beck.</p>
            </section>
            {/* FIM SEÇÃO VALORES */}
            <Rodape></Rodape>
        </>
    )
}

export default Sobre 