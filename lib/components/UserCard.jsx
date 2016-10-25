import React, { Component } from 'react'

const UserCard = (props) => {
  const name = props.name.split(' ')[0]

  const currentUserIndicator = props.user.email === props.email ? '⭕️' : ''

  return (
      <li>
        <p className='users' onClick={props.filterUser} value={props.email}>{name} ({props.email}){currentUserIndicator}</p>
      </li>
  )
}

module.exports = UserCard
