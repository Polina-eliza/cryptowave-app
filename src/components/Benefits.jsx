import React from "react";
import "../components/Benefits.css";
import  Benefit from '../assets/benefits.svg';
import Stars from '../assets/Stars.svg';

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="left-container">
        <div className="wrapper">
          <div className="data">
            $12B <span>+</span>
          </div>
          <div className="descr">
            Assets <br /> Management
          </div>
        </div>
        <div className="wrapper">
          <div className="data">
            0.10 <span>%</span>
          </div>
          <div className="descr">
            Lowest <br /> Transaction Fee
          </div>
        </div>
      </div>
      <div className="center-container">
        <div className="wrapper">
          <div className="data">
            200 <span>+</span>
          </div>
          <div className="descr">
            Supported <br /> Cryptocurrencies
          </div>
        </div>
        <div className="wrapper">
          <div className="data">
            5M <span>%</span>
          </div>
          <div className="descr">
            Crypto Users <br /> Worldwide
          </div>
        </div>
      </div>
      <div className="right-container">
        <img className="img" src={Benefit} alt="" />
        <div className="stars-container">
            <img className="stars" src={Stars} alt="" />
            <p className="text">Loved by teams worldwide Trusted by 10 Million+</p>
        </div> 
      </div>
    </div>
  );
};

export default Benefits;
