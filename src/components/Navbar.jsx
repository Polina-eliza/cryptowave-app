import { Link } from 'react-router-dom';
import Logo from '../assets/logotype.svg';

const Navbar = () => {
  return (
    <div>
        <Link to='/'>
            <div className='logo-container'>
                <img src={Logo} alt="logo" />
                <div className='logo'>CryptoWave</div>
            </div>

        </Link>

    </div>
  )
}

export default Navbar