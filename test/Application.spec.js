import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import Application from '../lib/components/Application.jsx'
import UserInput from '../lib/components/UserInput.jsx'
import MessagesContainer from '../lib/containers/MessagesContainer.jsx'
import LogInStatus from '../lib/components/LogInStatus.jsx'
import mockFirebase from './helpers/mockFirebase.js'

require('sinon')


describe('Application', () => {
  context('feature tests', () => {
    it('renders as a <div>', () => {
      const wrapper = mount(<Application />)
      expect(wrapper.html()).to.contain('<div class="app">')
    })

    it('should contain a MessagesContainer object', () => {
      const wrapper = mount(<Application />)
      wrapper.setState({ user: null })
      expect(wrapper.contains(<MessagesContainer user={wrapper.state().user} />)).to.be.true
    })

    it('should not display the messages if no user is logged in', () => {
      const wrapper = mount(<Application />)
      wrapper.setState({ user: null })
      expect(wrapper.find('ul').children()).to.have.length(0)
    })

    it('should display "hello username" when a user is logged in', () => {
      const wrapper = shallow(<Application />)
      wrapper.setState({ user: mockFirebase.user })
      expect(wrapper.html()).to.contain('<p>Logged in as <span class="login-name">Ian</span> (ianclancaster@gmail.com)</p>')
    })

    it('NEED HELP should display messages when the user is logged in', () => {
      const wrapper = shallow(<Application />)
      wrapper.setState({ user: mockFirebase.user })
    })
  })
})

module.exports = Application
