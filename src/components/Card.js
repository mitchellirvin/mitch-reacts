import React from 'react';

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
  let data = [
    {
      key: 1,
      name: "Paul O'Flannery",
      avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
      company: "Facebook"
    },
    {
      key: 2,
      name: "Not Ben Alvert",
      avatar_url: "https://avatars.githubusercontent.com/u/6820?v=3",
      company: "Google"
    }
  ];

  return (
    <div>
      {data.map(card => <Card {...card}/>)}
    </div>
  );
};

export default CardList;
