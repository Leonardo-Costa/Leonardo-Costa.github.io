import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          ></Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Skillset </strong> Profissional
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> que utilizo
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
