import React from "react";

function Experience(){
    return(
          <div id="exp">
            <div style={{textAlign: "center", color: "#e8d7d7",marginTop: "-12rem"}}>
              <h3 style={{fontFamily: "serif",fontSize: "3rem"}}>My Experience</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan leo quis metus efficitur, non euismod nulla gravida. Nulla facilisi.<br/> Duis imperdiet consequat mauris, eget fermentum ante commodo vel.</p>
            </div>
            <div className="container py-3 d-flex justify-content-between" style={{color: "white"}}>
             <div style={{borderLeft: "0.2rem solid rgb(90,5,5)",height: "7rem"}}>
              <div style={{marginLeft: "1rem"}}>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
             </div>
             <div style={{borderLeft: "0.2rem solid rgb(90,5,5)",height: "7rem"}}>
              <div style={{marginLeft: "1rem"}}>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
             </div>
             <div style={{borderLeft: "0.2rem solid rgb(90,5,5)",height: "7rem"}}>
              <div style={{marginLeft: "1rem"}}>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
             </div>
            </div>
            
            <div className="d-flex justify-content-evenly" style={{color: "white"}}>
              <div className="d-inline-block" style={{marginRight: "14rem",marginLeft: "20rem",borderLeft: "0.2rem solid rgb(90,5,5)",height: "7rem"}}>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
              <div className="d-inline-block" style={{marginRight: "16rem",borderLeft: "0.2rem solid rgb(90,5,5)",height: "7rem"}}>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
            </div>
          </div>
    )
} 
export default Experience;