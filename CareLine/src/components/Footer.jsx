import "./Footer.scss"
import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <>
            <footer>
                
                <div className="left-side">
                    <div className="quick-links"> 
                        <span>
                            <img src="./images/logo.png" alt="CareLine Logo" />
                            <h1><a href="#">CareLine</a></h1>
                        </span>
                        <ul>
                            <li><Link to="/contact">Contato</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/services">Serviços</Link></li>
                        </ul>
                    </div>
                    <div className="about">
                        <h1>A CareLine</h1>
                        <p>CareLine é um software que melhora a comunicação hospitalar, reduz o estresse dos pacientes e otimiza o fluxo de atendimento no pronto-socorro.</p>
                    </div>
                </div>
                
                <div className="right-side">
                    <h1>Nos dê seu email</h1>
                    <form>
                        <p>Discover all our new healthcare innovations!</p>
                        <input type="email" id="email" name="email" placeholder="Enter your email here..."></input>
                    </form>
                    <div className="social-icons"> 
                        <span className="icon">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Instagram"/></a>
                        </span>
                        <span className="icon">
                            <a href="https://github.com/pietroaandrade/webdev_challenge.git" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" /></a>
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