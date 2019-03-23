import React from 'react';

export class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName : ''
    }
  }

  handleValueChange = (e) =>{
    this.setState({playerName  : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddPlayer(this.state.playerName);
    this.setState({playerName : ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               value={this.state.playerName}
               placeholder="enter a plyaers's name"
               onChange={this.handleValueChange}
               required></input>
        <input type="submit" value="Add Player"></input>
      </form>
    );
  }

}