import React from 'react';
import { Statistics } from './Statistics.js';


export const Header = (props) => {
  return (
    <header>
      <Statistics players={props.players}> </Statistics>
      <h1>{ props.title }</h1>
      <span className="stats">
        Players : { props.totalPlayers }
      </span>
    </header>
  )
};