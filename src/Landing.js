import React from "react";
//import "./index.css";
import logo from "./Image/logo.png";
import person from "./Image/person.png";
import { useState } from "react";
import {MdFacebook} from "react-icons/md";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
//import {}

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
   <div className=" container d-flex justify-content-between">
    <div className="container " style={{marginTop:"6rem"}}>
       <button className="btn btn-danger" style={{
        width: "8rem",
        height: "2.1rem"
       }}>Welcome! I'M</button>
       <h1 style={{color: "white",fontFamily: "serif",marginTop:"1rem"}}>Abdullah Al Sharif's</h1>
       <h6 style={{color: "white"}}>Cyber Security Engineer</h6>
       <p style={{color: "white", marginTop: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam a nisl vel mauris egestas bibendum. Sed hendrerit,<br/> ex vel faucibus gravida, tellus sapien vestibulum velit</p>
    </div>
    <div className="container">
       <img src={person} style={{
         width: "24rem",
         marginTop: "4rem"
       }}/>
    </div>
    <div className="container">
       <h5 className="vertical-text" style={{color: "red", transform: "rotate(90deg)", whiteSpace: "nowrap", marginTop: "14rem"}}>FOLLOW ME ON: </h5>
       <section className="d-flex flex-column py-5" style={{marginLeft: "9.8rem"}}>
        <a href="https://www.facebook.com/" ><MdFacebook color = "red"/></a>
        <a href="#"><FaTwitter color = "red"/></a>
        <a href="#"><FaLinkedinIn color="red"/></a>
       </section>
    </div>
  </div> 
</div> 
    );
}
export default Landing;