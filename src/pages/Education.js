import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Education = () => {
  return (
    <section className="resume-section" id="education">
      <div className="education">
        <h2 className="mb-5 mt-2">EDUCATION</h2>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  SCMS SCHOOL OF ENGINEERING AND TECHNOLOGY
                </Card.Title>
                <Card.Subtitle className="mb-3">
                  Bachelor of Technology
                </Card.Subtitle>
                <Card.Text>Computer Science</Card.Text>
                <Card.Text>CGPA: 7.1</Card.Text>
              </Card.Body>
              <Card.Footer className="text-primary">
                Jun 2013 - May 2017
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>W.O.H.S.S PINANGODE</Card.Title>
                <Card.Subtitle className="mb-3">Higher secondary</Card.Subtitle>
                <Card.Text>85 %</Card.Text>
              </Card.Body>
              <Card.Footer className="text-primary">
                Jun 2011 - Mar 2013
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>W.O.H.S.S PINANGODE</Card.Title>
                <Card.Subtitle className="mb-3">
                  Secondary School Leaving Certificate
                </Card.Subtitle>
                <Card.Text>90 %</Card.Text>
              </Card.Body>
              <Card.Footer className="text-primary">
                Jun 2010 - Mar 2011
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Education;
