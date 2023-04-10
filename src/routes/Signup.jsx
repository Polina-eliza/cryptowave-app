import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import '../routes/Signup.css';
import { UserAuth } from '../context/AuthContext';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = UserAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };



  return (
    <div>
      <div className='signup-container'>
        <h2 className='heading'>Sign Up</h2>
        {error ? <p className='error-message'>{error}</p> : null}
        <form className='form-container' onSubmit={handleSubmit}> 
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
            Sign up
          </button>
        </form>
        <p className='create-account'>
          Don't have an account?{' '}
          <Link className='link-plain' to='/signin'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup