import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJetbrains,
  SiInsomnia,
  SiRender,
  SiNetlify
} from "react-icons/si";
import {DiGit} from "react-icons/di";
import { FaWindows, FaDocker } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons blue">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons blue">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons black">
        <SiJetbrains />
      </Col>
      <Col xs={4} md={2} className="tech-icons purpleLogo">
        <SiInsomnia />
      </Col>
      <Col xs={4} md={2} className="tech-icons blue">
        <SiRender />
      </Col>
      <Col xs={4} md={2} className="tech-icons blue">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons blue">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons orange">
        <DiGit />
      </Col>
      
      
    </Row>
  );
}

export default Toolstack;
