import * as request from 'superagent'

export const JOIN_GAME = 'JOIN_GAME'

const joinGameSuccess = player => {
  return ({
    type: JOIN_GAME,
    player
  })
}

export const joinGame = (gameId, player) => dispatch => {
  request
    .put(`http://localhost:4000/join/game/:${gameId}`)
    .send(player)
    .then(res => {
      dispatch(joinGameSuccess(res.body))
    })
    .catch(console.error)
}

export const GET_GAME = 'GET_GAME'

const getGameSuccess = game => {
  return ({
    type: GET_GAME,
    game
  })
}

export const getGame = gameName => dispatch => {
  request('http://localhost:4000/game/:gameName')
  .then(res => dispatch(getGameSuccess(res.body)))
}