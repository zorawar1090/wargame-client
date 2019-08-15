import * as request from 'superagent'
export const VERIFY_LOGIN = 'VERIFY_LOGIN'

const baseUrl = 'http://localhost:4000'


export function verifyPlayer(player) {
  return ({
    type: VERIFY_LOGIN,
    player
  })
}

export const verifyCredentials = (playerEmail, playerPassword) => (dispatch) => {
  console.log('credentials is ', playerEmail, ' ', playerPassword)
  request
    .get(`${baseUrl}/player/login`)
    .query({ email: playerEmail })
    .query({ password: playerPassword })
    .then(res => {
      console.log('res.body from verify cred', JSON.stringify(res.body))
      if (JSON.stringify(res.body) !== {}) {
        dispatch(verifyPlayer(res.body))
      }
    })
    .catch(console.error)
}
