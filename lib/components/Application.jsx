import React, { Component } from 'react'
import { pick, map, extend } from 'lodash'
import UserInput from './UserInput.jsx'
import MessagesContainer from '../containers/MessagesContainer.jsx'
import LogInStatus from './LogInStatus.jsx'
// import SortContainer from '../containers/SortContainer.jsx'


export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
    }
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(user) {
    this.setState({ user })
  }

  render() {
    const { user } = this.state

    return (
      <div className="app">
        <MessagesContainer user={user} />
        <LogInStatus user={user} updateUser={this.updateUser} />
        <UserInput user={user} />
      </div>
    )
  }
}
