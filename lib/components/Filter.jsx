import React, { Component } from 'react'

function Filter(props, e) {
  return (
    <section className='title-filter-container'>
      <h1 className='title'>chatterbox</h1>
      <input
      onChange={(e) => props.filter(e)}
      type='text'
      className='filter-field'
      aria-label='filter-input'
      placeholder='Filter'
      />
    </section>
  )
}

module.exports = Filter
