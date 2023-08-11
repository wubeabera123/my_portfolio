import React from "react";

function Experience(){
    return(
          <div id="exp">
            <div style={{textAlign: "center", color: "#e8d7d7",marginTop: "-12rem"}}>
              <p style={{fontFamily: "serif",fontSize: "3.5rem"}}>My Experience</p>
              <p style={{fontSize: "1.2rem"}}>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Sed accumsan leo quis metut<br/>euismod nulla gravida. Nulla facilisi</p>
            </div>
            <div className="container py-3 d-flex justify-content-between" style={{color: "white"}}>
              <div className="row">
                <div className="col" style={{marginRight: "15rem"}}>      
                    <p style={{fontSize: "2rem", fontWeight: "bold"}}>Step 01</p>
                    <p style={{fontSize: "1rem",marginTop: "-1rem"}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit. <br/>Sed accumsan leo quis </p>
                </div>
                <div className="col" style={{marginRight: "15rem"}}>
                    <p style={{fontSize: "2rem", fontWeight: "bold"}}>Step 02</p>
                    <p style={{fontSize: "1rem",marginTop: "-1rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Sed accumsan leo quis </p>
                </div>
                <div className="col" style={{marginRight: "6rem"}}>
                     <p style={{fontSize: "2rem", fontWeight: "bold"}}>Step 03</p>
                     <p style={{fontSize: "1rem",marginTop: "-1rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Sed accumsan leo quis </p>
                </div>
              </div> 
            </div>
          </div>
    )
} 
export default Experience;