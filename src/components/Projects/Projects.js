import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nade from "../../Assets/Projects/MATLAB Programming.jpg";
import car from "../../Assets/Projects/car-system.jpg";
import discount from "../../Assets/Projects/discount.jpg";
import security from "../../Assets/Projects/security.jpg";
import co from "../../Assets/Projects/Matlab Projects.jpg";
import dm from "../../Assets/Projects/Data Mining.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={co}
              isBlog={false}
              title="Numerical-Optimization-in-MATLAB"
              description="MATLAB implementations of classical optimization algorithms with numerical experiments, convergence analysis, and visualization."
              ghLink="https://github.com/Romaissa0/Numerical-Optimization-in-MATLAB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dm}
              isBlog={false}
              title="Retail-Customer-Profiling-Dimensionality-Reduction"
              description="A complete Data Mining project applying Principal Component Analysis (PCA), Correspondence Analysis (CA), and Multiple Correspondence Analysis (MCA) to explore customer behavior, reduce dimensionality, and uncover hidden patterns in retail data through statistical analysis and visualization."
              ghLink="https://github.com/Romaissa0/Retail-Customer-Profiling-Dimensionality-Reduction"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={security}
              isBlog={false}
              title="Cybersecurity-Failure-Rate-Estimation"
              description="Statistical inference project estimating failure and attack rates in secure systems using Maximum Likelihood Estimation (MLE), Method of Moments (MoM), unbiased estimation, and Total Variation estimation, with optimality analysis and security-focused interpretation."
              ghLink="https://github.com/Romaissa0/Cybersecurity-Failure-Rate-Estimation"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nade}
              isBlog={false}
              title="Numerical-Methods-in-MATLAB"
              description="MATLAB implementations of classical numerical methods for solving ordinary differential equations, including Euler, Runge–Kutta, Adams methods, and error analysis."
              ghLink="https://github.com/Romaissa0/Numerical-Methods-in-MATLAB"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discount}
              isBlog={false}
              title="discount-optimization"
              description="Regression-based analytics project that predicts sales performance under different discount strategies using statistical modeling, feature engineering, and model evaluation to support data-driven pricing decisions."
              ghLink="https://github.com/Romaissa0/discount-optimization"
             />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Automated-Vehicle-Storage-System"
              description="Object-oriented garage automation system that simulates secure vehicle storage and retrieval using Python. The project applies core OOP principles including inheritance, polymorphism, abstraction, and composition to model a smart residential parking solution."
              ghLink="https://github.com/Romaissa0/Automated-Vehicle-Storage-System"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
