import React from "react";
//import "./index.css";
import logo from "./Image/logo.jpg";
import person from "./Image/person.jpg";
import { useState } from "react";
import {MdFacebook} from "react-icons/md";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

function Landing(){
    return(
  <div>    
    <nav className="container navbar navbar-expand flex flex-nowrap">
        <div className="container mx-auto">
           <img src={logo} style={{
            width: "10rem",
            height: "3rem",
            borderRadius: "100rem"
            }} className="logo"/>
        </div>
        <div className="container">
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
                <button className="btn btn-danger" style={{height: "3rem",width: "8rem",fontSize: "small"}}>Download CV</button>
              </li>
           </ul>
        </div>
    </nav>
   <div className="container" style={{display: "flex"}}>
    <div className="container " style={{marginTop:"8rem"}}>
       <button className="btn btn-danger" style={{
        width: "8rem",
        height: "2.3rem",
        backgroundColor: "#54272f",
        
       }}>Welcome! I'M</button>
       <h1 style={{color: "white",fontFamily: "serif",marginTop:"1rem"}}>Wubeshet Abera</h1>
       <h6 style={{color: "white"}}>Frontend Developer</h6>
       <p style={{color: "white", marginTop: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam a nisl vel mauris egestas bibendum. Sed hendrerit,<br/> ex vel faucibus gravida, tellus sapien vestibulum velit</p>
    </div>
    <div style={{display: "flex"}}>
    <div className="container" style={{marginRight: "-8rem"}}>
       <img src={person} style={{
         width: "24rem",
         marginTop: "4rem",
       }}/>
    </div>
    <div style={{marginTop: "10rem"}}>
       <h6 className="vertical-text" style={{color: "red", transform: "rotate(90deg)", whiteSpace: "nowrap"}}>FOLLOW ME ON</h6> 
       <section className="d-flex flex-column" style={{marginTop: "7rem",marginLeft: "10rem"}}>
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