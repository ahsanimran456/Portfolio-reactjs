import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahsan Imran </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am a FrontEnd Developer ,I'm doing bachelors in computer science from "Sindh Madressatul Islam University (SMIU)" & also enrolled in "Web And Mobile Application" Development course .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
