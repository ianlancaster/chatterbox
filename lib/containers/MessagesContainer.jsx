import React, { Component } from 'react'
import { pick, map, extend, sortBy, filter, includes } from 'lodash'
import firebase, { reference } from '../firebase'
import Sort from '../components/Sort.jsx'
import Filter from '../components/Filter.jsx'
import UsersContainer from '../containers/UsersContainer.jsx'


const Message = require('../components/Message.jsx')

export default class MessagesContainer extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      filterValue: '',
      userValue: '',
    }
    this.sort = this.sort.bind(this)
    this.filterSearch = this.filterSearch.bind(this)
    this.filterUser = this.filterUser.bind(this)
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

  filterUser(e) {
    const userValue = e.target.attributes[1].value
    this.setState({ userValue })
  }

  filterSearch(e) {
    const value = e.target.value.toLowerCase()
    this.setState({ filterValue: value })
  }

  render() {
    let messages = this.state.messages
    let value = this.state.filterValue
    let userValue = this.state.userValue

    let filteredMessages = filter(messages, m => includes(m.content, value))
    filteredMessages = filter(filteredMessages, m => includes(m.user.email, userValue))

    return (
      <section>
        <section className='header'>
          <Filter filter={this.filterSearch}/>
          <Sort sort={this.sort}/>
        </section>
        <div id="messages-container">
          <ul>
          { this.props.user ? filteredMessages.map(m => <Message key={m.key} name={m.user.displayName} content={m.content} time={m.createdAt} />) : '' }
          </ul>
        </div>
        <UsersContainer user={this.props.user} messages={this.state.messages} filterUser={this.filterUser}/>
      </section>
    )
  }
}
