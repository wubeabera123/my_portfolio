import React from "react";
import {PiPhoneCallBold} from "react-icons/pi";
import {TfiEmail} from "react-icons/tfi";
import {MdOutlineLocationOn} from "react-icons/md";
function Form(){
    return(
   <div>
      <div className="container" style={{marginTop: "8rem"}}>
        <h1 style={{color: "white", fontFamily: "serif",fontWeight: "bold"}}>Contact Us</h1>
        <p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur leo lorem .<br/> Sed accumsan leo quis metus efficitur.</p>
          <div className="d-flex py-3">
              <span className="d-flex" style={{fontSize: "2rem"}}><PiPhoneCallBold color="#FF2001"/></span>
              <div>
                 <p style={{fontSize: "1.2rem", color: "GrayText"}}>call me</p>
                 <h5 style={{color: "white",marginTop: "-1rem"}}>+251974222863</h5>
              </div>
          </div>
          <div className="d-flex py-3">
              <span className="d-flex" style={{fontSize: "1.6rem"}}><TfiEmail color="#FF0000"/></span>
              <div>
                 <p style={{fontSize: "1.2rem", color: "GrayText"}}>Email</p>
                 <h5 style={{color: "white",marginTop: "-1rem"}}>wubeabera123@gmail.com</h5>
              </div>
          </div>
          <div className="d-flex">
              <span className="d-flex" style={{fontSize: "2rem"}}><MdOutlineLocationOn color="#FF0000"/></span>
              <div>
                 <p style={{fontSize: "1.2rem", color: "GrayText"}}>Address</p>
                 <h5 style={{color: "white",marginTop: "-1rem"}}>Addis Ababa, Betel</h5>
              </div>
          </div>
      </div>
      <div className="container"> 
      <h1 style={{color: "white", fontFamily: "serif",fontWeight: "bold"}}>Drop a Line</h1>
      </div>
   </div>
    )
}
export default Form;