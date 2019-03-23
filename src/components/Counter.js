import React from 'react';

export class Counter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name : 'a',
      score : props.score
    }
  }

  render(){
    return (
      <div className="counter">
        <button className="counter-action decrement"onClick={()=>{this.props.handleChangeScore(this.props.id,-1)}}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={()=>{this.props.handleChangeScore(this.props.id,1)}}> + </button>
      </div>
    );
  }
}
