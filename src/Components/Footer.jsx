import React from "react";

// icons
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer=()=>{

  return(<footer>
    <div className="container">
      <div className="boxs">
        <div className="box">
          <p>mpartial, a 4D Schematics Company. Copyright 2020 all rights reserved.</p>
        </div>
        <div className="socialicons">
          <ul>
            <li><a href="#"><InstagramIcon/></a></li>
            <li><a href="#"><FacebookIcon/></a></li>
            <li><a href="#"><LinkedInIcon/></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>)
}

export default Footer;