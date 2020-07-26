import React from "react";
import Container from "../components/Container";
import MainContent from "../components/MainContent";

function Contact() {
  return (
  <div>
    <Container>
      <div className="titlebox">
        <h1>Contact</h1>
      </div>
    <MainContent>
      <ul className="nav flex-column">
        <li className="contactInfo">Phone: (206)-940-8673</li>
        <li className="contactInfo">Email: alyssahellrung@gmail.com</li>
        <li className="nav-item">
          <a className="nav-link greyLink" href={"https://docs.google.com/document/d/1-4lJK2DHhFkPS-sIDV0U-pX4YhaK0y-DRVqdMSYaLBc/export?format=pdf"} target="blank">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link greyLink" href={"https://www.linkedin.com/in/alyssa-hellrung-63949a197/"} target="blank">
          LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link greyLink" href={"https://github.com/alyssahellrung"} target="blank">GitHub</a>
        </li>
      </ul>
    </MainContent>
    </Container>
  </div>
  );
}

export default Contact;
