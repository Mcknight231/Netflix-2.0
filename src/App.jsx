import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './Login';
import { loginSuccess, logout } from './features/userSlice';
import './styles/App.css';
import { auth } from '../firebase.js';
import ProfileScreen from './ProfileScreen.jsx';

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () => {
      const savedUser = auth.onAuthStateChanged((userAuth) => {
          if (userAuth) {
            dispatch(
              login({
                uid: userAuth.uid,
                email: userAuth.email,
              })
            );
          } else {
            dispatch(logout());
          }
      })
    };
    
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='App'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;