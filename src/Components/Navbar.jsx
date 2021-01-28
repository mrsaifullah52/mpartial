import React from "react";
import {Link} from "react-router-dom";
import brand from '../res/img/brand.png';





const Navbar=()=>{

  window.addEventListener("scroll",()=>{
    const navbar=document.querySelector(".nav nav");
    if(window.scrollY>=200){
        navbar.style.background="#fff";
      }else if(window.scrollY<=200){
        navbar.style.background="transparent";
      }
  })

  return(
    <div className="nav">
      <nav>
        <div className="brand">
          <img src={brand} alt="logo"/>
        </div>
        <ul>
          <li>
            <Link to="/">Ground-Truth Data</Link>
          </li>
          <li>
            <Link to="/">How it Works</Link>
          </li>
          <li>
            <Link to="/">Free Structur</Link>
          </li>
          <li>
            <Link to="/">Example Deliverables</Link>
          </li>
          <li>
            <Link to="/">Submission Portal</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}

export default Navbar;