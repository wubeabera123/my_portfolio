import react from 'react';
import my_CV from './Image/my_CV.png';
import Landing from './Landing';
import { Link } from "react-router-dom";
import {BsArrowLeftSquare} from 'react-icons/bs';

export default function Mycv(){
    return <div>
             <Link to='/experience' ><BsArrowLeftSquare style={{ fontSize: "30px",marginTop: "-55rem",marginLeft: "2rem" }}/></Link>
             <img src={my_CV} style={{width: "50rem",objectFit:"cover",marginLeft: "20rem"}}/>
          </div>
}