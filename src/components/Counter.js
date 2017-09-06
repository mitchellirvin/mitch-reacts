import React, { Component } from 'react';

// stateful, can use private state
class Counter extends Component {
	state = { counter: 0 };

  handleClick = () => {
    this.setState((prevState) => {
    	return { counter: prevState.counter + 1 };
    });
  };

	render() {
  	return (
    	<button onClick={this.handleClick}>
      	{this.state.counter}
      </button>
    );
  }
}

// stateless component, can be const w/o extending component
const Result = (props) => {
  return (
    <div>...</div>
  );
};

export default Counter;
