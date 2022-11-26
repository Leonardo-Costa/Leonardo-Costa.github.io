import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, meu nome é <span className="purple">Leonardo Loureiro. </span>
            <br />
            Sou desenvolvedor de software, gerente de projetos e estudante de
            ciências da computação na <span className="purple">UNIFESP </span> -
            Universidade Federal de São Paulo.
            <br />
            <br />
            Possuo experiência em{" "}
            <span className="purple">
              desenvolvimento de software mobile, em atendimento ao cliente e
              suporte técnico
            </span>
            <br />
            <br />
            Faço parte do TOR, um projeto de extensão da UNIFESP que leciona
            robótica para alunos de escolas públicas, sou instrutor de robótica
            e responsável pelo setor de marketing.
            <br />
            <br />
            <span className="purple">Atualmente</span>, estou focado nos estudos
            de data science, inteligência artificial e desenvolvimento de
            software mobile.
            <br />
            <br />
            Além de programar, aqui estão outras atividades que eu adoro
            praticar!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Adoro música, jogos e quebra-cabeças
            </li>
            <li className="about-activity">
              <ImPointRight /> Escrever e pesquisar sobre inteligência
              artificial
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar e conhecer novos lugares
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
