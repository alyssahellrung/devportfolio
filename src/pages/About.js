import React from "react";
import Title from "../components/Title";
import MainContent from "../components/MainContent";
import Container from "../components/Container";

function About() {
  return (
    <div>
    <Container>
    <Title />
    <MainContent>  
    <div className="row">
      <div className="col-lg-6">
        <img className="img img-thumbnail" src="assets/images/AboutMePhoto.jpg" alt="Alyssa on trapeze"/>
      </div> 
      <div className="col-lg-6">
      <p>Alyssa Hellrung is new to coding. She comes from the worlds of academics and circus arts and is now diving into tech. Alyssa teaches a course she developed, "Gender and Sport", at the University of Washington, where she earned her doctorate in Feminist Studies in 2009. She has a deep interest in elite, young, women athletes and in college athletics in general.</p>
      <p>Alyssa has also been active in the Seattle Circus Community since 2006, but she began training as an aerialist long before then. She has been teaching, choreographing, and directing at the School of Acrobatics and New Circus Arts (SANCA) for ten years and has performed as a solo and duo trapeze artist for the duration. She was also the founding director of the flying trapeze program at SANCA and, in total, served as a catcher at various flying trapeze programs for 17 years.</p>
      </div>
    </div>
    <div className="row" id="moreInfo">
      <div className="col-lg-12">
      <p>Alyssa is excited to parlay her extensive background in education into building dynamic, accessible web applications. Currently pursuing a certificate in Full Stack Development from the University of Washington, she is gaining skills in web design, Javascript, Node.js, Express, MySQL, MongoDB, and React. Known for being meticulously organized with high standards of precision and a commitment to creative problem-solving, she is looking forward to exercising her agility as part of a fast-paced, quality-driven team committed to building better experiences on the web.</p>
      </div>
    </div>
  </MainContent>
  </Container>
    
  </div>       
  );
}

export default About;