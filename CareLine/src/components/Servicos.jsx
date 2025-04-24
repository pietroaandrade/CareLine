import "./Servicos.css"

export default function Servicos(){
    return (
        <>
            <section className="sec-1">
                <div className="container-1">
                    <div className="number-container">
                        <p>#1</p>
                        <img src="../../images/icon-background.png" alt="icon" />
                    </div>
                    <h1>Painel de Gestão Operacional <br />em Tempo Real</h1>
                </div>
                <div className="container-2">
                    <div className="number-container">
                        <p>#2</p>
                        <img src="../../images/icon-background.png" alt="icon" />
                    </div>
                    <h1>Canal Digital de Comunicação <br />com Acompanhantes</h1>
                </div>
                <div className="container-3">
                    <div className="number-container">
                        <p>#3</p>
                        <img src="../../images/icon-background.png" alt="icon" />
                    </div>
                    <h1>Sistema de Feedback Imediato <br />do Paciente</h1>
                </div>
            </section>
            <section className="sec-2">
                <div className="content-button">
                    <div className="button">
                        <h3>Redução de tempo</h3>
                    </div>
                    <div className="button">
                        <h3>Priorização automática</h3>
                    </div>
                    <div className="button">
                        <h3>Visualização centralizada</h3>
                    </div>
                </div>
                <div className="content-display">
                    <h1>Redução de tempo ocioso no atendimento com insights acionáveis em tempo real.</h1>
                    <ul>
                        <li>Monitoramento dinâmico: Visualize em tempo real o fluxo de pacientes e os tempos de espera, facilitando ajustes instantâneos.</li>
                        <li>Identificação de gargalos: Detecta automaticamente pontos de sobrecarga no atendimento para ações corretivas imediatas.</li>
                        <li>Tomada de decisão baseada em dados: Suporte visual para decisões clínicas e operacionais mais assertivas e ágeis.</li>
                    </ul>
                </div>

            </section>
        
        </>
    )
}