import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I study Mathematics, but I’ve always been curious about what I can do with it beyond paper and formulas. That curiosity led me into programming, data science, machine learning, and software development.
              <br />
              <br />
              I learn by building, experimenting, and sometimes breaking things before figuring out how to fix them.
              <br />
              <i>
                <b className="purple">
                  {" "}
                  Python · Data Science · Machine Learning · Software{" "}
                </b>
              </i>
              
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
