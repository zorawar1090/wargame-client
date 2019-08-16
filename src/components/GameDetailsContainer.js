import React from 'react'
import { joinGame, getCardsFromDb, leaveGame } from '../actions/game'
import { connect } from 'react-redux'
import { resetPlayerId } from '../actions/game'
import GameDetails from './GameDetails'
import GameListContainer from './GameListContainer'
import { Link } from 'react-router-dom'

class GameDetailsContainer extends React.Component {
  state = {
    currentGame: '',
    cards: [{ id: 49, suit: 'HEARTS', image: 'https://deckofcardsapi.com/static/img/0H.png', value: '10' }, { id: 46, suit: 'HEARTS', image: 'https://deckofcardsapi.com/static/img/7H.png', value: '7' }],
    join: false,
    start: false,
    noOfPlayers: 0,
    leavegame: false
  }

  async componentDidMount() {
    const games = this.props.games
    const currentGame = await games.find(game => {
      return game.id === parseInt(this.props.match.params.gameId)
    })
    this.setState({ currentGame })
    console.log('currentGame', currentGame)
  }

  onClickJoin = async (event) => {
    event.preventDefault()
    await this.props.joinGame(this.state.currentGame.id, this.props.currentPlayer)
    this.setState({ join: true })
    console.log('cards test', this.getCards())
  }

  onClickLeave = async (event) => {
    event.preventDefault()
    console.log('currentplayer id:', this.props.currentPlayer.id)
    await this.props.leaveGame(this.props.currentPlayer.id)
    //redirect user to game list page
    this.props.history.push('/game-list');
  }

  onClickStart = () => {
    this.setState({ start: true, join: true })
  }

  showGame = () => {
    if (this.state.join === true && this.state.start === false) {
      return <button onClick={this.onClickStart}>Start Game</button>
    }
  }
  //cards = this.state.currentGame

  getCards() {
    const players = this.state.currentGame.players//.players//.find(player => player.id === this.props.currentPlayer.id)
    //const firstPlayer = players[0]//const player = players.find(player => player.id == this.props.currentPlayer.id)
    return players
  }

  render() {
    return <div>
      {this.state.currentGame ? <h2>Game room {this.state.currentGame.name}</h2> : null}
      {this.state.join ? null : <button onClick={this.onClickJoin}>Join Game</button>}
      {this.showGame()}
      <button onClick={this.onClickLeave}>Leave Game</button>
      {this.state.start && this.state.join ? <GameDetails player={this.props.currentPlayer} /> : null}

    </div>
  }
}

const mapDispatchToProps = { joinGame, getCardsFromDb, resetPlayerId, leaveGame }

const mapStateToProps = state => {
  return ({
    games: state.games,
    currentPlayer: state.player,
    cards: state.games.player
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetailsContainer)