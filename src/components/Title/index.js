import React from "react";
import "./style.css";

function Title(props) {
  return(
    <div className="titlebox" {...props}>
      <div className="row">
        <div className="col-lg-12">
          <h1>Title</h1>
        </div>
      </div>
    </div>
  )
}

export default Title;