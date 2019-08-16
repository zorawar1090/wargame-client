import React from 'react'
import { joinGame, getCardsFromDb, leaveGame } from '../actions/game'
import { connect } from 'react-redux'
import { resetPlayerId } from '../actions/game'
import GameDetails from './GameDetails'
import GameListContainer from './GameListContainer'
import { Link } from 'react-router-dom'
import * as request from 'superagent'
import { url } from '../constants'

class GameDetailsContainer extends React.Component {
  state = {
    //cards: [{ id: 49, suit: 'HEARTS', image: 'https://deckofcardsapi.com/static/img/0H.png', value: '10' }, { id: 46, suit: 'HEARTS', image: 'https://deckofcardsapi.com/static/img/7H.png', value: '7' }],
    join: false,
    start: false,
    noOfPlayers: 0,
    leavegame: false,
    cards: []
  }

  getGame() {
    const { games } = this.props
    const currentGame = games.find(game => {
      return game.id === parseInt(this.props.match.params.gameId)
    })

    return currentGame
  }

  onClickJoin = async (event) => {
    event.preventDefault()
    const game = this.getGame()
    await this.props.joinGame(game.id, this.props.currentPlayer)
    this.setState({ join: true })
  }

  onClickLeave = async (event) => {
    event.preventDefault()
    await this.props.leaveGame(this.props.currentPlayer.id)
    //redirect user to game list page
    this.props.history.push('/game-list');
  }

  onClickStart = async () => {
    //console.log('cards test', this.getCards())
    const game = this.getGame()
    const startUrl = `${url}/game/start/${game.id}`
    const response = await request.put(startUrl)
    this.setState({ cards: this.getCards() })
    console.log('cards test', this.state.cards)
  }

  showGame = () => {
    if (this.state.join === true && this.state.start === false) {
      return <button onClick={this.onClickStart}>Start Game</button>
    }
  }

  getCards() {
    const game = this.getGame()
    console.log('game inside get cards', game)
    const { players } = game
    const { currentPlayer } = this.props
    console.log('players test:', players)
    console.log('currentPlayer test:', currentPlayer)
    const player = players.find(player => player.id === currentPlayer.id)
    console.log('player test:', player)

    return player.cards
  }

  onClickCards = async (event) => {
    event.preventDefault()
    const game = this.getGame()
    await this.props.joinGame(game.id, this.props.currentPlayer)
    this.setState({ join: true })


  }

  render() {
    const { currentPlayer } = this.props
    const game = this.getGame()
    const inGame = game && game.players.find(player => player.id === currentPlayer.id)
    const showJoin = game && game.status === 'joining' && !inGame
    return <div>
      {game ? <h2>Game room {game.name}</h2> : null}
      {showJoin
        ? <button onClick={this.onClickJoin}>Join Game</button>
        : null
      }
      {this.showGame()}
      <button onClick={this.onClickLeave}>Leave Game</button>

      {game ? <GameDetails player={currentPlayer} cardsImages={this.state.cards} /> : null}
      {/* {game ? <GameDetails player={currentPlayer} cardsImages={game.players.find(player = player.id === currentPlayer.id).cards} /> : null} */}

    </div>
  }
}

const mapDispatchToProps = { joinGame, getCardsFromDb, resetPlayerId, leaveGame }

const mapStateToProps = state => {
  console.log('state.game test:', state.games)
  return ({
    games: state.games,
    currentPlayer: state.player,
    cards: state.games.player
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetailsContainer)