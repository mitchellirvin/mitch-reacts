import React, { Component } from 'react';
import Counter from './Counter.js';
import Result from './Result.js';
import { Jumbotron } from 'react-bootstrap';

class ReusableComponents extends Component {
  state = { counter: 0 };

  incrementCounter = (incrementBy) => {
    this.setState((prevState) => {
      return { counter: prevState.counter + incrementBy }
    });
  };

  render() {
    return (
      <Jumbotron>
        <h1>Try me!</h1>
        <p>I add to the counter below</p>
        <p>
          <Counter onClickFunction={this.incrementCounter} incrementBy={1}></Counter>
          <Counter onClickFunction={this.incrementCounter} incrementBy={5}></Counter>
          <Counter onClickFunction={this.incrementCounter} incrementBy={10}></Counter>
          <Counter onClickFunction={this.incrementCounter} incrementBy={100}></Counter>
        </p>
        <Result counter={this.state.counter}></Result>
      </Jumbotron>
    );
  }
}

export default ReusableComponents;
