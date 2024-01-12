import React from "react";
import '../styles/Evento.css'

function Evento(){
    return(
        <div className="card-container">
            <img className="card-image" src={require("../images/F3ibKcUWQAEHEFJ.jpg")}
            alt="foto del evento">
            </img>
            <div className="card-content">  
                <h2 className="card-title">Py pizzza 03 - PyPuzzle</h2>
                <p className="card-date">09  de Diciembre de 2023 -13:30 GMT-4</p>
                <p className="card-place">Mr pizzza, 20 de octubre frente a la plaza Abaroa</p>
                <p className="card-description">!Hola Pythonista
                    Participa en este Evento Presencial de la comunidad Python La Plaza
                    ¿Cuanto conoces de Python?
                    Aprende a trabajar en equipo resolviendo increibles acertijos 
                    Animate a ser parte de esta actividad!!</p>
                    <div className="social-container">
                        <figure><img className="social" src={require("../images/github (1).svg")}alt="icono" ></img></figure>
                        <figure><img className="social" src={require("../images/linkedin.svg")} alt="icono"></img></figure>
                        <figure><img className="social" src={require("../images/twitter.svg")} alt="icono"></img></figure>
                    </div>
            </div>
            
        </div>
    );
}

export default Evento;