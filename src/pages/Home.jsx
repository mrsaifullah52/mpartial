import React from "react";
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';

const Home=()=>{
  return(<>
    <Navbar/>
    <Header/>

    <section className="mitigation">
      <div className="container">
        <div className="box">
          <h2>GROUND-TRUTH DATA EVERYONE TRUSTS</h2>
        </div>
        <div className="box">
          <p>We have combined the best-of-breed technology platforms with an eye towards relieving you of administrative burden. Matterport 3D scans augmented by TruePlan are used to generate consistent Xactimate sheets that are delivered in accord with Actionable Insights compliance rule sets. Each mpartial is produced with full transparency, unprecedented forensic photography, and infallible geospatial data that collectively result in rapid approvals.</p>
        </div>
      </div>
    </section>


  </>);
}

export default Home;