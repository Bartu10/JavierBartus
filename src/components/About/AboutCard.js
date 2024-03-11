import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Buenas, Soy <span className="purple">Javier Bartús </span>
            de <span className="purple"> Puerto Real, Cádiz.</span>
            <br />
            Actualmente estoy estudiando un <span className="purple"> Curso de Especializacion en IA y Big Data</span> en el IES Rafael Alberti de Cádiz.
            <br />
            Complete en 2023 el <span className="purple"> Grado Superior en Desarrollo de Aplicaciones Web</span> en el IES Rafael Alberti de Cadiz, 
            realice mis practicas en la empresa <span className="purple"> ControlNet S.L.</span> en Jerez de la Frontera. 
            <br />
            <br />
            Realice a finales del año 2023 un <span className="purple"> Curso de Java </span> con la empresa <span className="purple"> Ipartek </span> 
            donde estuve trabajando en un proyecto de <span className="purple"> Java EE </span> con <span className="purple"> SpringBoot </span>.
            <br />
            <br />
            Aparte de programar disfuto mucho de:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escuchar música
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver y practicar deporte
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "El único modo de hacer un gran trabajo es amar lo que haces"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
