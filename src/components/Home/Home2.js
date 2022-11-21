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
            <h1 style={{ fontSize: "2.6em" }}>
              UM POUCO <span className="purple"> SOBRE MIM </span>
            </h1>
            <p className="home-about-body">
              Sou apaixonado pelo{" "}
              <b className="purple">desenvolvimento de software</b> e pela{" "}
              <b className="purple">inteligência artificial!</b>
              <br />
              <br />
              Acredito que a tecnologia pode ser usada para melhorar a vida das
              pessoas e que a <b className="purple">ciência de dados</b> é uma
              das ferramentas mais poderosas para isso.
              <br />
              <br />
              Sou fluente em
              <i>
                <b className="purple"> Python, Javascript e C. </b>
              </i>
              <br />
              <br />
              Meus principais interesses são pelas áreas de
              <i>
                <b className="purple"> Desenvolvimento de software Mobile </b>{" "}
                e, também, nas áreas de
                <b className="purple">
                  {" "}
                  Data science, inteligência artificial e redes neurais.
                </b>
              </i>
              <br />
              <br />
              Quando possível, gosto de dedicar meu tempo a projetos sociais,
              sou
              <i>
                <b className="purple"> Instrutor de robótica</b>
              </i>{" "}
              e
              <i>
                <b className="purple"> Gerente de projetos</b>
              </i>{" "}
              no
              <i>
                <b className="purple"> TOR</b>.
              </i>
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
