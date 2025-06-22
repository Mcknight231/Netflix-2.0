import React from 'react'
import './styles/ProfileScreen.css';
import { useSelector } from 'react-redux';
import { auth } from '../firebase.js';
import { selectUser } from './features/userSlice';
import Nav from './components/Nav';
import PlansScreen from './components/PlansScreen.jsx';

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className="profileScreen-body">
          <h1>Edit Profile</h1>
          <div className="profileScreen-info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile Icon" />
            <div className="profileScreen-details">
              <h2>{user.email}</h2>
              <div className="profileScreen-plans">
                <h3>Plans</h3>
                <PlansScreen />
                <button onClick={() => auth.signOut()} className='profileScreen-signOut'>Sign Out</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen