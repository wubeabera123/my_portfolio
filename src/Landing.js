import React from "react";
//import "./index.css";
import logo from "./Image/logo.png";

function Landing(){
    return(
  <div>    
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
    <div className="container" style={{marginTop:"6rem"}}>
       <button className="btn btn-danger" style={{
        width: "8rem",
        height: "2.1rem",
       }}>Welcome! I'M</button>
       <h1 style={{color: "white",fontFamily: "serif",marginTop:"1rem"}}>Abdullah Al Sharif's</h1>
       <h6 style={{color: "white"}}>Cyber Security Engineer</h6>
       <p style={{color: "white", marginTop: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam a nisl vel mauris egestas bibendum. Sed hendrerit,<br/> ex vel faucibus gravida, tellus sapien vestibulum velit</p>
    </div>
    <div className="container">
       
    </div>
  </div> 
    );
}
export default Landing;