import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReusableComponents from './components/ReusableComponents.js';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {
  state = { counter: 0 };

  incrementCounter = (incrementBy) => {
    this.setState((prevState) => {
      return { counter: prevState.counter + incrementBy }
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ReusableComponents> </ReusableComponents>
        </div>
      </div>
    );
  }
}

export default App;
