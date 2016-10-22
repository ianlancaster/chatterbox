import React, { Component } from 'react'
import { pick, map, extend, sortBy } from 'lodash'
import firebase, { reference } from '../firebase'
import Sort from '../components/Sort.jsx'

const Message = require('../components/Message.jsx')

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
    }
    this.sort = this.sort.bind(this)
  }

  componentWillReceiveProps() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot ? snapshot.val() : {}
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key })),
      })
    })
  }

  sort(direction) {
    const messages = this.state.messages
    const sortedMessages = messages.sort((a, b) => {
      if (direction === 'down') {
        return b.id - a.id
      }
      if (direction === 'up') {
        return a.id - b.id
      }
      return
    })
    this.setState({
      messages: sortedMessages
    })
  }

  sortReversed() {
    const reversed = this.state.messages.reverse()
  }

  render() {
    const { messages } = this.state
    return (
      <div>
        <Sort sort={this.sort}/>
        <ul>
          { this.props.user ? messages.map(m => <Message key={m.key} name={m.user.displayName} content={m.content} time={m.createdAt} />) : '' }
        </ul>
      </div>
    )
  }
}
