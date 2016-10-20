import React, { Component } from 'react'
import { pick, map, extend } from 'lodash'
import firebase, { reference } from '../firebase'

const Message = require('../components/Message.jsx')

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {}
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key })),
      })
    })
  }

  render() {
    const { messages } = this.state

    return (
      <div>
        <ul>
          { messages.map(m => <Message key={m.key} name={m.user.displayName} content={m.content} />) }
        </ul>
      </div>
    )
  }
}
