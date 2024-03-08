import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function About() {
  return (
    <div>
      <Hero backgroundImage="./assets/images/hero-bg.jpg">
        <h1>Meet Mandy</h1>
        <h2>Dev Extraordinaire</h2>
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
            Tableau Developer / Data Analyst with a wide technical skillset. Development of data models (SQL, Python) through to the front-end production of engaging dashboard visualisations (Tableau, Power BI) in Google Big Query and AWS environments. 

Strong commercial background (CIMA Qualified Management Accountant) with clear understanding of commercial requirements. Conceptualising data models to provide relevant and actionable business insights. Comfortably spans multidisciplinary teams. 

MSc in Data Analytics covering Data Warehousing / ETL / R & Python Programming / Machine Learning and Data Visualisation.
            </p>
            <p>
              Recently refreshed front End Web Dev skills. Loving the Javascript React etc etc
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
