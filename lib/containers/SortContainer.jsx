import React, { Component } from 'react'
import { pick, map, extend } from 'lodash'
import moment from 'moment'
import firebase, { reference } from '../firebase'

import Sort from '../components/Sort.jsx'


export default class SortContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      messages: [],
    }
  }

  render() {
    return (
      <Sort messages={this.props.messages}/>
    )
  }
}
