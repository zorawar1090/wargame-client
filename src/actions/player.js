import request from 'superagent'

export const ADD_PLAYER = 'ADD_PLAYER'

const addPlayerSuccess  = player => {
  return ({
    type: ADD_PLAYER,
    player
  })
}

export const addPlayer = player => dispatch => {
  request.post('http://localhost:4000/player')
          .send(player)
          .then(res => {
            dispatch(addPlayerSuccess(res.body))
          })
          .catch(console.error)
}

export const SET_PLAYER = 'SET_PLAYER'

export const setPlayer = player => {
  return({
    type: SET_PLAYER,
    player
  })
}

// export const setPlayer = email => async dispatch => {
//   const player = await request.get(`http://localhost:4000/player/${email}`)
//   dispatch(setPlayerSuccess(player))
// }