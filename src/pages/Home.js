import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/health.jpg";
import "../styles/Home.css";
import Menu from "../pages/Menu.js";
import Contact from "../pages/Contact.js";
function Home() {
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> IBS Hospitals </h1>
        <p>Treatment for Diseases</p>
        <Link to="/contact">
          <button> Book  </button>
        </Link>
      </div>
    </div>
    <div className="points">
     <h1 className="head">Deliverables to be obtained</h1> 
     <p> The main objective is to develop an AI/ML algorithm which helps in predicting the treatment variable values (parameters such as cadence, stride length etc) for the given percentage of improvement of the patient initial condition (Left swing phase, Right stance phase etc). And algorithm also need to assist in knowing the underlying impact of predicted treatment parameters on other tests (BBG,TUG,10m,MMT etc)</p>
     <ul>
<li>Velocity(m/s) value range</li>
<li>Cadence (Steps/min) value range</li>
<li>Stride length(cm) range</li>
<li>No of weeks of treatment</li>
<li>Change in the BBG score if the patient undergoes the above treatment </li>
</ul>
      </div>
      <div className="content">
       <h1 className="Heading"> Modified Statement of Work </h1>
        <p>
        The main objective is to develop an AI/ML algorithm which helps in predicting the treatment variable values (parameters such as cadence, stride length etc) for the given percentage of improvement of the patient initial condition (Left swing phase, Right stance phase etc). And algorithm also need to assist in knowing the underlying impact of predicted treatment parameters on other tests (BBG,TUG,10m,MMT etc)

        </p></div>
    <Menu />
    <div className="points">
     <h1 className="head">Deliverables to be obtained</h1> 
     <p> The main objective is to develop an AI/ML algorithm which helps in predicting the treatment variable values (parameters such as cadence, stride length etc) for the given percentage of improvement of the patient initial condition (Left swing phase, Right stance phase etc). And algorithm also need to assist in knowing the underlying impact of predicted treatment parameters on other tests (BBG,TUG,10m,MMT etc)</p>
     <ul>
<li>Velocity(m/s) value range</li>
<li>Cadence (Steps/min) value range</li>
<li>Stride length(cm) range</li>
<li>No of weeks of treatment</li>
<li>Change in the BBG score if the patient undergoes the above treatment </li>
</ul>
      </div>
      <div className="content">
       <h1 className="Heading"> Modified Statement of Work </h1>
        <p>
        The main objective is to develop an AI/ML algorithm which helps in predicting the treatment variable values (parameters such as cadence, stride length etc) for the given percentage of improvement of the patient initial condition (Left swing phase, Right stance phase etc). And algorithm also need to assist in knowing the underlying impact of predicted treatment parameters on other tests (BBG,TUG,10m,MMT etc)

        </p></div>
    <Contact/>
    </div>
    
  );
}

export default Home;
