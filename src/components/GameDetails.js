import React from 'react'

export default function(props){
  const {player} = props
  return <div>
    <h2>Player {player.name} ready!</h2>
    <ul>
      <li>Points: {player.points}</li>
    </ul>
  </div>
}