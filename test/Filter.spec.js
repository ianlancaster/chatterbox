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

    it('should have an input field and h1', () => {
      const wrapper = mount(<MessagesContainer />)
      expect(wrapper.find('input')).to.have.length(1)
      expect(wrapper.find('h1')).to.have.length(1)
    })

    it('should change state when user types', () => {
      const wrapper = mount(<MessagesContainer />)
      wrapper.setState({ filterValue: '' })
      expect(wrapper.find('.title-filter-container').simulate('keydown')).to.have.length(1)
    })
  })
})
