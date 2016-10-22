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
        {this.props.user ? <Button text='Sign Out' action={() => signOut() }/> : ''}
        {this.props.user ? <p>Logged in as {this.props.user.displayName.split(' ')[0]} ({this.props.user.email})</p> : <Button text='Sign In' action={() => signIn()}/> }
      </section>
    )
  }
}
