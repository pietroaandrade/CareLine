import React, {useState} from "react";

import "./Login.css"

import api from "../axios";

export default function Login(){

    const [action,setAction] = useState("Login");
    const [state, transform] = useState("Off");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
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
                    <div className="input">
                        <img src="/images/user-img.svg" alt="" />
                        <input
                        type="text"
                        placeholder="Usuário"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    )}

                    <div className="input">
                    <img src="/images/mail-icon.svg" alt="" />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="input">
                    <img src="/images/lock-icon.svg" alt="" />
                    <input
                        type="password"
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
                <div className="submit-container">
                    <div className={action==="Sign Up"?"submit" : "submit gray"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Login"?"submit" : "submit gray"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
                


            </div>
        </>
        
    )
}
