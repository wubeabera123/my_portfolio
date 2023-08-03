import React from "react";

function Experience(){
    return(
          <div id="exp">
            <div style={{textAlign: "center", color: "#e8d7d7",marginTop: "-12rem"}}>
              <h3 style={{fontFamily: "serif",fontSize: "3rem"}}>My Experience</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan leo quis metus efficitur, non euismod nulla gravida. Nulla facilisi.<br/> Duis imperdiet consequat mauris, eget fermentum ante commodo vel.</p>
            </div>
            <div className="container py-3 d-flex justify-content-between" style={{color: "white"}}>
              <div>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
              <div>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
              <div>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
            </div>
            <div className="container py-3" style={{color: "white"}}>
              <div className="d-inline-block" style={{marginRight: "10rem"}}>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
              <div className="d-inline-block" style={{marginRight: "10rem"}}>
                <h4>Step 01</h4>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/>Sed accumsan leo quis metus.</p>
              </div>
            </div>
          </div>
    )
} 
export default Experience;