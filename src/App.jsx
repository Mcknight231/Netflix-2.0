import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './Login';
import { loginSuccess, logout } from './features/userSlice';
import './styles/App.css';

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        try {
          dispatch(loginSuccess(JSON.parse(savedUser)));
        } catch (error) {
          console.error('Error parsing saved user:', error);
          localStorage.removeItem('user');
        }
      }
    };

    unsubscribe();
    
    return () => {
      // idk
    };
  }, [dispatch]);

  return (
    <div className='App'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;