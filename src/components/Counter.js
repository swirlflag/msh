import React from 'react';


export class Counter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name : 'a',
      score : props.score
    }
    // this.incrementScore = this.incrementScore.bind(this)
  }

  // incrementScore = () => {
  //   this.setState(prevState => {
  //     return {
  //       score : prevState.score + 1
  //     }
  //   });
  // }

  render(){
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}
