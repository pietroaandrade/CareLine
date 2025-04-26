import "./Footer.css"
import { Link } from "react-router"

export default function Footer(){
    return (
        <>
            <footer>
                <div className="left-side">
                    <div className="quick-links"> 
                    <span >
                        <img src="./images/logo.png" alt="CareLine Logo" />
                        <h1><a href="#">CareLine</a></h1>
                    </span>
                    <ul>
                        <li><Link to="/Contato" >Contato</Link></li>
                        <li><Link to="/" >Sobre</Link></li>
                        <li><Link to="/Servicos" >Serviços</Link></li>
                    </ul>
                    </div>
                    <div className="about">
                        <h1>A CareLine</h1>
                        <p>CareLine é um software que melhora a<br></br> comunicação hospitalar, reduz o estresse <br></br>dos pacientes e otimiza o fluxo de <br></br> atendimento no pronto-socorro.</p>
                    </div>
                </div>
                
                <div className="right-side">
                    <h1>Nos dê seu email</h1>
                    <form>
                        <p>Discover all our new healthcare innovations!</p>
                        <input type="email" id="email" name="email" placeholder="Enter your email here..."></input>
                        
                    </form>
                    <div > 
                        <span className="icon">
                            <a href="#"><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Instagram"/></a>
                        </span>
                        <span className="icon" >
                            <a href="https://github.com/pietroaandrade/webdev_challenge.git" target="blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" /></a>
                        </span>
                        
                    </div>
                </div>
            
                
            </footer>
            <div className="copy">
                <p>
                    © 2025 CareLine. All rights reserved. | 
                    <a href="#"> Privacy Policy </a> | 
                    <a href="#"> Terms of Service </a> | 
                    Contact:<a href="mailto:support@careline.com">support@careline.com</a>
                </p>
            </div>
        </>
    )
}