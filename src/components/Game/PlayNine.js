// import components
import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Jumbotron, Panel, Row, Col, Grid} from 'react-bootstrap';
// game components
import Star from './Star.js';
import Button from './Button.js';
import Answer from './Answer.js';

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

        <Grid>
          <Panel style={{marginLeft: '10%', marginRight: '10%'}}>
            <Row>
              <Col md={5}>
                <Star> </Star>
              </Col>
              <Col md={2}>
                <Button> </Button>
              </Col>
              <Col md={5}>
                <Answer> </Answer>
              </Col>
            </Row>
          </Panel>
        </Grid>

      </Jumbotron>
    );
  }
}


export default PlayNine;
