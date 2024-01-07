import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calc from "../../Assets/Projects/calc.jpeg";
import ecom from "../../Assets/Projects/e com.jpeg";
import temp from "../../Assets/Projects/temp.jpeg";
import ss from "../../Assets/Projects/ss.jpeg";
import kidney from "../../Assets/Projects/kidney.jpeg";
import { FaCircle } from 'react-icons/fa';

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
              imgPath={ecom}
              isBlog={false}
              title="E-commerce"
              description="An e-commerce website focused on selling interior design products would provide a platform 
              for customers to browse and purchase a wide range of items related to interior design and 
              home decor.
              "
              ghLink="https://github.com/likhithkemminje/Ecommerce"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ss}
              isBlog={false}
              title="Student and staff system"
              description="The Student and staff Feedback System is a management information system for education 
              establishments to manage students and faculties."
              ghLink="https://github.com/likhithkemminje/student_feedback_system_django"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kidney}
              isBlog={false}
              title="Chronic Kidney Disorder"
              description="Chronic Kidney Disease (CKD) detection using machine learning involves leveraging 
              computational algorithms to analyze and interpret data related to kidney health, with the aim 
              of identifying early signs of CKD or predicting its progression and also to identify the type of 
              Photograph
              disease and stage of that disease, severity and recommend respective medicine.
              "
              ghLink="https://github.com/likhithkemminje/Chronic-Kidney-Disorder-Detection"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temp}
              isBlog={false}
              title="Temperature-convertor"
              description="I've crafted a temperature converter app in Android Studio for quick Celsius to Fahrenheit and vice versa conversions. The app has a user-friendly interface, input fields, and conversion buttons. It's now uploaded to GitHub, open for collaboration and usage."
              ghLink="https://github.com/likhithkemminje/Temperature-convertor"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Simple-Calculator"
              description="I've developed a simple Android calculator app in Android Studio. It features a clean UI with digit and operator buttons, providing basic arithmetic functionality. I'm eager to share and collaborate on this project, so I've uploaded it to a GitHub repository"
              ghLink="https://github.com/likhithkemminje/Simple-Calculator?tab=readme-ov-file#simple-calculator"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
      <h1 className="purple">Internships</h1>
      <ul>
            <li className="about-activity">
             <span  style={{ paddingRight:"10px"}}> <FaCircle /></span>
             <p> Igeeks Technology (06/2023 - 07/2023) worked as full stack web developer
              </p>
            </li>
            <li className="about-activity">
            <span  style={{ paddingRight:"10px"}}> <FaCircle /></span>
             <p> Bharat Intern (10/09/2023-10/10/2023) Mobile Application Development
              </p>
            </li>
           
          </ul>
    </Container>
  );
}

export default Projects;
