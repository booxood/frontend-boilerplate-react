import React, { Component } from 'react'

class About extends Component {
  handleClick(e) {
    console.log('click:', e)
    // this.props.actions.push('/bbb')
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Abount</h1>
        <button onClick={::this.handleClick}> Go Home </button>
      </div>
    )
  }
}

export default About
