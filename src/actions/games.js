export const ALL_GAMES = 'ALL_GAMES'

export function allGames(payload) {
  return ({
    type: ALL_GAMES,
    payload
  })
}