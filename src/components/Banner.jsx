import React from "react";
import "../components/Banner.css";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <h2 className="banner-heading">
        Trusted by <span>10 Millions+</span> Users. Create your crypto portfolio on Cryptop
        trader in seconds
      </h2>
      <Link to='/signup'>
              <button className="btn btn-trending btn-banner">Sign Up</button>
        </Link>
    </div>
  );
};

export default Banner;
