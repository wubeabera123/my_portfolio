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
            width: "8rem",
            height: "4rem",
            }} className="logo"/>
        </div>
           <div className="ms-auto" style={{marginTop: "-4rem",backgroundColor: "#252235",borderRadius: "0.5rem"}}> 
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
           </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav ml-auto">
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
   <div className="container">
    <div className="row">
      <div className="col">
    <div className="container " style={{marginTop:"8rem"}}>
       <button className="btn btn-dark " style={{
        width: "100%rem",
        height: "2.3rem",
       }}>Welcome! I'M</button>
       <p style={{color: "white",fontFamily: "serif",marginTop:"0.5rem",fontSize:"3.5rem",fontWeight: "bold"}}>Wubeshet Abera</p>
       <p style={{color: "#d2d8d7",marginTop: "-1rem",fontSize: "1.2rem"}}>Frontend Developer</p>
       <p style={{color: "lightblue", marginTop: "2rem",fontSize: "0.8rem",fontWeight: "bold",lineHeight: "1.2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam a nisl <br/>vel mauris egestas bibendum. Sed hendrerit, <br/>ex vel faucibus gravida, tellus sapien vestibulum velit</p>
       <div>
       <h6  style={{color: "red",fontSize: "1.5rem"}}>FOLLOW ME ON<section  style={{fontSize: "1.5rem",marginTop: "0.9rem"}}>
        <a href="https://www.facebook.com/" style={{marginRight: "1rem"}}><MdFacebook color = "red"/></a>
        <a href="#" style={{marginRight: "1rem"}}><FaTwitter color = "red"/></a>
        <a href="#"><FaLinkedinIn color="red"/></a>
       </section></h6> 
         </div>  
       </div>
      </div>
    <div className="col">
       <img src={person} style={{
         width: "24rem",
         marginTop: "4rem",
         height: "30rem"
       }}/>
    </div>
  </div>
</div> 
</div>
    );
}
export default Landing;