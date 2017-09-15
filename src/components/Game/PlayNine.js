// import components
import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Jumbotron} from 'react-bootstrap';

// import stylesheets
import '../../resources/FontAwesome.4.7.0/css/font-awesome.css';

class PlayNine extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Play Nine</h1>
        <p>
          <FontAwesome name='rocket' spin style={{padding: 10}}/>
          Combine numbers to be equal to the number of stars!
          <FontAwesome name='rocket' spin style={{padding: 10}}/>
        </p>

      </Jumbotron>
    );
  }
}


export default PlayNine;
