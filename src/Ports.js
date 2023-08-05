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
        <div className="container d-flex justify-content-evenly">
          <div className="container" style={{marginTop: "6rem"}}>
             <p id="port">Portfolio</p>
             <p style={{color: "white"}}>Preparing portfolio lorem pages fonts <br/> pages lorem portfolio Preparing</p>
          </div>
          
          <div class="btn-group" style={{height: "3.5rem",width: "60%",marginTop: "8rem"}}>
              <a href="#" class="centered-link btn btn-danger " style={{width: "60%",fontSize: "0.8rem"}}><p style={{ marginTop: "0.8rem"}}>All Work</p></a>
              <a href="#"  style={{width: "30%",backgroundColor: "#211930", textDecorationLine: "none", color: "white",width: "15rem",fontSize: "1rem"}}><p style={{textAlign: "center",marginTop: "1.2rem"}}>Personal</p></a>
              <a href="#"  style={{width: "70%",backgroundColor: "#211930", textDecorationLine: "none", color: "white", borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem",fontSize: "1rem"}}><p style={{textAlign: "center",marginTop: "1.2rem"}}>Proffesional</p></a>
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