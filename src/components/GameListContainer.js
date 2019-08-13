import React from 'react'
import GameList from './GameList'
import { connect } from 'react-redux'
import { allGames, addGame } from '../actions/games'

const url = "http://localhost:4000";

class GameListContainer extends React.Component {
  state = {
    gamename: ''
  }


  source = new EventSource(`${url}/stream`)


  componentDidMount() {
    console.log('inside componentdidmount')
    //console.log('event', event)
    this.source.onmessage = (event) => {
      const games = JSON.parse(event.data)

      console.log('games test:', games)

      this.props.allGames(games)
    }
  }

  onSubmit = (event) => {
    console.log('inside onsubmit', this.state.gamename)
    event.preventDefault()
    addGame({ name: this.state.gamename, status: 'joining' })

    //this.setState({ gamename: '' })

  }

  onChange = (event) => {
    //console.log('game name', event.target.value)
    const { value } = event.target
    this.setState({ gamename: value })
  }

  render() {
    return (
      <div>
        <GameList gamelist={this.props.games} />
        <h3>Create a new game</h3>
        <form onSubmit={this.onSubmit}>
          <label>Name:</label>
          <input type='text' value={this.state.gamename} onChange={this.onChange} />
          <button type='submit'>Create Game</button>
        </form>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    games: state.games,
    gamename: state.gamename
    // user: state.user
  }
}

const mapDispatchToProps = {
  allGames, addGame
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(GameListContainer)