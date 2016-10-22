import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'

import Application from '../lib/components/Application.jsx'
import UserInput from '../lib/components/UserInput.jsx'
import MessagesContainer from '../lib/containers/MessagesContainer.jsx'
import LogInStatus from '../lib/components/LogInStatus.jsx'


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
      // expect(wrapper.find('.messages-list').isEmpty()).to.equal(true)
      // expect(wrapper.html()).to.contain('<div class="messages-container"><ul></ul></div>')
      expect(wrapper.find('ul').children()).to.have.length(0)
    })
  })

  context('unit tests', () => {
    it('should pass because there is no test', () => {

    })
  })
})

module.exports = Application
