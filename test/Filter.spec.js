import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import mockFirebase from './helpers/mockFirebase.js'
import MessagesContainer from '../lib/containers/MessagesContainer.jsx'

const sinon = require('sinon')
const locus = require('locus')


describe('Filter Container', () => {
  context('feature tests', () => {
    it('renders as a section', () => {
      const wrapper = shallow(<MessagesContainer />)
      expect(wrapper.type()).to.equal('section')
    })
  })
})
