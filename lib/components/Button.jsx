import React from 'react'

export default class Button extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    return (
<<<<<<< HEAD
      <button className={this.props.cl} onClick={this.props.action}>{this.props.text}</button>
=======
      <button className={this.props.className} onClick={this.props.action}>{this.props.text}</button>
>>>>>>> master
    )
  }
}
