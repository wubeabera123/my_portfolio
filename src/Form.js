import React from "react";
import {PiPhoneCallBold} from "react-icons/pi";
import {TfiEmail} from "react-icons/tfi";
import {MdOutlineLocationOn} from "react-icons/md";
function Form(){
    return(
 <div>
    <div className="container d-flex">
      <div className="container" style={{marginTop: "7.9rem"}}>
        <p style={{color: "white", fontFamily: "serif",fontWeight: "bold",fontSize: "3vw"}}>Contact Us</p>
        <p style={{color: "white",fontSize: "1.2vw"}}>Lorem ipsum dolor sit amet, consectetur leo lorem .<br/> Sed accumsan leo quis metus efficitur.</p>
          <div className="d-flex py-3">
              <span className="d-flex" style={{fontSize: "2.5vw"}}><PiPhoneCallBold color="#FF2001"/></span>
              <div style={{marginLeft: "0.8rem"}}>
                 <p style={{fontSize: "1.5vw", color: "GrayText"}}>Call me</p>
                 <h5 style={{color: "white",marginTop: "-1rem",fontSize: "1.5vw"}}>+251974222863</h5>
              </div>
          </div>
          <div className="d-flex py-3">
              <span className="d-flex" style={{fontSize: "2.5vw",marginTop: "-1.5rem"}}><TfiEmail color="#FF0000"/></span>
              <div style={{marginLeft: "0.8rem",marginTop: "-2rem"}}>
                 <p style={{fontSize: "1.5vw", color: "GrayText"}}>Email</p>
                 <h5 style={{color: "white",marginTop: "-1rem",fontSize: "1.5vw"}}>wubeabera123@gmail.com</h5>
              </div>
          </div>
          <div className="d-flex">
              <span className="d-flex" style={{fontSize: "2.5vw",marginTop: "-0.5rem"}}><MdOutlineLocationOn color="#FF0000"/></span>
              <div style={{marginLeft: "0.8rem",marginTop: "-1.2rem"}}>
                 <p style={{fontSize: "1.5vw", color: "GrayText"}}>Address</p>
                 <h5 style={{color: "white",marginTop: "-1rem",fontSize: "1.5vw"}}>Addis Ababa, Betel</h5>
              </div>
          </div>
      </div>
      <div className="container" style={{marginTop: "7.5rem"}}> 
         <p style={{color: "white", fontFamily: "serif",fontWeight: "bold",fontSize: "3vw"}}>Drop a Line</p>
  <div class="container">
      <div className="d-flex">
        <div class="row">
           <div class="col">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Name" style={{backgroundColor: "#141730",borderColor: "gray",padding: "1rem",paddingRight: "4rem"}}></input>
              </div>
           </div>
        </div>
       <div class="row">
           <div class="col">
              <div class="input-group mr-3">
                <input type="email" class="form-control" placeholder="Email" style={{backgroundColor: "#141730",borderColor: "gray",padding: "1rem",paddingRight: "4rem"}}></input>
               </div>
            </div>
         </div>
       </div>  
       <div className="d-flex justify-content-between">
         <div class="row">
            <div class="col">
               <div class="input-group mt-3">
                  <input type="text" class="form-control" placeholder="Phone#" style={{backgroundColor: "#141730",borderColor: "gray",padding: "1rem",paddingRight: "4rem"}}></input>
               </div>
            </div>
        </div>
       <div class="row">
           <div class="col">
              <div class="input-group mt-3">
                <input type="email" class="form-control" placeholder="Budget" style={{backgroundColor: "#141730",borderColor: "gray",padding: "1rem",paddingRight: "4rem"}}></input>
               </div>
            </div>
         </div>
         </div>
             <div class="row">
               <div class="col">
                  <div class="input-group mt-4">
                      <textarea class="form-control" placeholder="Message" style={{backgroundColor: "#141730",borderColor: "gray",height: "8rem"}}></textarea>
                  </div>
                 <div className="py-5">
                   <button className="btn btn-danger" style={{width: "10rem",height: "3.4rem", fontSize: "1.2rem"}}>Submit</button>
                 </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    )
}
export default Form;