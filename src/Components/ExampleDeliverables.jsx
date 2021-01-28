import React from "react";


// images
import left from "../res/img/left.PNG";
import right from "../res/img/right.PNG";

import slider1 from "../res/img/slider/first.jpg";
import slider2 from "../res/img/slider/second.jpg";
import slider3 from "../res/img/slider/third.jpg";
import slider4 from "../res/img/slider/fourth.jpg";

import trueplan1 from "../res/img/trueplan1.png";
import trueplan2 from "../res/img/trueplan2.png";

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

        <div className="immaculateslider">
          <h3>Immaculate. Impartial. [ESX]</h3>
          <div className="slider">
        <section className="carousel" aria-label="Gallery">
          <ol className="carousel__viewport">
            <li id="carousel__slide1"
                tabindex="0"
                className="carousel__slide">

                <img src={slider1} alt=""/>
          
                <div className="carousel__snapper">
                  <a href="#carousel__slide4"
                    className="carousel__prev">Go to last slide</a>
                  <a href="#carousel__slide2"
                    className="carousel__next">Go to next slide</a>
                </div>
            </li>
            <li id="carousel__slide2"
                tabindex="0"
                className="carousel__slide">

                <img src={slider2} alt=""/>
          
                <div className="carousel__snapper">
                  <a href="#carousel__slide1"
                    className="carousel__prev">Go to previous slide</a>
                  <a href="#carousel__slide3"
                    className="carousel__next">Go to next slide</a>
                </div>
            </li>
            <li id="carousel__slide3"
                tabindex="0"
                className="carousel__slide">

                <img src={slider3} alt=""/>
          
                <div className="carousel__snapper">
                  <a href="#carousel__slide2"
                    className="carousel__prev">Go to previous slide</a>
                  <a href="#carousel__slide4"
                    className="carousel__next">Go to next slide</a>
                </div>
            </li>
            <li id="carousel__slide4"
                tabindex="0"
                className="carousel__slide">

              <img src={slider4} alt=""/>

              <div className="carousel__snapper">
                <a href="#carousel__slide3"
                  className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide1"
                  className="carousel__next">Go to first slide</a>
              </div>
            </li>
          </ol>

          <aside className="carousel__navigation">
            <ol className="carousel__navigation-list">

              <li className="carousel__navigation-item">
                <a href="#carousel__slide1"
                  className="carousel__navigation-button">Go to slide 1</a>
              </li>

              <li className="carousel__navigation-item">
                <a href="#carousel__slide2"
                  className="carousel__navigation-button">Go to slide 2</a>
              </li>

              <li className="carousel__navigation-item">
                <a href="#carousel__slide3"
                  className="carousel__navigation-button">Go to slide 3</a>
              </li>

              <li className="carousel__navigation-item">
                <a href="#carousel__slide4"
                  className="carousel__navigation-button">Go to slide 4</a>
              </li>

            </ol>
          </aside>

        </section>


            
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