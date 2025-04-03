import "./Landing.css"

export default function Main() {
    return (
        <>
            <main>
                <section className="sec-1">
                    <img src="https://www.indiancrestpeds.com/wp-content/uploads/2016/07/6-Ways-a-Westminster-Pediatrician-Can-Help-.jpg" alt="Doctor caring for kid" />
                    <h3>
                        Muitos sistemas são limitados e não <br /> focam na experiência do paciente de pronto-socorro. 
                        <br /> Com a <span>CareLine</span>, é diferente. Você oferece comunicação <br /> transparente, redução do estresse dos pacientes <br /> e  
                        humanização do pronto-socorro,<span> garantindo <br /> eficiência e otimização do atendimento.</span>
                    </h3>
                </section>

                <section className="sec-2">
                    <div> 
                        <h3>
                            integra <span>dados em tempo real</span>, permitindo  <br /> <span>acesso rápido a laudos</span>, prescrições e  <br /> <span>status dos pacientes</span>.
                            <br /> 
                            <br /> Reduza o tempo de espera e melhore <br /> a comunicação, com um sistema que evolui  <br /> junto com a eficiência hospitalar.
                        </h3>
                        <a href="#"><button><span> Melhor Pronto-Socorro </span></button></a>
                    </div>
                    <img src="https://media.istockphoto.com/id/1366374033/photo/shot-of-a-young-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=N0oQFd_0VKs3Q2o2YLCR5hTBNIVHqdiHsh2SaTKhPoM=" alt="Doctor with ipad" />
                </section>

                <section className="sec-3">
                    <h3>Nossos Parceiros</h3>
                    <div>
                        <img src="./images/hcor.png" alt="Logo HCor" />
                        <img src="./images/alberteinstein.png" alt="Logo Albert Einstein" />
                        <img src="./images/siriolibanes.png" alt="Logo Sirio Libanes" />
                        <img src="./images/oswaldocruz.png" alt="Logo Oswaldo Cruz" />
                        <img src="./images/moinhosdevento.png" alt="Logo Moinhos de Vento" />
                    </div>
                </section>

                <section className="sec-4">
                    <h1>Benefícios imediatos para o seu hospital</h1>
                    <div>
                        <div>
                            <img src="./images/adapta.png" alt="square tech component " />
                            <h3>Tecnologia que se adapta à <br /> realidade do seu hospital,<br /> sem processos engessados.</h3>
                        </div>
                        <div>
                            <img src="./images/cura.png" alt="hand & heart" />
                            <h3>Atendimento direto, <br /> sem intermediários.</h3>
                        </div>
                        <div>
                            <img src="./images/dados.png" alt="database with tech components" />
                            <h3>Governança total dos dados, <br /> atendendo à LGPD e demais <br /> normativas de saúde.</h3>
                        </div>
                    </div>
                    <a href="#"><button><span> Fale conosco </span></button></a>
                </section>

                <section className="sec-5">
                    <h1>Confira nossos principais recursos</h1>
                    <div>
                        <div className="card">
                            <div>
                                <h3>Hospital</h3>
                                <img src="./images/hospitalicon.png" alt="icone hospital pentagono" />
                            </div>
                            <ul>
                                <li>Acompanhamento do Paciente em Tempo Real</li>
                                <li>Prioridade no Atendimento</li>
                                <li>Fluxo Inteligente de Pacientes</li>
                                <li>Prontuário Digital</li>
                            </ul>
                        </div>
                        <div className="card">
                            <div>
                                <h3>Clínicas</h3>
                                <img src="./images/clinicaicon.png" alt="icone hospital pentagono" />
                            </div>    
                            <ul>
                                <li>Gestão Eficiente de Atendimentos</li>
                                <li>Comunicação Transparente</li>
                                <li>Digitalização de Documentos</li>
                                <li>Histórico do Paciente</li>
                            </ul>
                        </div>
                    </div>
                    <a href="#"><button><span> Como vamos te ajudar </span></button></a>
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
                                
                                    <label htmlFor="solution">Qual solução Pixeon te interessa?*</label>
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
                                <a href="#"><button><span>Solicitar Demonstração</span></button></a>
                                
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}