import React, { useState } from 'react';
import '../styles/SignUpScreen.css';

function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Register:', email, password);
  };

  const signIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Sign In:', email, password);
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input 
          placeholder='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' onClick={signIn}>Sign In</button>
        
        <h4>
          <span className='signupScreen-gray'>New to Netflix? </span>
          <span className='signupScreen-link' onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;