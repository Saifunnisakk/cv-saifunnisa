import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import HireMeModal from "./HireMeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEnvelope } from "react-icons/fa";
import {
  faLinkedinIn,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Route } from "react-router-dom";
import Experience from "./Experience";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container fluid>
      <Row>
        <Header />
        <Col xs={12} md={10} id="main-content">
          {/* Profile Image - Shown in Responsive Mode */}
          <div className="d-md-none res-profile">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="assets/img/profile.jpg"
              alt="..."
            />
          </div>
          <section className="resume-section" id="about">
            <div className="resume-section-content">
              <div className="text-right">
                <Button variant="primary" onClick={toggleModal}>
                  Hire Me
                </Button>
              </div>
              <div className="profile">
                <h1 className="mb-2">
                  SAIFUNNISA
                  <span className="text-primary">KK</span>
                </h1>
                <div className="subheading-role mb-5 ">
                  FULLSTACK DEVELOPER
                  <div className="subheading mb-2 mt-2">
                    <a href="mailto:saifunnisakk313@gmail.com">
                      <FaEnvelope />
                      Gmail
                    </a>
                    <a href="https://www.linkedin.com/in/saifunnisa-k-k-655210261/">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      LinkedIn
                    </a>
                  </div>
                  <div className="subheading">
                    <a href="https://github.com/Saifunnisakk">
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </a>
                    <a href="https://stackoverflow.com/users/21194370/saifunnisa-kk?tab=profile">
                      <FontAwesomeIcon icon={faStackOverflow} />
                      Stack Overflow
                    </a>
                  </div>
                </div>
              </div>
              <p className="lead mb-4">
                As a dedicated web developer, I am deeply passionate about
                crafting clean and efficient code to build engaging and
                user-friendly websites. I have honed my skills in front-end and
                back-end development, proficiently working with HTML, CSS,
                JavaScript, PHP, and various frameworks. I thrive on challenges,
                constantly seeking opportunities to learn and adopt emerging
                technologies. My goal is to create seamless digital experiences
                that leave a lasting impact. I am eager to contribute my
                expertise to innovative projects and collaborate with
                like-minded professionals in the field.
              </p>
            </div>
          </section>
          <hr className="m-0" />
          <section className="resume-section" id="experience">
            <h2 className="mb-5 mt-2">Experience</h2>
            <Row>
              <Col xs={12}>
                <Card>
                  <Card.Body>
                    <Card.Title>BETASQUIRREL, REMOTE</Card.Title>
                    <Card.Subtitle className="mb-3">
                      FULL STACK DEVELOPER
                    </Card.Subtitle>
                    <Card.Text>
                      Rest API Development with PHP/LARAVEL, Relational Database
                      Design with MYSQL. UI Design and Development, Responsive
                      Designing, UX Designing and Prototyping with Figma, Git
                      Branching and Pull Request Review Workflow, Sprint task
                      Management Using Agile Principles, Code Formatting and
                      Standardization using Prettier, Static web Hosting using
                      Github Pages, Team Collaboration Using Slack and
                      Googlemeet.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-primary">
                    January 2023 - Present
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </section>
          <hr className="m-0" />
          <section className="resume-section" id="skills">
            <h2 className="mb-5 mt-2">Skills</h2>
            <Row>
              <Col xs={12} md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Front-end Development</Card.Title>
                    <Card.Text>
                      HTML, CSS, JavaScript, React, Vue.js, Responsive Design
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Back-end Development</Card.Title>
                    <Card.Text>Node.js, PHP, Laravel, MySQL</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Tools</Card.Title>
                    <Card.Text>
                      Figma, Postman, Hopscotch, VS Code, GitHub, Jira,
                      Confluence
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Methodologies</Card.Title>
                    <Card.Text>Agile, Scrum, Rest</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          <section className="resume-section" id="education">
            <h2 className="mb-5 mt-2">Education</h2>
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
                    <Card.Subtitle className="mb-3">
                      Higher Secondary
                    </Card.Subtitle>
                    <Card.Text>85%</Card.Text>
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
                    <Card.Text>90%</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-primary">
                    Jun 2010 - Mar 2011
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </section>
          <hr className="m-0" />

          <section className="resume-section" id="projects">
            <h2 className="mb-5 mt-2">Recent Projects</h2>
            <Row>
              <Col xs={12}>
                <Card>
                  <Card.Body>
                    <Card.Title>ARTINA - AN ONLINE SHOPPING WEBSITE</Card.Title>
                    <Card.Subtitle className="mb-3">
                      Online Shopping Website Which Provides an Opportunity For
                      a User to Buy and Sell Rural Handicrafts. Buying Can be
                      Done by Direct Purchasing or Auctioning.
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
          </section>
          <section className="resume-section" id="achievements-certifications">
            <h2 className="mb-5">Achievements and Certifications</h2>
            <ul>
              <li>IEEE Member in SSET Student Branch</li>
              <li>
                Attended the Link Camp Conducted by IEEE Link at KMCT Mukkam,
                Khozhikode.
              </li>
              <li>
                Women in Engineering (WIE) Member and actively participating in
                events conducted by WIE in SCMS.
              </li>
              <li>
                Member of IEEE Computer Society in SCMS Engineering College.
              </li>
              <li>
                Attended the Internship Program at Keltrone Knowledge Centre at
                Calicut, providing basics in Android and Java Programming.
              </li>
              <li>
                Went for an Industrial Training at Datum Solution (Infopark,
                Cherthala).
              </li>
              <li>
                Attended the Workshop on Website Designing and Python
                programming Conducted by IEEE Student Branch at SCMS College.
              </li>
            </ul>
          </section>
        </Col>
      </Row>
      <HireMeModal show={showModal} onClose={toggleModal} />
    </Container>
  );
};

export default Home;
