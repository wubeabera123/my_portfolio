import React from "react";
import {MdFacebook} from "react-icons/md";
import {FaTwitter} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
function Footer(){
    return(
       <div id="foot">
          <div className="circle">
             <section>
               <p style={{fontSize: "2.6rem", color: "white", fontFamily: "serif",fontWeight: "bold"}}>Lets Say Hi</p>
               <p style={{fontSize: "1rem", color: "white",fontWeight: "bold",color: "lightblue"}}>wubeabera123@gmail.com</p>
               <section style={{fontSize: "2rem",marginRight: "-2rem"}}>
                 <MdFacebook color="lightblue"/>
                 <FaTwitter color="lightblue"/>
                 <FaInstagramSquare color="lightblue"/>
               </section>
             </section>
          </div>
          <div className="line"></div>
          <p style={{color: "white", textAlign: "center", marginTop: "1.8rem"}}>2023-Form | All right reserved</p>
       </div>
    )
}
export default Footer;