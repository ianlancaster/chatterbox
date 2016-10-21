import React from 'react'

export default class Button extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    return (
      <button onClick={this.props.action}>{this.props.text}</button>
    )
  }
}
