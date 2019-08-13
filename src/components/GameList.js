import React from 'react'

export default function (props) {
  const gamelist = props.gamelist

  if (!gamelist) {
    return 'Loading...'
  }
  else {
    return (
      <ul>
        {gamelist.map(game => <li>{game.name}</li>)}
      </ul>
    )
  }
}