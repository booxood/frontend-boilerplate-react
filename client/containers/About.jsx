import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div>
        <h1>Abount</h1>
        <h2>{this.props.params.stuff}</h2>
      </div>
    )
  }
}

export default About
