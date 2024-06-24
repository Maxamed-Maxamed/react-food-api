import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Food Recipes</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
      <footer className="footer">
        <p>© 2024 Food Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
