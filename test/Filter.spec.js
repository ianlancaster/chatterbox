import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import mockFirebase from './helpers/mockFirebase.js'
import MessagesContainer from '../lib/containers/MessagesContainer.jsx'
import Filter from '../lib/components/Filter.jsx'

const sinon = require('sinon')
const locus = require('locus')


describe('Filter Container', () => {
  context('feature tests', () => {
    it('mounts without props', () => {
      const wrapper = mount(<Filter />)
    })

    it('renders as a section', () => {
      const wrapper = shallow(<Filter />)
      expect(wrapper.type()).to.equal('section')
    })

    it('should have an input field', () => {
      const wrapper = shallow(<Filter />)
      expect(wrapper.find('.filter-field')).to.have.length(1)
    })
  })
})
