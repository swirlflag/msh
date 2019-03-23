import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header.js';
import { Player } from './components/Player.js';


class App extends React.Component {
  state = {
    players : [
      {id : 1, name : "MSH", score: 0},
      {id : 2,name : "A",score: 0},
      {id : 3,name : "B",score: 0},
      {id : 4,name : "C",score: 0},
      {id : 5, name : "D",score: 0},
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(item=> item.id != id)
    }));
  }

  handleChangeScore = (id,delta) => {
    console.log(id,delta);

    this.setState(prevState=>{
      prevState.players.forEach(item=>{
        if(item.id === id){
          item.score += delta
        }
      })

      return {
        players : [...prevState.players]
      }
    })
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
          handleChangeScore={this.handleChangeScore}
          id={player.id}
          score={player.score}
        />
      ))
  }
</div>
    ) ;
  }
}

export default App;
