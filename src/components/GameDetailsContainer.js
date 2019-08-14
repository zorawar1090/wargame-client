import React from 'react'
import { joinGame, getGame } from '../actions/game'
import { connect } from 'react-redux'

class GameDetailsContainer extends React.Component {
  state = {
    status: 'joining'
  }

  // onClick = () => {
  //   const game = getGame(this.props.match.params.gameName)
  //   this.props.joinGame(game.id, )
  // }

  render() {
    console.log('props test', this.props)
    return <div>
      <button onClick={this.onClick}>Play</button>
    </div>
  }

}

const mapDispatchToProps = { joinGame }

export default connect(null, mapDispatchToProps)(GameDetailsContainer)