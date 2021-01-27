import React, { useState } from "react";

const WaterfalFee=()=>{

  const [num,setNum]=useState(0);




  const calcNum=(e)=>{

    const selector=document.querySelector(".selector");
    const progress=document.querySelector(".progress");
    const card=document.querySelector(".card");

    setNum(e.target.value);


    if(num<3){
      selector.style.left=-1+"%";
      progress.style.width=0+"%";
      card.style.left=-1+"%";
    }else{
      selector.style.left=num+"%";
      progress.style.width=num+"%";
      card.style.left=num+"%";
    }

  }

  return(
    <section className="waterfallfee">
      <div className="container">

        <div className="title">
          <h2>Waterfall Fee Structure</h2>
        </div>

        <div className="rangbar">
          <div className="card">
           <div className="body">
            <b>${num}K</b>
            <p>Estimated Grand Total</p>
           </div>
          </div>

          <input type="range" id="waterfallfee" value={num} onChange={calcNum} min={0} max={100} />

          <div className="progress"></div>

          <div className="selector">
            <div className="thumb"></div>
          </div>

          <div className="limit">
            <span>$0</span>
            <span>$250,000</span>
            <span>$500,000</span>
            <span>$750,000</span>
            <span>$1M+</span>
          </div>


        </div>
      </div>
    </section>
  );
}


export default WaterfalFee;