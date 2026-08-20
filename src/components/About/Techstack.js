import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import stats from "../../Assets/TechIcons/stats-alt.svg";
import statistics from "../../Assets/TechIcons/statistic-up.svg";
import blender from "../../Assets/TechIcons/blender.svg";
//import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
//import matlab from "../../Assets/TechIcons/matlab.svg";
import pandas from "../../Assets/TechIcons/pandas (1).svg";
import numpy from "../../Assets/TechIcons/numpy (1).svg";
import excel from "../../Assets/TechIcons/excel1.svg";
import github from "../../Assets/TechIcons/github (1).svg";
import ai from "../../Assets/TechIcons/machine-learning (1).svg";
import html from "../../Assets/TechIcons/html (1).svg";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      
    
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity fontSize={"24px"} />
        <div className="tech-icons-text">MATLAB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={statistics} alt="statistics" />
        <div className="tech-icons-text">Linear Regression</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={stats} alt="stats-alt" />
        <div className="tech-icons-text">R-Stats</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={github} alt="github(1)" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ai} alt="machine-learning(1)" />
        <div className="tech-icons-text">LLMs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={excel} alt="excel1" />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={html} alt="html(1)" />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pandas} alt="pandas(1)" />
        <div className="tech-icons-text">pandas</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <img src={numpy} alt="numpy(1)" />
        <div className="tech-icons-text">Numpy</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaRust fontSize={"24px"} />
        <div className="tech-icons-text">Optimization</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={blender} alt="blender" className="tech-icon-images" />
        <div className="tech-icons-text">Blender</div>
      </Col>
    </Row>
  );
}

export default Techstack;
