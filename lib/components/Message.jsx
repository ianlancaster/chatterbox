import React, { Component } from 'react'
import moment from 'moment'


const Message = (props) => {
  const name = props.name.split(' ')[0]
  return (
      <li>
        <p className='message-detail'>{props.time} <span className='name'>{name}</span></p>
        <p className='message'>{props.content}</p>
      </li>
  )
}

module.exports = Message
