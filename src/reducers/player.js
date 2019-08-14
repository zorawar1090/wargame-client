import {ADD_PLAYER} from '../actions/player'
import {SET_PLAYER} from '../actions/player'

export default function(state = {}, action ={}){
  switch(action.type){
    case ADD_PLAYER:
      return action.player
    case SET_PLAYER:
      return action.player
    default:
      return state
  }
}