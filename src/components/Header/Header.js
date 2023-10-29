import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/fcmblogo 1.png';

const Header = () => {
  return (
    <>
      <nav
        className='navbar navbar-expand-lg  sticky-top'
        style={{ background: '#321e46' }}
      >
        <div className='container'>
          <Link to={''} className='navbar-brand'>
            <img
              src={logo}
              alt='logo '
              style={{ width: '80px', height: '80px' }}
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarText'>
            <ul class='navbar-nav me-auto  m-auto mb-2 mb-lg-0'>
              <li class='nav-item '>
                <Link
                  className='nav-link text-light active'
                  aria-current='page'
                  to={''}
                >
                  Home
                </Link>
              </li>
              <li class='nav-item'>
                <Link className='nav-link text-light' to={'/login'}>
                  Login
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link text-light' to={'/register'}>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
