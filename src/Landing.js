import React from "react";
//import "./index.css";
import logo from "./Image/logo.png";

function Landing(){
    return(
    <nav>
        <div className="container">
           <img src={logo} style={{
            width: "10rem",
            height: "3rem",
            marginTop: "2rem"
            }} className="logo"/>
        </div>
        <div className="container ">
           <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
           </ul>
        </div>
    </nav>
    );
}
export default Landing;