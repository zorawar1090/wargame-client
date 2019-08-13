import { ALL_GAMES, ADD_GAME_SUCCESS } from '../actions/games'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_GAMES:
      return action.payload
    case ADD_GAME_SUCCESS:
      return [...state, action.payload]
    default:
      return state
  }
}