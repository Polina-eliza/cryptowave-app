import React from "react";
import "../components/Benefits.css";
import  Benefit from '../assets/benefits.svg';
import Stars from '../assets/Stars.svg';

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits-left-container">
        <div className="benefits-wrapper">
          <div className="benefits-data">
            $12B <span>+</span>
          </div>
          <div className="benefits-descr">
            Assets <br /> Management
          </div>
        </div>
        <div className="benefits-wrapper">
          <div className="benefits-data">
            0.10 <span>%</span>
          </div>
          <div className="benefits-descr">
            Lowest <br /> Transaction Fee
          </div>
        </div>
      </div>
      <div className="benefits-center-container">
        <div className="benefits-wrapper">
          <div className="benefits-data">
            200 <span>+</span>
          </div>
          <div className="benefits-descr">
            Supported <br /> Cryptocurrencies
          </div>
        </div>
        <div className="benefits-wrapper">
          <div className="benefits-data">
            5M <span>%</span>
          </div>
          <div className="benefits-descr">
            Crypto Users <br /> Worldwide
          </div>
        </div>
      </div>
      <div className="benefits-right-container">
        <img className="benefits-img" src={Benefit} alt="" />
        <div className="stars-container">
            <img className="stars" src={Stars} alt="" />
            <p className="benefits-text">Loved by teams worldwide Trusted by 10 Million+</p>
        </div> 
      </div>
    </div>
  );
};

export default Benefits;
