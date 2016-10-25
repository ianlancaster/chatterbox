import React, { Component } from 'react'
import { pick, map, extend, uniqBy } from 'lodash'
import firebase, { reference } from '../firebase'
import Button from '../components/Button.jsx'

const UserCard = require('../components/UserCard.jsx')

export default class UsersContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }

  render() {
    let tempUsers = []
    this.props.messages.forEach((message) => {
      tempUsers.push({ userName: message.user.displayName, email: message.user.email, key: message.user.uid })
    })
    tempUsers = uniqBy(tempUsers, 'email')

    const { users } = this.state
    return (
      <div id="users-container">
        <ul>
          { this.props.user ? tempUsers.map(m => <UserCard key={m.key} name={m.userName} email={m.email} user={this.props.user} filterUser={this.props.filterUser} />) : '' }
        </ul>
        {this.props.userValue === '' ? '' : <Button cl='clear-user-filter-button' text='Clear User Filter' action={this.props.clearUserValue} />}
      </div>
    )
  }
}
