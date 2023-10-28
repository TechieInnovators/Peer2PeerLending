import React from 'react';
import logo from '../images/fcmblogo 1.png';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='login'>
        <img src={logo} alt='logo' className='logo' />
        <form action=''>
          <h1 className='mt-3 mb-3'>Login</h1>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <button className='butin'>Login</button>
          <Link to={'register'} className='register mt-3'>
            {' '}
            Register now
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
