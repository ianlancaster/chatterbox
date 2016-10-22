import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'

import Application from '../lib/components/Application.jsx'
import UserInput from '../lib/components/UserInput.jsx'
import MessagesContainer from '../lib/containers/MessagesContainer.jsx'
import LogInStatus from '../lib/components/LogInStatus.jsx'


describe('Application', () => {
  it('renders as a <div>', () => {
    const wrapper = mount(<Application />)
    // expect(wrapper.text()).to.contain('Likes: 0Like! (+1)Dislike! (-1)')
    expect(wrapper.html()).to.contain('<div class="app">')
  })

  it('should contain a MessagesContainer object', () => {
    const wrapper = mount(<Application />)
    const user = null
    expect(wrapper.contains(<MessagesContainer user={user} />)).to.be.true
  })
})

module.exports = Application
