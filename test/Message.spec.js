import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'

import Application from '../lib/components/Application.jsx'

describe('Message', () => {
  context('unit tests', () => {
    it('renders as a <div>', () => {
      const wrapper = shallow(<Application />)
      assert.equal(wrapper.type(), 'div')
    })
  })

  context('feature tests', () => {
    it('renders as a <div>', () => {
      const wrapper = shallow(<Application />)
      assert.equal(wrapper.type(), 'div')
    })
  })
})
