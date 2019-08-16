import React from 'react'

export default function (props) {
  const { player } = props
  const { cardsImages } = props

  console.log('card images', cardsImages)

  return <div>
    <h2>Player {player.name} ready!</h2>
    <ul>
      <li>Points: {player.points}  Cards remaining: {cardsImages.length}</li>
    </ul>
    <h3>Choose a card to play</h3>
    <br />
    <div className="s">
      {!cardsImages && "Loading..."}
      {cardsImages.length > 0 && <img src={cardsImages[0].image} />}
      {cardsImages.length > 0 && <img src={cardsImages[1].image} />}
    </div>
  </div>
}