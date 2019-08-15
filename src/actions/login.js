import * as request from 'superagent'
import { url } from '../constants'

export const VERIFY_LOGIN = 'VERIFY_LOGIN'

export function verifyPlayer(player) {
  return ({
    type: VERIFY_LOGIN,
    player
  })
}

export const verifyCredentials = (playerEmail, playerPassword) => async (dispatch) => {
  console.log('credentials is ', playerEmail, ' ', playerPassword)
  const res = await request
    .get(`${url}/player/login`)
    .query({ email: playerEmail })
    .query({ password: playerPassword });

  console.log('res.body from verify cred', res.body)
  if (res.body.message === 'verified') {
    await dispatch(verifyPlayer({ jwt: res.body.jwt, message: res.body.message, id: res.body.id, name: res.body.name, points: res.body.points }))
  }
  else if (res.body.message === 'unverified') {
    await dispatch(verifyPlayer({ message: res.body.message }))
  }


  // .catch(console.error)
}
