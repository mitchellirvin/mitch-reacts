import React, { Component } from 'react';
import logo from './logo.svg';
// styles
import './App.css';
import { Nav, NavItem } from 'react-bootstrap';

// components
import ReusableComponents from './components/ReusableComponents.js';
import GithubCards from './components/GithubCards.js';
import {
  BrowserRouter as Router,
  Link,
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

        <Router>
          <div>
            <Nav bsStyle="tabs" activeKey="1">
              <NavItem eventKey="1">
                <Link to={'/'}>Route 1</Link>
              </NavItem>
              <NavItem eventKey="2">
                <Link to={'/route2'}>Route 2</Link>
              </NavItem>
            </Nav>
            {/* Routes */}
            <Route exact path='/' component={ReusableComponents} />
            <Route exact path='/route2' component={GithubCards} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
