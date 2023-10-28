import React from 'react';
import logo from '../images/fcmblogo 1.png';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className='register'>
        <img src={logo} alt='logo' />
        <form action='' className='reg-form'>
          <h1 className='mt-3 mb-3'>Register</h1>
          <input type='email' placeholder='Email' />
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirm Password' />
          <button className='butin'>Register</button>
          <p className='instruction'>
            Already have an account?{' '}
            <Link to={'/'} className='log'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
