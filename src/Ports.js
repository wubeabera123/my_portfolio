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
        <div className="container d-flex">
          <div className="container" style={{marginTop: "6rem"}}>
             <p id="port">Portfolio</p>
             <p style={{color: "white"}}>Preparing portfolio lorem pages fonts <br/> pages lorem portfolio Preparing</p>
          </div>
          
          <div class="btn-group" style={{height: "3.5rem", width: "60rem",marginTop: "8rem"}}>
              <a href="#" class="btn btn-danger"><p style={{marginTop: "0.5rem"}}>All Work</p></a>
              <a href="#" style={{backgroundColor: "#211930", textDecorationLine: "none", color: "white",width: "15rem"}}><p style={{textAlign: "center",marginTop: "0.8rem"}}>Personal Project</p></a>
              <a href="#" style={{backgroundColor: "#211930", textDecorationLine: "none", color: "white", borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem"}}><p style={{textAlign: "center",marginTop: "0.8rem"}}>Professional Projects</p></a>
          </div>
        </div>
        <div className="container d-flex py-3 justify-content-between">
           <img src={a} style={{borderRadius: "0.5rem"}}/>
           <img src={b} style={{borderRadius: "0.5rem"}}/>
           <img src={c} style={{borderRadius: "0.5rem"}}/>
        </div>
        <div className="container d-flex py-3 justify-content-between">
           <img src={d} style={{borderRadius: "0.5rem"}}/>
           <img src={e} style={{borderRadius: "0.5rem"}}/>
           <img src={f} style={{borderRadius: "0.5rem"}}/>
        </div>
        <div className="d-flex justify-content-center py-5">
           <button className="btn btn-danger" style={{width: "10rem",height: "3.4rem", fontSize: "1.2rem"}}>View All</button>
        </div>
        
      </div>
    )
}
export default Ports;