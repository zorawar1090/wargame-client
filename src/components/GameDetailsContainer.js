import React from 'react'
import { joinGame} from '../actions/game'
import { connect } from 'react-redux'

class GameDetailsContainer extends React.Component {
  state = {
    currentGame: ''
  }

  componentDidMount() {
    const games = this.props.games
    const currentGame = games.find(game => {
      return game.id === parseInt(this.props.match.params.gameId)
    })
    this.setState({currentGame})
    console.log('currentPlayer', this.props.currentPlayer)
  }

  onClick = () => {
    console.log('currentgameid', this.state.currentGame.id)
    this.props.joinGame(this.state.currentGame.id, this.props.currentPlayer)
  }

  render() {
    console.log('props test', this.props)
    return <div>
      <button onClick={this.onClick}>Play</button>
    </div>
  }
}

const mapDispatchToProps = { joinGame }

const mapStateToProps = state => {
  return ({
    games: state.games,
    currentPlayer: state.player
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetailsContainer)