import './App.css';
import React from 'react';
import Header from './Header.js';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={ <div><Header/><Home/> </div>} />
        <Route path="/checkout" element={<h1>Hello checkout</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
