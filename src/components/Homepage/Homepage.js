import React from 'react';
import cartoon from '../images/caton.png';
import './homepage.css';
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <>
      <div className='homepage'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='info'>
                we provide you with best lending options in banking system that
                will make your mouth watery and you will come for more. Linking
                you and customer that is ready and willing with on time payment
                <div className='mt-3'>
                  <button className='reg-btn'>
                    <Link to={'/register'} className='reg-link'>
                      Register
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <img src={cartoon} alt='cartoon' className='cartoon' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
