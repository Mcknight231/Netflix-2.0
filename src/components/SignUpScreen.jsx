import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../features/userSlice';
import '../styles/SignUpScreen.css';

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    e.preventDefault();
    dispatch(loginStart());

    setTimeout(() => {
      if (email && password) {
        const user = {
          uid: Date.now().toString(),
          email: email,
          displayName: email.split('@')[0],
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginFailure('Please enter email and password'));
      }
    }, 1000);
  };

  const signIn = (e) => {
    e.preventDefault();
    dispatch(loginStart());

    setTimeout(() => {
      if (email && password) {
        const user = {
          uid: Date.now().toString(),
          email: email,
          displayName: email.split('@')[0],
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginFailure('Please enter email and password'));
      }
    }, 1000);
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        {error && <div className='error-message'>{error}</div>}
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email' 
          type='email' 
        />
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password' 
          type='password' 
        />
        <button 
          type='submit' 
          onClick={signIn}
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <h4>
          <span className='signupScreen-gray'>New to Netflix? </span>
          <span className='signupScreen-link' onClick={register}>
            {loading ? 'Signing Up...' : 'Sign Up now.'}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;