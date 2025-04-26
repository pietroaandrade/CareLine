import "./Contact.css";
import Header from "./Header"
import Footer from "./footer"

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Add your form submission logic here
        console.log("Form submitted!");
    };

    return (
        <>  
            <Header />
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
                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="name">Qual é o seu nome?</label>
                                <input id="name" type="text" placeholder="Nome" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Qual é o seu email?</label>
                                <input id="email" type="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="role">Qual seu cargo em sua empresa?</label>
                                <input id="role" type="text" placeholder="Coloque seu cargo" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="companyName">Qual é o nome da sua empresa?</label>
                                <input id="companyName" type="text" placeholder="Coloque nome da sua empresa" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="companyWebsite">Site da empresa?</label>
                                <input id="companyWebsite" type="url" placeholder="Coloque site da empresa " required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="companySize">Tamanho da empresa?</label>
                                <select id="companySize" required>
                                    <option value="" disabled selected>Escolha tamanho</option>
                                    <option>Less than 20 people</option>
                                    <option>20-100 people</option>
                                    <option>100+ people</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="projectBudget">Quanto pensa em gastar com nossas soluções?</label>
                                <select id="projectBudget" required>
                                    <option value="" disabled selected>Escolha orçamento</option>
                                    <option>R$5000</option>
                                    <option>R$5000 - R$20000</option>
                                    <option>R$20000+</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="services">Em quais serviços está interessado?</label>
                                <select id="services" required>
                                    <option value="" disabled selected>Escolha serviço</option>
                                    <option>Developing a custom AI solution</option>
                                    <option>Consultation</option>
                                    <option>Integration/Automation</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="help">Como podemos ajudar?</label>
                            <textarea id="help" placeholder="Escreva sua resposta aqui..." rows="4" required></textarea>
                        </div>
                    
                        <button type="submit">Solicitar Demonstração</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}