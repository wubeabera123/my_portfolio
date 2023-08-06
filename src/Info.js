import React from "react";
import {RiAwardFill} from "react-icons/ri";
import {BsPeopleFill} from "react-icons/bs";
import {GiCalendarHalfYear} from "react-icons/gi";
import {GoProjectSymlink} from "react-icons/go";
function Info(){
    return(
       <div id="info">
          <div style={{marginTop: "-10rem"}} className="container d-flex justify-content-between" id="values">
            <section id="bord1" className="sm:">
                <RiAwardFill color="red" style={{fontSize: "3vw", marginTop: "-2rem",marginLeft: "1rem"}}/>
                <p style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: "3vw"}}>00</p>
                <p style={{textAlign: "center", color: "white",fontSize: "2vw",marginTop: "-1rem"}}>Awards</p>
            </section>
            <section id="bord2" className="">
                <BsPeopleFill color="red" style={{fontSize: "3vw", marginTop: "-2rem",marginLeft: "1rem"}}/>
                <p style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: "3vw"}}>00</p>
                <p style={{textAlign: "center", color: "white",fontSize: "2vw",marginTop: "-1rem"}}>Cleints</p>
            </section>
            <section id="bord3" className="">
                <GiCalendarHalfYear color="red" style={{fontSize: "3vw", marginTop: "-2rem",marginLeft: "1rem"}}/> 
                <p style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: "3vw"}}>01</p>
                <p style={{textAlign: "center", color: "white",fontSize: "2vw",marginTop: "-1rem"}}>Years <br/>Experience</p>
            </section>
            <section id="bord4" className="">
                <GoProjectSymlink color="red" style={{fontSize: "3vw", marginTop: "-2rem",marginLeft: "1rem"}}/> 
                <p style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: "3vw"}}>4+</p>
                <p style={{textAlign: "center", color: "white",fontSize: "2vw",marginTop: "-1rem"}}>Projects</p>
            </section>
          </div>
       </div>
    )
}
export default Info;