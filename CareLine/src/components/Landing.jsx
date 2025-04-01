import "./Landing.css"

export default function Main(){
    return(
    <>
        <landing>
            <section className="sec-1">

                <img src="https://www.indiancrestpeds.com/wp-content/uploads/2016/07/6-Ways-a-Westminster-Pediatrician-Can-Help-.jpg" alt="Doctor caring for kid" />
                <h3>
                    Muitos sistemas são limitados e não <br></br> focam na experiência do paciente de pronto-socorro. 
                    <br></br>Com a <span>CareLine</span>, é diferente. Você oferece comunicação <br></br> transparente, redução do estresse dos pacientes <br></br>e  
                    humanização do pronto-socorro,<span> garantindo <br></br>eficiência e otimização do atendimento.</span>
                </h3>

            </section>
            <section  className="sec-2">

                <div> 
                    <h3>
                        integra <span>dados em tempo real</span>, permitindo  <br></br> <span>acesso rápido a laudos</span>, prescrições e  <br></br> <span>status dos pacientes</span>.
                        <br></br> 
                        <br></br>Reduza o tempo de espera e melhore <br></br>  a comunicação, com um sistema que evolui  <br></br>  junto com a eficiência hospitalar.
                    </h3>
                    <a href="#"><button><span> Melhor Pronto-Socorro </span></button></a>
                </div>
                <img src="https://media.istockphoto.com/id/1366374033/photo/shot-of-a-young-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=N0oQFd_0VKs3Q2o2YLCR5hTBNIVHqdiHsh2SaTKhPoM=" alt="Doctor with ipad" />

            </section>
            <section className="sec-3">
                <h1>Benefícios imediatos para o seu hospital</h1>
                <div >
                    <div>
                        <img src="./images/adapta.png" alt="square tech component " />
                        <h3>Tecnologia que se adapta à <br />realidade do seu hospital,<br /> sem processos engessados.</h3>
                    </div>
                    <div>
                        <img src="./images/cura.png" alt="hand & heart" />
                        <h3>Atendimento direto, <br />sem intermediários.</h3>
                    </div>
                    <div>
                        <img src="./images/dados.png" alt="databse with tech components" />
                        <h3>Governança total dos dados, <br />atendendo à LGPD e demais <br /> normativas de saúde.</h3>
                    </div>
                </div>
                <a href="#"><button><span> Fale conosco </span></button></a>
            </section>

        </landing>
        
    </>
    
)
    
}