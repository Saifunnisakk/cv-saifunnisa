import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Experience = () => {
  // Define the job responsibilities as an array of strings
  const jobResponsibilities = [
    "Rest API Development with PHP/LARAVEL",
    "Relational Database Design with MYSQL",
    "UI Design and Development",
    "Responsive Designing",
    "UX Designing and Prototyping with Figma",
    "Git Branching and Pull Request Review Workflow",
    "Sprint task Management Using Ajile Principles",
    "Code Formatting and Standardisation using Prettier",
    "Static web Hosting using Github Pages",
    "Team Collaboration Using Slack and Googlemeet",
  ];

  return (
    <section className="resume-section" id="experience">
      <div className="experience">
        <h2 className="mb-5 mt-2">EXPERIENCE</h2>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>BETASQUIRREL, REMOTE</Card.Title>
                <Card.Subtitle className="mb-3">
                  FULL STACK DEVELOPER
                </Card.Subtitle>
                <Card.Text>
                  <ul>
                    {jobResponsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-primary">
                January 2023 - Present
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Experience;
