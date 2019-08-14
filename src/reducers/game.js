import {JOIN_GAME} from '../actions/game'

export default function (state = {}, action = {}){
  switch(action.type){
    case JOIN_GAME:
      return action.player
    default:
      return state
  }
}