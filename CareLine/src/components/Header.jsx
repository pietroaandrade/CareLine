import "./Header.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <span>
                    <img src="./images/logo.png" alt="CareLine Logo" />
                    <h1><Link to="/" >CareLine</Link></h1>
                </span>
                <div className="nav-links-container">
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/Sobre" >Sobre</Link></li>
                        <li><Link to="/services" >Serviços</Link></li>
                        <li><Link to="/contact" >Contato</Link></li>
                    </ul>
                    <Link className="button-link" to="/login" ><button><span> Acesso ao sistema </span></button></Link>
                </div>
                
                

            </header>   
        </>
    )
}

