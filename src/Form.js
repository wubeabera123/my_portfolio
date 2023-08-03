import React from "react";
import {PiPhoneCallBold} from "react-icons/pi";
import {TfiEmail} from "react-icons/tfi";
import {MdOutlineLocationOn} from "react-icons/md";
function Form(){
    return(
 <div>
    <div className="container d-flex">
      <div className="container" style={{marginTop: "8rem"}}>
        <h1 style={{color: "white", fontFamily: "serif",fontWeight: "bold"}}>Contact Us</h1>
        <p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur leo lorem .<br/> Sed accumsan leo quis metus efficitur.</p>
          <div className="d-flex py-3">
              <span className="d-flex" style={{fontSize: "2rem"}}><PiPhoneCallBold color="#FF2001"/></span>
              <div style={{marginLeft: "0.8rem"}}>
                 <p style={{fontSize: "1.2rem", color: "GrayText"}}>Call me</p>
                 <h5 style={{color: "white",marginTop: "-1rem"}}>+251974222863</h5>
              </div>
          </div>
          <div className="d-flex py-3">
              <span className="d-flex" style={{fontSize: "1.5rem"}}><TfiEmail color="#FF0000"/></span>
              <div style={{marginLeft: "1.2rem"}}>
                 <p style={{fontSize: "1.2rem", color: "GrayText"}}>Email</p>
                 <h5 style={{color: "white",marginTop: "-1rem"}}>wubeabera123@gmail.com</h5>
              </div>
          </div>
          <div className="d-flex">
              <span className="d-flex" style={{fontSize: "1.8rem"}}><MdOutlineLocationOn color="#FF0000"/></span>
              <div style={{marginLeft: "0.8rem"}}>
                 <p style={{fontSize: "1.2rem", color: "GrayText"}}>Address</p>
                 <h5 style={{color: "white",marginTop: "-1rem"}}>Addis Ababa, Betel</h5>
              </div>
          </div>
      </div>
      <div className="container" style={{marginTop: "8rem"}}> 
         <h1 style={{color: "white", fontFamily: "serif",fontWeight: "bold"}}>Drop a Line</h1>
           <div className="container d-flex py-3">
             <div className="container">
               <div className="container">
                 <div class="input-group mb-3" style={{width: "17rem",height: "3.8rem"}}>
                    <input type="text" class="form-control" placeholder="Name" style={{backgroundColor: "#141730",borderColor: "gray"}}></input>
                 </div>
               </div>
               <div className="container">
                 <div class="input-group mb-3" style={{width: "17rem",height: "3.8rem"}}>
                    <input type="text" class="form-control" placeholder="Email" style={{backgroundColor: "#141730",borderColor: "gray"}}></input>
                 </div>
               </div>
              </div> 
              <div className="container">
               <div className="container">
                 <div class="input-group mb-3" style={{width: "17rem",height: "3.8rem"}}>
                    <input type="text" class="form-control" placeholder="Phone#" style={{backgroundColor: "#141730",borderColor: "gray"}}></input>
                 </div>
               </div>
               <div className="container">
                 <div class="input-group mb-3" style={{width: "17rem",height: "3.8rem"}}>
                    <input type="text" class="form-control" placeholder="Budget" style={{backgroundColor: "#141730",borderColor: "gray"}}></input>
                 </div>
               </div>
              </div> 
           </div>
           <div class="input-group" style={{width: "39.3rem",height: "7rem"}}>
             <textarea class="form-control" placeholder="Message" style={{backgroundColor: "#141730",borderColor: "gray",marginLeft: "2.3rem"}}></textarea>
           </div>
      </div>
    </div>
    <div className="d-flex justify-content-center py-5">
      <button className="btn btn-danger" style={{width: "10rem",height: "3.4rem", fontSize: "1.2rem"}}>Submit</button>
    </div>
</div>
    )
}
export default Form;