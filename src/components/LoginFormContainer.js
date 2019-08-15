import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetPlayerId } from '../actions/game'
import { verifyCredentials } from '../actions/login'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '', initial: true, pwcheck: true }

  componentDidMount() {
    // if (this.state.initialize) {
    //   console.log('Initializing card table')
    //   this.props.resetPlayerId();
    //   this.setState({ initialize: false })
    // }

  }

  onSubmit = async (event) => {
    event.preventDefault()
    await this.props.verifyCredentials(this.state.email, this.state.password)
    console.log(this.props.player)
    if (this.props.player.message === 'unverified') {
      this.setState({ pwcheck: false, initial: false })
    }
    else {
      this.setState({ pwcheck: true, initial: false })
    }
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

  giveFeedback = () => {
    if (this.state.pwcheck && !this.state.initial) {
      return <div><div>Login successful.</div>
        <br /><br />
        <Link to={'/game-list'}>Click here to start playing</Link></div>
    }
    else if (!this.state.pwcheck && !this.state.initial) {
      return <div>Incorrect credentials! Try again.</div>
    }
  }


  render() {
    return <div>
      <LoginForm onSubmit={this.onSubmit} onChangeEmail={this.onChangeEmail} onChangePassword={this.onChangePassword} />
      <p>Don't have an account? <Link to='/sign-up'>Sign up here</Link></p>
      <br />
      <div>{this.giveFeedback()}</div>

    </div>
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = { verifyCredentials }

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)

