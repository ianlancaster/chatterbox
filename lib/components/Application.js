import React, { Component } from 'react'
import { pick, map, extend } from 'lodash'
import firebase, { reference, signIn } from '../firebase'
import UserInput from './UserInput.jsx'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      user: null,
    }
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {}
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key })),
      })
    })

    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  }

  render() {
    const { user, messages } = this.state

    return (
      <div className="Application">
      {/* TODO: move user name to log in status components */}
        {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
        <ul>
          { this.state.messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content}</li>) }
        </ul>
        <UserInput user={user} />
      </div>
    )
  }
}
