import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import HeroImage from "../assets/images/london-image.jpg";
import ProjectGallery from "../components/ProjectGallery";
import projects from "../assets/projects";

function Home() {
  return (
    <div>
      <Hero backgroundImage={HeroImage}>
        <h1>Mandy Miller</h1> 
        <h2>Web Design and Developement</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>This is all about Mandy</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Tableau Developer / Data Analyst with a wide technical skillset.
              Development of data models (SQL, Python) through to the front-end
              production of engaging dashboard visualisations (Tableau, Power
              BI) in Google Big Query and AWS environments. Strong commercial
              background (CIMA Qualified Management Accountant) with clear
              understanding of commercial requirements. Conceptualising data
              models to provide relevant and actionable business insights.
              Comfortably spans multidisciplinary teams. MSc in Data Analytics
              covering Data Warehousing / ETL / R & Python Programming / Machine
              Learning and Data Visualisation.
            </p>
            <div className="app">
              <h1>My Project Library</h1>
              <ProjectGallery projects={projects} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
