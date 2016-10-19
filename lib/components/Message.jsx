import React, { Component } from 'react'

const Message = (props) => {
  return (
      <li>{props.name} {props.content}</li>
  )
}

module.exports = Message
