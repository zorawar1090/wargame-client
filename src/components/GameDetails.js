import React from 'react'

export default function (props) {
  const { player } = props
  const { cardsImages } = props

  console.log('card images', cardsImages)

  return <div>
    <h2>Player {player.name} ready!</h2>
    <ul>
      <li>Points: {player.points}</li>
    </ul>
    <div className="s">
      {!cardsImages && "Loading..."}
      {cardsImages &&
        cardsImages.map((image, i) => <img src={image} alt="Card" key={i} />)}
    </div>
  </div>
}