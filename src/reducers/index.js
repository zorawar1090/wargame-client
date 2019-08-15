import { combineReducers } from 'redux'
import games from './games'
import game from './game'
import player from './player'
import cards from './cards'

export default combineReducers({
  games, game, player, cards
})