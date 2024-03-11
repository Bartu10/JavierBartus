import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import consergpt from "../../Assets/Projects/consergpt.jpg";
import TemploDelAjedrez from "../../Assets/Projects/TemploDelAjedrez.png";
import Timeless11 from "../../Assets/Projects/Timeless11.png";
import pokemongame from "../../Assets/Projects/pokemongame.png";
import f1guide from "../../Assets/Projects/f1guide.png";
import onepage from "../../Assets/Projects/onepage.png";



function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Proyectos Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui hay algunos proyectos que he ido realizando
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Timeless11}
              isBlog={false}
              title="Timeless11"
              description="Este es mi TFG el cual se basa en una tienda online de ropa deportiva, 
              la cual contiene un sistema de pagos, un chatbot por whatsapp y un sistema de mail, 
              hay una completa personalizacion personalizacion del usuario, es completamente funcional"
              tech={["Vuejs", "Sass", "Spring", "Postgresql", "Node", "MongoDB" ]}
              utils={["Visual Studio Code", "Insomnia", "Netlify", "Docker", "Git", "Render", "Jetbrains"]}
              ghLink={[
              {"link":"https://github.com/Bartu10/TFG_JavierBartusGomez.git", "descripcion": "FrontEnd Vuejs", "label": "GitHub"}, 
              {"link":"https://github.com/Bartu10/ProyectSpring", "descripcion": "BackEnd Spring", "label": "GitHub"}, 
              {"link":"https://github.com/Bartu10/TFG_BackendNode", "descripcion": "BackEnd Node", "label": "GitHub"},
              {"link":"https://github.com/Bartu10/PayPalNode", "descripcion": "Servicios Node", "label": "GitHub"},
              {"link":"https://github.com/Bartu10/ChatBot", "descripcion": "Bot Whatsapp", "label": "GitHub"}]}
              
              demoLink="https://timeless11.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TemploDelAjedrez}
              isBlog={false}
              title="Templo Del Ajedrez"
              description="Como mi primer proyecto en React, presento una web de leaderboards para Chess.com. Aunque la estética puede no ser la más pulida debido a mi inicio, 
              la aplicación proporciona clasificaciones actualizadas y detalles de partidas, marcando el comienzo de mi viaje en el desarrollo web."
              tech={["React", "Sass"]}
              utils={["Visual Studio Code", "Insomnia", "Netlify", "Git"]}
              ghLink="https://github.com/Bartu10/ProyectoReact.git"
              demoLink="https://reactjavierbartus.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={consergpt}
              isBlog={false}
              title="ConserGPT"
              description="Este chatbot en fase alpha sobre las leyes educativas de la Junta de Andalucía está siendo desarrollado como parte de mi Trabajo de Fin de Grado (TFG) en Inteligencia Artificial. Integrará procesamiento del lenguaje natural y datos actualizados para proporcionar respuestas precisas a través de una interfaz de chat intuitiva. Además, el proyecto se basa en Mixtral, una tecnología que mejora la interacción y la comprensión del usuario, asegurando respuestas más precisas y adaptadas a sus necesidades."
              tech={["Python", "Mixtral"]}
              utils={["Visual Studio Code", "Git"]}
              ghLink="https://github.com/Bartu10/ConserGPT"
              demoLink="https://huggingface.co/spaces/Bartusito/ConserGPT"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1guide}
              isBlog={false}
              title="Guia F1"
              description="Desarrollé mi primer proyecto en Vue.js, una aplicación ágil que sirve como guía de Fórmula 1. Ofrece perfiles detallados de equipos y pilotos, calendario de carreras con notificaciones en tiempo real, estadísticas actualizadas y contenido exclusivo. La interfaz reactiva garantiza una experiencia personalizada y rápida para los aficionados de la F1."
              tech={["Vuejs", "Node", "Bootstrap"]}
              utils={["Visual Studio Code", "Insomnia", "Netlify", "Git"]}
              ghLink={[
                {"link": "https://github.com/Bartu10/VueProyect.git", "descripcion": "FrontEnd Vuejs", "label": "GitHub"}, 
                {"link": "https://github.com/Bartu10/expressvue", "descripcion": "BackEnd Node", "label": "GitHub"}]}
              demoLink="https://f1guide.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemongame}
              isBlog={false}
              title="Pokemon Game"
              description="Mi primer proyecto con API fue un juego de adivinar Pokémon en Python, implementado con Vue.js. Los usuarios adivinan el Pokémon mostrado, ganan puntos y pierden vida por respuestas incorrectas.
              La API proporciona datos esenciales, y el juego me permitió explorar el desarrollo interactivo y el manejo de datos en tiempo real."
              tech={["Vuejs"]}
              utils={["Visual Studio Code", "Insomnia", "Netlify", "Git"]}
              ghLink="https://github.com/Bartu10/PokemonGame.git"
              demoLink="https://pokemongamebartu.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onepage}
              isBlog={false}
              title="One Page"
              description="
              En mi proyecto de diseño de personajes y fondos para videojuegos, empleé JavaScript para la implementación. La exploración abarcó diversas tecnologías, incluyendo audio, video, imágenes y SVG, proporcionando una experiencia completa. 
              Este enfoque en JavaScript amplió mis habilidades en el desarrollo de videojuegos y en la integración de elementos multimedia."
              tech={["Javascript", "Sass"]}
              utils={["Visual Studio Code", "Netlify", "Git"]}
              ghLink="https://github.com/Bartu10/OnePageDIW.git"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
