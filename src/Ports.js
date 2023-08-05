import React from "react";
import a from "./Image/a.png";
import b from "./Image/b.png";
import c from "./Image/c.png";
import d from "./Image/d.png";
import e from "./Image/e.png";
import f from "./Image/f.png";
function Ports(){
    return(
      <div>
        <div className="container d-flex justify-content-round">
          <div className="container" style={{marginTop: "6rem"}}>
             <p id="port">Portfolio</p>
             <p style={{color: "white"}}>Preparing portfolio lorem pages fonts <br/> pages lorem portfolio Preparing</p>
          </div>
          
          <div class="btn-group" style={{height: "2.8rem",width: "60rem",marginTop: "10rem"}}>
             <button type="button" class="btn btn-danger" style={{fontSize: "0.8rem"}}>All Work</button>
             <button type="button" class="btn btn-primary" style={{backgroundColor: "#211930",borderColor: "#211930",fontSize: "0.8rem"}}>Personal Projects</button>
             <button type="button" class="btn btn-primary" style={{backgroundColor: "#211930",borderColor: "#211930",fontSize: "0.8rem"}}>Proffesional Projects</button>
          </div>
        </div>
        <div className="container d-flex py-3 justify-content-between">
           <img src={a} style={{borderRadius: "0.5rem", width: "30%"}}/>
           <img src={b} style={{borderRadius: "0.5rem", width: "30%"}}/>
           <img src={c} style={{borderRadius: "0.5rem", width: "30%"}}/>
        </div>
        <div className="container d-flex py-3 justify-content-between">
           <img src={d} style={{borderRadius: "0.5rem", width: "30%"}}/>
           <img src={e} style={{borderRadius: "0.5rem", width: "30%"}}/>
           <img src={f} style={{borderRadius: "0.5rem", width: "30%"}}/>
        </div>
        <div className="d-flex justify-content-center py-5">
           <button className="btn btn-danger" style={{width: "10rem",height: "3.4rem", fontSize: "1.2rem"}}>View All</button>
        </div>
        
      </div>
    )
}
export default Ports;