import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

export default class LoginFormContainer extends React.Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
  }

  onChangeEmail = (event) => {
    const { value } = event.target

    this.setState({
      email: value,
    })
  }

  onChangePassword = (event) => {
    const { value } = event.target

    this.setState({
      password: value,
    })
  }

  onClick

  render() {
    return <div>
      <LoginForm onChangeEmail={this.onChangeEmail} onChangePassword={this.onChangePassword} />
      <Link to={'/game-list'}>See Games</Link>
    </div>
  }
}

