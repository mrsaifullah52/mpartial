import React from "react";

// images
import left from "../res/img/left.PNG";
import right from "../res/img/right.PNG";

const ExampleDeliverables=()=>{
  return(
    <section className="ExampleDeliverables">
      <div className="container">
        <div className="title">
          <h2>Example Deliverables</h2>
        </div>

        <div className="mitigationscan">
          <h3>Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)</h3>
          <div className="boxs">
            <MitigationScan img={left} txt="Pre-Mitigation Scan"/>
            <MitigationScan img={right} txt="Post-Mitigation Scan"/>
          </div>
        </div>

     


      </div>
    </section>
  );
}

const MitigationScan=(props)=>{
  return(<div className="box">
      <img src={props.img} alt={props.txt}/>
    </div>)
}

export default ExampleDeliverables;