import React, { Component } from 'react'

function Sort(props) {
  return (
    <section className='sort-container'>
      <button onClick={() => props.sort('down')}>Newest</button>
      <button onClick={() => props.sort('up')}>Oldest</button>
    </section>
  )
}

module.exports = Sort
