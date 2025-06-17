import React from 'react';
import HomeScreen from './components/HomeScreen';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './Login';

function App() {
  const user = null;
  return (
    <div className='App'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (<Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;