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
                <div className="nav-links-container">
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/Sobre" >Sobre</Link></li>
                        <li><Link to="/Servicos" >Serviços</Link></li>
                        <li><Link to="/Contato" >Contato</Link></li>
                    </ul>
                    <Link className="button-link" to="/Login" ><button><span> Acesso ao sistema </span></button></Link>
                </div>
                
                

            </header>   
        </>
    )
}

