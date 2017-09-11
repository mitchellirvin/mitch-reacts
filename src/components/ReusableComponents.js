import React, { Component } from 'react';
import Counter from './Counter.js';
import Result from './Result.js';

class ReusableComponents extends Component {
  state = { counter: 0 };

  incrementCounter = (incrementBy) => {
    this.setState((prevState) => {
      return { counter: prevState.counter + incrementBy }
    });
  };

  render() {
    return (
      <div>
        <Counter onClickFunction={this.incrementCounter} incrementBy={1}></Counter>
        <Counter onClickFunction={this.incrementCounter} incrementBy={5}></Counter>
        <Counter onClickFunction={this.incrementCounter} incrementBy={10}></Counter>
        <Counter onClickFunction={this.incrementCounter} incrementBy={100}></Counter>
        <Result counter={this.state.counter}></Result>
      </div>
    );
  }
}

export default ReusableComponents;
