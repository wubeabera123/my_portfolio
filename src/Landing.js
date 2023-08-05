import React from "react";
import "./index.css";
import logo from "./Image/logo.jpg";
import person from "./Image/person.jpg";
//import { useState } from "react";
import {MdBorderColor, MdFacebook} from "react-icons/md";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

function Landing(){
    return(
  <div>    
    <nav className="container navbar navbar-expand-md py-4">
        <div className="container">
           <img src={logo} style={{
            width: "6rem",
            height: "4rem",
            }} className="logo"/>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
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
                <button className="btn btn-danger" style={{fontSize: "0.9rem",minHeight: "2.5rem",width: "7.2rem"}}>Download CV</button>
              </li>
           </ul>
        </div>
    </nav>
   <div className="container" style={{display: "flex"}}>
    <div className="container " style={{marginTop:"8rem"}}>
       <button className="btn btn-dark " style={{
        width: "8rem",
        height: "2.3rem",
       }}>Welcome! I'M</button>
       <p style={{color: "white",fontFamily: "serif",marginTop:"1rem",fontSize:"3rem",fontWeight: "bold"}}>Wubeshet Abera</p>
       <h6 style={{color: "#d2d8d7",marginTop: "-1rem"}}>Frontend Developer</h6>
       <p style={{color: "lightblue", marginTop: "2rem",fontSize: "0.9rem",fontWeight: "bold",lineHeight: "1.8rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam a nisl vel mauris egestas bibendum. Sed hendrerit,<br/> ex vel faucibus gravida, tellus sapien vestibulum velit</p>
    </div>
    <div style={{display: "flex"}}>
    <div className="container" style={{marginRight: "1rem"}}>
       <img src={person} style={{
         width: "24rem",
         marginTop: "4rem"
       }}/>
    </div>
    <div style={{marginTop: "10rem",marginRight: "-7.2rem"}}>
       <h6 className="vertical-text" style={{color: "red", transform: "rotate(90deg)", whiteSpace: "nowrap",marginRight: "2rem"}}>FOLLOW ME ON</h6> 
       <section className="d-flex flex-column" style={{marginTop: "7rem",marginLeft: "3.2rem",lineHeight: "2.5rem"}}>
        <a href="https://www.facebook.com/"><MdFacebook color = "red"/></a>
        <a href="#"><FaTwitter color = "red"/></a>
        <a href="#"><FaLinkedinIn color="red"/></a>
       </section>
    </div>
    </div>
  </div> 
</div> 
    );
}
export default Landing;