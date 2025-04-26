import "./Header.css"
import { Link } from "react-router"


export default function Header(){
    return (
        <>
            <header>
                <span>
                    <img src="./images/logo.png" alt="CareLine Logo" />
                    <h1><Link to="/" >CareLine</Link></h1>
                </span>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/" >Sobre</Link></li>
                    <li><Link to="/Servicos" >Serviços</Link></li>
                    <li><Link to="/Contato" >Contato</Link></li>
                </ul>
            </header>   
                    
        </>
    )
}

