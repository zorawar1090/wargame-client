import React from 'react'
import LoginForm from './LoginForm'
// import { login } from '../actions/login'

// class LoginFormContainer extends React.Component {
//   state = { email: '', password: '' }

//   onSubmit = (event) => {
//     event.preventDefault()
//     this.props.login(this.state.email, this.state.password)
//   }

//   onChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   render() {
//     return <LoginForm
//       onSubmit={this.onSubmit}
//       onChange={this.onChange}
//       values={this.state}
//     />
//   }
// }

export default class LoginFormContainer extends React.Component {
  state = {email: '', password: ''}

  onSubmit = (event) => {
    event.preventDefault()
  }

  onChangeEmail = (event) => {
    const {value} = event.target

    this.setState({
      email: value,
    })
  }

  onChangePassword = (event) => {
    const {value} = event.target

    this.setState({
      password: value,
    })
  }

  render() {
    return <LoginForm onChangeEmail={this.onChangeEmail} onChangePassword={this.onChangePassword}/>
  }
}

