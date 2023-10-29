import React, { useEffect, useRef, useState } from 'react';
import {
  AiFillInfoCircle,
  AiFillCheckCircle,
  AiFillAlert,
} from 'react-icons/ai';
import logo from '../images/fcmblogo 1.png';
import './register.css';
import { Link } from 'react-router-dom';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const emailRef = useRef();
  // const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');

  const [userName, setUserName] = useState('');
  const [valideUserName, setValidUserName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchpwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(userName);
    console.log(result);
    console.log(userName);
    setValidUserName(result);
  }, [userName]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [email, userName, password, matchPwd]);
  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to={'/'}>Sign in</Link>
          </p>
        </section>
      ) : (
        <div className='register'>
          <div className='container'>
            <div className='logo'>
              <img src={logo} alt='logo' className='mt-5' />
            </div>
            <p
              ref={errRef}
              className={errMsg ? 'errmsg' : 'offscreen'}
              arial-live='assertive'
            >
              {errMsg}
            </p>
            <form action='' className='reg-form'>
              <h1 className='mt-3 mb-3'>Register</h1>
              <div className='form-item'>
                <label htmlFor='email'>Email:</label>
                <input
                  id='email'
                  type='email'
                  ref={emailRef}
                  placeholder='Email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-item'>
                <label htmlFor='user'>
                  UserName:
                  <span className={valideUserName ? 'valid' : 'hide'}>
                    <AiFillCheckCircle />
                  </span>
                  <span
                    className={valideUserName || !userName ? 'hide' : 'invalid'}
                  >
                    <AiFillAlert />
                  </span>
                </label>
                <input
                  id='user'
                  type='text'
                  placeholder='Username'
                  autoComplete='off'
                  required
                  onChange={(e) => setUserName(e.target.value)}
                  aria-invalid={valideUserName ? false : true}
                  aria-describedby='uidnote'
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <p
                  id='uidnote'
                  className={
                    userFocus && userName && !valideUserName
                      ? 'instrut'
                      : 'offscreen'
                  }
                >
                  <AiFillInfoCircle />
                  4 to 24 characters. <br />
                  Must begin with a letter. <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
              <div className='form-item'>
                <label htmlFor='password'>
                  {' '}
                  Password:
                  <span className={validPassword ? 'valid' : 'hide'}>
                    <AiFillCheckCircle />
                  </span>
                  <span
                    className={validPassword || !password ? 'hide' : 'invalid'}
                  >
                    <AiFillAlert />
                  </span>
                </label>
                <input
                  type='password'
                  placeholder='Password'
                  id='password'
                  aria-invalid={validPassword ? 'false' : 'true'}
                  aria-describedby='pwdnote'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id='pwdnote'
                  className={
                    pwdFocus && !validPassword ? 'instrut' : 'offscreen'
                  }
                >
                  <AiFillInfoCircle />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special character:{' '}
                  <span aria-label='exclamation mark'>!</span>{' '}
                  <span aria-label='at symbol'>@</span>{' '}
                  <span aria-label='hashtag'>#</span>{' '}
                  <span aria-label='dollar sign'>$</span>
                  <span aria-label='percent'>%</span>
                </p>
              </div>
              <div className='form-item'>
                <label htmlFor='conPass'>
                  {' '}
                  Confirm Password:
                  <span className={validMatch && matchPwd ? 'valid' : 'hide'}>
                    <AiFillCheckCircle />
                  </span>
                  <span
                    className={validMatch || !matchPwd ? 'hide' : 'invalid'}
                  >
                    <AiFillAlert />
                  </span>
                </label>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  id='conPass'
                  onChange={(e) => setMatchpwd(e.target.value)}
                  aria-invalid={validMatch ? 'false' : 'true'}
                  aria-describedby='confirmnote'
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p
                  id='confirmnote'
                  className={
                    matchFocus && !validMatch ? 'instrut' : 'offscreen'
                  }
                >
                  <AiFillInfoCircle />
                  Must match the first password input field
                </p>
              </div>
              <button
                className='butin mb-3'
                disabled={!validPassword || !validMatch ? true : false}
                variant='primary'
                type='submit'
              >
                Register
              </button>
              <p className='instruction mb-5'>
                Already have an account?{' '}
                <Link to={'/login'} className='log'>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
