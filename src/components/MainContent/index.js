import React from "react";
import "./style.css";

function MainContent(props) {
    return <div className={`maincontent${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default MainContent;