import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import musicApp from "../../Assets/Projects/turo.png";
import emotion from "../../Assets/Projects/insta.png";
import drag_and_drop_todo_app from "../../Assets/Projects/drag_and_drop_todo_app.jpeg";
import eCommerce from "../../Assets/Projects/hackaton.png";
import quizApp from "../../Assets/Projects/quiz.png";
import calculator from "../../Assets/Projects/calculator.jpeg";

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
              imgPath={musicApp}
              isBlog={false}
              title="Turo Ui"
              description="I have created this Website clone which is fully responsive and looks good too."
            
              demoLink="https://turo-com.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizApp}
              isBlog={false}
              title="Quiz App"
              description="I have created this quiz app which is functional and responsive and the design is also quite good.."
              
              demoLink="https://quizzapp-ahsan.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Instagram + ChatApp"
              description="I have created this Instagram Ui + Chat App ."
             
              demoLink="https://instagram-ahsan.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerce}
              isBlog={false}
              title="E-Commerce-Website"
              description="I have created Admin Dashboard this adminPanel can added Students/Sir/Classes.Email:admin@gmail.com ,Password: 123456 "
             
              demoLink="https://hacakaton-ahsan.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="I have created this calculator which is fully responsive and quite stylish."
            
              demoLink="https://calculator-task-000.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drag_and_drop_todo_app}
              isBlog={false}
              title="Drag And Drop Todo App"
              description="I made this todo app which is fully functional and drag and drop."
             
              demoLink="https://drag-and-drop-todo-app.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
