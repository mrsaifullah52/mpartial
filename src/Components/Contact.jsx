import React, { useState } from "react";

const Contact =()=>{

  const[data,setData]=useState({
    name:"",
    email:"",
    tel:"",
    message:""
  });

  const changeEvent=(e)=>{
    if(e.target.id=data){
      setData(e.target.id);
    }
  }

  const submitEvent=(e)=>{
    e.prevantDefault();
  }

  return(
    <section className="contact">
      <div className="container">
        <div className="title">
          <h2>Contact Us</h2>
        </div>

          <form onSubmit={submitEvent}>
            <div className="form">
              <div className="left">
                <input type="text" id="name" onChange={changeEvent} placeholder="Your Name"/>
                <input type="email" id="email" onChange={changeEvent} placeholder="Email"/>
                <input type="tel" id="tel" onChange={changeEvent} placeholder="Cell"/>
              </div>

              <div className="right">
                <textarea onChange={changeEvent} id="message" cols="30" rows="10" placeholder="Write your message..."></textarea>
              </div>
            </div>
            <div className="button">
              <button type="button">Submit</button>
            </div>
          </form>

      </div>
    </section>
  )
}

export default Contact;