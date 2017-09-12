import React from 'react';
import axios from 'axios';
import {Jumbotron} from 'react-bootstrap';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img style={{width: 75}} src={props.avatar_url} alt={''}/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}> {props.name} </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card}/>)}
    </div>
  );
};

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted with value: ', this.state.userName);
    // ajax... (fetch or axios)
    axios.get('https://api.github.com/users/' + this.state.userName)
      .then(response => {
        this.props.onSubmit(response.data);
        this.setState( {userName: ''} );
      });
  };

  render() {
    return (
      <div>
        <h1>Using GitHub&#39;s API!</h1>
        <p>Try &#39;zpao&#39; or &#39;jordwalke&#39;</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.userName}
            onChange={ (ev) => this.setState({ userName: ev.target.value }) }
            placeholder="GitHub Username"/>
          <button type="submit">Add Card</button>
        </form>
      </div>
    );
  }
}

class GitHubCards extends React.Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    console.log(cardInfo);
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <Jumbotron>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </Jumbotron>
    );
  }
}

export default GitHubCards;
