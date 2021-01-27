import React, { useState } from "react";
// icons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Comparison_slider=()=>{

  const [num,setNum]=useState(20);

  const sliderComparison =(e)=>{
      const img = document.querySelector(".img .left");
      const dragLine = document.querySelector(".controller .arrows");
      
      setNum(e.target.value);
      let sliderVal = num;
      dragLine.style.left = sliderVal + "%";
      img.style.width = sliderVal + "%";
  } 

  return(<div className="container">
  <div className="img">
    <div className="left"></div>
    <div className="right"></div>
  </div>
  
  <div className="controller">
    <input type="range" id="slider" min="0" max="100" value={num} onChange={sliderComparison} />

    <div className="arrows">
      <div className="icons">
        <span className="left">
          <ArrowBackIcon/>
        </span>
        <span className="right">
          <ArrowForwardIcon/>
        </span>
      </div>
    </div>
  </div>

</div>
      );
}

export default Comparison_slider;