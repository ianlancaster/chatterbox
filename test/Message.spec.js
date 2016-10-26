import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import mockFirebase from './helpers/mockFirebase.js'
import MessagesContainer from '../lib/containers/MessagesContainer.jsx'
import LogInStatus from '../lib/components/LogInStatus.jsx'

const sinon = require('sinon')
const locus = require('locus')

describe('Message Container', () => {
  context('feature tests', () => {
    it('mounts without props', () => {
      const wrapper = mount(<MessagesContainer />)
      expect(wrapper).to.have.length(1)
    })

    it('renders as a <section>', () => {
      const wrapper = shallow(<MessagesContainer />)
      expect(wrapper.type()).to.equal('section')
    })

    it('should not render messages if a user is not logged in', () => {
      const wrapper = shallow(<MessagesContainer />)
      expect(wrapper.find('ul').children()).to.have.length(0)
    })

    it('should render messages if a user is logged in', () => {
      const wrapper = mount(<MessagesContainer user={mockFirebase.user} />)
      wrapper.setState({ messages: mockFirebase.messages })
      expect(wrapper.find('ul').children()).to.have.length(2)
    })
  })
})
