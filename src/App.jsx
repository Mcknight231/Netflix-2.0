import { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './Login';
import { auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Logged In
        console.log('User logged in:', userAuth);
      } else {
        // Logged Out
        dispatch(logout);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

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