import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="row row-cols-1 row-cols-lg-2">
      <div className="col lg-4">
    <div className="card projects">
      {/* <div className="img-container"> */}
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Github Repo:</strong> {props.github}
          </li>
          <li>
            <strong>Deployed App:</strong> {props.deployed}
          </li>
        </ul>
      </div>
      </div>
      </div>
      // </div>
    );
  }

  export default ProjectCard;