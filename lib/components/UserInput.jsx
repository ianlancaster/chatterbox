import React, { Component } from 'react'
import { pick, map, extend } from 'lodash'
import moment from 'moment'
import EventEmitter from 'wolfy87-eventemitter'
import firebase, { reference, signIn } from '../firebase'
import autoSize from './AutoSize'

export const ee = new EventEmitter()

export default class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      draftMessage: '',
    }
  }

  componentDidMount() {
    ee.addListener('messageAdded', this.testFunctionTriggeredByEe)
  }

  addNewMessage() {
    const { draftMessage } = this.state

    reference.push({
      user: pick(this.props.user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format('MMM D, h:mm A'),
      id: Date.now(),
    })

    this.setState({ draftMessage: '' })

    ee.emitEvent('messageAdded')
  }

  testFunctionTriggeredByEe() {
    console.log('test function in UserInput ran')
  }

  clearMessage() {
    this.setState({
      draftMessage: '',
    })
  }

  render() {
    console.log('UserInput render ')
    const { draftMessage } = this.state
    let buttonState = false
    if (!this.state.draftMessage) {
      buttonState = true
    }

    return (
      <section className="message-input-container">
        <textarea
          className='message-input'
          placeholder="Message…"
          value={this.state.draftMessage}
          onChange={e => this.setState({ draftMessage: e.target.value })}
          maxLength='140'
          aria-label='textbox'
          tabIndex='0'
        />
        <p className='character-count'>{(this.state.draftMessage.length - 140) * -1}</p>
        <button className='add-btn' onClick={() => this.addNewMessage()} disabled={buttonState}>Send</button>
        <button className='clear-btn' onClick={() => this.clearMessage()} disabled={buttonState}>Clear</button>
      </section>
    )
  }
}
