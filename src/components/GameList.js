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
      <ul>
        {availableGames.map((game, index) => {
          return (
            <li key={index}>
              <Link to={`game/${game.name}`}>{game.name}</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}