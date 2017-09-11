import React from 'react';

// stateless component, can be const w/o extending component
const Result = (props) => {
  return (
    <div>Total: {props.counter}</div>
  );
};

export default Result;
