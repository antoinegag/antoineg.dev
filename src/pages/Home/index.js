import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import "./Home.css";
import PostList from "../../components/PostList";

export default function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md="4">
          <img
            className="rounded-circle d-none d-md-block"
            alt="portrait"
            src="./assets/me_crop.jpeg"
          />
        </Col>
        <Col>
          <Jumbotron className="about">
            <h1 className="display-3">Antoine Gagnon</h1>
            <p className="lead">
              Web developer, IoT and electronics hobbyist, curious about
              everything.
            </p>
            <hr className="my-2" />
            <p>
              Currently studying Computer Science at University of Sherbrooke
              and continuously working on my hobby projects, trying to make the
              world a better place&trade;
            </p>
            <h3>Socials</h3>
            <p className="lead text-black">
              <a href="https://github.com/antoinegag" className="link-unstyled">
                <i className="fab fa-2x fa-github mr-3 pointer" />
              </a>
              <a
                href="https://twitter.com/antoinegag_dev"
                className="link-unstyled"
              >
                <i className="fab fa-2x fa-twitter mr-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/antoine-gagnon/"
                className="link-unstyled"
              >
                <i className="fab fa-2x fa-linkedin mr-3" />
              </a>
              <a
                href="https://www.instagram.com/antoineg.dev/"
                className="link-unstyled"
              >
                <i className="fab fa-2x fa-instagram" />
              </a>
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>My projects</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <PostList />
        </Col>
      </Row>
    </Container>
  );
}
