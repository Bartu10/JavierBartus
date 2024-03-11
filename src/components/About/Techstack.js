import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import { FaVuejs, FaAngular, FaPhp, FaLaravel, FaSass  } from "react-icons/fa";
import {
  SiPostgresql,
  SiSpring
} from "react-icons/si";
import { TbHexagonLetterM } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";




function Techstack() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons yellow">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons blue">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons green">
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons red">
        <FaAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons green">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons pink">
        <FaSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons purpleLogo">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons red">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons green">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons purpleLogo">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons red">
        <FaLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons yellow">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons orange">
        <TbHexagonLetterM />
      </Col>
      <Col xs={4} md={2} className="tech-icons green">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons blue">
        <SiPostgresql />
      </Col>

    </Row>

    
  );
}

export default Techstack;
