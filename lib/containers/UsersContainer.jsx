import React, { Component } from 'react'
import { pick, map, extend, uniqBy } from 'lodash'
import firebase, { reference } from '../firebase'

const UserCard = require('../components/UserCard.jsx')

export default class UsersContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }

  render() {
    console.log('users', this.props.user)
    console.log('messages in render', this.props.messages)

    let tempUsers = []
    this.props.messages.forEach((message) => {
      tempUsers.push({ userName: message.user.displayName, email: message.user.email, key: message.user.uid })
    })

    tempUsers = uniqBy(tempUsers, 'email')

    const { users } = this.state
    return (
      <div id="users-container">
        <ul>
          { this.props.user ? tempUsers.map(m => <UserCard key={m.key} name={m.userName} email={m.email} />) : '' }
        </ul>
      </div>
    )
  }
}
