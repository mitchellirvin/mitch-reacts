import React, { Component } from 'react';
import logo from './logo.svg';
// styles
import './App.css';
import { Grid, Row, Col, Navbar, Nav, NavItem, Panel } from 'react-bootstrap';

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
          <h2>Mitch Reacts</h2>
        </div>

        <Router>
          <div>
            <Nav bsStyle="tabs" activeKey="1">

            </Nav>
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a></a>
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
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* Routes */}
            <Grid>
              <Row>
                <Col sm={12}>
                  <Panel>
                    <Route exact path='/' component={ReusableComponents} />
                    <Route exact path='/route2' component={GithubCards} />
                  </Panel>
                </Col>
              </Row>
            </Grid>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
