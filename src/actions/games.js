import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const ALL_GAMES = 'ALL_GAMES'

export function allGames(payload) {
  return ({
    type: ALL_GAMES,
    payload
  })
}

export const ADD_GAME_SUCCESS = 'ADD_GAME_SUCCESS'

const addGameSuccess = (game) => {
  return ({
    type: ADD_GAME_SUCCESS,
    payload: game
  })
}

export const addGame = game => dispatch => {
  console.log('inside action', game)
  request
    .post(`${baseUrl}/game`)
    .send(game)
    .then(res => {
      console.log('res.body', res.body)
      dispatch(addGameSuccess(res.body))
    })
    .catch(console.error)
}

