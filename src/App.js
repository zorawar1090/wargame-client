import React from 'react';
import LoginFormContainer from './components/LoginFormContainer'
import GameListContainer from './components/GameListContainer';
import AddGameFormContainer from './components/AddGameForm/AddGameFormContainer';
import GameContainer from './components/GameContainer'
import { Route } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return <div>
      <Route exact path='/' component={GameListContainer} />
      <Route path='/game/:gameName' component={GameContainer} />
      <AddGameFormContainer />
    </div>
  }
}