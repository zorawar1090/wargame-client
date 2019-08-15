import React from 'react';
import LoginFormContainer from './components/LoginFormContainer'
import GameListContainer from './components/GameListContainer';
import AddGameFormContainer from './components/AddGameForm/AddGameFormContainer';
import { Route } from 'react-router-dom'
import GameDetailsContainer from './components/GameDetailsContainer';
import SignUpFormContainer from './components/SignUpFormContainer';
import './css/App.css'

export default class App extends React.Component {
  render() {
    return <div>
      <Route exact path='/' component={LoginFormContainer} />
      <Route exact path='/game-list' component={GameListContainer} />
      <Route exact path='/game/:gameId' component={GameDetailsContainer} />
      <Route exact path='/sign-up' component={SignUpFormContainer} />
      <Route exact path='/game-list' component={AddGameFormContainer} />
    </div>
  }
}