import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
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
        <Title><h1>Portfolio</h1></Title>
        <MainContent>
        {this.state.projects.map(project => (
        <ProjectCard 
          name={project.name}
          image={project.image}
          github={project.github}
          deployed={project.deployed}
        />
      ))}
      </MainContent>
      </Container>
      </div>
    );
  }
}


export default Portfolio;