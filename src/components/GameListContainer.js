import React from 'react'
import GameList from './GameList'
import { connect } from 'react-redux'
import { allGames } from '../actions/games'

const url = "http://localhost:4000";

class GameListContainer extends React.Component {
  source = new EventSource(`${url}/stream`)

  componentDidMount() {
    this.source.onmessage = (event) => {
      const games = JSON.parse(event.data)
      this.props.allGames(games)
    }
  }

  render() {
    return (
      <div>
        <GameList gamelist={this.props.games} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return ({
    games: state.games
  })
}

export default connect(mapStateToProps, { allGames })(GameListContainer)
