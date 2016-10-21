import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
import Button from './Button.jsx'

export default class LogInStatus extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.props.updateUser(user))
  }

  render() {
    return (
      <section>
        <Button text='Sign Out' action={() => signOut() }/>
        {this.props.user ? <p>Hello {this.props.user.displayName}</p> : <Button text='Sign In' action={() => signIn()}/> }
      </section>
    )
  }
}
