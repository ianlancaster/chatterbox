import React, { Component } from 'react'
import { pick, map, extend } from 'lodash'
import firebase, { reference, signIn } from '../firebase'
import autoSize from './AutoSize'

export default class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      draftMessage: '',
    }
  }

  addNewMessage() {
    const { draftMessage } = this.state

    reference.push({
      user: pick(this.props.user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now(),
    })

    this.setState({ draftMessage: '' })
  }

  clearMessage() {
    this.setState({
      draftMessage: '',
    })
  }

  render() {
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
          tabindex='0'
        />
        <p className='character-count'>{this.state.draftMessage.length}</p>
        <button className='add-btn' onClick={() => this.addNewMessage()} disabled={buttonState}>Send</button>
        <button className='clear-btn' onClick={() => this.clearMessage()} disabled={buttonState}>Clear</button>
      </section>
    )
  }
}
