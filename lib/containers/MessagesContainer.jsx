import React, { Component } from 'react'
import { pick, map, extend } from 'lodash'
import moment from 'moment'
import firebase, { reference } from '../firebase'

const Message = require('../components/Message.jsx')

export default class MessagesContainer extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
    }
  }

  componentWillReceiveProps() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot ? snapshot.val() : {}
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key })),
      })
    })
  }

  render() {
    const { messages } = this.state
    return (
      <div id="messages-container">
        <ul>
          { this.props.user ? messages.map(m => <Message key={m.key} name={m.user.displayName} content={m.content} time={m.createdAt} />) : '' }
        </ul>
      </div>
    )
  }
}
