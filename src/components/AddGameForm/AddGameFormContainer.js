import React from 'react'
import AddGameForm from './AddGameForm'
import { connect } from 'react-redux'
import { addGame } from '../../actions/games'

class AddGameFormContainer extends React.Component {
  state = {name: ''}

  onSubmit = event => {
    event.preventDefault()
    this.props.addGame({name: this.state.name, status: 'joining'})
  }

  onChange = (event) => {
    const { value } = event.target
    this.setState({ name: value })
  }

  render() {
    return <AddGameForm 
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      value={this.state.name}
      />
  }
}

const mapDispatchToProps = { addGame }

export default connect(null, mapDispatchToProps)(AddGameFormContainer)

