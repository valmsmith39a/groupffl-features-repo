import React, { Component } from 'react';

import Navbar from './Navbar';
import LeagueInfo from './LeagueInfo';
import MediaFeeds from './MediaFeeds';

export default class League extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <LeagueInfo />
            {this.props.children}
            <MediaFeeds />
          </div>
        </div>
      </div>
    )
  }
}
