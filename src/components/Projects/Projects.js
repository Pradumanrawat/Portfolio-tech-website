import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import smartrest from "../../Assets/Projects/smartrest.png";
import Shopsphere from "../../Assets/Projects/Shosphere.png";
import book from  "../../Assets/Projects/book.png"
import carboniq from "../../Assets/Projects/Carboniq.png";

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
              imgPath={Shopsphere}
              isBlog={false}
              title="ShopSphere"
              description="ShopSphere is a SaaS platform that empowers local grocery shopkeepers to create and manage online stores easily, without any technical skills or developers. It solves the challenge of limited online reach by allowing quick store setup, product management, order fulfillment, and sharing a unique store link—all while handling the technical aspects like design and backend. Built in Modern Framework such as React.JS with Tailwind and use multer for image , and Node.js."
              ghLink="https://github.com/Pradumanrawat/ShopSphere"
              demoLink="https://shiny-creponne-b52fda.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carboniq}
              isBlog={false}
              title="Carbon IQ"
              description="An AI-powered platform for coal mines and individuals to track carbon emissions, explore reduction strategies, and achieve carbon neutrality with role-specific insights and  recommendations.Built in Next.js,and langchain for making agent "
              ghLink="https://github.com/Pradumanrawat/CarbonIQ"
              demoLink="https://carboniq-production-de87.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartrest}
              isBlog={false}
              title="AI Smart-Restaurant"
              description="AI Smart Restaurant Assistant is an intelligent chatbot built with html,css,js, Node.js, LangChain, and Google Gemini 2.5 Flash that helps users check daily meal options like breakfast, lunch, and dinner. It understands natural language queries and uses an customed made tool(gettool) to instantly provide the right menu details, making restaurant interactions faster and smarter."
              ghLink="https://github.com/Pradumanrawat/Ai-smart-Restaurant-Assistant"
                            
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Telephone-Book"
              description="Built Command line Interface(CLI) application in C++. User can Create Contact after signup and login only, Display Contact ,Update Contact ,Delete Contact, and Search Contact !"
              ghLink="https://github.com/Pradumanrawat/Telephone-Book"
                            
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
