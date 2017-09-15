import React, { Component } from 'react';
import logo from './logo.svg';
// styles
import './resources/css/App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// components
import ReusableComponents from './components/ReusableComponents.js';
import GitHubCards from './components/Card.js';
import PlayNine from './components/Game/PlayNine.js';
import {
  BrowserRouter as Router,
  Link,
  Route
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
          <h2>Mitch Reacts</h2>
        </div>

        <Router>
          <div>
            <Nav bsStyle="tabs" activeKey="1">

            </Nav>
            <Navbar collapseOnSelect style={{marginBottom: 0}}>
              <Navbar.Header>
                <Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey="1">
                    <Link className="App-navitem" to={'/'}>Components</Link>
                  </NavItem>
                  <NavItem eventKey="2">
                    <Link className="App-navitem" to={'/route2'}>Working w/ Data</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="App-navitem" to={'/play-nine'}>Play Nine</Link>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* Routes */}
            <Route exact path='/' component={ReusableComponents} />
            <Route exact path='/route2' component={GitHubCards} />
            <Route exact path='/play-nine' component={PlayNine} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
