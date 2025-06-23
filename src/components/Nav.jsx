import { useState, useEffect } from 'react';
import { auth } from '../../firebase.js';
import '../styles/Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    window.scrollY > 100 ? handleShow(true) : handleShow(false);
  }

  const handleLogout = () => {
    auth.signOut();
  };

  useEffect (() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener ('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <div className="nav-contents">
        <img className='nav-logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
        <img 
          className='nav-avatar' 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="Netflix" 
          onClick={handleLogout}
          title="Click to logout"
        />
      </div>
    </div>
  )
}

export default Nav