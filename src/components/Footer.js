import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ahsan Imran</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          {/* <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ahsanimran456"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ahsan-imran-255246250/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
