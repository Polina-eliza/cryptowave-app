import "../components/Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaGithub,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/logotype.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer-container">
        <div className="footer-support">
          <h2>Support</h2>
          <ul className="support-wrapper">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>API Status</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className="footer-info">
          <h2>Info</h2>
          <ul className="info-wrapper">
            <li>About Us</li>
            <li>Careers</li>
            <li>Invest</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="footer-signup">
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="footer-news">
            <p>Sign up for crypto news</p>
            <form>
              <input
                className="footer-input"
                type="email"
                placeholder="Enter your email"
              />
              <Link className="signup-link" to="/signup">
            Sign Up
          </Link>
            </form>
            <div className="footer-social">
              <AiOutlineInstagram />
              <FaTiktok />
              <FaTwitter />
              <FaFacebookF />
              <FaGithub />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
