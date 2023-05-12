import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, my name is <span className="purple">Agustín Caldart</span>.
            I'm from <span className="purple">San Carlos de Bariloche, Argentina</span>.
            <br />I'm a developer with a focus on data.
            <br />
            <br />
            Besides writing code, I love to do many other things!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play
            </li>
            <li className="about-activity">
              <ImPointRight /> Read
            </li>
            <li className="about-activity">
              <ImPointRight /> Meet with friends
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "The Motivations of men. They never make sense and they always make sense"{" "}
          </p>
          <footer className="blockquote-footer">Brandon Sanderson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
