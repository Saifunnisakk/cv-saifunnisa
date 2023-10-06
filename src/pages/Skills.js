import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Skills = () => {
  // Define arrays of skills for different categories
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue.js",
    "Responsive Design",
  ];

  const backEndSkills = ["Node.js", "PHP", "Laravel", "MySQL"];

  const toolsSkills = [
    "Figma",
    "Postman",
    "Hoppscotch",
    "VS Code",
    "GitHub",
    "Jira",
    "Confluence",
  ];

  const methodologiesSkills = ["Ajile", "Scrum", "Rest"];
  // Function to render a list of skills as bulleted points
  const renderSkillsList = (skills) => (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );

  return (
    <section className="resume-section" id="skills">
      <div className="skills">
        <h2 className="mb-5 mt-2">SKILLS</h2>
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Front-end Development</Card.Title>
                <Card.Text>{renderSkillsList(frontEndSkills)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Back-end Development</Card.Title>
                <Card.Text>{renderSkillsList(backEndSkills)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Tools</Card.Title>
                <Card.Text>{renderSkillsList(toolsSkills)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Methodologies</Card.Title>
                <Card.Text>{renderSkillsList(methodologiesSkills)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Skills;
