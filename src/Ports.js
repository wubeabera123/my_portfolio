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
        <div className="container justify-content-between">
          <div className="row">
            <div className="col">
              <div className="container" style={{marginTop: "6.6rem",width: "100%"}}>
                 <p id="port" style={{fontSize: "3.5rem"}}>Portfolio</p>
                 <p style={{color: "white",fontSize: "1rem"}}>Preparing portfolio lorem pages fonts pages lorem <br/>portfolio Preparing</p>
              </div>
            </div>
            <div className="col">
              <div class="btn-group" style={{height: "3.5rem",width: "26rem",marginTop: "8rem"}}>
                 <button type="button" class="btn btn-danger" style={{fontSize: "1rem",paddingRight: "1rem"}}>All Work</button>
                 <button type="button" class="btn btn-primary" style={{backgroundColor: "#211930",borderColor: "#211930",fontSize: "1rem"}}>Personal Projects</button>
                 <button type="button" class="btn btn-primary" style={{backgroundColor: "#211930",borderColor: "#211930",fontSize: "1rem"}}>Proffesional Projects</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex py-3 justify-content-evenly">
          <div className="row">
             <div className="col"><img src={a} style={{borderRadius: "0.5rem",marginTop: "1rem",width: "16rem" }}/></div>
             <div className="col"><img src={b} style={{borderRadius: "0.5rem",marginTop: "1rem",width: "16rem"  }}/></div>
             <div className="col"><img src={c} style={{borderRadius: "0.5rem",marginTop: "1rem",width: "16rem"  }}/></div>
          </div>
        </div>
        <div className="container d-flex py-3 justify-content-evenly">
          <div className="row">
            <div className="col"> <img src={d} style={{borderRadius: "0.5rem",marginTop: "1rem",width: "16rem" }}/></div>
            <div className="col"><img src={e} style={{borderRadius: "0.5rem",marginTop: "1rem",width: "16rem" }}/></div>
            <div className="col"><img src={f} style={{borderRadius: "0.5rem",marginTop: "1rem",width: "16rem" }}/></div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-5">
           <button className="btn btn-danger" style={{width: "10rem",height: "3.4rem", fontSize: "1.2rem"}}>View All</button>
        </div>
        
      </div>
    )
}
export default Ports;