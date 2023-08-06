import React from "react";

function Experience(){
    return(
          <div id="exp">
            <div style={{textAlign: "center", color: "#e8d7d7",marginTop: "-12rem"}}>
              <p style={{fontFamily: "serif",fontSize: "3.5vw"}}>My Experience</p>
              <p style={{fontSize: "1.5vw"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan leo quis metus efficitur, non <br/>euismod nulla gravida. Nulla facilisi</p>
            </div>
            <div className="container py-3 d-flex justify-content-evenly" style={{color: "white"}}>
             <div style={{borderLeft: "0.2rem solid rgb(90,5,5)",height: "8vw"}}>
              <div style={{marginLeft: "1rem"}}>
                <p style={{fontSize: "2.2vw", fontWeight: "bold"}}>Step 01</p>
                <p style={{fontSize: "1.2vw",marginTop: "-1rem"}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis .</p>
              </div>
             </div>
             <div style={{borderLeft: "0.2rem solid rgb(90,5,5)",height: "8vw"}}>
              <div style={{marginLeft: "1rem"}}>
                <p style={{fontSize: "2.2vw", fontWeight: "bold"}}>Step 01</p>
                <p style={{fontSize: "1.2vw",marginTop: "-1rem"}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis .</p>
              </div>
             </div>
             <div style={{borderLeft: "0.2rem solid rgb(90,5,5)",height: "8vw"}}>
              <div style={{marginLeft: "1rem"}}>
                <p style={{fontSize: "2.2vw", fontWeight: "bold"}}>Step 01</p>
                <p style={{fontSize: "1.2vw",marginTop: "-1rem"}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis .</p>
              </div>
             </div>
            </div>
          </div>
    )
} 
export default Experience;