import React, { Component } from 'react'
import { pick, map, extend } from 'lodash'
import firebase, { reference, signIn } from '../firebase'


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
      <div className="MessageInput">
        <input
          placeholder="Message…"
          value={this.state.draftMessage}
          onChange={e => this.setState({ draftMessage: e.target.value })}
          maxLength='140'
        />
        <p>{this.state.draftMessage.length}</p>
        <button onClick={() => this.addNewMessage()} disabled={buttonState}>Add New Message</button>
        <button onClick={() => this.clearMessage()} disabled={buttonState}>Clear</button>
      </div>
    )
  }
}
