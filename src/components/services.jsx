import React from 'react';
import Services from "../components/Services"

const Services = () => {
    return (
        <div>
            <div>
                <h2>¿Qué incluyen las asesorías?</h2>
                <ul>
                    <li> 
                        <h5>Asesorías</h5>
                        <p>Las asesorías incluyen un plan de x sesiones personalizadas para cada estudiante.</p>
                    </li>

                    <li>
                        <h5>Plan de tesis</h5>
                        <p>El plan de tesis consiste en definir el tema a tratar y el problema a investigar con distintas herramientas.</p>
                    
                    </li>

                    <li>
                        <h5>Sustentacion</h5>
                    <p>Te preparamos para que puedas comprender el tema elegido y puedas defenderlo de la mejor manera. </p>
                    </li>
                </ul>
                <button>Agendar Reunión</button>
            </div>
            <div>
                <h2>Nos enfocamos carreras de Ciencias Sociales</h2>
                <div>
                <img src="https://www.figma.com/file/COTCYNsQ3QImmGJ2q76LHp/CAI-Ventures--?type=design&node-id=546-243&mode=dev" alt="" />
                </div>

                <div>
                    <h5>Carreras</h5>
                    <ul>
                       <li>Antropología</li>
                       <li>Ciencias Politicas y Gobierno</li>
                       <li>Economi1a</li>
                       <li>Finanzas</li>
                       <li>Sociología</li>
                    </ul>
                </div>

               
            </div>
        </div>
    );
};

export default Services;
