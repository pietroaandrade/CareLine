import "./Contact.css";

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");
    };

    return (
        <>  
            <div className="contact">
                <div className="title">
                    <h1>
                        POTENCIAL <span>NÃO ESPERA</span>
                    </h1>
                    <p>
                        Agendar uma consultoria, conversar sobre suas ideias, implementar nossos sistemas ou 
                        saber mais sobre nossos serviços? Somos todos ouvidos. <br /> Contate-nos abaixo, estaremos prontos
                        com nosso time CareLine para guiar, ensinar ou dividir momentos com você.  
                    </p>
                </div>

                <div className="container">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Nome" 
                                        required 
                                    />
                                    <label htmlFor="name">Qual é o seu nome?</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="Email" 
                                        required 
                                    />
                                    <label htmlFor="email">Qual é o seu email?</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="role" 
                                        placeholder="Coloque seu cargo" 
                                        required 
                                    />
                                    <label htmlFor="role">Qual seu cargo em sua empresa?</label>
                                </div>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="companyName" 
                                        placeholder="Coloque nome da sua empresa" 
                                        required 
                                    />
                                    <label htmlFor="companyName">Qual é o nome da sua empresa?</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input 
                                        type="url" 
                                        className="form-control" 
                                        id="companyWebsite" 
                                        placeholder="Coloque site da empresa" 
                                        required 
                                    />
                                    <label htmlFor="companyWebsite">Site da empresa?</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <select className="form-select" id="companySize" required>
                                        <option value="" disabled>Escolha tamanho</option>
                                        <option>Less than 20 people</option>
                                        <option>20-100 people</option>
                                        <option>100+ people</option>
                                    </select>
                                    <label htmlFor="companySize">Tamanho da empresa?</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <select className="form-select" id="projectBudget" required>
                                        <option value="" disabled>Escolha orçamento</option>
                                        <option>R$5000</option>
                                        <option>R$5000 - R$20000</option>
                                        <option>R$20000+</option>
                                    </select>
                                    <label htmlFor="projectBudget">Quanto pensa em gastar com nossas soluções?</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <select className="form-select" id="services" required>
                                        <option value="" disabled>Escolha serviço</option>
                                        <option>Developing a custom AI solution</option>
                                        <option>Consultation</option>
                                        <option>Integration/Automation</option>
                                    </select>
                                    <label htmlFor="services">Em quais serviços está interessado?</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <textarea 
                                        className="form-control" 
                                        id="help" 
                                        placeholder="Escreva sua resposta aqui..." 
                                        style={{ height: '100px' }} 
                                        required
                                    ></textarea>
                                    <label htmlFor="help">Como podemos ajudar?</label>
                                </div>
                            </div>
                        </div>
                    
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" className="btn btn-primary btn-lg">Solicitar Demonstração</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}