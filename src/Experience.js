import React from "react";

function Experience(){
    return(
          <div id="exp">
            <div style={{textAlign: "center", color: "#e8d7d7",marginTop: "-12rem"}}>
              <p style={{fontFamily: "serif",fontSize: "3.5rem"}}>My Experience</p>
              <p style={{fontSize: "1.5rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan leo quis metus efficitur, non <br/>euismod nulla gravida. Nulla facilisi</p>
            </div>
            <div className="container py-3 d-flex justify-content-center " style={{color: "white",alignItems: "center",height: "40vh"}}>
              <div className="row">
                <div className="col">      
                    <p style={{fontSize: "2.2rem", fontWeight: "bold"}}>Step 01</p>
                    <p style={{fontSize: "1.2rem",marginTop: "-1rem"}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit. <br/>Sed accumsan leo quis .</p>
                </div>
                <div className="col">
                    <p style={{fontSize: "2.2rem", fontWeight: "bold"}}>Step 01</p>
                    <p style={{fontSize: "1.2rem",marginTop: "-1rem"}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis .</p>
                </div>
                <div className="col">
                     <p style={{fontSize: "2.2rem", fontWeight: "bold"}}>Step 01</p>
                     <p style={{fontSize: "1.2rem",marginTop: "-1rem"}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis .</p>
                </div>
              </div> 
            </div>
          </div>
    )
} 
export default Experience;