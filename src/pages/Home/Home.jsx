import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import photo from '../../assets/Me.png';
import Particle from '../../components/Particle';
import Carousel from './Carousel';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                My Portfolio:{" "}
              </h1>
              <h1 className="heading-name">
                My Name is
                <strong className="main-name"> Muhammad Ali Naeem </strong>
                and I am Currently Studying at UMT to Complete my Degree of Bachelor Computer Science.
                Within the Time Span of 6 Semesters, I have learned many Different Programming Languages
                and am having Strong Grip at Coding due to which i Easily Adapt to New Programming Languages and Frameworks.
                Thanks to my Instructor Sir Noaman Saleem, I have Developed Enough Skills to Create my own Website using React, JavaScript, HTML, CSS and Node JS.
                I hope i am able to expand upon the Skills that i have learned in this Summer.
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={photo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Carousel/>
    </section>
  );
}

export default Home