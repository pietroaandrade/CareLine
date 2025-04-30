import "./Header.css"
import { Link } from "react-router"
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
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                </div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/Sobre" >Sobre</Link></li>
                    <li><Link to="/Servicos" >Serviços</Link></li>
                    <li><Link to="/Contato" >Contato</Link></li>
                </ul>
            </header>   
        </>
    )
}

