import React, { Component } from 'react'
import { pick, map, extend, uniqBy } from 'lodash'
import firebase, { reference } from '../firebase'

const UserCard = require('../components/UserCard.jsx')

export default class UsersContainer extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      users: [],
    }
  }

  componentWillReceiveProps() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot ? snapshot.val() : {}
      const currentMessages = map(messages, (val, key) => extend(val, { key }))
      let tempUsers = []

      currentMessages.forEach((message) => {
        tempUsers.push({ userName: message.user.displayName, email: message.user.email, key: message.user.uid })
      })
      tempUsers = uniqBy(tempUsers, 'email')

      this.setState({
        messages: currentMessages,
        users: tempUsers,
      })
    })
  }

  render() {
    const { users } = this.state
    return (
      <div id="users-container">
        <ul>
          { this.props.user ? users.map(m => <UserCard key={m.key} name={m.userName} email={m.email} />) : '' }
        </ul>
      </div>
    )
  }
}
