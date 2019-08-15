import * as request from 'superagent'

export const JOIN_GAME = 'JOIN_GAME'

const joinGameSuccess = player => {
  return ({
    type: JOIN_GAME,
    player
  })
}

export const joinGame = (gameId, player) => dispatch => {
  console.log('inside joingame')
  console.log('gameId:', gameId)
  request
    .put(`http://localhost:4000/game/join/${gameId}`)
    .send(player)
    .then(res => {
      console.log('inside this')
      //dispatch(joinGameSuccess(res.body))
    })
    .catch(console.error)
}

export const GET_CARDS = 'GET_CARDS'

const getCards = (payload) => {
  return ({
    type: GET_CARDS,
    payload
  })
}
export const getCardsFromDb = (playerId) => dispatch => {
  console.log('inside getCards')
  console.log('playerid', playerId)
  request
    .get(`http://localhost:4000/card/${playerId}`)
    .then(res => {
      console.log('cards array:', res.body)
      dispatch(getCards(res.body))
    })
    .catch(console.error)
}

export const resetPlayerId = () => dispatch => {
  request
    .put(`http://localhost:4000/card/`)
    .then(res => {
      console.log('card table should have data for 52 cards now')
      console.log('res', res)
    })
    .catch(console.error)
}



// export const GET_GAME = 'GET_GAME'

// const getGameSuccess = game => {
//   console.log('game', game)
//   return ({
//     type: GET_GAME,
//     game
//   })
// }

// // export const getGame = () => {
// //   console.log('inside getGame')
// // }

// export const getGame = gameId => dispatch => {

// }

// export const SET_GAME = 'SET_GAME'

// export const setGame = game => {
//   return({
//     type: SET_GAME,
//     game
//   })
// }