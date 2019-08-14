import React from 'react'

export default function (props) {
  const {onSubmit, onChangeName, onChangeEmail, onChangePassword} = props

 return <div>
    <h3>Sign Up Form</h3>

    <form onSubmit={onSubmit}>
    <label>Name: </label>
      <input
        type='text'
        onChange={onChangeName}
      />
      <label>Email: </label>
      <input
        type='text'
        onChange={onChangeEmail}
      />
      <label>Password: </label>
      <input 
        type='password'
        onChange={onChangePassword}
      />
      <button type='submit'>Send</button>
    </form>
  </div>
}