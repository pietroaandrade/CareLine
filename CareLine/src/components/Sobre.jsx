import "./Sobre.css"
import Header from "./Header"
import Footer from "./footer"
import { useState } from "react";

export default function Sobre() {
    const [activeIndex, setActiveIndex] = useState(0);

    
    const contentData = [
        {
            title: "Comunicação",
            img: "./images/arizona.jpg",
            text: "Com nosso painel de gestão em tempo real a equipe pode contornar e reagir rapidamente a gargalos, remanejando equipes e tomando decisões baseadas em dados."
        },
        {
            title: "Tempo",
            img: "./images/sss.jpg",
            text: "O canal digital de informações diminui a sobrecarga em balcões, informações clínicas autorizaddas podem ser acessadas via smartphone "
        },
        {
            title: "Eficiência",
            img: "./images/laser.jpg",
            text: "O sistema de feedback imediato do paciente coleta dados a todo momento, gerando indicadores contínuos dde qualidade e possíveis falhas."
        }
    ];

    const handleH1Click = (index) => {
        setActiveIndex(index);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    };

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + contentData.length) % contentData.length);
    };

    return (
        <>
            <Header />
            <div className="banner-img-sobre">
                <div className="content-img-sobre">
                    <p>Sobre Nós</p>
                    <h1>Sistema Inteligente de apoio a operação hospitalar</h1>
                    <p>CareLine, desenvolvida para melhorar a comunicação entre a equipe médica e pacientes em tempo real. 100% Integrada em conjunto com sistemas já existentes.</p>
                </div>
            </div>
            <div className="sobre-2">
                <div className="circle-btn">
                    <button onClick={handlePrevious}><img src="./images/arrow-back.png" alt="arrow" /></button>
                    <button onClick={handleNext}><img src="./images/arrow-forward.png" alt="arrow" /></button>
                </div>
                <div className="carousel">
                    <div>
                        {contentData.map((content, index) => (
                            <h1 
                                key={index} 
                                className={activeIndex === index ? 'active' : ''} 
                                onClick={() => handleH1Click(index)}
                            >
                                {content.title}
                            </h1>
                        ))}
                    </div>
                    <img src={contentData[activeIndex].img} alt={contentData[activeIndex].title} />
                    <p>{contentData[activeIndex].text}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}