import React from 'react'

export default function (props) {
  const { player, cardsImages, onClickImage } = props

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
      {cardsImages.length > 0 && <img src={cardsImages[0].image} alt="card" onClick={() => onClickImage(cardsImages[0].id)}/>}
      {cardsImages.length > 0 && <img src={cardsImages[1].image} alt="card" onClick={() => onClickImage(cardsImages[1].id)}/>}
    </div>
  </div>
}