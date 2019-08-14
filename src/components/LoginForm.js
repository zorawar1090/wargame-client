import React from 'react'

export default function (props) {
  const {onSubmit, onChangeEmail, onChangePassword} = props

 return <div>
    <h3>Login Form</h3>

    <form onSubmit={onSubmit}>
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