import React from "react";
import Video from "../res/video/homepage.mp4"

const Header=()=>{
  return(<header>
    <h2>Impartial, Remote, 3rd-Party,<br />Estimating Engine</h2>
    <video src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4" preload="auto" loop playsInline autoPlay={true}/>
  </header>);
}

export default Header;