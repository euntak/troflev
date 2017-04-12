import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';

import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Background/>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;