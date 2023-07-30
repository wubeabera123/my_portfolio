import React from "react";
import {RiAwardFill} from "react-icons/ri";
import {BsPeopleFill} from "react-icons/bs";
import {GiCalendarHalfYear} from "react-icons/gi";
import {GoProjectSymlink} from "react-icons/go";
function Info(){
    return(
       <div id="info">
          <div style={{marginTop: "-10rem"}} className="container d-flex justify-content-between" id="values">
            <section id="bord1">
                <RiAwardFill color="red" style={{fontSize: "2rem", marginTop: "-2rem",marginLeft: "1rem"}}/>
                <h1 style={{textAlign: "center", color: "white", fontWeight: "bold"}}>02</h1>
                <h3 style={{textAlign: "center", color: "white"}}>Awards</h3>
            </section>
            <section id="bord2">
                <BsPeopleFill color="red" style={{fontSize: "2rem", marginTop: "-2rem",marginLeft: "1rem"}}/>
                <h1 style={{textAlign: "center", color: "white", fontWeight: "bold"}}>50+</h1>
                <h3 style={{textAlign: "center", color: "white"}}>Cleints</h3>
            </section>
            <section id="bord3">
                <GiCalendarHalfYear color="red" style={{fontSize: "2rem", marginTop: "-2rem",marginLeft: "1rem"}}/> 
                <h1 style={{textAlign: "center", color: "white", fontWeight: "bold"}}>03</h1>
                <h3 style={{textAlign: "center", color: "white"}}>Years <br/>Experience</h3>
            </section>
            <section id="bord4">
                <GoProjectSymlink color="red" style={{fontSize: "2rem", marginTop: "-2rem",marginLeft: "1rem"}}/> 
                <h1 style={{textAlign: "center", color: "white", fontWeight: "bold"}}>80+</h1>
                <h3 style={{textAlign: "center", color: "white"}}>Projects</h3>
            </section>
          </div>
       </div>
    )
}
export default Info;