import { combineReducers } from 'redux'
import games from './games'
import game from './game'
import player from './player'

export default combineReducers({
  games, game, player
})