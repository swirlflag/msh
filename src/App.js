import React, { Component } from 'react';
import './App.css';

const Header = ({title,totalPlayers}) =>(
  <header>
    <h1>{ title }</h1>
    <span className="stats">
        Players : { totalPlayers }
      </span>
  </header>
);

class Counter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name : 'a',
      score : 30,
    }
    // this.incrementScore = this.incrementScore.bind(this)
  }

  incrementScore = () => {
    this.setState(prevState => {
      return {
        score : prevState.score + 1
      }
    });
  }

  render(){
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=>{props.handleRemovePlayer(props.id)}}>X</button>
    </span>
    <span className="player-name">{ props.name }</span>
    <Counter></Counter>
  </div>
);

class App extends React.Component {
  state = {
    players : [
      {id : 1, name : "MSH",},
      {id : 2,name : "A",},
      {id : 3,name : "B",},
      {id : 4,name : "C",},
      {id : 5, name : "D",},
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(item=> item.id != id)
    }));
  }

  render(){
    return (
      <div className="scoreboard">
        <Header title="my scoreboard" totalPlayers={ 10 + 1 }/>
        {
          this.state.players.map(player => (
            <Player
              name={player.name}
              key={player.id.toString()}
              handleRemovePlayer={this.handleRemovePlayer}
              id={player.id}
            />
          ))
        }
      </div>
    ) ;
  }
}

export default App;
