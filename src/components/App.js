import React, { Component } from 'react';

import Navbar from './Navbar';
import JoinPanel from './JoinPanel';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <JoinPanel />
        {/*
        {this.props.children}
        <MyLeaguesPanel />
      */}
      </div>
    )
  }
}
