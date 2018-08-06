import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Galery from './pages/Galery';
import Contact from './pages/Contact';

import Navigation from './components/Navigation';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/galery" component={Galery}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
