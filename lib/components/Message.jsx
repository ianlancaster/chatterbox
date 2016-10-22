import React, { Component } from 'react'
import moment from 'moment'

const Message = (props) => {
  return (
      <li>
        <p className='message-detail'>{props.time} {props.name} </p>
        <p className='message'>{props.content}</p>
      </li>
  )
}

module.exports = Message
