import React from "react";
//import "./index.css";
import logo from "./Image/logo.png";

function Landing(){
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container mx-auto">
           <img src={logo} style={{
            width: "10rem",
            height: "3rem",
            borderRadius: "100rem"
            }} className="logo"/>
        </div>
        <div className="container mx-auto ">
           <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger">Download CV</button>
              </li>
           </ul>
           
        </div>
    </nav>
    );
}
export default Landing;