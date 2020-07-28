import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    
      <div className="col lg-4">
        <div className="card projects">
        <img alt={props.name} className="portPhoto card-img-top" src={props.image} />
        <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
        <a className="card-text portolinks" href={props.github} target="blank">GitHub Repo</a>
        <br></br>
        <a className="card-text portolinks" href={props.deployed} target="blank">Deployed Application</a>
        </div>
      </div>  
      </div>
    );
  }

  export default ProjectCard;