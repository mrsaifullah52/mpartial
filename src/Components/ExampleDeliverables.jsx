import React from "react";

const ExampleDeliverables=()=>{
  return(
    <section className="ExampleDeliverables">
      <div className="container">
        <div className="title">
          <h2>Example Deliverables</h2>
        </div>

        <div className="mitigationscan">
          <MitigationScan />
          <MitigationScan />
        </div>

      </div>
    </section>
  );
}

const MitigationScan=()=>{
  return(<div className="box">

    </div>)
}

export default ExampleDeliverables;