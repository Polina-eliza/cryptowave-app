
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <hr color='grey' opacity='1' size='1' width='100%' />
        <div className='badge'>
            Updated On April 22, 2023
        </div>
        <h1>Build Wealth <span>Authomatically</span> With Crypto</h1>
        <p> We provide a secure and user-friendly platform for trading and investing in cryptocurrencies, equipped with advanced security features to ensure the safety of your assets and make earning profits a hassle-free experience.</p>
        <Link to='/signup'>
              <button className="btn">Get Started</button>
        </Link>

    </div>
  )
}

export default Hero