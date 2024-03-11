import React, {useState}  from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import 'reactjs-popup/dist/index.css';

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import { FaVuejs, FaAngular, FaPhp, FaLaravel, FaSass } from "react-icons/fa";
import { SiPostgresql, SiSpring } from "react-icons/si";


import {
  SiVisualstudiocode,
  SiJetbrains,
  SiInsomnia,
  SiRender,
  SiNetlify
} from "react-icons/si";
import {DiGit} from "react-icons/di";
import { FaWindows, FaDocker, FaBootstrap } from "react-icons/fa";

import { TbHexagonLetterM } from "react-icons/tb";



function ProjectCards(props) {
  console.log(props)
  
  const [showModal, setShowModal] = useState(false);
  
  const getTechIcons = (tech) => {
    switch (tech) {
      case "React":
        return <DiReact />;
      case "Vuejs":
        return <FaVuejs />;
      case "Node":
        return <DiNodejs />;
      case "MongoDB":
        return <DiMongodb />;
      case "Javascript":
        return <DiJavascript1 />;
      case "Python":
        return <DiPython />;
      case "Java":
        return <DiJava />;
      case "Vue":
        return <FaVuejs />;
      case "Angular":
        return <FaAngular />;
      case "Spring":
        return <SiSpring />;
      case "Php":
        return <FaPhp />;
      case "Laravel":
        return <FaLaravel />;
      case "Postgresql":
        return <SiPostgresql />;
      case "Sass":
        return <FaSass />;
      case "Mixtral":
        return <TbHexagonLetterM />;
      case "Bootstrap":
        return <FaBootstrap />;
      default:
        return null;
    }
  };
  const getToolsIcons = (util) => {
    switch (util) {
      case "Visual Studio Code":
        return <SiVisualstudiocode />;
      case "Jetbrains":
        return <SiJetbrains />;
      case "Insomnia":
        return <SiInsomnia />;
      case "Render":
        return <SiRender />;
      case "Netlify":
        return <SiNetlify />;
      case "Git":
        return <DiGit />;
      case "Windows":
        return <FaWindows />;
      case "Docker":
        return <FaDocker />;
      default:
        return null;
    }
  
  
  
  }

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <b>Lenguajes usadas:</b>
        <div className="tech-group">
          {props.tech.map((tech, index) => (
            <span className="tech-in-card" key={index}>
              {getTechIcons(tech)} &nbsp;
            </span>
          ))}
        </div>
        <b>Herramientas usadas:</b>
        <div className="tech-group">
          {props.utils.map((util, index) => (
            <span className="tech-in-card" key={index}>
              {getToolsIcons(util)} &nbsp;
            </span>
          ))}
        </div>
  
        {/* Renderizar botón GitHub o Modal según la condición */}
        {(props.ghLink instanceof Array) ? (
          // Botón GitHub con Modal
          <Button variant="primary" onClick={() => setShowModal(true)}>
            <BsGithub /> &nbsp; {"GitHub"}
          </Button>
        ) : (
          // Solo el botón con enlace
               <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp; {"GitHub"}
              </Button>
          
        )}
  
        {/* Modal */}
        {(props.ghLink instanceof Array) && (
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Contenido del GitHub</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Contenido del Modal */}
              {props.ghLink.map((link, index) => (
                <div class="modalGit" key={index}>
                  <Button className="modalGitButton"
                    variant="primary"
                    href={link.link}
                    target="_blank"
                  >
                    <BsGithub /> &nbsp; {link.descripcion || "GitHub"}
                  </Button>
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setShowModal(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;