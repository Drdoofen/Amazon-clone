import './App.css';
import React from 'react';
import Header from './Header.js';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
