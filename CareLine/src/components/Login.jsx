import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

import "./Login.css"

export default function Login(){

    const [action,setAction] = useState("Login");
    const [state, transform] = useState("Off");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const validCredentials = {
      username: 'admin',
      password: 'admin123'
    };

    const handleLogin = () => {
      if (email === validCredentials.username && 
          password === validCredentials.password) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else {
        alert('Invalid credentials!');
      }
    };

    const handleSignUp = () => {
      alert('Sign Up functionality is not implemented yet.');
    };

    return(
        <>
            <div className="background"><img src="/images/login-backgroundd.jpg" alt="" /></div>
            <div className="container">
                <div className="header">
                    <img className="header-logo" src="/images/logo.png" alt="" />
                    <div className="header-text">Portal CareLine</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <img src="/images/user-img.svg" alt="" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Usuário"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}

                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <img src="/images/mail-icon.svg" alt="" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <img src="/images/lock-icon.svg" alt="" />
                        </span>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                {action==="Sign Up"? <div></div>:
                    <div className="recover">
                        <div className="forgot-password" onMouseOver={()=>{transform("transform")}} onMouseOut={()=>{transform("Off")}}>ESQUECEU A SENHA?</div>
                        <div className={state==="Off"?"underline-2":"underline-hover"}></div>
                    </div>
                }
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                    <button 
                        className={`btn ${action==="Sign Up" ? "btn-primary" : "btn-secondary"}`} 
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                    <button 
                        className={`btn ${action==="Login" ? "btn-primary" : "btn-secondary"}`} 
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    )
} 