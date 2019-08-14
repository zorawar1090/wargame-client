import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const GET_CARDS = 'GET_CARDS'

export const getCards = game => dispatch => {

  request
    .get(`${baseUrl}/card`)
    .then(res => {
      console.log('res.body', res.body)
      dispatch(addGameSuccess(res.body))
    })
    .catch(console.error)
}