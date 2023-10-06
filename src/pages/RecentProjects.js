import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const RecentProjects = () => {
  return (
    <section className="resume-section" id="projects">
      <div className="project">
        <h2 className="mb-5 mt-2">RECENT PROJECTS</h2>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>ARTINA - AN ONLINE SHOPPING WEBSITE</Card.Title>
                <Card.Subtitle className="mb-3">
                  Online Shopping Website Which Provides an Opportunity For a
                  User to Buy and Sell Rural Handicrafts. Buying Can be Done by
                  Direct Purchasing or Auctioning.
                </Card.Subtitle>
                <Card.Text>.Net, HTML</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>MALWARE DETECTION</Card.Title>
                <Card.Subtitle className="mb-3">
                  Project on Malware Detection Early Detection System for
                  Ransomware
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default RecentProjects;
