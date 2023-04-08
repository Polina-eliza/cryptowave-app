import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import '../routes/Signup.css';


const Signin = () => {


  return (
    <div>
      <div className='signup-container'>
        <h2 className='heading'>Sign Up</h2>
        <form className='form-container'> 
          <div className='email-container'>
            <label>Email</label>
            <div className='input-wrapper'>
              <input
                type='email'
              />
              <AiOutlineMail />
            </div>
          </div>
          <div className='password-container'>
            <label>Password</label>
            <div className='input-wrapper'>
              <input
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
          <Link className='signin-link' to='/signin'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signin