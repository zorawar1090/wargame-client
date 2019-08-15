import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetPlayerId } from '../actions/game'
import { verifyCredentials } from '../actions/login'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '', initialize: true }

  componentDidMount() {
    // if (this.state.initialize) {
    //   console.log('Initializing card table')
    //   this.props.resetPlayerId();
    //   this.setState({ initialize: false })
    // }

  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.verifyCredentials(this.state.email, this.state.password)
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
      <LoginForm onSubmit={this.onSubmit} onChangeEmail={this.onChangeEmail} onChangePassword={this.onChangePassword} />
      <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
      <Link to={'/game-list'}>See Games</Link>
    </div>
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = { verifyCredentials }

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)

