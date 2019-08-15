import React from 'react'
import { joinGame, getCardsFromDb } from '../actions/game'
import { connect } from 'react-redux'
import { resetPlayerId } from '../actions/game'

class GameDetailsContainer extends React.Component {
  state = {
    currentGame: '',
    cards: []
  }

  componentDidMount() {
    const games = this.props.games
    const currentGame = games.find(game => {
      return game.id === parseInt(this.props.match.params.gameId)
    })
    this.setState({ currentGame })
    console.log('currentPlayer', this.props.currentPlayer)
  }

  onClick = async (event) => {
    event.preventDefault()
    //await this.props.resetPlayerId()
    await this.props.joinGame(this.state.currentGame.id, this.props.currentPlayer)
    await this.props.getCardsFromDb(this.props.currentPlayer.id)
  }


  render() {
    console.log('props test', this.props)
    return <div>
      <button onClick={this.onClick}>Play</button>


    </div>
  }
}

const mapDispatchToProps = { joinGame, getCardsFromDb, resetPlayerId }

const mapStateToProps = state => {
  return ({
    games: state.games,
    currentPlayer: state.player,
    cards: state.cards
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetailsContainer)