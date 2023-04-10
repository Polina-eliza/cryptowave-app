import React from "react";
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <h2 className="banner-heading">
        Trusted by <span>10 Millions+</span> Users. Create your crypto portfolio on Cryptop
        trader in seconds
      </h2>
      <Link className="signup-link" to="/signup">
            Sign Up
          </Link>
    </div>
  );
};

export default Banner;
