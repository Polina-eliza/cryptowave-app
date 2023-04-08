import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { signIn, UserAuth } from '../context/AuthContext';
import '../routes/Signin.css';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };


  return (
    <div>
      <div className='signin-container'>
        <h2 className='heading'>Sign In</h2>
        <form onSubmit={handleSubmit} className='form-container'> 
          <div className='email-container'>
            <label>Email</label>
            <div className='input-wrapper'>
              <input
              onChange={(e) => setEmail(e.target.value)}
                type='email'
              />
              <AiOutlineMail />
            </div>
          </div>
          <div className='password-container'>
            <label>Password</label>
            <div className='input-wrapper'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
              />
              <AiFillLock />
            </div>
          </div>
          <button className='btn btn-trending'>
            Sign in
          </button>
        </form>
        <p className='create-account'>
          Don't have an account?{' '}
          <Link className='signup-link' to='/signup'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signin