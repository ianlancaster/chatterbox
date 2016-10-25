import React, { Component } from 'react'

const UserCard = (props) => {
  const name = props.name.split(' ')[0]
  return (
      <li>
        <p className='users' onClick={props.filterUser} value={props.email}>{name} ({props.email})</p>
      </li>
  )
}

module.exports = UserCard
