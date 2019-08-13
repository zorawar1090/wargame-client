import React from 'react'

export default function(props){
  const { onChange, onSubmit, value} = props

  return(
    <div>
    <h3>Create a new game</h3>
        <form onSubmit={onSubmit}>
          <label>Name:</label>
          <input type='text' value={value} onChange={onChange} />
          <button type='submit'>Create Game</button>
        </form>
    </div>
  )
}