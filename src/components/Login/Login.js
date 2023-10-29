import React from 'react';
import logo from '../images/fcmblogo 1.png';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='login'>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt='logo' className='mt-5' />
          </div>
          <form action='' className='login-form'>
            <h1 className='mt-3 mb-3'>Login</h1>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <button className='butin'>Login</button>
            <p className='instruction'>
              Create an account {''}
              <Link to={'register'} className='reg mt-3'>
                Register now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
