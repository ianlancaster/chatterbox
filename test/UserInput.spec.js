import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import Application from '../lib/components/Application.jsx'
import UserInput from '../lib/components/UserInput.jsx'
import LogInStatus from '../lib/components/LogInStatus.jsx'
import mockFirebase from './helpers/mockFirebase.js'

require('sinon')

describe('UserInput', () => {
  it('should display an input field', () => {
    const wrapper = mount(<UserInput />)
    expect(wrapper.find('.message-input')).to.have.length(1)
  })
})
