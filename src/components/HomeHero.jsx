
import { Link } from 'react-router-dom';
import './HomeHero.css';

const HeroHome = () => {
  return (
    <div className='hero-home'>
        <hr color='grey' opacity='1' size='1' width='100%' />
        <div className='badge'>
            Updated On April 22, 2023
        </div>
        <h1 className='header hero-home-header'>Build Wealth <span>Authomatically</span> With Crypto</h1>
        <p className='hero-home-descr'> We provide a secure and user-friendly platform for trading and investing in cryptocurrencies, equipped with advanced security features to ensure the safety of your assets and make earning profits a hassle-free experience.</p>
        <Link className="signup-link" to="/signup">
            Sign Up
          </Link>

    </div>
  )
}

export default HeroHome