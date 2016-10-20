import React, { Component } from 'react'
import { pick, map, extend } from 'lodash'
import firebase, { reference, signIn, signOut } from '../firebase'
import UserInput from './UserInput.jsx'
import MessagesContainer from '../containers/MessagesContainer.jsx'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state

    return (
      <div className="Application">
      {/* TODO: move user name to log in status components */}
        {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
        <button onClick={() => signOut()}>Sign Out</button>
        <MessagesContainer />
        <UserInput user={user} />
      </div>
    )
  }
}
