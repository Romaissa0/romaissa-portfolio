import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Romaissa Bellahcene</span>{" "}
            from <span className="purple">Algiers, Algeria</span>.
            <br />
            I’m currently an undergraduate{" "}
            <span className="purple"> Mathematics student</span>  with a practical interest in software development, data science, and AI.{" "}
            <span className="purple">Juspay</span>.
            <br />My mathematical background has given me a strong foundation in{" "}
            <span className="purple">logical reasoning </span>,<span className="purple"> statistics</span>, and <span className="purple">problem-solving</span>, which I’ve applied through projects in <span className="purple">Python</span>, <span className="purple">machine learning</span>, <span className="purple">MATLAB</span>, <span className="purple">SQL</span>, <span className="purple">numerical methods</span>, and <span className="purple">web development</span>.
            
            <br />
            <br />
            I approach new problems by understanding them carefully, breaking them into manageable parts, and building reliable solutions. I’m used to learning independently and adapting to new tools when a project requires it. I’m looking to bring this combination of analytical thinking and technical skills into a professional environment where I can contribute to real projects and continue developing as an engineer.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Data & Machine Learning 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning & Building New Things 💡
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistency over perfection !"{" "}
          </p>
          <footer className="blockquote-footer">Romaissa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
