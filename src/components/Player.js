import React from 'react';

import { Counter } from './Counter.js';

export const Player = (props) => {
  return (
    <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=>{props.handleRemovePlayer(props.id)}}>X</button>
    </span>
      <span className="player-name">{ props.name }</span>
      <Counter score={props.score} handleChangeScore={props.handleChangeScore} id={props.id}></Counter>
    </div>
  );
}

