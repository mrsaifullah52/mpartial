import React from "react";

const WaterfalFee=()=>{
  return(
    <section className="waterfallfee">
      <div className="container">
        <div className="title">
          <h2>Waterfall Fee Structure</h2>
        </div>
        <div className="rangbar">
          <div className="card">
            <b>${100}</b>
            <p>Estimated Grand Total</p>
          </div>
          <input type="range" id="waterfallfee"/>
          <div className="limit">
            <span>$0</span>
            <span>$250,000</span>
            <span>$500,000</span>
            <span>$1M+</span>
          </div>
        </div>
      </div>
    </section>
  );
}


export default WaterfalFee;