import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LeaguesPanel extends Component {
  render() {
    return (
      <div className="col-xs-3 league-panel">
        <h3>
          <Link to='/league'>My Leagues</Link>
        </h3>
        <h6>Lorem ipsum dolor sit.</h6>
        <p>Lorem ipsum</p>
        <h6>Lorem ipsum dolor sit.</h6>
        <p>Lorem ipsum</p>
        <h6>Lorem ipsum dolor sit.</h6>
        <p>Lorem ipsum</p>
        
      </div>
    )
  }
}
