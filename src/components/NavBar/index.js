import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavBar() {
  const location = useLocation();

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark">
       <Link className="navbar-brand" to="/">
         Alyssa Hellrung
       </Link>
      <button className="navbar-toggler" type="button" datatoggle="collapse" datatarget="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent"> 

    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
    </nav>
    </div>
   
  );
}

export default NavBar;