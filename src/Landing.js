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
    <nav className="container navbar navbar-expand-md py-4 navbar-light">
        <div className="container">
           <img src={logo} style={{
            width: "4rem",
            height: "3rem",
            }} className="logo"/>
        </div>
        <div className="ms-auto" style={{marginTop: "-4rem"}}> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
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
   <div className="container d-flex justify-content-between">
    <div className="container " style={{marginTop:"8rem"}}>
       <button className="btn btn-dark " style={{
        width: "100%rem",
        height: "2.3rem",
       }}>Welcome! I'M</button>
       <p style={{color: "white",fontFamily: "serif",marginTop:"0.5rem",fontSize:"4vw",fontWeight: "bold"}}>Wubeshet Abera</p>
       <p style={{color: "#d2d8d7",marginTop: "-1rem",fontSize: "1.5vw"}}>Frontend Developer</p>
       <p style={{color: "lightblue", marginTop: "2rem",fontSize: "1.2vw",fontWeight: "bold",lineHeight: "1.2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam a nisl <br/>vel mauris egestas bibendum. Sed hendrerit, <br/>ex vel faucibus gravida, tellus sapien vestibulum velit</p>
       <div style={{display: "flex"}}>
       <h6  style={{color: "red",fontSize: "1.5vw"}}>FOLLOW ME ON<section  style={{fontSize: "1.5vw",marginTop: "0.9rem"}}>
        <a href="https://www.facebook.com/" style={{marginRight: "1rem"}}><MdFacebook color = "red"/></a>
        <a href="#" style={{marginRight: "1rem"}}><FaTwitter color = "red"/></a>
        <a href="#"><FaLinkedinIn color="red"/></a>
       </section></h6> 
       
    </div>
    </div>
    <div className="">
       <img src={person} style={{
         width: "80%",
         marginTop: "8rem",
         marginRight: "10rem"
       }}/>
    </div>
  </div>
</div> 
    );
}
export default Landing;