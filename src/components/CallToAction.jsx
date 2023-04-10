import '../components/CallToAction.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className='call-to-action'>
        <div className='call-to-action-descr'><span>Explore what is trending </span><br /> Create an account and buy cryptocurrency to take the first step towards financial freedom
        </div>
        <Link className="signup-link" to="/signup">
            Sign Up
          </Link>

    </div>
  )
}

export default CallToAction