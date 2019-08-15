import React from 'react'
import { Link } from 'react-router-dom'
import LoginFormContainer from './LoginFormContainer'

export default function (props) {
  const gamelist = props.gamelist

  if (!gamelist) {
    return 'Loading...'
  }
  else {
    const availableGames = gamelist.filter(game => game.status === 'joining')
    return (
      <div>
        <h3>Below are a list of ongoing games. Select one of the following or create your own game.</h3>
        <ul>
          {availableGames.map((game, index) => {
            return (
              <li key={index}>
                <Link to={`game/${game.id}`}>{game.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}