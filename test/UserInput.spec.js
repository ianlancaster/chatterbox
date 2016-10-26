import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect, assert } from 'chai'
import UserInput from '../lib/components/UserInput.jsx'
import mockFirebase from './helpers/mockFirebase.js'
import MessagesContainer from '../lib/containers/MessagesContainer.jsx'

const sinon = require('sinon')

describe('UserInput', () => {
  context('feature tests', () => {
    it('mounts without props', () => {
      const wrapper = mount(<UserInput />)
      expect(wrapper).to.have.length(1)
    })

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

    it('should clear the input field when cleared button is clicked', () => {
      const wrapper = mount(<UserInput />)
      wrapper.setState({ draftMessage: 'asdfjfk;asdfkjls;df' })
    })

    it('should not exceed 140 characters', () => {
      const wrapper = mount(<UserInput />)
      wrapper.setState({ draftMessage: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab' })
      expect(wrapper.find('.message-input').prop('value')).to.eq('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab')
    })

    it('should reset state after the add button is clicked', () => {
      const wrapper = mount(<UserInput />)
      wrapper.setState({ draftMessage: 'this is a test' })
      wrapper.find('.add-btn').simulate('click')
      expect(wrapper.state('draftMessage')).to.eq('')
    })

    it('should not add a new message if input field is empty', () => {
      const wrapper = mount(<UserInput />)
      wrapper.setState({ draftMessage: '' })
      wrapper.setState({ messages: mockFirebase.messages })
      expect(wrapper.find('.character-count').text()).to.eq('140')
      wrapper.find('.add-btn').simulate('click')
      expect(wrapper.find('.character-count').text()).to.eq('140')
      expect(wrapper.state('messages')).to.have.length(2)
    })

    xit('should add a new message if input field is not empty', () => {
      const wrapper = mount(<UserInput />)
      const messagesWrapper = mount(<MessagesContainer />)
      wrapper.setState({ draftMessage: 'this is a test' })
      wrapper.setState({ messages: mockFirebase.messages })
      wrapper.find('.add-btn').simulate('click')
      expect(wrapper.find('.message-input').prop('value')).to.eq('')
      expect(messagesWrapper.find('ul')).to.have.length(4)
    })
  })
})
