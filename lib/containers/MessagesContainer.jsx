import React, { Component } from 'react'
import { pick, map, extend, sortBy, filter, includes } from 'lodash'
import firebase, { reference } from '../firebase'
import Sort from '../components/Sort.jsx'
import Filter from '../components/Filter.jsx'

const Message = require('../components/Message.jsx')

export default class MessagesContainer extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      filteredMessages: [],
    }
    this.sort = this.sort.bind(this)
    this.filter = this.filter.bind(this)
  }

  componentWillReceiveProps() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot ? snapshot.val() : {}
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key })),
      })
      this.setState({
        filteredMessages: this.state.messages,
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
      return false
    })

    this.setState({
      messages: sortedMessages,
    })
  }

  filter(e) {
    e.preventDefault()
    const messages = this.state.messages
    const value = e.target.value

    const filteredMessages = filter(messages, m => includes(m.content, value))

    this.setState({
      filteredMessages: filteredMessages,
    })
  }

  render() {
    console.log('render')
    const { filteredMessages } = this.state
    return (
      <section>
        <section className='header'>
          <Filter filter={this.filter}/>
          <Sort sort={this.sort}/>
        </section>
        <div id="messages-container">
          <ul>
          { this.props.user ? filteredMessages.map(m => <Message key={m.key} name={m.user.displayName} content={m.content} time={m.createdAt} />) : '' }
          </ul>
        </div>
      </section>
    )
  }
}
