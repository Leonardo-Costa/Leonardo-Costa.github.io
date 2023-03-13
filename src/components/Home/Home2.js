import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1
              style={{
                fontSize: "2.6em",
                textAlign: "left",
              }}
            >
              UM POUCO <span className="purple"> SOBRE MIM </span>
            </h1>
            <p className="home-about-body">
              Sou estudante de <b className="purple">Ciências da Computação</b>,{" "}
              <b className="purple">desenvolvedor de software</b>,{" "}
              <b className="purple">instrutor de robótica</b> e um entusiasta de{" "}
              <b className="purple">inteligência artificial</b>
              {" e "}
              <b className="purple">ciência de dados.</b>
              <br />
              <br />
              Acredito que a tecnologia pode ser usada para melhorar a vida das
              pessoas e que a <b className="purple">
                inteligência artificial
              </b>{" "}
              é uma das ferramentas mais poderosas para isso.
              <br />
              <br />
              Desenvolvo projetos acadêmicos nas áreas de
              <b className="purple"> redes neurais</b>
              {" e "}
              <b className="purple">processamento de imagens</b>
              {" e "}
              Sou fluente em
              <b className="purple"> Python</b>, principalmente no uso de
              bibliotecas científicas,{" "}
              <b className="purple"> Angular, React Native</b> {" e "}
              <b className="purple">C</b>
              <br />
              <br />
              Meus principais interesses são pelas áreas de{" "}
              <b className="purple">Inteligência artificial</b>
              {", "}
              <b className="purple">de dados</b>
              {", e "}
              <b className="purple">redes neurais.</b>
              <br />
              <br />
              Além disso, tenho experiência em
              <b className="purple"> gestão de projetos </b>e métodos ágeis no
              TOR - projeto de extensão da UNIFESP voltado ao
              <b className="purple">
                ensino de robótica para alunos de escolas públicas
              </b>
              <br />
              <br />
              Sou uma pessoa
              <b className="purple"> proativa</b>,
              <b className="purple"> focada</b> e sempre à procura de
              <b className="purple"> novos desafios</b>, buscando me aperfeiçoar
              continuamente em minhas habilidades técnicas.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img src={myImg} className="img-fluid" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE EM</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Leonardo-Costa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/leonardo-loureiro-costa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
