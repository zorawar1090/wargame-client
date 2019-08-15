import React from 'react'
import { joinGame, getCardsFromDb, leaveGame } from '../actions/game'
import { connect } from 'react-redux'
import { resetPlayerId } from '../actions/game'
import GameDetails from './GameDetails'

class GameDetailsContainer extends React.Component {
  state = {
    currentGame: '',
    cards: [],
    join: false,
    start: false,
    noOfPlayers: 0
  }

  componentDidMount() {
    const games = this.props.games
    const currentGame = games.find(game => {
      return game.id === parseInt(this.props.match.params.gameId)
    })
    this.setState({ currentGame })
    console.log('currentGame', currentGame)
  }

  onClickJoin = async (event) => {
    event.preventDefault()
    await this.props.joinGame(this.state.currentGame.id, this.props.currentPlayer)
    this.setState({ join: true})

    // if(this.state.noOfPlayers < 3){
    //   this.state.noOfPlayers++
    // }
    // else{
      
    // }
    

    console.log('cards test', this.getCards())
  }

  onClickLeave = async (event) => {
    event.preventDefault()
    console.log('currentplayer id:', this.props.currentPlayer.id)
    await this.props.leaveGame(this.props.currentPlayer.id)
  }

  onClickStart = () => {
    this.setState({start: true, join: true})
  }

  showGame = () => {
    if(this.state.join === true && this.state.start === false){
      return <button onClick={this.onClickStart}>Start Game</button>
    }
  }
  cards = this.state.currentGame

  getCards() {
    const players = this.state.currentGame.players//.players//.find(player => player.id === this.props.currentPlayer.id)
    //const firstPlayer = players[0]//const player = players.find(player => player.id == this.props.currentPlayer.id)
    return players
  }

  render() {
    return <div>
      {this.state.join ? null : <button onClick={this.onClickJoin}>Join Game</button>}
      {this.showGame()}
      <button onClick={this.onClickLeave}>Leave Game</button>
      {this.state.start && this.state.join ?  <GameDetails player={this.props.currentPlayer} />: null }

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