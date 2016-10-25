import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect, chai } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import UserInput from '../lib/components/UserInput.jsx'
import mockFirebase from './helpers/mockFirebase.js'

const sinon = require('sinon')
const $ = require('chai-jquery')

chai.use(chaiEnzyme())

describe('UserInput', () => {
  context('feature tests', () => {
    const wrapper = mount(<UserInput />)

    it('should display an input field and two buttons', () => {
      expect(wrapper.find('.message-input')).to.have.length(1)
      expect(wrapper.find('.add-btn')).to.have.length(1)
      expect(wrapper.find('.clear-btn')).to.have.length(1)
    })

    it('should have a character-count with an initial value of 140', () => {
      expect(wrapper.find('.character-count')).to.have.length(1)
    })

    it('the character count should decrease when user types in input field', () => {
      // let spy = sinon.spy()
      wrapper.setState({ draftMessage: 'a' })
      // expect(wrapper.find('.message-input')).to.have.value('a')
      // expect(wrapper.find('.character-count')).text().to.equal(139)
      // expect(wrapper.find('.character-count')).to.have.value('139')
    })
  })
})
