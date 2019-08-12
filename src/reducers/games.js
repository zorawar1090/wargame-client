import {ALL_GAMES} from '../actions/games'

export default function (state = [], action = {}){
  switch(action.type){
    case ALL_GAMES:
      return action.payload
    default:
      return state
  }
}