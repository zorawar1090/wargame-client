import React from 'react'
import Game from './Game'

export default class GameContainer extends React.Component {

  state = {
    status: true
  }

  onSubmit = event => {
    event.preventDefault()
    //this.props.addGame({name: this.state.name, status: 'joining'})
    //assign cards for players
  }

  render() {

    return <div>
      <h2>Game room : game room name</h2>
      <div>Player 1</div>
      <div>Are you ready? When ready, click below to get your card stack</div>
      <button type='submit'>Give me the card stack</button>

      <Game />
    </div>

  }
}