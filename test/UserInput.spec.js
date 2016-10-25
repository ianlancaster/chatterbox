import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect, chai } from 'chai'
import UserInput from '../lib/components/UserInput.jsx'
import mockFirebase from './helpers/mockFirebase.js'
import MessagesContainer from '../lib/containers/MessagesContainer.jsx'

const sinon = require('sinon')
const $ = require('chai-jquery')


describe('UserInput', () => {
  context('feature tests', () => {
    it('should display an input field and two buttons', () => {
      const wrapper = mount(<UserInput />)
      expect(wrapper.find('.message-input')).to.have.length(1)
      expect(wrapper.find('.add-btn')).to.have.length(1)
      expect(wrapper.find('.clear-btn')).to.have.length(1)
    })

    it('should have a character-count with an initial value of 140', () => {
      const wrapper = mount(<UserInput />)
      expect(wrapper.find('.character-count')).to.have.length(1)
    })

    it('the character count should decrease when user types in input field', () => {
      const wrapper = mount(<UserInput />)
      wrapper.setState({ draftMessage: 'a' })
      expect(wrapper.find('.character-count').text()).to.eq('139')
      expect(wrapper.find('.message-input').prop('value')).to.eq('a')
    })

    xit('should not add a new message if input field is empty')
  })
})
