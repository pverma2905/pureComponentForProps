import React, { Component } from 'react'
import User from './User';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }
  render() {
    return (
      <div>
        <h1>Pure Component props</h1>
        <User count={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update State</button>
      </div>
    )
  }
}
