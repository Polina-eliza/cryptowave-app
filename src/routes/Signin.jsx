import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import '../routes/Signin.css';


const Signin = () => {


  return (
    <div>
      <div className='signin-container'>
        <h2 className='heading'>Sign In</h2>
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