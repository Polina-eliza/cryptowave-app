import '../components/CallToAction.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className='calltoaction'>
        <div className='descr'><span>Explore what is trending </span><br /> Create an account and buy cryptocurrency to take the first step towards financial freedom
        </div>
        <Link to='/signup'>
              <button className="btn btn-trending">Get Started</button>
        </Link>

    </div>
  )
}

export default CallToAction