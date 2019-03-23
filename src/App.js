import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header.js';
import { Player } from './components/Player.js';


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
