import React from 'react';
import logo from '../images/fcmblogo 1.png';

const User = () => {
  return (
    <>
      <header>
        <p>Welcome</p>
        <p>Solomon Nungwa</p>
        <img src={logo} alt='logo' />
      </header>
      <section>
        <div className='card'>
          <div className='row'>
            <div className='col-md-8'>
              <p>Your Balance</p>
              <p>N12,000,000.00</p>
              <p>5678 3456 **** 9875</p>
            </div>
            <div className='col-md-4'>
              <p>Visa</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
