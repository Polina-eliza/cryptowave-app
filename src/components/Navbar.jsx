import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logotype.svg';
import '../components/Navbar.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className='navbar'>
        <Link to='/'>
            <div className='logo-container'>
                <img className='logo-img' src={Logo} alt="logo" />
                <div className='logo'>CryptoWave</div>
            </div>
        </Link>
        <div className='pages-container'>
          <Link className='navbar-page' to='/'>Home</Link>
          <Link className='navbar-page' to='/about'>About</Link>
          <Link className='navbar-page' to='/pricing'>Pricing</Link>
          <Link className='navbar-page' to='/contact'>Contact</Link>
        </div>
        <div className='auth-container'>
          <Link className='signin' to='/signin'>Sign In</Link>
          <Link className='signup' to='/signup'>Sign Up</Link>
        </div>
        <div onClick={handleNav} className='menu-icon'>
          {nav ? <AiOutlineClose size={32} color="black"/> : <AiOutlineMenu size={32} color="black" />}
        </div>
       
        {/* Mobile Menu */}
        <div className={nav ? 'mobile active' : 'mobile'}>
          <ul>
            <li>
              <Link className='home' to='/'>Home</Link>
            </li>
            <li>
            <Link className='navbar-page' to='/about'>About</Link>
            </li>
            <li>
            <Link className='navbar-page' to='/pricing'>Pricing</Link>
            </li>
            <li>
            <Link className='navbar-page' to='/contact'>Contact</Link>
            </li>
            <li>
              <Link className='account'to='/'>Account</Link>
            </li>
          </ul>
          <div className='btn-container'>
            <Link to='/signin'>
              <button className="btn btn-signin" >Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='btn btn-signup'>Sign Up</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar

