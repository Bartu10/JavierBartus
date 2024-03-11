import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/aaaaa-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">

Me enamoré de la programación y al menos aprendí algo, creo... 🤷‍♂️
              <br />
              <br />Tengo fluidez en tecnologías como
              <i>
                <b className="purple"> Javascript </b>
              </i>
              y sus distintos
              <i>
                <b className="purple"> Frameworks </b>
              </i>
              ,
              <br />
              tambien con 
              <i>
                <b className="purple"> Java y Spring </b>
              </i>
              con 
              <i>
                <b className="purple"> Php y Laravel  </b>
              </i>
               y en cuanto a bases de datos tengo experiencia con
               <i>
                <b className="purple"> SQL y MongoDB.  </b>
              </i>



              <br />
              <br />
              En cuanto a 
              <i>
                <b className="purple">  IA  </b>
              </i>
              Tengo amplios conocimientos en
              
              <i>
                <b className="purple">  Python  </b>
              </i>
              y 
              <br />
              estoy actualmente trabajando con 
              <i>
                <b className="purple">  Mixtral.  </b>
              </i>


              <br />
              <br />

            En cuanto a 
            <i>
                <b className="purple">  Big Data  </b>
            </i>
            tengo ciertos conocimientos en 
            <i>
                <b className="purple">  Hadoop y Spark.  </b>
            </i>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img width="300" height="300" src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME AQUI</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bartu10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/javier-bartus/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/javibartus_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
