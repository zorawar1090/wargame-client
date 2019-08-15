import React from 'react'
import SignUpForm from './SignUpForm'
import { addPlayer } from '../actions/player'
import {connect } from 'react-redux'

class SignUpFormContainer extends React.Component {
  state = { name: '', email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addPlayer(this.state)
  }

  onChangeName = event => {
    const { value } = event.target

    this.setState({
      name: value,
    })
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

  render() {
    return <div>
      <SignUpForm onSubmit={this.onSubmit} onChangeName={this.onChangeName} onChangeEmail={this.onChangeEmail} onChangePassword={this.onChangePassword} />
    </div>
  }
}

const mapDispatchToProps = {addPlayer}

export default connect (null, mapDispatchToProps)(SignUpFormContainer)

