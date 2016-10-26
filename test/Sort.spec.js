import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import mockFirebase from './helpers/mockFirebase.js'
import Sort from '../lib/components/Sort.jsx'

const sinon = require('sinon')
const locus = require('locus')


describe('Sort Container', () => {
  context('feature tests', () => {
    it('renders as a section', () => {
      const wrapper = shallow(<Sort />)
      expect(wrapper.type()).to.equal('section')
    })

    it('should have two sort buttons', () => {
      const wrapper = mount(<Sort />)
      expect(wrapper.find('.sm-btn')).to.have.length(2)
    })
  })
})
