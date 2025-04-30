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
            <div className="sobre-3">
                <img src="./images/nissan.webp" alt="Doctor caring for kid" />
                <h3>
                    Somos uma camada de <span>inteligência aplicada a operação hospitalar diária</span>,<br /> projetada para reduzir atritos, aumentar previsibilidade e <br />fortalecer a governança clínica
                </h3>  
            </div>
            <section className="sec-6">
                    <div className="container">
                        <h1>Transforme o seu negócio <br /> da área da saúde por <br /> meio da tecnologia. <br /> <span>Junte-se à CareLine!</span></h1>
                        <p>
                            Quando você leva a CareLine para dentro da sua <br /> empresa, recebe mais do que soluções de <br /> ponta;   
                            <span>
                                recebe a parceria estratégica de uma <br /> companhia com expertise em tecnologia para <br /> a área da saúde.
                            </span>
                            <br />
                            <br /> Preencha o formulário e solicite agora mesmo <br /> um contato comercial. Temos a solução certa <br /> esperando por você!   
                        </p>
                        <img src="./images/docpent.png" alt="Doutor homem sorrindo frame pentagono" />
                    </div>

                    <div>
                        <div className="form-container">
                            <form>
                                <div>
                                    <label htmlFor="name">Nome*</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div>
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone">Telefone*</label>
                                    <div className="phone-container">
                                        <select id="country-code" name="country-code">
                                            <option value="55">Brasil (+55)</option>
                                        </select>
                                        <input type="tel" id="phone" name="phone" required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company">Empresa*</label>
                                    <input type="text" id="company" name="company" required />
                                </div>

                                <div className="QA">
                                    <label htmlFor="profile">Qual seu perfil?*</label>
                                    <select id="profile" name="profile" required>
                                        <option value="">Selecione</option>
                                        <option value="perfil1">Perfil 1</option>
                                        <option value="perfil2">Perfil 2</option>
                                    </select>
                                
                                    <label htmlFor="solution">Qual solução CareLinee te interessa?*</label>
                                    <select id="solution" name="solution" required>
                                        <option value="">Selecione</option>
                                        <option value="solucao1">Solução 1</option>
                                        <option value="solucao2">Solução 2</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="comments">Comente um pouco mais sobre como podemos te ajudar.</label>
                                    <textarea id="comments" name="comments" rows="2"></textarea>
                                </div>

                                <label>
                                    <input type="checkbox" name="privacy" required />
                                    Estou de acordo com a Política de Privacidade!
                                </label>
                                <a href="#" type="submit"><button><span>Solicitar Demonstração</span></button></a>
                                
                            </form>
                        </div>
                    </div>
                </section>
            <Footer />
        </>
    );
}