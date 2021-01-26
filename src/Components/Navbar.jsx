import React from "react";
import {Link} from "react-router-dom";
import brand from '../res/img/brand.png';

const Navbar=()=>{
  return(<>
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
  </>);
}

export default Navbar;