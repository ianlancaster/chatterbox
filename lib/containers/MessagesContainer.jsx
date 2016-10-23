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
    // https://lodash.com/docs/4.16.4#filter
    e.preventDefault()

    let value = e.target.value
    console.log(value)
    const messages = this.state.messages
    debugger
    const filteredMessages = filter(messages, function(m) {
      if (value.length <= 0) {
        return messages
      } else {
        return includes(m.content, value)
      }
    })
    console.log('filteredMessages', filteredMessages)
    this.setState({
      messages: filteredMessages,
    })
    console.log('state of messages', this.state.messages)
  }

  render() {
    const { messages } = this.state
    return (
      <section>
        <section className='header'>
          <Filter filter={this.filter}/>
          <Sort sort={this.sort}/>
        </section>
        <div id="messages-container">
          <ul>
          { this.props.user ? messages.map(m => <Message key={m.key} name={m.user.displayName} content={m.content} time={m.createdAt} />) : '' }
          </ul>
        </div>
      </section>
    )
  }
}
