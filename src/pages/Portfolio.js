import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects.json";
import Container from "../components/Container";
import MainContent from "../components/MainContent";

class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        <Container>
          <div className="titlebox">
          <h1>Portfolio</h1>
          </div>
        <MainContent>
        <div className="row row-cols-1 row-cols-lg-2">
        {this.state.projects.map(project => (
        <ProjectCard
          name={project.name}
          image={project.image}
          github={project.github}
          deployed={project.deployed}
          /> 
      ))}
      </div>
      </MainContent>
      </Container>
      </div>
    );
  }
}


export default Portfolio;