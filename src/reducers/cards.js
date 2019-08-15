import { GET_CARDS } from '../actions/game'

export default function (state = [], action = []) {
  switch (action.type) {
    case GET_CARDS:
      return action.payload
    default:
      return state
  }
}