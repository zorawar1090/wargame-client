import React from 'react'
import GameList from './GameList'
import { connect } from 'react-redux'

class GameListContainer extends React.Component {
  render() {
    return (
      <GameList gamelist={this.props.games} />
    )
  }
}

const mapStateToProps = state => {
  return ({
    games: state.games
  })
}

export default connect(mapStateToProps)(GameListContainer)
