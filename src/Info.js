import React from "react";
import {RiAwardFill} from "react-icons/ri";
import {BsPeopleFill} from "react-icons/bs";
import {GiCalendarHalfYear} from "react-icons/gi";
import {GoProjectSymlink} from "react-icons/go";
function Info(){
    return(
       <div id="info">
           <div style={{marginTop: "-10rem"}} className="container justify-content-between">
              <div className="row">
                  <div className="col" style={{marginTop: "2rem"}}>
                      <section id="bord1">
                         <RiAwardFill color="red" style={{fontSize: "2rem", marginTop: "-2rem",marginLeft: "1rem"}}/>
                         <p style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: "3rem"}}>00</p>
                         <p style={{textAlign: "center", color: "white",fontSize: "2rem",marginTop: "-1rem"}}>Awards</p>
                       </section>
                  </div>
                  <div className="col" style={{marginTop: "2rem"}}>
                       <section id="bord2">
                          <BsPeopleFill color="red" style={{fontSize: "2rem", marginTop: "-2rem",marginLeft: "1rem"}}/>
                          <p style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: "3rem"}}>00</p>
                          <p style={{textAlign: "center", color: "white",fontSize: "2rem",marginTop: "-1rem"}}>Cleints</p>
                       </section>
                  </div>
                  <div className="col" style={{marginTop: "2rem"}}>
                       <section id="bord3">
                          <GiCalendarHalfYear color="red" style={{fontSize: "2rem", marginTop: "-2rem",marginLeft: "1rem"}}/> 
                          <p style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: "3rem"}}>01</p>
                          <p style={{textAlign: "center", color: "white",fontSize: "2rem",marginTop: "-1rem"}}>Years <br/>Experience</p>
                       </section>
                  </div>  
                  <div className="col" style={{marginTop: "2rem"}}>
                       <section id="bord4">
                          <GoProjectSymlink color="red" style={{fontSize: "2rem", marginTop: "-2rem",marginLeft: "1rem"}}/> 
                          <p style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: "3rem"}}>4+</p>
                          <p style={{textAlign: "center", color: "white",fontSize: "2rem",marginTop: "-1rem"}}>Projects</p>
                       </section>
                  </div>  
              </div>
           </div>
        </div>
    )
}
export default Info;