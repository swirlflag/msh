import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header.js';
import { Player } from './components/Player.js';
import { AddPlayerForm } from './components/AddPlayerForm.js';


class App extends Component {
  maxPlayerId = 4;

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

  handleAddPlayer = (name) => {
    this.setState(prevState=>({
      players : [
        {
          name,
          score : 0,
          id : ++this.maxPlayerId
        },
        ...prevState.players,
      ]
    }))
  }

  render(){
    return (
      <div className="scoreboard">
        <Header title="my scoreboard" totalPlayers={ 10 + 1 } players={this.state.players}/>
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
       <AddPlayerForm handleAddPlayer={this.handleAddPlayer}/>
      </div>
    ) ;
  }
}

export default App;
