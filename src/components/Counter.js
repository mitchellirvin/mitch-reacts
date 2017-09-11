import React, { Component } from 'react';

// stateful, can use private state
class Counter extends Component {

	handleClick = () => {
		this.props.onClickFunction(this.props.incrementBy);
	}

	render() {
  	return (
    	<button onClick={ this.handleClick }>
      	+{this.props.incrementBy}
      </button>
    );
  }
}

export default Counter;
