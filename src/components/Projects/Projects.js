import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import classificacao from "../../Assets/Projects/classificacao.png";
import epidemia from "../../Assets/Projects/epidemia.png";
import neuronios from "../../Assets/Projects/neuronios.png";
import regressao from "../../Assets/Projects/regressao.png";
import spellwizard from "../../Assets/Projects/spellwizard.png";
import tor from "../../Assets/Projects/tor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projetos </strong>atuais
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns dos projetos em que tenho trabalhado recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spellwizard}
              isBlog={false}
              title="Spell Wizard"
              description="Aplicativo em desenvolvimento voltado para os novos jogadores de Dungeons & Dragons, um guia de magias para os novatos e os experientes. Desenvolvido em React Native."
              ghLink="https://github.com/Leonardo-Costa/spell-wizard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={epidemia}
              isBlog={false}
              title="Simulação epidêmica"
              description="Simulação de um vírus no corpo humano utilizando equações diferenciais e de como, quando as pessoas infectadas interagem com as saudáveis em uma rede scale-free, uma epidemia pode surgir."
              ghLink="https://github.com/Leonardo-Costa/Modelagem-epidemia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuronios}
              isBlog={false}
              title="Simulação de neurônios biológicos"
              description="Simulação de neurônios bioógicos utilizando equações diferenciais, uma análise do fenômeno de sincronização neuronal."
              ghLink="https://github.com/Leonardo-Costa/Modelagem-neuronios"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classificacao}
              isBlog={false}
              title="Classificação de dígitos"
              description="Classificação de dígitos do dataset MNIST utilizando uma rede MutiLayer Perceptron - MLP. Acurácia acima de 98% na tarefa de reconhecer numerais de 0 a 9."
              ghLink="https://github.com/Leonardo-Costa/neural-networks-mlp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={regressao}
              isBlog={false}
              title="Previsão da nota do ENEM"
              description="Previsão da nota do ENEM utilizando regressão em uma rede MutiLayer Perceptron - MLP. Desvio padrão de apenas 3 pontos na previsão da nota segundo a TRI com base nos cartões de respostas de mais de 500 mil aplicantes."
              ghLink="https://github.com/Leonardo-Costa/neural-networks-mlp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tor}
              isBlog={true}
              title="TOR - Projeto de extensão"
              description="Coordeno o setor de marketing e sou instrutor de robótica no TOR, projeto de extensão da UNIFESP que leciona robótica para alunos de escolas públicas do fundamental dois."
              ghLink="https://linktr.ee/tor.projeto"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
