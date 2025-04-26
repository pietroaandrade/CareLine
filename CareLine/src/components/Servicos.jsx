import "./Servicos.css"
import Header from "./Header"
import Footer from "./footer"
import { useState } from "react"
import { Link } from "react-router"

export default function Servicos(){
    const [activeContainer, setActiveContainer] = useState(null);
    const [activeButton, setActiveButton] = useState('container1');

    const containerData = {
        container1: {
            title: "Painel de Gestão Operacional em Tempo Real",
            buttonTexts: {
                button1: "Redução de tempo",
                button2: "Priorização automática",
                button3: "Visualização centralizada"
            },
            displayContent: {
                button1: {
                    title: "Redução de tempo ocioso no atendimento com insights acionáveis em tempo real.",
                    items: [
                        "Monitoramento dinâmico: Visualize em tempo real o fluxo de pacientes e os tempos de espera, facilitando ajustes instantâneos.",
                        "Identificação de gargalos: Detecta automaticamente pontos de sobrecarga no atendimento para ações corretivas imediatas.",
                        "Tomada de decisão baseada em dados: Suporte visual para decisões clínicas e operacionais mais assertivas e ágeis."
                    ]
                },
                button2: {
                    title: "Sistema de priorização inteligente para otimizar o fluxo de atendimento.",
                    items: [
                        "Algoritmos de priorização: Classifica automaticamente os casos baseado em critérios clínicos.",
                        "Notificações em tempo real: Mantém acompanhantes informados sobre o status do paciente.",
                        "Comunicação bidirecional: Permite feedback e atualizações instantâneas."
                    ]
                },
                button3: {
                    title: "Dashboard unificado para gestão eficiente do pronto-socorro.",
                    items: [
                        "Visão 360°: Acompanhe todos os aspectos do atendimento em uma única tela.",
                        "Métricas em tempo real: Acompanhe indicadores de desempenho e satisfação.",
                        "Relatórios personalizados: Gere análises detalhadas para tomada de decisão."
                    ]
                }
            }
        },
        container2: {
            title: "Canal Digital de Comunicação com Acompanhantes",
            buttonTexts: {
                button1: "Comunicação em tempo real",
                button2: "Notificações automáticas",
                button3: "Feedback instantâneo"
            },
            displayContent: {
                button1: {
                    title: "Comunicação em tempo real com acompanhantes e pacientes.",
                    items: [
                        "Chat integrado: Permite comunicação direta entre equipe médica e acompanhantes.",
                        "Status automático: Atualizações automáticas sobre o estado do paciente.",
                        "Histórico completo: Acesso ao histórico de todas as interações."
                    ]
                },
                button2: {
                    title: "Sistema de notificações automáticas para acompanhantes.",
                    items: [
                        "Alertas personalizados: Configure notificações específicas para cada caso.",
                        "Multiplataforma: Receba notificações em qualquer dispositivo.",
                        "Histórico de notificações: Acompanhe todas as comunicações enviadas."
                    ]
                },
                button3: {
                    title: "Feedback imediato para melhorar a experiência.",
                    items: [
                        "Avaliações em tempo real: Coleta de feedback após cada interação.",
                        "Métricas de satisfação: Acompanhamento de indicadores de qualidade.",
                        "Melhorias contínuas: Implementação de sugestões dos usuários."
                    ]
                }
            }
        },
        container3: {
            title: "Sistema de Feedback Imediato do Paciente",
            buttonTexts: {
                button1: "Avaliações em tempo real",
                button2: "Métricas de satisfação",
                button3: "Melhorias contínuas"
            },
            displayContent: {
                button1: {
                    title: "Coleta de feedback em tempo real dos pacientes.",
                    items: [
                        "Formulários dinâmicos: Adaptáveis ao tipo de atendimento.",
                        "Respostas instantâneas: Feedback imediato da experiência.",
                        "Análise automática: Processamento inteligente das respostas."
                    ]
                },
                button2: {
                    title: "Acompanhamento de métricas de satisfação.",
                    items: [
                        "Dashboard de satisfação: Visualização clara dos indicadores.",
                        "Comparativos históricos: Análise da evolução ao longo do tempo.",
                        "Alertas automáticos: Notificações para casos de baixa satisfação."
                    ]
                },
                button3: {
                    title: "Implementação de melhorias baseadas em feedback.",
                    items: [
                        "Plano de ação: Estratégias para melhorar a experiência.",
                        "Acompanhamento: Monitoramento das mudanças implementadas.",
                        "Resultados: Análise do impacto das melhorias."
                    ]
                }
            }
        }
    };

    const handleContainerClick = (containerId) => {
        setActiveContainer(containerId);
        setActiveButton('button1'); 
    };

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const getCurrentContent = () => {
        if (!activeContainer) return containerData.container1.displayContent.button1;
        return containerData[activeContainer].displayContent[activeButton];
    };

    return (
        <>  
            <Header />
            <div className="banner-img">
                <div className="content-img">
                    <p>SOLUÇÃO SUSTENTÁVEL</p>
                    <h1> Sustentavelmente pensado para   combater aumentos de CO2</h1>
                    <p>Feito para combater o rápido crescimeto da demanda energética e   moldar o futuro no uso de energias renováveis — Com 95% material reciclado</p>
                </div>
            </div>
            <section className="sec-1">
                    <img src="./images/nissan.webp" alt="Doctor caring for kid" />
                    <h3>
                        A CareLine oferece tecnologia para gestão hospitalar eficiente,<br /> comunicação transparente com acompanhantes e coleta de feedback em tempo real. 
                        <br /> Nossas soluções <span>otimizam</span> o atendimento,  reduzem o estresse dos pacientes e<br /> 
                        transparente, redução do estresse dos pacientes <br /> aumentam a qualidade dos serviços, unindo <span> inovação e humanização<br /> 
                        no dia a dia hospitalar.</span>
                    </h3> 
            </section>
            <section className="servico-1">
                    <div> 
                        <h3>
                            integra <span>dados em tempo real</span>, permitindo  <br /> <span>acesso rápido a laudos</span>, prescrições e  <br /> <span>status dos pacientes</span>.
                            <br /> 
                            <br /> Reduza o tempo de espera e melhore <br /> a comunicação, com um sistema que evolui  <br /> junto com a eficiência hospitalar.
                        </h3>
                    </div>
                    <img src="./images/service.webp" alt="Doctor with ipad" />
            </section>
            <section className="servico-4">
                <div className={`container-1 ${activeContainer === 'container1' ? 'active' : ''}`} 
                     onClick={() => handleContainerClick('container1')}>
                    <div className="number-container">
                        <p>#1</p>
                        <img src="../../images/icon-background.png" alt="icon" />
                    </div>
                    <h1>{containerData.container1.title}</h1>
                </div>
                <div className={`container-2 ${activeContainer === 'container2' ? 'active' : ''}`} 
                     onClick={() => handleContainerClick('container2')}>
                    <div className="number-container">
                        <p>#2</p>
                        <img src="../../images/icon-background.png" alt="icon" />
                    </div>
                    <h1>{containerData.container2.title}</h1>
                </div>
                <div className={`container-3 ${activeContainer === 'container3' ? 'active' : ''}`} 
                     onClick={() => handleContainerClick('container3')}>
                    <div className="number-container">
                        <p>#3</p>
                        <img src="../../images/icon-background.png" alt="icon" />
                    </div>
                    <h1>{containerData.container3.title}</h1>
                </div>
            </section>
            <section className="servico-5">
                
            
                <div className="card-section">
                    <div className="content-button">
                        <button 
                            className={`button ${activeButton === 'button1' ? 'active' : ''}`} 
                            onClick={() => handleButtonClick('button1')}
                        >
                            <h3>{containerData[activeContainer || 'container1'].buttonTexts.button1}</h3>
                        </button>
                        <button 
                            className={`button ${activeButton === 'button2' ? 'active' : ''}`} 
                            onClick={() => handleButtonClick('button2')}
                        >
                            <h3>{containerData[activeContainer || 'container1'].buttonTexts.button2}</h3>
                        </button>
                        <button 
                            className={`button ${activeButton === 'button3' ? 'active' : ''}`} 
                            onClick={() => handleButtonClick('button3')}
                        >
                            <h3>{containerData[activeContainer || 'container1'].buttonTexts.button3}</h3>
                        </button>
                    </div>
                    <div className="card-title">
                        <h1>{getCurrentContent().title}</h1>
                    </div>
                    <div className="display-cards">
                        
                            <div className="card">
                                <div>
                                    <p>01</p>
                                    <img src="./images/feed.png" alt="Imagem 1"/>
                                </div>
                                <h1>{getCurrentContent().items[0]}</h1>
                            </div>
                        
                        
                            <div className="card">
                                <div>
                                    <p>02</p>
                                    <img src="./images/megafone.png" alt="Imagem 1" className="card-image"/>
                                </div>
                                <h1>{getCurrentContent().items[1]}</h1>
                            </div>
                        
                        
                            <div className="card">
                                <div>
                                    <p>03</p>
                                    <img src="./images/feedback.png" alt="Imagem 1" className="card-image"/>
                                </div>
                                
                                <h1>{getCurrentContent().items[2]}</h1>
                            </div>
                        
                    </div>

                </div>


                
            </section>

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
    )
}