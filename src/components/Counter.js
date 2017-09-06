import React, { Component } from 'react';

// stateful, can use private state
class Counter extends Component {

	render() {
  	return (
    	<button onClick={ () => this.props.onClickFunction(this.props.incrementBy) }>
      	+{this.props.incrementBy}
      </button>
    );
  }
}

export default Counter;
