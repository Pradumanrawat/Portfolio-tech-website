import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Praduman Singh Rawat</span>{" "}
            from <span className="purple">Delhi, India</span>.
            <br />
            I have an experience as a {" "}
            <span className="purple">Frontend  Developer</span> at{" "}
            <span className="purple">Veritech Software Services pvt ltd</span>.
            <br />I am pursuing an Bachelor's degree in{" "}
            <span className="purple">Computer Application</span> from{" "}
            <span className="purple">Guru Govind Singh Indraprastha University </span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Finance Documentaries 💰
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading fin-tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <footer className="blockquote-footer">Praduman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
