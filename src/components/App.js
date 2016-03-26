import React, { Component } from 'react';

import Navbar from './Navbar';
import JoinPanel from './JoinPanel';
import LeaguesPanel from './LeaguesPanel';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
        <JoinPanel />
        <LeaguesPanel />
      </div>
    )
  }
}
