import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'

import mockFirebase from './helpers/mockFirebase.js'
import MessagesContainer from '../lib/containers/MessagesContainer.jsx'

require('sinon')

describe('Message Container', () => {
  context('feature tests', () => {
    it('renders as a <div>', () => {
      const wrapper = shallow(<MessagesContainer />)
      expect(wrapper.type()).to.equal('section')
    })

    it('should not render messages if a user is not logged in', () => {
      const wrapper = shallow(<MessagesContainer />)
      expect(wrapper.find('ul').children()).to.have.length(0)
    })

    xit('should render messages if a user is logged in', () => {
      const wrapper = shallow(<MessagesContainer user={mockFirebase.user}/>)
      wrapper.setState({ messages: mockFirebase.messages })
      expect(wrapper.find('ul').children()).to.have.length(3)
    })
  })
})
