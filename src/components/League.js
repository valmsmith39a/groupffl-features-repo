import React, { Component } from 'react';

import Navbar from './Navbar';

export default class League extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
