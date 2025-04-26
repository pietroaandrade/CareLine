import "./Servicos.css"
import Header from "./Header"
import Footer from "./footer"
import { useState } from "react"

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
            <section className="sec-1">
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
            <section className="sec-2-servicos">
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
                <div className="content-display">
                    <h1>{getCurrentContent().title}</h1>
                    <ul>
                        {getCurrentContent().items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}