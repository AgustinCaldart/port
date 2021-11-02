import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, Me llamo <span className="purple">Agustín Caldart </span>
            Soy de <span className="purple"> San carlos de Bariloche, Argentina.</span>
            <br />Soy un desarrolador con conocimientos en datos.
            <br />
            <br />
            Aparte de escribir código, me encantar hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
            <li className="about-activity">
              <ImPointRight /> Salir con amigos
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Las motivaciones de los hombres nunca tienen sentido. Y, sin embargo, lo tienen siempre"{" "}
          </p>
          <footer className="blockquote-footer">Brandon Sanderson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
