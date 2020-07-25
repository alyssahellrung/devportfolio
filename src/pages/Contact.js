import React from "react";

function Contact() {
  return (
  <div>
    <div className="container">
      <div className="titlebox">
        <h1>Contact</h1>
      </div>
  
    <div className="main-content">
      <ul className="nav flex-column">
        <li className="contactInfo">Phone: (206)-940-8673</li>
        <li className="contactInfo">Email: alyssahellrung@gmail.com</li>
        <li className="contactInfo">Resume</li>
        <li className="nav-item">
          <a className="nav-link greyLink" href="https://www.linkedin.com/in/alyssa-hellrung-63949a197/">
          <i className="fab fa-linkedin fa-3x"></i> 
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link greyLink" href="https://github.com/alyssahellrung">
          <i className="fab fa-github-square fa-3x"></i> 
          </a>
        </li>
      </ul>
    </div>
  
    </div>
  </div>
  );
}

export default Contact;

//Resume link: https://docs.google.com/document/d/1-4lJK2DHhFkPS-sIDV0U-pX4YhaK0y-DRVqdMSYaLBc/export?format=pdf