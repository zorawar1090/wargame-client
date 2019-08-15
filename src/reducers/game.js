import {JOIN_GAME, LEAVE_GAME, GET_GAME} from '../actions/game'

export default function (state = {}, action = {}){
  switch(action.type){
    case JOIN_GAME:
      return action.player
    case LEAVE_GAME:
      return {}
    default:
      return state
  }
}