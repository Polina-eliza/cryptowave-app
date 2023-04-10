import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logotype.svg";
import "../components/Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt="logo" />
          <div className="logo">CryptoWave</div>
        </div>
      </Link>
      <div className="pages-container">
        <Link className={activeLink === "/" ? "navbar-page active" : "navbar-page"} to="/" onClick={() => setActiveLink("/")} >
          Home
        </Link>
        <Link className={activeLink === "/contact" ? "navbar-page active" : "navbar-page"} to="/contact" onClick={() => setActiveLink("/contact")}>
          Contact
        </Link>
      </div>

      {user?.email ? (
        <div className="auth-container">
          <Link className="account" to="/account">
            Account
          </Link>
          <Link onClick={handleSignOut} className="signup" to="/signup">
            Sign Out
          </Link>
        </div>
      ) : (
        <div className="auth-container">
          <Link className="signin-link" to="/signin">
            Sign In
          </Link>
          <Link className="signup-link" to="/signup">
            Sign Up
          </Link>
        </div>
      )}

      <div onClick={handleNav} className="menu-icon">
        {nav ? (
          <AiOutlineClose size={32} color="black" />
        ) : (
          <AiOutlineMenu size={32} color="black" />
        )}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? "mobile active" : "mobile"}>
        <ul className="navigation-container">
          <li onClick={handleNav}>
            <Link className="home" to="/">
              Home
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link className="contact" to="/contact">
              Contact
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link className="account" to="/">
              Account
            </Link>
          </li>
        </ul>

        <div className="btn-container">
          <Link to="/signin">
            <button onClick={handleNav} className="signin-link btn-link">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button onClick={handleNav} className="signup-link btn-link">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
