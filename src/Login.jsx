import React, { useState } from 'react'
import './styles/Login.css';
import SignUpScreen from './components/SignUpScreen';

function loginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className="loginScreen-background">
        <img className='loginScreen-logo' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />
        <button onClick={() => setSignIn(true)} className='loginScreen-button'>Sign in</button>
      </div>

      <div className="loginScreen-gradient"></div>
      <div className="loginScreen-body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen-input">
              <form><input type="email" placeholder='Email Address' /></form>
              <button onClick={() => setSignIn(true)} className='loginScreen-getStarted'>Get Started</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default loginScreen;