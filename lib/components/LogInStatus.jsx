import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase'

export default class LogInStatus extends Component {
  constructor(props) {
    super()
  }

  // componentDidMount() {
  //   // firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  //   firebase.auth().onAuthStateChanged(user => this.props.setUser('ok'))
  // }
  // check to see if there is a user
  // if so change the state and display the name
  // change the sign in button text to sign out

  render() {
    return (
      this.props.user ? <p>Hello {this.props.user.displayName}</p> : <button onClick={this.props.action}>Sign In</button>
    )
  }
}
