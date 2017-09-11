import React from 'react';

// stateless component, can be const w/o extending component
const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

export default Result;
