import React from 'react';
import LoginFormContainer from './components/LoginFormContainer'
import GameListContainer from './components/GameListContainer';


export default class App extends React.Component {
  render() {
    //return <div><LoginFormContainer /></div>
    return <div><GameListContainer /></div>
  }
}