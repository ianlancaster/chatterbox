import React, { Component } from 'react'

function Sort(props) {
  return (
    <section className='sort-container'>
      <button className='sm-btn' onClick={() => props.sort('down')}>Newest</button>
      <button className='sm-btn' onClick={() => props.sort('up')}>Oldest</button>
    </section>
  )
}

module.exports = Sort
