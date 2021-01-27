import React from "react";

const HowItWork=()=>{
  return(
    <section className="howitworks">
      <div className="container">
        <div className="title">
          <h2>How It Works</h2>
        </div>
        <div className="boxs">
          <Box num={1} desc="Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera." />
          <Box num={2} desc="Submit the Matterport scans via the mpartial portal and then go back to what you do great" />
          <Box num={3} desc="Receive a well-formatted, fully documented Xactimate PDF, ESX & Matterport TruePlan SKX." />
        </div>
        <div className="link">
          <a href="/">Get Started</a>
        </div>
  </div>
    </section>
  );
}

const Box=(props)=>{
  return(<div className="box">
    <div className="head">
      <h3>{props.num}</h3>
    </div>
    <div className="body">
      <p>{props.desc}</p>
    </div>
  </div>)
}

export default HowItWork;